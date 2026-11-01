import uuid
from datetime import datetime, timezone
from sqlalchemy import Column, String, DateTime, Text, JSON, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from app.core.database import Base


class AuditLog(Base):
    __tablename__ = "admin_audit_logs"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("admin_users.id"), nullable=True, index=True)
    user_email = Column(String(255), nullable=True)
    user_role = Column(String(50), nullable=True)
    action = Column(String(100), nullable=False, index=True)  # create, update, delete, publish, sync, login
    entity_type = Column(String(100), nullable=False, index=True)  # vehicle, photo, user, setting, mapping
    entity_id = Column(String(100), nullable=True, index=True)
    old_values = Column(JSON, nullable=True)
    new_values = Column(JSON, nullable=True)
    ip_address = Column(String(100), nullable=True)
    status = Column(String(50), default="success", nullable=False)  # success, failure
    details = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), index=True)
