"use client";

import { usePathname } from "next/navigation";
import { LogOut, Activity, Bell } from "lucide-react";
import { useAdminAuth } from "@/context/AdminAuthContext";

export function AdminHeader() {
  const pathname = usePathname();
  const { user, logout } = useAdminAuth();

  const getSectionTitle = () => {
    if (pathname === "/admin") return "Dashboard";
    if (pathname.startsWith("/admin/cars/new")) return "Додати новий автомобіль";
    if (pathname.startsWith("/admin/cars")) return "Каталог автомобілів";
    if (pathname.startsWith("/admin/sync")) return "Синхронізація з фідом постачальника";
    if (pathname.startsWith("/admin/photos")) return "Управління фотографіями";
    if (pathname.startsWith("/admin/dictionaries")) return "Довідники системи";
    if (pathname.startsWith("/admin/publishing")) return "Управління публікацією";
    if (pathname.startsWith("/admin/users")) return "Користувачі та ролі";
    if (pathname.startsWith("/admin/settings")) return "Налаштування сайту та інтеграцій";
    if (pathname.startsWith("/admin/audit-logs")) return "Журнал аудиту дій";
    if (pathname.startsWith("/admin/system-logs")) return "Системні логи та моніторинг";
    return "Панель управління";
  };

  return (
    <header className="h-16 bg-[#111114] border-b border-zinc-800/80 px-8 flex items-center justify-between shrink-0">
      <div>
        <h1 className="text-sm font-semibold text-white tracking-wide">
          {getSectionTitle()}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        {/* System Health Indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
          <Activity className="w-3.5 h-3.5 animate-pulse" />
          <span>Система онлайн</span>
        </div>

        {/* User Info & Logout */}
        <div className="flex items-center gap-3 pl-4 border-l border-zinc-800">
          <div className="text-right hidden sm:block">
            <span className="block text-xs font-medium text-white">
              {user?.fullName}
            </span>
            <span className="block text-[10px] text-zinc-400 font-mono">
              {user?.email}
            </span>
          </div>

          <button
            type="button"
            onClick={logout}
            className="p-2 rounded-xl text-zinc-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer"
            title="Вийти з системи"
            aria-label="Вийти"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
