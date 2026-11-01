from typing import Optional, List, Dict, Any
from datetime import datetime
from pydantic import BaseModel


class CatalogStats(BaseModel):
    total_vehicles: int
    in_stock_count: int
    in_transit_count: int
    sold_count: int
    new_arrivals_14d: int
    published_count: int
    unpublished_count: int
    data_errors_count: int


class SyncStatusStats(BaseModel):
    last_sync_at: Optional[datetime] = None
    last_status: str = "never_run"  # success, running, warning, error, never_run
    processed_count: int = 0
    created_count: int = 0
    updated_count: int = 0
    skipped_count: int = 0
    errors_count: int = 0
    duration_seconds: Optional[float] = None
    is_running: bool = False


class SystemHealthStats(BaseModel):
    registered_users: int
    active_admins: int
    total_leads: int
    backend_status: str = "healthy"
    database_status: str = "healthy"
    redis_status: str = "healthy"
    uptime_seconds: float = 3600.0


class DashboardResponse(BaseModel):
    catalog: CatalogStats
    sync: SyncStatusStats
    system: SystemHealthStats
    recent_activity: List[Dict[str, Any]] = []
