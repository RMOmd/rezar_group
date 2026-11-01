"use client";

import { useState } from "react";
import {
  Terminal,
  Search,
  RefreshCw,
  AlertTriangle,
  Info,
  Bug,
  AlertCircle,
  ChevronDown,
  ChevronRight,
  Activity,
  Layers,
  Cpu,
} from "lucide-react";

interface SystemLogEntry {
  id: string;
  timestamp: string;
  level: "INFO" | "WARNING" | "ERROR" | "DEBUG";
  service: "api" | "sync_worker" | "photo_processor" | "scheduler";
  message: string;
  traceback?: string;
}

const mockSystemLogs: SystemLogEntry[] = [
  {
    id: "log-101",
    timestamp: "2026-11-02 00:28:44",
    level: "INFO",
    service: "sync_worker",
    message: "Supplier feed delta check: 0 new cars, 2 price updates detected.",
  },
  {
    id: "log-102",
    timestamp: "2026-11-02 00:25:12",
    level: "INFO",
    service: "api",
    message: "POST /api/admin/auth/login 200 OK (admin@rezargroup.com) - 48ms",
  },
  {
    id: "log-103",
    timestamp: "2026-11-02 00:22:01",
    level: "WARNING",
    service: "photo_processor",
    message: "Image download slow from CDN node for vin=WAUZZZF27NA019281 (took 4.2s)",
  },
  {
    id: "log-104",
    timestamp: "2026-11-02 00:18:55",
    level: "ERROR",
    service: "sync_worker",
    message: "Failed to map unknown model token 'X5M-COMP-2024' -> queued for manual mapping approval.",
    traceback: `Traceback (most recent call last):
  File "/app/services/sync_pipeline.py", line 184, in resolve_model
    raise UnrecognizedModelException(f"No dictionary match for raw='{raw_model}'")
services.sync_pipeline.UnrecognizedModelException: No dictionary match for raw='X5M-COMP-2024'`,
  },
  {
    id: "log-105",
    timestamp: "2026-11-02 00:15:10",
    level: "DEBUG",
    service: "scheduler",
    message: "Celery heartbeat beat_tick: queue 'default' len=0, queue 'sync' len=0",
  },
  {
    id: "log-106",
    timestamp: "2026-11-02 00:10:00",
    level: "INFO",
    service: "api",
    message: "GET /api/admin/dashboard 200 OK - 12ms",
  },
];

export default function SystemLogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [levelFilter, setLevelFilter] = useState("all");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [expandedLogId, setExpandedLogId] = useState<string | null>(null);
  const [autoRefresh, setAutoRefresh] = useState(true);

  const filteredLogs = mockSystemLogs.filter((log) => {
    const matchesSearch =
      log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (log.traceback && log.traceback.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesLevel = levelFilter === "all" || log.level === levelFilter;
    const matchesService = serviceFilter === "all" || log.service === serviceFilter;

    return matchesSearch && matchesLevel && matchesService;
  });

  const getLevelBadge = (level: SystemLogEntry["level"]) => {
    switch (level) {
      case "ERROR":
        return "bg-rose-500/10 text-rose-400 border-rose-500/20";
      case "WARNING":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      case "DEBUG":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      default:
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    }
  };

  const getLevelIcon = (level: SystemLogEntry["level"]) => {
    switch (level) {
      case "ERROR":
        return <AlertCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />;
      case "WARNING":
        return <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />;
      case "DEBUG":
        return <Bug className="w-3.5 h-3.5 text-purple-400 shrink-0" />;
      default:
        return <Info className="w-3.5 h-3.5 text-blue-400 shrink-0" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
            <Terminal className="w-6 h-6 text-emerald-400" />
            <span>Системні логи та телеметрія</span>
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Моніторинг роботи бекенду FastAPI, воркерів синхронізації та черг Celery
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setAutoRefresh(!autoRefresh)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium border transition-all ${
              autoRefresh
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                : "bg-zinc-800 border-zinc-700 text-zinc-400"
            }`}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${autoRefresh ? "animate-spin" : ""}`} />
            <span>{autoRefresh ? "Автооновлення (5с)" : "Пауза"}</span>
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-[#141418] border border-zinc-800/80 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] text-zinc-500">API Response Time</div>
            <div className="text-base font-bold text-white">24 ms (p95)</div>
          </div>
        </div>

        <div className="bg-[#141418] border border-zinc-800/80 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] text-zinc-500">Celery Tasks (1h)</div>
            <div className="text-base font-bold text-white">412 виконано</div>
          </div>
        </div>

        <div className="bg-[#141418] border border-zinc-800/80 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] text-zinc-500">Помилок (1h)</div>
            <div className="text-base font-bold text-white">1 (0.02%)</div>
          </div>
        </div>

        <div className="bg-[#141418] border border-zinc-800/80 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] text-zinc-500">Пам&apos;ять контейнера</div>
            <div className="text-base font-bold text-white">184 MB / 1 GB</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            placeholder="Фільтр повідомлення логу чи стек-трейсу..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#141418] border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 font-mono"
          />
        </div>

        <div className="flex items-center gap-2">
          <select
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value)}
            className="bg-[#141418] border border-zinc-800 text-xs text-zinc-300 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-zinc-600"
          >
            <option value="all">Всі рівні</option>
            <option value="INFO">INFO</option>
            <option value="WARNING">WARNING</option>
            <option value="ERROR">ERROR</option>
            <option value="DEBUG">DEBUG</option>
          </select>

          <select
            value={serviceFilter}
            onChange={(e) => setServiceFilter(e.target.value)}
            className="bg-[#141418] border border-zinc-800 text-xs text-zinc-300 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-zinc-600"
          >
            <option value="all">Всі сервіси</option>
            <option value="api">api</option>
            <option value="sync_worker">sync_worker</option>
            <option value="photo_processor">photo_processor</option>
            <option value="scheduler">scheduler</option>
          </select>
        </div>
      </div>

      {/* Terminal View */}
      <div className="bg-[#0D0D11] border border-zinc-800/80 rounded-2xl overflow-hidden font-mono text-xs shadow-2xl">
        <div className="bg-[#141418] px-4 py-2.5 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-[11px] text-zinc-500 ml-2 font-mono">
              rezar-production-logs.stream
            </span>
          </div>
          <span className="text-[10px] text-zinc-500">
            Показано {filteredLogs.length} подій
          </span>
        </div>

        <div className="divide-y divide-zinc-900 p-2 space-y-1">
          {filteredLogs.map((log) => {
            const isExpanded = expandedLogId === log.id;

            return (
              <div key={log.id} className="py-2 px-3 rounded hover:bg-zinc-900/60 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-zinc-500 text-[11px] select-none shrink-0">
                    {log.timestamp}
                  </span>

                  <span
                    className={`px-1.5 py-0.5 rounded text-[10px] font-semibold border shrink-0 flex items-center gap-1 ${getLevelBadge(
                      log.level
                    )}`}
                  >
                    {getLevelIcon(log.level)}
                    <span>{log.level}</span>
                  </span>

                  <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 text-[10px] shrink-0">
                    [{log.service}]
                  </span>

                  <div className="flex-1 text-zinc-300 break-words font-sans text-xs">
                    {log.message}

                    {log.traceback && (
                      <div className="mt-2">
                        <button
                          onClick={() => setExpandedLogId(isExpanded ? null : log.id)}
                          className="flex items-center gap-1 text-[11px] text-rose-400 hover:text-rose-300 font-mono"
                        >
                          {isExpanded ? (
                            <ChevronDown className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5" />
                          )}
                          <span>
                            {isExpanded ? "Згорнути стек-трейс" : "Розгорнути Traceback"}
                          </span>
                        </button>

                        {isExpanded && (
                          <pre className="mt-2 p-3 bg-black/60 rounded-xl border border-rose-500/20 text-rose-300 font-mono text-[11px] overflow-x-auto whitespace-pre">
                            {log.traceback}
                          </pre>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
