from typing import Optional, List
from uuid import UUID
from datetime import datetime
from pydantic import BaseModel, ConfigDict


class SyncHistoryResponse(BaseModel):
    id: UUID
    started_at: datetime
    finished_at: Optional[datetime] = None
    trigger_type: str
    status: str
    total_received: int
    created_count: int
    updated_count: int
    skipped_count: int
    errors_count: int
    error_details: Optional[str] = None
    execution_time_seconds: Optional[float] = None

    model_config = ConfigDict(from_attributes=True)


class MappingResponse(BaseModel):
    id: str
    provider: str
    raw_name: str
    internal_id: str
    internal_name: str
    status: str
    confidence: int

    model_config = ConfigDict(from_attributes=True)


class MappingApproveRequest(BaseModel):
    mapping_id: str
    internal_brand_id: str
    internal_model_id: Optional[str] = None
