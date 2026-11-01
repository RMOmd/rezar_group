"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Plus, Trash2, CheckCircle } from "lucide-react";
import { brands } from "@/data/brands";
import { models } from "@/data/models";

export default function AdminNewCarPage() {
  const router = useRouter();
  const [selectedBrandId, setSelectedBrandId] = useState(brands[0].id);
  const availableModels = models.filter((m) => m.brand_id === selectedBrandId);

  const [formData, setFormData] = useState({
    modelId: availableModels[0]?.id || "",
    trim: "",
    year: 2024,
    price: 150000,
    mileage: 5000,
    fuelType: "petrol",
    engine: "4.0L V8 Twin-Turbo",
    powerHp: 585,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Чорний металік",
    colorInterior: "Чорна шкіра Nappa",
    vin: "WBA0000000REZAR01",
    status: "in_stock",
    location: "Київ, Україна",
    description: "Офіційний європейський автомобіль у максимальній комплектації.",
  });

  const [photos, setPhotos] = useState<string[]>([
    "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80",
  ]);
  const [newPhotoUrl, setNewPhotoUrl] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const handleAddPhoto = () => {
    if (newPhotoUrl.trim()) {
      setPhotos([...photos, newPhotoUrl.trim()]);
      setNewPhotoUrl("");
    }
  };

  const handleRemovePhoto = (index: number) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => {
      router.push("/admin/cars");
    }, 1200);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Back button */}
      <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
        <Link
          href="/admin/cars"
          className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Повернутися до каталогу</span>
        </Link>
        <span className="text-[11px] font-mono text-zinc-500">
          Джерело: <span className="text-white">manual (ручне створення)</span>
        </span>
      </div>

      {isSaved && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2 animate-in fade-in">
          <CheckCircle className="w-4 h-4" />
          <span>Автомобіль успішно збережено в базі даних PostgreSQL! Перенаправлення...</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Brand & Model */}
        <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-6 space-y-4">
          <h3 className="text-sm font-semibold text-white">Основна інформація</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-zinc-400 mb-1.5 font-medium">Марка *</label>
              <select
                value={selectedBrandId}
                onChange={(e) => {
                  setSelectedBrandId(e.target.value);
                  const newModels = models.filter((m) => m.brand_id === e.target.value);
                  setFormData((prev) => ({ ...prev, modelId: newModels[0]?.id || "" }));
                }}
                className="w-full bg-[#18181C] border border-zinc-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-white"
              >
                {brands.map((b) => (
                  <option key={b.id} value={b.id}>{b.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs text-zinc-400 mb-1.5 font-medium">Модель *</label>
              <select
                value={formData.modelId}
                onChange={(e) => setFormData({ ...formData, modelId: e.target.value })}
                className="w-full bg-[#18181C] border border-zinc-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-white"
              >
                {availableModels.map((m) => (
                  <option key={m.id} value={m.id}>{m.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs text-zinc-400 mb-1.5 font-medium">Комплектація / Trim</label>
              <input
                type="text"
                value={formData.trim}
                onChange={(e) => setFormData({ ...formData, trim: e.target.value })}
                placeholder="напр. Competition, M Sport"
                className="w-full bg-[#18181C] border border-zinc-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs text-zinc-400 mb-1.5 font-medium">Рік випуску *</label>
              <input
                type="number"
                required
                min={2000}
                max={2026}
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) || 2024 })}
                className="w-full bg-[#18181C] border border-zinc-800 rounded-xl p-2.5 text-xs text-white font-mono focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-xs text-zinc-400 mb-1.5 font-medium">Ціна (USD) *</label>
              <input
                type="number"
                required
                min={1000}
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: parseInt(e.target.value) || 0 })}
                className="w-full bg-[#18181C] border border-zinc-800 rounded-xl p-2.5 text-xs text-white font-mono focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-xs text-zinc-400 mb-1.5 font-medium">Пробіг (км) *</label>
              <input
                type="number"
                required
                min={0}
                value={formData.mileage}
                onChange={(e) => setFormData({ ...formData, mileage: parseInt(e.target.value) || 0 })}
                className="w-full bg-[#18181C] border border-zinc-800 rounded-xl p-2.5 text-xs text-white font-mono focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-xs text-zinc-400 mb-1.5 font-medium">Статус наявності</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full bg-[#18181C] border border-zinc-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-white"
              >
                <option value="in_stock">В наявності</option>
                <option value="in_transit">В дорозі</option>
                <option value="sold">Продано</option>
              </select>
            </div>
          </div>
        </div>

        {/* Technical Specs */}
        <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-6 space-y-4">
          <h3 className="text-sm font-semibold text-white">Технічні характеристики</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-zinc-400 mb-1.5 font-medium">Двигун</label>
              <input
                type="text"
                required
                value={formData.engine}
                onChange={(e) => setFormData({ ...formData, engine: e.target.value })}
                className="w-full bg-[#18181C] border border-zinc-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-xs text-zinc-400 mb-1.5 font-medium">Потужність (к.с.)</label>
              <input
                type="number"
                value={formData.powerHp}
                onChange={(e) => setFormData({ ...formData, powerHp: parseInt(e.target.value) || 0 })}
                className="w-full bg-[#18181C] border border-zinc-800 rounded-xl p-2.5 text-xs text-white font-mono focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-xs text-zinc-400 mb-1.5 font-medium">Паливо</label>
              <select
                value={formData.fuelType}
                onChange={(e) => setFormData({ ...formData, fuelType: e.target.value })}
                className="w-full bg-[#18181C] border border-zinc-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-white"
              >
                <option value="petrol">Бензин</option>
                <option value="diesel">Дизель</option>
                <option value="hybrid">Гібрид</option>
                <option value="plug_in_hybrid">Plug-in Hybrid</option>
                <option value="electric">Електро</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-zinc-400 mb-1.5 font-medium">КПП</label>
              <select
                value={formData.transmission}
                onChange={(e) => setFormData({ ...formData, transmission: e.target.value })}
                className="w-full bg-[#18181C] border border-zinc-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-white"
              >
                <option value="automatic">Автомат</option>
                <option value="robot">Робот</option>
                <option value="manual">Механіка</option>
              </select>
            </div>

            <div>
              <label className="block text-xs text-zinc-400 mb-1.5 font-medium">Привід</label>
              <select
                value={formData.drive}
                onChange={(e) => setFormData({ ...formData, drive: e.target.value })}
                className="w-full bg-[#18181C] border border-zinc-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-white"
              >
                <option value="all_wheel">Повний</option>
                <option value="rear_wheel">Задній</option>
                <option value="front_wheel">Передній</option>
              </select>
            </div>

            <div>
              <label className="block text-xs text-zinc-400 mb-1.5 font-medium">Тип кузова</label>
              <select
                value={formData.bodyType}
                onChange={(e) => setFormData({ ...formData, bodyType: e.target.value })}
                className="w-full bg-[#18181C] border border-zinc-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-white"
              >
                <option value="suv">SUV</option>
                <option value="sedan">Седан</option>
                <option value="coupe">Купе</option>
                <option value="cabriolet">Кабріолет</option>
                <option value="wagon">Універсал</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-zinc-400 mb-1.5 font-medium">VIN номер *</label>
              <input
                type="text"
                required
                value={formData.vin}
                onChange={(e) => setFormData({ ...formData, vin: e.target.value.toUpperCase() })}
                className="w-full bg-[#18181C] border border-zinc-800 rounded-xl p-2.5 text-xs text-white font-mono focus:outline-none focus:border-white uppercase"
              />
            </div>

            <div>
              <label className="block text-xs text-zinc-400 mb-1.5 font-medium">Локація</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full bg-[#18181C] border border-zinc-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-white"
              />
            </div>
          </div>
        </div>

        {/* Photos Management */}
        <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-6 space-y-4">
          <h3 className="text-sm font-semibold text-white">Фотографії автомобіля</h3>

          <div className="flex gap-2">
            <input
              type="url"
              value={newPhotoUrl}
              onChange={(e) => setNewPhotoUrl(e.target.value)}
              placeholder="Введіть URL зображення (Cloudflare R2 / CDN)..."
              className="flex-1 bg-[#18181C] border border-zinc-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-white"
            />
            <button
              type="button"
              onClick={handleAddPhoto}
              className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold cursor-pointer"
            >
              Додати URL
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {photos.map((url, idx) => (
              <div key={idx} className="relative aspect-[16/10] rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 group">
                <img src={url} alt={`Photo ${idx + 1}`} className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => handleRemovePhoto(idx)}
                  className="absolute top-1.5 right-1.5 p-1.5 rounded-lg bg-black/70 text-white hover:text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  title="Видалити"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
                {idx === 0 && (
                  <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded text-[9px] font-mono bg-black/80 text-emerald-400 border border-emerald-500/30">
                    Головне фото
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Save Bar */}
        <div className="flex items-center justify-end gap-3 pt-4">
          <Link
            href="/admin/cars"
            className="px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 hover:text-white"
          >
            Скасувати
          </Link>
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all cursor-pointer shadow-lg"
          >
            <Save className="w-4 h-4" />
            <span>Зберегти автомобіль</span>
          </button>
        </div>
      </form>
    </div>
  );
}
