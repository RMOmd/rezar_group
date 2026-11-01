"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";
import { VEHICLES } from "@/data/vehicles";

export default function AdminPublishingPage() {
  const [items, setItems] = useState(() =>
    VEHICLES.map((v, idx) => ({
      ...v,
      publishStatus: idx === 1 ? "hidden" : idx === 3 ? "needs_review" : "published",
    }))
  );

  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [filter, setFilter] = useState<string>("all");

  const filteredItems = items.filter((item) => {
    if (filter === "all") return true;
    return item.publishStatus === filter;
  });

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleBulkPublish = (status: "published" | "hidden") => {
    setItems((prev) =>
      prev.map((item) =>
        selectedIds.includes(item.id) ? { ...item, publishStatus: status } : item
      )
    );
    setSelectedIds([]);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Управління публікацією</h2>
          <p className="text-xs text-zinc-400 mt-0.5">
            Роздільне керування видимістю на сайті незалежно від статусу наявності авто
          </p>
        </div>

        {selectedIds.length > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-zinc-400 mr-2">Обрано: {selectedIds.length}</span>
            <button
              onClick={() => handleBulkPublish("published")}
              className="px-3.5 py-1.5 rounded-xl bg-white text-black text-xs font-bold hover:bg-zinc-200 cursor-pointer"
            >
              Опублікувати всі
            </button>
            <button
              onClick={() => handleBulkPublish("hidden")}
              className="px-3.5 py-1.5 rounded-xl bg-zinc-800 text-zinc-300 hover:text-white text-xs font-medium cursor-pointer"
            >
              Сховати всі
            </button>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 text-xs font-mono">
        {["all", "published", "hidden", "needs_review"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-3.5 py-1.5 rounded-xl border transition-colors cursor-pointer ${
              filter === tab
                ? "bg-white text-black font-bold border-white"
                : "bg-[#141416] text-zinc-400 border-zinc-800 hover:text-white"
            }`}
          >
            {tab === "all" ? "Всі" : tab === "published" ? "Опубліковані" : tab === "hidden" ? "Сховані" : "Потребують перевірки"}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.slice(0, 12).map((car) => {
          const isSelected = selectedIds.includes(car.id);
          return (
            <div
              key={car.id}
              className={`p-4 rounded-2xl border transition-all ${
                isSelected
                  ? "bg-zinc-900 border-white"
                  : "bg-[#121215] border-zinc-800"
              }`}
            >
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleSelect(car.id)}
                  className="mt-1 cursor-pointer accent-white"
                />

                <div className="w-16 h-12 rounded-lg bg-zinc-900 border border-zinc-800 overflow-hidden relative shrink-0">
                  <Image src={car.images[0] || ""} alt={car.model} fill className="object-cover" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-white text-xs truncate">
                    {car.brand} {car.model}
                  </div>
                  <div className="text-[10px] text-zinc-400 font-mono">
                    ${car.price.toLocaleString()} • {car.year}
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                      car.publishStatus === "published"
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                        : car.publishStatus === "hidden"
                        ? "bg-zinc-800 text-zinc-400 border-zinc-700"
                        : "bg-amber-500/10 text-amber-400 border-amber-500/30"
                    }`}>
                      {car.publishStatus === "published" ? "Опубліковано" : car.publishStatus === "hidden" ? "Сховано" : "Перевірка"}
                    </span>

                    <span className="text-[10px] text-zinc-500 font-mono">
                      (наявність: {car.status})
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
