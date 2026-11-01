"use client";

import { useState } from "react";
import { BookOpen, Plus, Tag, Check, X, Search } from "lucide-react";
import { brands as initialBrands } from "@/data/brands";
import { models as initialModels } from "@/data/models";

export default function AdminDictionariesPage() {
  const [activeTab, setActiveTab] = useState<"brands" | "models" | "specs">("brands");
  const [brandsList, setBrandsList] = useState(initialBrands);
  const [modelsList, setModelsList] = useState(initialModels);
  const [selectedBrandFilter, setSelectedBrandFilter] = useState("brand_porsche");
  const [searchQuery, setSearchQuery] = useState("");

  // New Brand modal/form state
  const [newBrandName, setNewBrandName] = useState("");
  const [newModelName, setNewModelName] = useState("");

  const handleAddBrand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBrandName.trim()) return;
    const slug = newBrandName.toLowerCase().replace(/[^a-z0-9]/g, "-");
    const id = `brand_${slug}`;
    const newBrand = {
      id,
      name: newBrandName.trim(),
      slug,
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    setBrandsList([...brandsList, newBrand]);
    setNewBrandName("");
  };

  const handleAddModel = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newModelName.trim()) return;
    const slug = newModelName.toLowerCase().replace(/[^a-z0-9]/g, "-");
    const id = `model_${slug}`;
    const newModel = {
      id,
      brand_id: selectedBrandFilter,
      name: newModelName.trim(),
      slug,
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    setModelsList([...modelsList, newModel]);
    setNewModelName("");
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Довідники системи</h2>
          <p className="text-xs text-zinc-400 mt-0.5">
            Канонічні класифікатори марок, моделей та технічних характеристик
          </p>
        </div>

        {/* Tab switcher */}
        <div className="bg-[#141416] p-1 rounded-xl border border-zinc-800 text-xs font-mono flex">
          <button
            onClick={() => setActiveTab("brands")}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === "brands" ? "bg-white text-black font-bold" : "text-zinc-400 hover:text-white"
            }`}
          >
            Марки ({brandsList.length})
          </button>
          <button
            onClick={() => setActiveTab("models")}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === "models" ? "bg-white text-black font-bold" : "text-zinc-400 hover:text-white"
            }`}
          >
            Моделі ({modelsList.length})
          </button>
          <button
            onClick={() => setActiveTab("specs")}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === "specs" ? "bg-white text-black font-bold" : "text-zinc-400 hover:text-white"
            }`}
          >
            Специфікації
          </button>
        </div>
      </div>

      {/* Tab: Brands */}
      {activeTab === "brands" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Add Brand Form */}
          <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-6 h-fit space-y-4">
            <h3 className="text-sm font-semibold text-white">Додати нову марку</h3>
            <form onSubmit={handleAddBrand} className="space-y-3">
              <div>
                <label className="block text-xs text-zinc-400 mb-1">Назва марки *</label>
                <input
                  type="text"
                  required
                  value={newBrandName}
                  onChange={(e) => setNewBrandName(e.target.value)}
                  placeholder="напр. Ferrari, Aston Martin"
                  className="w-full bg-[#18181C] border border-zinc-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-white"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all cursor-pointer"
              >
                Зберегти марку
              </button>
            </form>
          </div>

          {/* Brands List */}
          <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-6 lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold text-white">Існуючі марки ({brandsList.length})</h3>
            <div className="divide-y divide-zinc-800/80">
              {brandsList.map((b) => {
                const count = modelsList.filter((m) => m.brand_id === b.id).length;
                return (
                  <div key={b.id} className="py-3 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white text-xs">{b.name}</div>
                      <div className="text-[10px] text-zinc-500 font-mono">
                        slug: /{b.slug} • id: {b.id}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300">
                        {count} моделей
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Активна
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Tab: Models */}
      {activeTab === "models" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Add Model Form */}
          <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-6 h-fit space-y-4">
            <h3 className="text-sm font-semibold text-white">Додати нову модель</h3>
            <form onSubmit={handleAddModel} className="space-y-3">
              <div>
                <label className="block text-xs text-zinc-400 mb-1">Марка *</label>
                <select
                  value={selectedBrandFilter}
                  onChange={(e) => setSelectedBrandFilter(e.target.value)}
                  className="w-full bg-[#18181C] border border-zinc-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-white"
                >
                  {brandsList.map((b) => (
                    <option key={b.id} value={b.id}>{b.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs text-zinc-400 mb-1">Назва моделі *</label>
                <input
                  type="text"
                  required
                  value={newModelName}
                  onChange={(e) => setNewModelName(e.target.value)}
                  placeholder="напр. Panamera Turbo S"
                  className="w-full bg-[#18181C] border border-zinc-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-white"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all cursor-pointer"
              >
                Зберегти модель
              </button>
            </form>
          </div>

          {/* Models List for Selected Brand */}
          <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-6 lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white">
                Моделі для {brandsList.find((b) => b.id === selectedBrandFilter)?.name}
              </h3>
              <select
                value={selectedBrandFilter}
                onChange={(e) => setSelectedBrandFilter(e.target.value)}
                className="bg-[#18181C] border border-zinc-800 rounded-lg p-1.5 text-xs text-white"
              >
                {brandsList.map((b) => (
                  <option key={b.id} value={b.id}>{b.name}</option>
                ))}
              </select>
            </div>

            <div className="divide-y divide-zinc-800/80">
              {modelsList
                .filter((m) => m.brand_id === selectedBrandFilter)
                .map((m) => (
                  <div key={m.id} className="py-2.5 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-semibold text-white">{m.name}</div>
                      <div className="text-[10px] text-zinc-500 font-mono">
                        slug: /{m.slug} • id: {m.id}
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Активна
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab: Specs */}
      {activeTab === "specs" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-5 space-y-2">
            <span className="text-xs font-semibold text-white">Типи кузова</span>
            <div className="space-y-1 text-xs text-zinc-400 font-mono">
              <div>• SUV (Позашляховик)</div>
              <div>• Sedan (Седан)</div>
              <div>• Coupe (Купе)</div>
              <div>• Cabriolet (Кабріолет)</div>
              <div>• Wagon (Універсал)</div>
              <div>• Liftback (Ліфтбек)</div>
            </div>
          </div>

          <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-5 space-y-2">
            <span className="text-xs font-semibold text-white">Типи палива</span>
            <div className="space-y-1 text-xs text-zinc-400 font-mono">
              <div>• Petrol (Бензин)</div>
              <div>• Diesel (Дизель)</div>
              <div>• Hybrid (Гібрид)</div>
              <div>• Plug-in Hybrid</div>
              <div>• Electric (Електро)</div>
            </div>
          </div>

          <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-5 space-y-2">
            <span className="text-xs font-semibold text-white">Коробки передач</span>
            <div className="space-y-1 text-xs text-zinc-400 font-mono">
              <div>• Automatic (Автомат)</div>
              <div>• Robot (Робот / PDK / DSG)</div>
              <div>• Manual (Механіка)</div>
              <div>• Variator (Варіатор)</div>
            </div>
          </div>

          <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-5 space-y-2">
            <span className="text-xs font-semibold text-white">Привід</span>
            <div className="space-y-1 text-xs text-zinc-400 font-mono">
              <div>• All-Wheel (Повний)</div>
              <div>• Rear-Wheel (Задній)</div>
              <div>• Front-Wheel (Передній)</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
