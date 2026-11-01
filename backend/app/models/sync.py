import uuid
from datetime import datetime, timezone
from sqlalchemy import Column, String, Integer, DateTime, Text, JSON, Float, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from app.core.database import Base


class SyncHistory(Base):
    __tablename__ = "sync_history"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    started_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), nullable=False)
    finished_at = Column(DateTime(timezone=True), nullable=True)
    trigger_type = Column(String(50), default="manual")  # manual, cron, webhook
    status = Column(String(50), default="running", nullable=False)  # running, success, warning, error
    total_received = Column(Integer, default=0)
    created_count = Column(Integer, default=0)
    updated_count = Column(Integer, default=0)
    skipped_count = Column(Integer, default=0)
    errors_count = Column(Integer, default=0)
    error_details = Column(Text, nullable=True)
    execution_time_seconds = Column(Float, nullable=True)
    created_by_user_id = Column(UUID(as_uuid=True), ForeignKey("admin_users.id"), nullable=True)


class ProviderBrandMapping(Base):
    __tablename__ = "provider_brand_mappings"

    id = Column(String(100), primary_key=True)
    provider = Column(String(100), default="supplier_feed", nullable=False)
    raw_brand_name = Column(String(255), nullable=False, index=True)
    internal_brand_id = Column(String(50), ForeignKey("brands.id"), nullable=False)
    internal_brand_name = Column(String(100), nullable=False)
    status = Column(String(50), default="mapped", nullable=False)  # mapped, pending_review, ignored
    confidence = Column(Integer, default=100)
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))


class ProviderModelMapping(Base):
    __tablename__ = "provider_model_mappings"

    id = Column(String(100), primary_key=True)
    provider = Column(String(100), default="supplier_feed", nullable=False)
    raw_brand_name = Column(String(255), nullable=False)
    raw_model_name = Column(String(255), nullable=False, index=True)
    internal_brand_id = Column(String(50), ForeignKey("brands.id"), nullable=False)
    internal_model_id = Column(String(50), ForeignKey("models.id"), nullable=False)
    internal_model_name = Column(String(100), nullable=False)
    status = Column(String(50), default="mapped", nullable=False)  # mapped, pending_review, ignored
    confidence = Column(Integer, default=100)
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))
