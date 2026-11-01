from typing import List, Optional
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    PROJECT_NAME: str = "REZAR GROUP Admin API"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/admin"

    # Security
    SECRET_KEY: str = "rezar_jwt_super_secret_key_change_in_production_2026"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24  # 1 day

    # Database
    DATABASE_URL: str = "postgresql+asyncpg://rezar_admin:rezar_secret_2026@localhost:5432/rezar_db"
    SYNC_DATABASE_URL: str = "postgresql://rezar_admin:rezar_secret_2026@localhost:5432/rezar_db"

    # Redis / Celery
    REDIS_URL: str = "redis://localhost:6379/0"

    # Cloudflare R2 / S3
    R2_ACCOUNT_ID: Optional[str] = None
    R2_ACCESS_KEY_ID: Optional[str] = None
    R2_SECRET_ACCESS_KEY: Optional[str] = None
    R2_BUCKET_NAME: Optional[str] = None
    R2_PUBLIC_DOMAIN: Optional[str] = None

    # Supplier API (Protected provider)
    SUPPLIER_API_URL: Optional[str] = None
    SUPPLIER_API_KEY: Optional[str] = None

    # CORS
    BACKEND_CORS_ORIGINS: List[str] = [
        "http://localhost:3000",
        "http://localhost:8000",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:8000",
    ]

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="allow",
    )


settings = Settings()
