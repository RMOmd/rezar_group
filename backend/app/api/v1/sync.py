from datetime import datetime, timezone
from typing import List
from fastapi import APIRouter, Depends, BackgroundTasks, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.core.database import get_db
from app.api.deps import get_current_user, require_role
from app.models.user import User
from app.models.sync import SyncHistory, ProviderBrandMapping, ProviderModelMapping
from app.schemas.sync import (
    SyncHistoryResponse,
    MappingResponse,
    MappingApproveRequest,
)

router = APIRouter()


async def run_sync_task():
    # Background sync task execution
    pass


@router.post("/trigger", status_code=status.HTTP_202_ACCEPTED)
async def trigger_sync(
    background_tasks: BackgroundTasks,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(require_role(["super_admin", "admin"])),
):
    history = SyncHistory(
        trigger_type="manual",
        status="running",
        started_at=datetime.now(timezone.utc),
        created_by_user_id=current_user.id,
    )
    db.add(history)
    await db.commit()
    await db.refresh(history)

    # In production, dispatch Celery or BackgroundTask
    return {
        "status": "started",
        "sync_id": str(history.id),
        "message": "Синхронізацію з фідом постачальника успішно запущено у фоні",
    }


@router.get("/history", response_model=List[SyncHistoryResponse])
async def get_sync_history(
    limit: int = 20,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    query = select(SyncHistory).order_by(SyncHistory.started_at.desc()).limit(limit)
    res = await db.execute(query)
    return res.scalars().all()


@router.get("/mappings/pending", response_model=List[MappingResponse])
async def get_pending_mappings(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    query = select(ProviderModelMapping).where(ProviderModelMapping.status == "pending_review")
    res = await db.execute(query)
    items = res.scalars().all()
    return [
        MappingResponse(
            id=item.id,
            provider=item.provider,
            raw_name=f"{item.raw_brand_name} {item.raw_model_name}",
            internal_id=item.internal_model_id,
            internal_name=item.internal_model_name,
            status=item.status,
            confidence=item.confidence,
        )
        for item in items
    ]


@router.post("/mappings/approve")
async def approve_mapping(
    req: MappingApproveRequest,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(require_role(["super_admin", "admin"])),
):
    query = select(ProviderModelMapping).where(ProviderModelMapping.id == req.mapping_id)
    res = await db.execute(query)
    mapping = res.scalar_one_or_none()
    if mapping:
        mapping.status = "mapped"
        mapping.internal_brand_id = req.internal_brand_id
        if req.internal_model_id:
            mapping.internal_model_id = req.internal_model_id
        await db.commit()
    return {"status": "approved", "mapping_id": req.mapping_id}
