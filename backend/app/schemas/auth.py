from typing import Optional, List
from uuid import UUID
from datetime import datetime
from pydantic import BaseModel, EmailStr, ConfigDict


class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"
    role: str
    email: str
    full_name: str


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class PermissionResponse(BaseModel):
    id: UUID
    code: str
    name: str
    module: str

    model_config = ConfigDict(from_attributes=True)


class RoleResponse(BaseModel):
    id: UUID
    name: str
    description: Optional[str] = None
    permissions: List[PermissionResponse] = []

    model_config = ConfigDict(from_attributes=True)


class UserResponse(BaseModel):
    id: UUID
    email: EmailStr
    full_name: str
    role: RoleResponse
    is_active: bool
    last_login_at: Optional[datetime] = None
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)


class UserCreate(BaseModel):
    email: EmailStr
    password: str
    full_name: str
    role_name: str = "manager"


class UserUpdate(BaseModel):
    full_name: Optional[str] = None
    role_name: Optional[str] = None
    is_active: Optional[bool] = None
    password: Optional[str] = None
