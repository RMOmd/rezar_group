from typing import Optional, Any
from uuid import UUID
from datetime import datetime
from pydantic import BaseModel, ConfigDict


class AuditLogResponse(BaseModel):
    id: UUID
    user_id: Optional[UUID] = None
    user_email: Optional[str] = None
    user_role: Optional[str] = None
    action: str
    entity_type: str
    entity_id: Optional[str] = None
    old_values: Optional[Any] = None
    new_values: Optional[Any] = None
    ip_address: Optional[str] = None
    status: str
    details: Optional[str] = None
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)
