"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Vehicle } from "@/types/vehicle";
import { VehicleCard } from "@/components/catalog/VehicleCard";
import { useLanguage } from "@/context/LanguageContext";

interface FeaturedVehiclesProps {
  vehicles: Vehicle[];
}

export function FeaturedVehicles({ vehicles }: FeaturedVehiclesProps) {
  const { t } = useLanguage();
  const displayVehicles = vehicles.slice(0, 6);

  return (
    <section className="py-20 sm:py-28 bg-[#0B0B0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
              <span>{t.featured.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
              {t.featured.title1} <span className="font-semibold">{t.featured.title2}</span>
            </h2>
          </div>

          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-zinc-300 transition-colors group"
          >
            <span>{t.featured.viewAll} ({vehicles.length})</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 6 Cards Grid: 3 cols desktop, 2 cols mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {displayVehicles.map((vehicle, idx) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              priority={idx < 3}
            />
          ))}
        </div>

        {/* Bottom CTA to catalog */}
        <div className="mt-14 text-center">
          <Link
            href="/catalog"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all shadow-xl active:scale-95"
          >
            <span>{t.featured.fullCatalog}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
