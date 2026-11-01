import uuid
from datetime import datetime, timezone
from sqlalchemy import Column, String, DateTime, Text, JSON, Boolean
from sqlalchemy.dialects.postgresql import UUID
from app.core.database import Base


class SiteSetting(Base):
    __tablename__ = "site_settings"

    key = Column(String(100), primary_key=True)
    category = Column(String(50), nullable=False, index=True)  # general, catalog, integration, system
    value = Column(JSON, nullable=False)
    description = Column(String(255), nullable=True)
    is_secret = Column(Boolean, default=False)
    updated_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))


class SystemLog(Base):
    __tablename__ = "system_logs"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    level = Column(String(20), default="INFO", index=True)  # INFO, WARNING, ERROR, CRITICAL
    component = Column(String(50), index=True)  # backend, sync, storage, db
    message = Column(Text, nullable=False)
    stack_trace = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), index=True)
