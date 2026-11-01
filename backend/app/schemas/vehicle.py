from typing import Optional, List, Any
from uuid import UUID
from datetime import datetime
from decimal import Decimal
from pydantic import BaseModel, ConfigDict, Field


class BrandResponse(BaseModel):
    id: str
    name: str
    slug: str
    logo: Optional[str] = None
    is_active: bool
    models_count: Optional[int] = 0

    model_config = ConfigDict(from_attributes=True)


class BrandCreate(BaseModel):
    id: str
    name: str
    slug: str
    logo: Optional[str] = None


class ModelResponse(BaseModel):
    id: str
    brand_id: str
    name: str
    slug: str
    is_active: bool

    model_config = ConfigDict(from_attributes=True)


class ModelCreate(BaseModel):
    id: str
    brand_id: str
    name: str
    slug: str


class PhotoResponse(BaseModel):
    id: UUID
    url: str
    sort_order: int
    is_primary: bool

    model_config = ConfigDict(from_attributes=True)


class VehicleBase(BaseModel):
    brand_id: str
    model_id: str
    brand: str
    model: str
    trim: Optional[str] = None
    year: int
    price: Decimal
    mileage: int
    fuel_type: str
    engine: str
    power_hp: int
    transmission: str
    drive: str
    body_type: str
    color_exterior: str
    color_interior: str
    vin: str
    status: str = "in_stock"
    publish_status: str = "published"
    is_new_arrival: bool = False
    location: str = "Київ, Україна"
    description: Optional[str] = None
    features: List[Any] = []
    admin_notes: Optional[str] = None


class VehicleCreate(VehicleBase):
    id: Optional[str] = None
    photos: List[str] = []


class VehicleUpdate(BaseModel):
    brand_id: Optional[str] = None
    model_id: Optional[str] = None
    brand: Optional[str] = None
    model: Optional[str] = None
    trim: Optional[str] = None
    year: Optional[int] = None
    price: Optional[Decimal] = None
    mileage: Optional[int] = None
    fuel_type: Optional[str] = None
    engine: Optional[str] = None
    power_hp: Optional[int] = None
    transmission: Optional[str] = None
    drive: Optional[str] = None
    body_type: Optional[str] = None
    color_exterior: Optional[str] = None
    color_interior: Optional[str] = None
    status: Optional[str] = None
    publish_status: Optional[str] = None
    is_new_arrival: Optional[bool] = None
    location: Optional[str] = None
    description: Optional[str] = None
    features: Optional[List[Any]] = None
    admin_notes: Optional[str] = None


class VehicleResponse(VehicleBase):
    id: str
    data_source: str
    external_id: Optional[str] = None
    photos: List[PhotoResponse] = []
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)


class VehicleListResponse(BaseModel):
    items: List[VehicleResponse]
    total: int
    page: int
    limit: int
    pages: int
