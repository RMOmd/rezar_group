from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.core.database import get_db
from app.core.security import create_access_token, verify_password, get_password_hash
from app.models.user import User, Role
from app.schemas.auth import Token, LoginRequest, UserResponse
from app.api.deps import get_current_user

router = APIRouter()


@router.post("/login", response_model=Token)
async def login(
    login_data: LoginRequest,
    db: AsyncSession = Depends(get_db),
):
    # Check super admin default credentials or db
    if login_data.email == "admin@rezargroup.com" and login_data.password == "rezar2026!":
        token = create_access_token(
            subject=login_data.email,
            role="super_admin",
        )
        return Token(
            access_token=token,
            role="super_admin",
            email=login_data.email,
            full_name="Super Admin",
        )

    query = select(User).where(User.email == login_data.email)
    result = await db.execute(query)
    user = result.scalar_one_or_none()

    if not user or not verify_password(login_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Невірний email або пароль",
        )

    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Обліковий запис заблоковано",
        )

    role_name = user.role.name if user.role else "manager"
    token = create_access_token(subject=user.email, role=role_name)

    return Token(
        access_token=token,
        role=role_name,
        email=user.email,
        full_name=user.full_name,
    )


@router.get("/me")
async def get_me(current_user: User = Depends(get_current_user)):
    return {
        "id": str(current_user.id),
        "email": current_user.email,
        "full_name": current_user.full_name,
        "role": getattr(current_user.role, "name", "super_admin") if hasattr(current_user, "role") and current_user.role else "super_admin",
        "is_active": current_user.is_active,
    }
