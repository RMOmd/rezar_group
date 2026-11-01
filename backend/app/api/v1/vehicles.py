from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func, or_
from app.core.database import get_db
from app.api.deps import get_current_user, require_role
from app.models.user import User
from app.models.vehicle import Vehicle, VehiclePhoto
from app.schemas.vehicle import (
    VehicleListResponse,
    VehicleResponse,
    VehicleCreate,
    VehicleUpdate,
)

router = APIRouter()


@router.get("", response_model=VehicleListResponse)
async def list_vehicles(
    page: int = Query(1, ge=1),
    limit: int = Query(20, ge=1, le=100),
    search: Optional[str] = None,
    brand_id: Optional[str] = None,
    status: Optional[str] = None,
    publish_status: Optional[str] = None,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    query = select(Vehicle)

    if search:
        search_filter = or_(
            Vehicle.brand.ilike(f"%{search}%"),
            Vehicle.model.ilike(f"%{search}%"),
            Vehicle.vin.ilike(f"%{search}%"),
            Vehicle.id.ilike(f"%{search}%"),
        )
        query = query.where(search_filter)

    if brand_id:
        query = query.where(Vehicle.brand_id == brand_id)

    if status:
        query = query.where(Vehicle.status == status)

    if publish_status:
        query = query.where(Vehicle.publish_status == publish_status)

    # Count total
    count_query = select(func.count()).select_from(query.subquery())
    total_res = await db.execute(count_query)
    total = total_res.scalar() or 0

    # Paginate
    query = query.order_by(Vehicle.created_at.desc()).offset((page - 1) * limit).limit(limit)
    res = await db.execute(query)
    vehicles = res.scalars().all()

    pages = (total + limit - 1) // limit if total > 0 else 1

    return VehicleListResponse(
        items=vehicles,
        total=total,
        page=page,
        limit=limit,
        pages=pages,
    )


@router.get("/{vehicle_id}", response_model=VehicleResponse)
async def get_vehicle(
    vehicle_id: str,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    query = select(Vehicle).where(Vehicle.id == vehicle_id)
    res = await db.execute(query)
    vehicle = res.scalar_one_or_none()

    if not vehicle:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Автомобіль не знайдено",
        )
    return vehicle


@router.post("", response_model=VehicleResponse, status_code=status.HTTP_201_CREATED)
async def create_vehicle(
    vehicle_in: VehicleCreate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(require_role(["super_admin", "admin"])),
):
    # Check VIN unique
    vin_check = await db.execute(select(Vehicle).where(Vehicle.vin == vehicle_in.vin))
    if vin_check.scalar_one_or_none():
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Автомобіль з таким VIN вже існує в системі",
        )

    vid = vehicle_in.id or f"{vehicle_in.brand.lower().replace(' ', '-')}-{vehicle_in.model.lower().replace(' ', '-')}-{vehicle_in.year}"

    vehicle = Vehicle(
        id=vid,
        brand_id=vehicle_in.brand_id,
        model_id=vehicle_in.model_id,
        brand=vehicle_in.brand,
        model=vehicle_in.model,
        trim=vehicle_in.trim,
        year=vehicle_in.year,
        price=vehicle_in.price,
        mileage=vehicle_in.mileage,
        fuel_type=vehicle_in.fuel_type,
        engine=vehicle_in.engine,
        power_hp=vehicle_in.power_hp,
        transmission=vehicle_in.transmission,
        drive=vehicle_in.drive,
        body_type=vehicle_in.body_type,
        color_exterior=vehicle_in.color_exterior,
        color_interior=vehicle_in.color_interior,
        vin=vehicle_in.vin,
        status=vehicle_in.status,
        publish_status=vehicle_in.publish_status,
        is_new_arrival=vehicle_in.is_new_arrival,
        location=vehicle_in.location,
        description=vehicle_in.description,
        features=vehicle_in.features,
        admin_notes=vehicle_in.admin_notes,
        data_source="manual",
    )
    db.add(vehicle)

    # Photos
    for idx, photo_url in enumerate(vehicle_in.photos):
        photo = VehiclePhoto(
            vehicle_id=vid,
            url=photo_url,
            sort_order=idx,
            is_primary=(idx == 0),
        )
        db.add(photo)

    await db.commit()
    await db.refresh(vehicle)
    return vehicle


@router.patch("/{vehicle_id}", response_model=VehicleResponse)
async def update_vehicle(
    vehicle_id: str,
    vehicle_in: VehicleUpdate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(require_role(["super_admin", "admin", "manager"])),
):
    query = select(Vehicle).where(Vehicle.id == vehicle_id)
    res = await db.execute(query)
    vehicle = res.scalar_one_or_none()

    if not vehicle:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Автомобіль не знайдено",
        )

    update_data = vehicle_in.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(vehicle, field, value)

    await db.commit()
    await db.refresh(vehicle)
    return vehicle


@router.post("/{vehicle_id}/publish")
async def toggle_publish(
    vehicle_id: str,
    publish: bool = Query(...),
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(require_role(["super_admin", "admin"])),
):
    query = select(Vehicle).where(Vehicle.id == vehicle_id)
    res = await db.execute(query)
    vehicle = res.scalar_one_or_none()

    if not vehicle:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Автомобіль не знайдено",
        )

    vehicle.publish_status = "published" if publish else "hidden"
    await db.commit()
    return {"id": vehicle_id, "publish_status": vehicle.publish_status}
