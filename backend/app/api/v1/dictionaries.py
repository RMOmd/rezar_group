from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.core.database import get_db
from app.api.deps import get_current_user, require_role
from app.models.user import User
from app.models.vehicle import Brand, Model
from app.schemas.vehicle import (
    BrandResponse,
    BrandCreate,
    ModelResponse,
    ModelCreate,
)

router = APIRouter()


@router.get("/brands", response_model=List[BrandResponse])
async def list_brands(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    query = select(Brand).order_by(Brand.name.asc())
    res = await db.execute(query)
    return res.scalars().all()


@router.post("/brands", response_model=BrandResponse, status_code=status.HTTP_201_CREATED)
async def create_brand(
    brand_in: BrandCreate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(require_role(["super_admin", "admin"])),
):
    brand = Brand(
        id=brand_in.id,
        name=brand_in.name,
        slug=brand_in.slug,
        logo=brand_in.logo,
        is_active=True,
    )
    db.add(brand)
    await db.commit()
    await db.refresh(brand)
    return brand


@router.get("/brands/{brand_id}/models", response_model=List[ModelResponse])
async def list_brand_models(
    brand_id: str,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    query = select(Model).where(Model.brand_id == brand_id).order_by(Model.name.asc())
    res = await db.execute(query)
    return res.scalars().all()


@router.post("/models", response_model=ModelResponse, status_code=status.HTTP_201_CREATED)
async def create_model(
    model_in: ModelCreate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(require_role(["super_admin", "admin"])),
):
    model = Model(
        id=model_in.id,
        brand_id=model_in.brand_id,
        name=model_in.name,
        slug=model_in.slug,
        is_active=True,
    )
    db.add(model)
    await db.commit()
    await db.refresh(model)
    return model
