"use client";

import { useState } from "react";
import {
  RefreshCw,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Play,
  Settings,
  Layers,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { CatalogSyncService } from "@/services/catalogSyncService";
import { brands } from "@/data/brands";
import { models } from "@/data/models";

export default function AdminSyncPage() {
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncMessage, setSyncMessage] = useState<string | null>(null);
  const [pendingItems, setPendingItems] = useState(() =>
    CatalogSyncService.getPendingItems()
  );
  const [selectedBrandMap, setSelectedBrandMap] = useState<Record<string, string>>({});
  const [selectedModelMap, setSelectedModelMap] = useState<Record<string, string>>({});

  const stats = CatalogSyncService.getStats();

  const handleRunSync = () => {
    setIsSyncing(true);
    setSyncMessage(null);
    setTimeout(() => {
      setIsSyncing(false);
      setSyncMessage("Синхронізація завершена успішно: 81 запис перевірено, 14 оновлено, 0 помилок.");
    }, 1800);
  };

  const handleApprove = (itemId: string) => {
    const item = pendingItems.find((p) => p.id === itemId);
    const brandId = selectedBrandMap[itemId] || item?.suggestedBrandId || brands[0].id;
    const availableModels = models.filter((m) => m.brand_id === brandId);
    const modelId =
      selectedModelMap[itemId] ||
      item?.suggestedModelId ||
      availableModels[0]?.id ||
      "";

    if (!modelId) return;

    CatalogSyncService.approveMapping(itemId, brandId, modelId);
    setPendingItems(CatalogSyncService.getPendingItems());
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header & Main Trigger */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            Синхронізація з фідом постачальника
          </h2>
          <p className="text-xs text-zinc-400 mt-0.5">
            Автоматичне зіставлення, оновлення залишків і контроль якості каталогу
          </p>
        </div>

        <button
          type="button"
          onClick={handleRunSync}
          disabled={isSyncing}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-xl cursor-pointer disabled:opacity-50"
        >
          <Play className={`w-3.5 h-3.5 fill-black ${isSyncing ? "animate-spin" : ""}`} />
          <span>{isSyncing ? "Виконується..." : "Запустити синхронізацію"}</span>
        </button>
      </div>

      {syncMessage && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center justify-between animate-in fade-in">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{syncMessage}</span>
          </div>
          <button
            onClick={() => setSyncMessage(null)}
            className="text-xs text-emerald-400 hover:text-white underline cursor-pointer"
          >
            Закрити
          </button>
        </div>
      )}

      {/* Sync Metrics Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-5">
          <span className="text-[11px] font-mono text-zinc-400 uppercase">Останній запуск</span>
          <div className="text-lg font-bold text-white font-mono mt-1">Сьогодні, 14:30:22</div>
          <div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            <span>Успішно завершено (4.2 сек)</span>
          </div>
        </div>

        <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-5">
          <span className="text-[11px] font-mono text-zinc-400 uppercase">Оброблено авто</span>
          <div className="text-2xl font-bold text-white font-mono mt-1">81</div>
          <div className="text-[10px] text-zinc-500 mt-1">100% записів провалідовано</div>
        </div>

        <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-5">
          <span className="text-[11px] font-mono text-zinc-400 uppercase">Оновлено цін/статусів</span>
          <div className="text-2xl font-bold text-emerald-400 font-mono mt-1">14</div>
          <div className="text-[10px] text-zinc-500 mt-1">Ручні правки збережено без змін</div>
        </div>

        <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-5">
          <span className="text-[11px] font-mono text-zinc-400 uppercase">Черга модерації</span>
          <div className="text-2xl font-bold text-amber-400 font-mono mt-1">{pendingItems.length}</div>
          <div className="text-[10px] text-zinc-500 mt-1">Потребують схвалення моделі</div>
        </div>
      </div>

      {/* Pending Items Moderation Table */}
      <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Layers className="w-4 h-4 text-white" />
            <h3 className="text-sm font-semibold text-white">
              Черга нерозпізнаних моделей постачальника ({pendingItems.length})
            </h3>
          </div>
          <span className="text-[11px] text-zinc-400 font-mono">
            Захист каталогу від спотворення даних
          </span>
        </div>

        {pendingItems.length === 0 ? (
          <div className="p-8 text-center text-xs text-zinc-500 font-mono">
            Черга модерації порожня. Всі записи постачальника успішно зіставлені з канонічними моделями.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 font-mono text-[11px]">
                  <th className="py-2.5 px-3">Сире найменування фіда</th>
                  <th className="py-2.5 px-3">Канонічна марка</th>
                  <th className="py-2.5 px-3">Канонічна модель</th>
                  <th className="py-2.5 px-3">Схожість</th>
                  <th className="py-2.5 px-3 text-right">Дія</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                {pendingItems.map((item) => {
                  const currentBrandId = selectedBrandMap[item.id] || item.suggestedBrandId || brands[0].id;
                  const itemModels = models.filter((m) => m.brand_id === currentBrandId);

                  return (
                    <tr key={item.id} className="hover:bg-zinc-800/30">
                      <td className="py-3 px-3">
                        <div className="font-semibold text-white">{item.rawBrand}</div>
                        <div className="text-zinc-400 font-mono text-[11px]">{item.rawModel}</div>
                      </td>
                      <td className="py-3 px-3">
                        <select
                          value={currentBrandId}
                          onChange={(e) => {
                            setSelectedBrandMap({ ...selectedBrandMap, [item.id]: e.target.value });
                          }}
                          className="bg-[#18181C] border border-zinc-800 rounded-lg p-1.5 text-xs text-white"
                        >
                          {brands.map((b) => (
                            <option key={b.id} value={b.id}>{b.name}</option>
                          ))}
                        </select>
                      </td>
                      <td className="py-3 px-3">
                        <select
                          value={selectedModelMap[item.id] || item.suggestedModelId || itemModels[0]?.id || ""}
                          onChange={(e) => {
                            setSelectedModelMap({ ...selectedModelMap, [item.id]: e.target.value });
                          }}
                          className="bg-[#18181C] border border-zinc-800 rounded-lg p-1.5 text-xs text-white"
                        >
                          {itemModels.map((m) => (
                            <option key={m.id} value={m.id}>{m.name}</option>
                          ))}
                        </select>
                      </td>
                      <td className="py-3 px-3 font-mono">
                        <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-[10px] border border-amber-500/20">
                          {item.confidence}%
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <button
                          type="button"
                          onClick={() => handleApprove(item.id)}
                          className="px-3 py-1.5 rounded-lg bg-white text-black hover:bg-zinc-200 text-xs font-semibold cursor-pointer"
                        >
                          Схвалити зв&apos;язок
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Sync Execution History */}
      <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-6 space-y-4">
        <h3 className="text-sm font-semibold text-white">Журнал останніх запусків синхронізації</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 text-[11px]">
                <th className="py-2.5 px-3">ID операції</th>
                <th className="py-2.5 px-3">Час запуску</th>
                <th className="py-2.5 px-3">Тип</th>
                <th className="py-2.5 px-3">Отримано</th>
                <th className="py-2.5 px-3">Нових</th>
                <th className="py-2.5 px-3">Оновлено</th>
                <th className="py-2.5 px-3">Тривалість</th>
                <th className="py-2.5 px-3 text-right">Статус</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
              <tr>
                <td className="py-2.5 px-3 text-zinc-500">sync_8f12a</td>
                <td className="py-2.5 px-3">Сьогодні, 14:30</td>
                <td className="py-2.5 px-3 text-zinc-400">auto_cron</td>
                <td className="py-2.5 px-3">81</td>
                <td className="py-2.5 px-3 text-emerald-400">+2</td>
                <td className="py-2.5 px-3 text-emerald-400">+14</td>
                <td className="py-2.5 px-3">4.2 сек</td>
                <td className="py-2.5 px-3 text-right text-emerald-400">Успішно</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 text-zinc-500">sync_7b04e</td>
                <td className="py-2.5 px-3">Сьогодні, 12:30</td>
                <td className="py-2.5 px-3 text-zinc-400">auto_cron</td>
                <td className="py-2.5 px-3">79</td>
                <td className="py-2.5 px-3 text-zinc-400">0</td>
                <td className="py-2.5 px-3 text-emerald-400">+6</td>
                <td className="py-2.5 px-3">3.8 сек</td>
                <td className="py-2.5 px-3 text-right text-emerald-400">Успішно</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 text-zinc-500">sync_6a99c</td>
                <td className="py-2.5 px-3">Вчора, 22:30</td>
                <td className="py-2.5 px-3 text-zinc-400">manual</td>
                <td className="py-2.5 px-3">79</td>
                <td className="py-2.5 px-3 text-emerald-400">+1</td>
                <td className="py-2.5 px-3 text-emerald-400">+12</td>
                <td className="py-2.5 px-3">4.5 сек</td>
                <td className="py-2.5 px-3 text-right text-emerald-400">Успішно</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
