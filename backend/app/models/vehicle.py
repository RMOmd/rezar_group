import uuid
from datetime import datetime, timezone
from sqlalchemy import (
    Column,
    String,
    Integer,
    Numeric,
    Boolean,
    DateTime,
    ForeignKey,
    Text,
    JSON,
    Enum as SQLEnum,
)
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from app.core.database import Base


class Brand(Base):
    __tablename__ = "brands"

    id = Column(String(50), primary_key=True)  # e.g. "brand_porsche"
    name = Column(String(100), unique=True, nullable=False, index=True)
    slug = Column(String(100), unique=True, nullable=False, index=True)
    logo = Column(String(500), nullable=True)
    is_active = Column(Boolean, default=True, nullable=False)
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

    models = relationship("Model", back_populates="brand", cascade="all, delete-orphan")
    vehicles = relationship("Vehicle", back_populates="brand_rel")


class Model(Base):
    __tablename__ = "models"

    id = Column(String(50), primary_key=True)  # e.g. "model_porsche_911"
    brand_id = Column(String(50), ForeignKey("brands.id", ondelete="CASCADE"), nullable=False, index=True)
    name = Column(String(100), nullable=False)
    slug = Column(String(100), nullable=False)
    is_active = Column(Boolean, default=True, nullable=False)
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

    brand = relationship("Brand", back_populates="models")
    vehicles = relationship("Vehicle", back_populates="model_rel")


class Vehicle(Base):
    __tablename__ = "vehicles"

    id = Column(String(100), primary_key=True)  # slug or uuid id
    brand_id = Column(String(50), ForeignKey("brands.id"), nullable=False, index=True)
    model_id = Column(String(50), ForeignKey("models.id"), nullable=False, index=True)
    brand = Column(String(100), nullable=False)
    model = Column(String(100), nullable=False)
    trim = Column(String(100), nullable=True)
    year = Column(Integer, nullable=False, index=True)
    price = Column(Numeric(12, 2), nullable=False, index=True)
    mileage = Column(Integer, nullable=False, index=True)
    fuel_type = Column(String(50), nullable=False, index=True)
    engine = Column(String(100), nullable=False)
    power_hp = Column(Integer, nullable=False)
    transmission = Column(String(50), nullable=False)
    drive = Column(String(50), nullable=False)
    body_type = Column(String(50), nullable=False, index=True)
    color_exterior = Column(String(100), nullable=False)
    color_interior = Column(String(100), nullable=False)
    vin = Column(String(50), unique=True, nullable=False, index=True)

    # Statuses
    status = Column(String(50), default="in_stock", nullable=False, index=True)  # in_stock, in_transit, sold
    publish_status = Column(String(50), default="published", nullable=False, index=True)  # draft, published, hidden, needs_review

    # Metadata & Provenance
    is_new_arrival = Column(Boolean, default=False, index=True)
    data_source = Column(String(50), default="manual", nullable=False)  # manual, supplier_feed
    external_id = Column(String(100), nullable=True, index=True)
    location = Column(String(150), default="Київ, Україна")
    description = Column(Text, nullable=True)
    features = Column(JSON, default=list)  # list of { category, items }
    admin_notes = Column(Text, nullable=True)

    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), index=True)
    updated_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

    brand_rel = relationship("Brand", back_populates="vehicles")
    model_rel = relationship("Model", back_populates="vehicles")
    photos = relationship("VehiclePhoto", back_populates="vehicle", cascade="all, delete-orphan", order_by="VehiclePhoto.sort_order")
    overrides = relationship("VehicleFieldOverride", back_populates="vehicle", cascade="all, delete-orphan")


class VehiclePhoto(Base):
    __tablename__ = "vehicle_photos"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    vehicle_id = Column(String(100), ForeignKey("vehicles.id", ondelete="CASCADE"), nullable=False, index=True)
    url = Column(String(1000), nullable=False)
    r2_key = Column(String(500), nullable=True)
    sort_order = Column(Integer, default=0, nullable=False)
    is_primary = Column(Boolean, default=False, nullable=False)
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))

    vehicle = relationship("Vehicle", back_populates="photos")


class VehicleFieldOverride(Base):
    """Stores manual overrides made by admin so supplier sync never overwrites them."""
    __tablename__ = "vehicle_field_overrides"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    vehicle_id = Column(String(100), ForeignKey("vehicles.id", ondelete="CASCADE"), nullable=False, index=True)
    field_name = Column(String(100), nullable=False)  # e.g. "price", "description", "status"
    override_value = Column(JSON, nullable=True)
    created_at = Column(DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))

    vehicle = relationship("Vehicle", back_populates="overrides")
