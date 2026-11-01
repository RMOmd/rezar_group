"use client";

import { AlertCircle, Search } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface SoldVehicleBannerProps {
  onFindSimilar: () => void;
}

export function SoldVehicleBanner({ onFindSimilar }: SoldVehicleBannerProps) {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-700/60 rounded-2xl p-5 sm:p-6 mb-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 shrink-0 mt-0.5">
            <AlertCircle className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <div className="inline-block text-[11px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-zinc-800 text-zinc-300 mb-1 border border-zinc-700">
              {t.filters.statusLabel}: {t.statusBadges.sold}
            </div>
            <h3 className="text-base font-semibold text-white">
              {t.vehicleDetail.soldNoticeTitle}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
              {t.vehicleDetail.soldNoticeDesc}
            </p>
          </div>
        </div>

        <button
          onClick={onFindSimilar}
          className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-all shrink-0 active:scale-95 shadow-lg"
        >
          <Search className="w-4 h-4" />
          {t.vehicleDetail.findSimilarBtn}
        </button>
      </div>
    </div>
  );
}
