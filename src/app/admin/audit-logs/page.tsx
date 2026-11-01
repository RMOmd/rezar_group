"use client";

import { useState } from "react";
import {
  ShieldAlert,
  Search,
  Filter,
  Download,
  Calendar,
  User,
  ArrowRight,
  Clock,
  Laptop,
} from "lucide-react";

interface AuditEntry {
  id: string;
  userEmail: string;
  userRole: string;
  action: string;
  entityType: string;
  entityId: string;
  changes: {
    field: string;
    oldValue: string;
    newValue: string;
  }[];
  ipAddress: string;
  timestamp: string;
}

const mockAuditLogs: AuditEntry[] = [
  {
    id: "aud-001",
    userEmail: "admin@rezargroup.com",
    userRole: "super_admin",
    action: "PRICE_OVERRIDE",
    entityType: "Vehicle",
    entityId: "bmw-x5-2023-m50i",
    changes: [
      { field: "price", oldValue: "$78,500", newValue: "$76,900" },
      { field: "is_price_protected", oldValue: "false", newValue: "true" },
    ],
    ipAddress: "194.44.12.98",
    timestamp: "2026-11-02 00:15:22",
  },
  {
    id: "aud-002",
    userEmail: "oleg.k@rezargroup.com",
    userRole: "manager",
    action: "PUBLISH_STATUS_CHANGE",
    entityType: "Vehicle",
    entityId: "porsche-cayenne-2022",
    changes: [
      { field: "publish_status", oldValue: "needs_review", newValue: "published" },
    ],
    ipAddress: "91.222.45.12",
    timestamp: "2026-11-01 22:40:05",
  },
  {
    id: "aud-003",
    userEmail: "admin@rezargroup.com",
    userRole: "super_admin",
    action: "MAPPING_APPROVE",
    entityType: "ProviderModelMapping",
    entityId: "map-5510",
    changes: [
      { field: "raw_model", oldValue: "GLC300 4M", newValue: "GLC 300 4MATIC" },
      { field: "confidence", oldValue: "pending", newValue: "manual_approved" },
    ],
    ipAddress: "194.44.12.98",
    timestamp: "2026-11-01 21:05:43",
  },
  {
    id: "aud-004",
    userEmail: "system.sync@worker",
    userRole: "system",
    action: "SYNC_COMPLETED",
    entityType: "SyncHistory",
    entityId: "sync-1092",
    changes: [
      { field: "cars_processed", oldValue: "0", newValue: "142" },
      { field: "cars_added", oldValue: "0", newValue: "4" },
    ],
    ipAddress: "127.0.0.1 (Docker)",
    timestamp: "2026-11-01 20:00:18",
  },
  {
    id: "aud-005",
    userEmail: "admin@rezargroup.com",
    userRole: "super_admin",
    action: "USER_LOCK",
    entityType: "User",
    entityId: "user-old-staff",
    changes: [
      { field: "is_active", oldValue: "true", newValue: "false" },
    ],
    ipAddress: "194.44.12.98",
    timestamp: "2026-11-01 17:34:00",
  },
];

export default function AuditLogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [actionFilter, setActionFilter] = useState("all");

  const filteredLogs = mockAuditLogs.filter((log) => {
    const matchesSearch =
      log.userEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.entityId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.action.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesAction =
      actionFilter === "all" || log.action === actionFilter;

    return matchesSearch && matchesAction;
  });

  const exportToJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(mockAuditLogs, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `audit_trail_rezar_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
            <ShieldAlert className="w-6 h-6 text-indigo-400" />
            <span>Журнал аудиту дій</span>
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Незмінний реєстр операцій персоналу: хто, коли і які зміни вніс до бази даних
          </p>
        </div>

        <button
          onClick={exportToJson}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-medium transition-all border border-zinc-700"
        >
          <Download className="w-4 h-4" />
          <span>Експорт JSON</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            placeholder="Пошук за email, ID сутності або дією..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#141418] border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600"
          />
        </div>

        <div className="flex items-center gap-2">
          <select
            value={actionFilter}
            onChange={(e) => setActionFilter(e.target.value)}
            className="bg-[#141418] border border-zinc-800 text-xs text-zinc-300 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-zinc-600"
          >
            <option value="all">Всі типи дій</option>
            <option value="PRICE_OVERRIDE">PRICE_OVERRIDE</option>
            <option value="PUBLISH_STATUS_CHANGE">PUBLISH_STATUS_CHANGE</option>
            <option value="MAPPING_APPROVE">MAPPING_APPROVE</option>
            <option value="SYNC_COMPLETED">SYNC_COMPLETED</option>
            <option value="USER_LOCK">USER_LOCK</option>
          </select>
        </div>
      </div>

      {/* Logs Table */}
      <div className="bg-[#141418] border border-zinc-800/80 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#111114] text-zinc-400 font-mono text-[11px] border-b border-zinc-800">
              <tr>
                <th className="py-3 px-4">Час / Дата</th>
                <th className="py-3 px-4">Користувач</th>
                <th className="py-3 px-4">Дія</th>
                <th className="py-3 px-4">Об&apos;єкт</th>
                <th className="py-3 px-4">Зміни (Diff)</th>
                <th className="py-3 px-4 text-right">IP / Вузол</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
              {filteredLogs.map((entry) => (
                <tr key={entry.id} className="hover:bg-zinc-800/30 transition-colors">
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="flex items-center gap-1.5 text-white font-mono text-[11px]">
                      <Clock className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{entry.timestamp}</span>
                    </div>
                  </td>

                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-zinc-500" />
                      <div>
                        <div className="font-medium text-white">{entry.userEmail}</div>
                        <div className="text-[10px] text-zinc-500 font-mono">{entry.userRole}</div>
                      </div>
                    </div>
                  </td>

                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-zinc-800 border border-zinc-700 text-zinc-300">
                      {entry.action}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="font-mono text-[11px] text-white">
                      {entry.entityType}
                    </div>
                    <div className="text-[10px] text-zinc-500 font-mono truncate max-w-[140px]">
                      #{entry.entityId}
                    </div>
                  </td>

                  <td className="py-3.5 px-4">
                    <div className="space-y-1">
                      {entry.changes.map((change, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 font-mono text-[10px]">
                          <span className="text-zinc-500 font-semibold">{change.field}:</span>
                          <span className="text-rose-400 line-through bg-rose-500/10 px-1 rounded">
                            {change.oldValue}
                          </span>
                          <ArrowRight className="w-3 h-3 text-zinc-600 shrink-0" />
                          <span className="text-emerald-400 bg-emerald-500/10 px-1 rounded">
                            {change.newValue}
                          </span>
                        </div>
                      ))}
                    </div>
                  </td>

                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    <div className="flex items-center justify-end gap-1 font-mono text-[10px] text-zinc-400">
                      <Laptop className="w-3 h-3 text-zinc-600" />
                      <span>{entry.ipAddress}</span>
                    </div>
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
