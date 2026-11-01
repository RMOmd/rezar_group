from typing import List, Optional
from fastapi import APIRouter, Depends, Query
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.core.database import get_db
from app.api.deps import get_current_user, require_role
from app.models.user import User
from app.models.audit import AuditLog
from app.schemas.audit import AuditLogResponse

router = APIRouter()


@router.get("", response_model=List[AuditLogResponse])
async def list_audit_logs(
    limit: int = Query(50, ge=1, le=200),
    action: Optional[str] = None,
    entity_type: Optional[str] = None,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(require_role(["super_admin", "admin"])),
):
    query = select(AuditLog)
    if action:
        query = query.where(AuditLog.action == action)
    if entity_type:
        query = query.where(AuditLog.entity_type == entity_type)

    query = query.order_by(AuditLog.created_at.desc()).limit(limit)
    res = await db.execute(query)
    return res.scalars().all()
