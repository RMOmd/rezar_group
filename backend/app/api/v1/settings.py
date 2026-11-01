from typing import Dict, Any
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.core.database import get_db
from app.api.deps import get_current_user, require_role
from app.models.user import User
from app.models.setting import SiteSetting

router = APIRouter()


@router.get("")
async def get_settings(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(require_role(["super_admin"])),
):
    query = select(SiteSetting)
    res = await db.execute(query)
    settings = res.scalars().all()

    result: Dict[str, Any] = {
        "general": {
            "project_name": "REZAR GROUP",
            "phone": "+380 (44) 123-45-67",
            "email": "concierge@rezargroup.com",
            "address": "Київ, вул. Велика Васильківська, 100",
        },
        "catalog": {
            "per_page": 24,
            "default_sort": "newest",
            "show_sold": True,
        },
        "sync": {
            "interval_minutes": 120,
            "auto_sync_enabled": True,
            "request_timeout_seconds": 30,
        },
    }
    return result
