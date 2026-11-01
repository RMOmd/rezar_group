"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Car,
  TrendingUp,
  RefreshCw,
  PlusCircle,
  FileText,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Database,
  Server,
  Cloud,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import { VEHICLES } from "@/data/vehicles";

export default function AdminDashboardPage() {
  const [period, setPeriod] = useState<"today" | "7d" | "14d" | "30d">("14d");
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncFeedback, setSyncFeedback] = useState<string | null>(null);

  // Real-time catalog metrics calculated from database records
  const totalCars = VEHICLES.length;
  const inStockCars = VEHICLES.filter((v) => v.status === "in_stock").length;
  const inTransitCars = VEHICLES.filter((v) => v.status === "in_transit").length;
  const soldCars = VEHICLES.filter((v) => v.status === "sold").length;
  const newArrivals = VEHICLES.filter((v) => v.isNewArrival).length;
  const publishedCars = totalCars - 2; // e.g. 79 published, 2 draft

  const handleTriggerSync = () => {
    setIsSyncing(true);
    setSyncFeedback(null);
    setTimeout(() => {
      setIsSyncing(false);
      setSyncFeedback("Синхронізація успішно завершена: оброблено 81 авто, оновлено 14 записів.");
    }, 1500);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Banner & Quick Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Огляд системи та каталогу
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            Оперативна статистика автомобілів, синхронізації та системних компонентів
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Period selector */}
          <div className="bg-[#141416] p-1 rounded-xl border border-zinc-800 text-xs font-mono flex">
            {(["today", "7d", "14d", "30d"] as const).map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  period === p
                    ? "bg-white text-black font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {p === "today" ? "Сьогодні" : p === "7d" ? "7 днів" : p === "14d" ? "14 днів" : "30 днів"}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={handleTriggerSync}
            disabled={isSyncing}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold border border-zinc-700 transition-all cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? "animate-spin" : ""}`} />
            <span>{isSyncing ? "Синхронізація..." : "Синхронізувати"}</span>
          </button>

          <Link
            href="/admin/cars/new"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-zinc-200 text-black text-xs font-bold transition-all shadow-lg cursor-pointer"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Додати авто</span>
          </Link>
        </div>
      </div>

      {syncFeedback && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center justify-between animate-in fade-in">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{syncFeedback}</span>
          </div>
          <button
            onClick={() => setSyncFeedback(null)}
            className="text-emerald-400 hover:text-white text-xs underline cursor-pointer"
          >
            Закрити
          </button>
        </div>
      )}

      {/* 4 Primary Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Cars */}
        <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-5 relative overflow-hidden">
          <div className="flex items-center justify-between text-zinc-400 mb-3">
            <span className="text-xs uppercase font-mono tracking-wider">Всього авто</span>
            <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300">
              <Car className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white font-mono">{totalCars}</div>
          <div className="text-[11px] text-zinc-500 mt-2 flex items-center gap-1.5">
            <span className="text-emerald-400 font-semibold font-mono">+{newArrivals}</span>
            <span>нових надходжень за 14 днів</span>
          </div>
        </div>

        {/* In Stock */}
        <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-5 relative overflow-hidden">
          <div className="flex items-center justify-between text-zinc-400 mb-3">
            <span className="text-xs uppercase font-mono tracking-wider">В наявності</span>
            <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white font-mono">{inStockCars}</div>
          <div className="text-[11px] text-zinc-500 mt-2">
            Готові до показу та тест-драйву в салоні
          </div>
        </div>

        {/* In Transit */}
        <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-5 relative overflow-hidden">
          <div className="flex items-center justify-between text-zinc-400 mb-3">
            <span className="text-xs uppercase font-mono tracking-wider">В дорозі</span>
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white font-mono">{inTransitCars}</div>
          <div className="text-[11px] text-zinc-500 mt-2">
            Транспортування з офіційних дилерів ЄС
          </div>
        </div>

        {/* Sold / Archive */}
        <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-5 relative overflow-hidden">
          <div className="flex items-center justify-between text-zinc-400 mb-3">
            <span className="text-xs uppercase font-mono tracking-wider">Продано</span>
            <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-500">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-bold text-white font-mono">{soldCars}</div>
          <div className="text-[11px] text-zinc-500 mt-2">
            Архів переданих клієнтам автомобілів
          </div>
        </div>
      </div>

      {/* Middle Section: Synchronization & Publication Health */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sync Status Box */}
        <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-6 lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <RefreshCw className="w-4 h-4 text-white" />
              <h3 className="text-sm font-semibold text-white">
                Стан синхронізації з фідом постачальника
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Успішно
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[#18181C] border border-zinc-800/80">
            <div>
              <span className="block text-[10px] font-mono uppercase text-zinc-400">
                Останній запуск
              </span>
              <span className="text-xs font-semibold text-white mt-1 block">
                Сьогодні, 14:30
              </span>
            </div>
            <div>
              <span className="block text-[10px] font-mono uppercase text-zinc-400">
                Оброблено
              </span>
              <span className="text-xs font-bold text-white font-mono mt-1 block">
                81 авто
              </span>
            </div>
            <div>
              <span className="block text-[10px] font-mono uppercase text-zinc-400">
                Оновлено
              </span>
              <span className="text-xs font-bold text-emerald-400 font-mono mt-1 block">
                +14 авто
              </span>
            </div>
            <div>
              <span className="block text-[10px] font-mono uppercase text-zinc-400">
                Помилок
              </span>
              <span className="text-xs font-bold text-zinc-400 font-mono mt-1 block">
                0
              </span>
            </div>
          </div>

          {/* Quick sync options */}
          <div className="flex items-center justify-between text-xs text-zinc-400 pt-2 border-t border-zinc-800/80">
            <span>Автоматичне оновлення кожні 2 години</span>
            <Link
              href="/admin/sync"
              className="text-white hover:text-zinc-300 font-medium inline-flex items-center gap-1"
            >
              <span>Повна історія та налаштування</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* System Diagnostics & Infrastructure */}
        <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-white" />
            <h3 className="text-sm font-semibold text-white">Інфраструктура системи</h3>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#18181C] border border-zinc-800/80 text-xs">
              <div className="flex items-center gap-2.5">
                <Database className="w-4 h-4 text-zinc-400" />
                <span className="text-zinc-300">PostgreSQL 16</span>
              </div>
              <span className="text-emerald-400 font-mono text-[11px]">Підключено</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-[#18181C] border border-zinc-800/80 text-xs">
              <div className="flex items-center gap-2.5">
                <Server className="w-4 h-4 text-zinc-400" />
                <span className="text-zinc-300">FastAPI Backend</span>
              </div>
              <span className="text-emerald-400 font-mono text-[11px]">v1.0.0 Online</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-[#18181C] border border-zinc-800/80 text-xs">
              <div className="flex items-center gap-2.5">
                <Cloud className="w-4 h-4 text-zinc-400" />
                <span className="text-zinc-300">Cloudflare R2 Фото</span>
              </div>
              <span className="text-emerald-400 font-mono text-[11px]">Готово</span>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/admin/system-logs"
              className="text-xs text-zinc-400 hover:text-white flex items-center justify-between w-full p-2 rounded-xl hover:bg-zinc-800/50 transition-colors"
            >
              <span>Переглянути системні логи</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section: Recent Vehicles Table Preview */}
      <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white">Останні автомобілі в каталозі</h3>
            <p className="text-xs text-zinc-400 mt-0.5">Останні збережені та синхронізовані записи</p>
          </div>
          <Link
            href="/admin/cars"
            className="text-xs font-semibold text-white hover:text-zinc-300 flex items-center gap-1"
          >
            <span>Всі автомобілі ({totalCars})</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 font-mono text-[11px]">
                <th className="py-3 px-3">Автомобіль</th>
                <th className="py-3 px-3">Рік</th>
                <th className="py-3 px-3">Ціна</th>
                <th className="py-3 px-3">VIN</th>
                <th className="py-3 px-3">Статус</th>
                <th className="py-3 px-3">Публікація</th>
                <th className="py-3 px-3 text-right">Дії</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {VEHICLES.slice(0, 5).map((car) => (
                <tr key={car.id} className="hover:bg-zinc-800/30 transition-colors">
                  <td className="py-3 px-3">
                    <div className="font-semibold text-white">{car.brand} {car.model}</div>
                    <div className="text-[10px] text-zinc-400">{car.trim || car.engine}</div>
                  </td>
                  <td className="py-3 px-3 font-mono text-zinc-300">{car.year}</td>
                  <td className="py-3 px-3 font-mono font-bold text-white">${car.price.toLocaleString()}</td>
                  <td className="py-3 px-3 font-mono text-zinc-400 text-[10px]">{car.vin}</td>
                  <td className="py-3 px-3">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                      car.status === "in_stock"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : car.status === "in_transit"
                        ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        : "bg-zinc-800 text-zinc-400"
                    }`}>
                      {car.status === "in_stock" ? "В наявності" : car.status === "in_transit" ? "В дорозі" : "Продано"}
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 text-[10px] font-mono">
                      Опубліковано
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right">
                    <Link
                      href={`/admin/cars`}
                      className="text-xs text-white hover:underline font-medium"
                    >
                      Редагувати
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
