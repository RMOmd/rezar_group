"use client";

import { Vehicle } from "@/types/vehicle";
import { RecommendationCandidate } from "@/types/recommendation";
import { VehicleCard } from "@/components/catalog/VehicleCard";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface SimilarVehiclesProps {
  vehicles: Vehicle[];
  candidates?: RecommendationCandidate[];
}

export function SimilarVehicles({ vehicles, candidates }: SimilarVehiclesProps) {
  const { t, locale } = useLanguage();

  const displayList = candidates && candidates.length > 0
    ? candidates.map((c) => ({ vehicle: c.vehicle, candidate: c }))
    : vehicles.map((v) => ({ vehicle: v, candidate: undefined }));

  if (!displayList || displayList.length === 0) return null;

  const levelLabel = (level: number) => {
    if (locale === "en") {
      if (level === 1) return "Same Model Match";
      if (level === 2) return "Same Brand Class";
      return "Segment Alternative";
    }
    if (locale === "ru") {
      if (level === 1) return "Та же марка и модель";
      if (level === 2) return "Класс бренда";
      return "Альтернатива в классе";
    }
    if (level === 1) return "Та сама марка та модель";
    if (level === 2) return "Клас бренду";
    return "Альтернатива в класі";
  };

  return (
    <section id="similar-vehicles" className="pt-12 sm:pt-16 border-t border-zinc-800">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.vehicleDetail.similarBadge}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
            {t.vehicleDetail.similarTitle}
          </h2>
        </div>
        <span className="text-xs text-zinc-400 font-mono">
          {t.vehicleDetail.similarFound} {displayList.length}
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6">
        {displayList.map(({ vehicle, candidate }) => (
          <div key={vehicle.id} className="flex flex-col">
            {candidate && (
              <div className="flex items-center justify-between text-[11px] font-mono px-3 py-1.5 mb-2 rounded-lg bg-zinc-900 border border-zinc-800">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  {levelLabel(candidate.level)}
                </span>
                <span className="text-emerald-400 font-semibold">
                  {Math.round(candidate.score)}%
                </span>
              </div>
            )}
            <VehicleCard vehicle={vehicle} />
          </div>
        ))}
      </div>
    </section>
  );
}
