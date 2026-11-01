"use client";

import { CheckCircle2, Layers } from "lucide-react";
import { Vehicle } from "@/types/vehicle";
import { useLanguage } from "@/context/LanguageContext";

interface VehicleFeaturesProps {
  features: Vehicle["features"];
}

export function VehicleFeatures({ features }: VehicleFeaturesProps) {
  const { t } = useLanguage();

  if (!features || features.length === 0) return null;

  return (
    <div className="bg-[#141416] border border-zinc-800 rounded-2xl p-5 sm:p-6 space-y-6">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2">
        <Layers className="w-4 h-4 text-zinc-400" />
        {t.vehicleDetail.featuresTitle}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((group, idx) => (
          <div key={idx} className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 pb-1.5 border-b border-zinc-800">
              {group.category}
            </h4>
            <ul className="space-y-2">
              {group.items.map((item, itemIdx) => (
                <li
                  key={itemIdx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
