"use client";

import { useState } from "react";
import Image from "next/image";
import { Image as ImageIcon, UploadCloud, Trash2, CheckCircle, Star } from "lucide-react";
import { VEHICLES } from "@/data/vehicles";

export default function AdminPhotosPage() {
  const [selectedVehicleId, setSelectedVehicleId] = useState(VEHICLES[0].id);
  const selectedVehicle = VEHICLES.find((v) => v.id === selectedVehicleId) || VEHICLES[0];
  const [photosList, setPhotosList] = useState(selectedVehicle.images);
  const [newUrl, setNewUrl] = useState("");

  const handleSelectCar = (id: string) => {
    setSelectedVehicleId(id);
    const car = VEHICLES.find((v) => v.id === id);
    if (car) setPhotosList(car.images);
  };

  const handleAdd = () => {
    if (newUrl.trim()) {
      setPhotosList([newUrl.trim(), ...photosList]);
      setNewUrl("");
    }
  };

  const handleMakePrimary = (idx: number) => {
    const item = photosList[idx];
    const rest = photosList.filter((_, i) => i !== idx);
    setPhotosList([item, ...rest]);
  };

  const handleDelete = (idx: number) => {
    setPhotosList(photosList.filter((_, i) => i !== idx));
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Управління медіа та фотографіями</h2>
          <p className="text-xs text-zinc-400 mt-0.5">
            Cloudflare R2 сховище, зміна порядку та призначення головного кадру
          </p>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={selectedVehicleId}
            onChange={(e) => handleSelectCar(e.target.value)}
            className="bg-[#141416] border border-zinc-800 rounded-xl p-2.5 text-xs text-white max-w-xs cursor-pointer"
          >
            {VEHICLES.map((v) => (
              <option key={v.id} value={v.id}>
                {v.brand} {v.model} ({v.year})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Upload Box */}
      <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-6 space-y-4">
        <h3 className="text-sm font-semibold text-white">Додати нову фотографію в R2 CDN</h3>
        <div className="flex gap-2">
          <input
            type="url"
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
            placeholder="URL або шлях до файлу в Cloudflare R2..."
            className="flex-1 bg-[#18181C] border border-zinc-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-white"
          />
          <button
            type="button"
            onClick={handleAdd}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white text-black text-xs font-bold hover:bg-zinc-200 cursor-pointer"
          >
            <UploadCloud className="w-4 h-4" />
            <span>Завантажити</span>
          </button>
        </div>
      </div>

      {/* Photos Grid */}
      <div className="bg-[#121215] border border-zinc-800 rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white">
            Галерея: {selectedVehicle.brand} {selectedVehicle.model} ({photosList.length} фото)
          </h3>
          <span className="text-[10px] text-zinc-500 font-mono">
            Перше фото завжди є головним у картці
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photosList.map((url, idx) => (
            <div
              key={idx}
              className={`group relative aspect-[16/10] rounded-2xl overflow-hidden border bg-zinc-900 ${
                idx === 0 ? "border-emerald-500/50 shadow-lg shadow-emerald-500/5" : "border-zinc-800"
              }`}
            >
              <Image src={url} alt={`Car Photo ${idx + 1}`} fill className="object-cover" />

              {/* Badges */}
              <div className="absolute top-2 left-2 flex items-center gap-1 z-10">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/70 text-zinc-300">
                  #{idx + 1}
                </span>
                {idx === 0 && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/90 text-black font-bold">
                    Головне
                  </span>
                )}
              </div>

              {/* Hover actions */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 z-20">
                {idx !== 0 && (
                  <button
                    type="button"
                    onClick={() => handleMakePrimary(idx)}
                    className="p-2 rounded-xl bg-white text-black text-xs font-semibold hover:bg-zinc-200 cursor-pointer"
                    title="Зробити головним"
                  >
                    <Star className="w-3.5 h-3.5" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => handleDelete(idx)}
                  className="p-2 rounded-xl bg-rose-500 text-white text-xs hover:bg-rose-600 cursor-pointer"
                  title="Видалити"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
