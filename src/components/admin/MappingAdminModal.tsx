"use client";

import { useState } from "react";
import {
  X,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Layers,
  ArrowRight,
  ShieldCheck,
  Plus,
} from "lucide-react";
import { CatalogSyncService } from "@/services/catalogSyncService";
import { brands } from "@/data/brands";
import { models } from "@/data/models";
import { useLanguage } from "@/context/LanguageContext";

interface MappingAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MappingAdminModal({ isOpen, onClose }: MappingAdminModalProps) {
  const { locale } = useLanguage();
  const [pendingItems, setPendingItems] = useState(() =>
    CatalogSyncService.getPendingItems()
  );
  const [selectedBrandMap, setSelectedBrandMap] = useState<Record<string, string>>({});
  const [selectedModelMap, setSelectedModelMap] = useState<Record<string, string>>({});

  // Simulator state
  const [simBrand, setSimBrand] = useState("PORSCHE AG");
  const [simModel, setSimModel] = useState("911 Carrera 4S");
  const [simResult, setSimResult] = useState<{
    status: string;
    confidence: number;
    message: string;
  } | null>(null);

  if (!isOpen) return null;

  const stats = CatalogSyncService.getStats();

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

  const handleDismiss = (itemId: string) => {
    CatalogSyncService.dismissPending(itemId);
    setPendingItems(CatalogSyncService.getPendingItems());
  };

  const handleSimulate = () => {
    const res = CatalogSyncService.syncItem(simBrand, simModel);
    setSimResult(res);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#141416] border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] z-10 text-white animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-5 border-b border-zinc-800 flex items-center justify-between bg-[#1B1B1E]/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Layers className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-semibold text-white">
                  Синхронізація зовнішніх довідників
                </h2>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  REZAR ENGINE v2
                </span>
              </div>
              <p className="text-xs text-zinc-400">
                Автоматична нормалізація та ручне зіставлення марок і моделей
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 custom-scrollbar">
          {/* Stats Badges Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-[#1B1B1E] border border-zinc-800/80">
              <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 block">
                Справочник марок
              </span>
              <span className="text-xl font-bold font-mono text-white mt-0.5 block">
                {stats.totalBrandsCount}
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#1B1B1E] border border-zinc-800/80">
              <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 block">
                Справочник моделей
              </span>
              <span className="text-xl font-bold font-mono text-white mt-0.5 block">
                {stats.totalModelsCount}
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#1B1B1E] border border-zinc-800/80">
              <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 block">
                Правил зіставлення
              </span>
              <span className="text-xl font-bold font-mono text-emerald-400 mt-0.5 block">
                {stats.mappedBrandsCount + stats.mappedModelsCount}
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#1B1B1E] border border-zinc-800/80">
              <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 block">
                Черга на перевірку
              </span>
              <span className="text-xl font-bold font-mono text-amber-400 mt-0.5 block">
                {pendingItems.length}
              </span>
            </div>
          </div>

          {/* Pending Queue Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-zinc-300 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>Невідомі позиції постачальника, що очікують підтвердження</span>
              </h3>
              <span className="text-[11px] font-mono text-zinc-400">
                Захист від дублів у публічному каталозі
              </span>
            </div>

            {pendingItems.length === 0 ? (
              <div className="p-8 rounded-2xl bg-[#1B1B1E] border border-zinc-800 text-center">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-white">Всі позиції зіставлені</p>
                <p className="text-xs text-zinc-400 mt-1">
                  Нові невідомі моделі постачальника з'являться тут автоматично
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {pendingItems.map((item) => {
                  const currentBrandId =
                    selectedBrandMap[item.id] ||
                    item.suggestedBrandId ||
                    brands[0].id;
                  const availableModels = models.filter(
                    (m) => m.brand_id === currentBrandId
                  );
                  const currentModelId =
                    selectedModelMap[item.id] ||
                    item.suggestedModelId ||
                    availableModels[0]?.id ||
                    "";

                  return (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl bg-[#1B1B1E] border border-zinc-800 hover:border-zinc-700/80 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                            Джерело: {item.provider.toUpperCase()}
                          </span>
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                              item.confidence > 70
                                ? "bg-emerald-500/10 text-emerald-400"
                                : "bg-amber-500/10 text-amber-400"
                            }`}
                          >
                            Точність: {item.confidence}%
                          </span>
                        </div>
                        <div className="text-sm font-semibold text-white">
                          «{item.rawBrand}» &rarr; «{item.rawModel}»
                        </div>
                      </div>

                      {/* Matching Selectors */}
                      <div className="flex flex-wrap items-center gap-2">
                        {/* Brand picker */}
                        <select
                          value={currentBrandId}
                          onChange={(e) => {
                            const newBId = e.target.value;
                            setSelectedBrandMap({
                              ...selectedBrandMap,
                              [item.id]: newBId,
                            });
                            const firstMod = models.find(
                              (m) => m.brand_id === newBId
                            );
                            if (firstMod) {
                              setSelectedModelMap({
                                ...selectedModelMap,
                                [item.id]: firstMod.id,
                              });
                            }
                          }}
                          className="bg-[#141416] border border-zinc-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-zinc-500 cursor-pointer"
                        >
                          {brands.map((b) => (
                            <option key={b.id} value={b.id}>
                              {b.name}
                            </option>
                          ))}
                        </select>

                        {/* Model picker */}
                        <select
                          value={currentModelId}
                          onChange={(e) =>
                            setSelectedModelMap({
                              ...selectedModelMap,
                              [item.id]: e.target.value,
                            })
                          }
                          className="bg-[#141416] border border-zinc-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-zinc-500 cursor-pointer"
                        >
                          {availableModels.map((m) => (
                            <option key={m.id} value={m.id}>
                              {m.name}
                            </option>
                          ))}
                        </select>

                        {/* Approve Button */}
                        <button
                          onClick={() => handleApprove(item.id)}
                          className="px-3.5 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors"
                        >
                          Зіставити
                        </button>

                        {/* Dismiss */}
                        <button
                          onClick={() => handleDismiss(item.id)}
                          className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 text-xs"
                          title="Пропустити"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Real-time Simulator Section */}
          <div className="pt-4 border-t border-zinc-800 space-y-3">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-zinc-300 flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-zinc-400" />
              <span>Тестування нормалізатора постачальника</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                placeholder="Сира назва марки (напр. MERCEDES-BENZ AG)"
                value={simBrand}
                onChange={(e) => setSimBrand(e.target.value)}
                className="bg-[#1B1B1E] border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
              />
              <input
                type="text"
                placeholder="Сира назва моделі (напр. G 63 AMG Biturbo)"
                value={simModel}
                onChange={(e) => setSimModel(e.target.value)}
                className="bg-[#1B1B1E] border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
              />
              <button
                onClick={handleSimulate}
                className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>Перевірити зіставлення</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {simResult && (
              <div
                className={`p-3.5 rounded-xl border text-xs flex items-center gap-3 ${
                  simResult.status === "mapped"
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                    : "bg-amber-500/10 border-amber-500/30 text-amber-300"
                }`}
              >
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>{simResult.message}</span>
                <span className="ml-auto font-mono text-[10px]">
                  Точність: {simResult.confidence}%
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-zinc-800 bg-[#1B1B1E]/60 flex items-center justify-between text-xs text-zinc-400">
          <span>Синхронізація захищає від дублів та зберігає внутрішні ID</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-medium transition-colors"
          >
            Закрити
          </button>
        </div>
      </div>
    </div>
  );
}
