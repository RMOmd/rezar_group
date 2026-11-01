from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.api.v1 import (
    auth,
    dashboard,
    vehicles,
    sync,
    dictionaries,
    audit,
    settings as settings_api,
)

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    docs_url=f"{settings.API_V1_STR}/docs",
)

if settings.BACKEND_CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.BACKEND_CORS_ORIGINS,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

# Include Admin Routers
app.include_router(auth.router, prefix=f"{settings.API_V1_STR}/auth", tags=["Auth"])
app.include_router(dashboard.router, prefix=f"{settings.API_V1_STR}/dashboard", tags=["Dashboard"])
app.include_router(vehicles.router, prefix=f"{settings.API_V1_STR}/cars", tags=["Vehicles"])
app.include_router(sync.router, prefix=f"{settings.API_V1_STR}/sync", tags=["Sync"])
app.include_router(dictionaries.router, prefix=f"{settings.API_V1_STR}/dictionaries", tags=["Dictionaries"])
app.include_router(audit.router, prefix=f"{settings.API_V1_STR}/audit-logs", tags=["Audit"])
app.include_router(settings_api.router, prefix=f"{settings.API_V1_STR}/settings", tags=["Settings"])


@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "service": settings.PROJECT_NAME,
        "version": settings.VERSION,
    }
