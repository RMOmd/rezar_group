"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Car,
  RefreshCw,
  Image as ImageIcon,
  BookOpen,
  Eye,
  Users,
  Settings,
  ShieldAlert,
  Terminal,
  ExternalLink,
} from "lucide-react";
import { useAdminAuth } from "@/context/AdminAuthContext";

export function AdminSidebar() {
  const pathname = usePathname();
  const { user, hasPermission } = useAdminAuth();

  const navigationItems = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
      roles: ["super_admin", "admin", "manager"],
    },
    {
      name: "Автомобілі",
      href: "/admin/cars",
      icon: Car,
      roles: ["super_admin", "admin", "manager"],
    },
    {
      name: "Синхронізація",
      href: "/admin/sync",
      icon: RefreshCw,
      roles: ["super_admin", "admin"],
    },
    {
      name: "Фотографії",
      href: "/admin/photos",
      icon: ImageIcon,
      roles: ["super_admin", "admin", "manager"],
    },
    {
      name: "Довідники",
      href: "/admin/dictionaries",
      icon: BookOpen,
      roles: ["super_admin", "admin"],
    },
    {
      name: "Публікація",
      href: "/admin/publishing",
      icon: Eye,
      roles: ["super_admin", "admin"],
    },
    {
      name: "Користувачі",
      href: "/admin/users",
      icon: Users,
      roles: ["super_admin"],
    },
    {
      name: "Налаштування",
      href: "/admin/settings",
      icon: Settings,
      roles: ["super_admin"],
    },
    {
      name: "Журнал дій",
      href: "/admin/audit-logs",
      icon: ShieldAlert,
      roles: ["super_admin", "admin"],
    },
    {
      name: "Системні логи",
      href: "/admin/system-logs",
      icon: Terminal,
      roles: ["super_admin"],
    },
  ];

  return (
    <aside className="w-64 bg-[#111114] border-r border-zinc-800/80 flex flex-col justify-between shrink-0 select-none">
      <div>
        {/* Brand Header */}
        <div className="h-16 flex items-center px-6 border-b border-zinc-800/80">
          <Link href="/admin" className="flex items-center gap-2">
            <span className="text-lg font-black tracking-[0.25em] text-white uppercase">
              REZAR
            </span>
            <span className="text-[10px] font-mono tracking-widest text-zinc-400 bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-700">
              ADMIN
            </span>
          </Link>
        </div>

        {/* Navigation list */}
        <nav className="p-3 space-y-1">
          {navigationItems
            .filter((item) => hasPermission(item.roles as any))
            .map((item) => {
              const isActive =
                item.href === "/admin"
                  ? pathname === "/admin"
                  : pathname.startsWith(item.href);

              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? "bg-white text-black font-semibold shadow-lg shadow-white/5"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-black" : "text-zinc-400"}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
        </nav>
      </div>

      {/* Footer Info */}
      <div className="p-4 border-t border-zinc-800/80 space-y-3">
        <div className="bg-[#18181B] p-3 rounded-xl border border-zinc-800">
          <div className="text-[11px] font-semibold text-white truncate">
            {user?.fullName || "Користувач"}
          </div>
          <div className="text-[10px] text-zinc-400 font-mono capitalize">
            {user?.role.replace("_", " ") || "Адміністратор"}
          </div>
        </div>

        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl text-xs text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-colors"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Перейти на сайт</span>
        </Link>
      </div>
    </aside>
  );
}
