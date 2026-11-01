"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Heart, ArrowLeft, Trash2, ArrowRight, ArrowUpDown } from "lucide-react";
import { VEHICLES } from "@/data/vehicles";
import { useFavorites } from "@/hooks/useFavorites";
import { VehicleCard } from "@/components/catalog/VehicleCard";
import { formatPrice } from "@/utils/formatters";
import { useLanguage } from "@/context/LanguageContext";
import { Vehicle } from "@/types/vehicle";

type FavoritesSortOption = "time_added" | "price_desc" | "price_asc" | "year_desc";

export function FavoritesClient() {
  const { t } = useLanguage();
  const { favoriteIds, favoritesCount, clearFavorites, isLoaded } = useFavorites();
  const [sortOption, setSortOption] = useState<FavoritesSortOption>("time_added");

  // Map favoriteIds to vehicles while preserving order of addition (newest first by default)
  const favoriteVehicles = useMemo(() => {
    const list = favoriteIds
      .map((id) => VEHICLES.find((v) => v.id === id))
      .filter((v): v is Vehicle => v !== undefined);

    if (sortOption === "price_desc") {
      return [...list].sort((a, b) => b.price - a.price);
    }
    if (sortOption === "price_asc") {
      return [...list].sort((a, b) => a.price - b.price);
    }
    if (sortOption === "year_desc") {
      return [...list].sort((a, b) => b.year - a.year);
    }

    // Default: time_added (most recently added cars first)
    return list;
  }, [favoriteIds, sortOption]);

  const totalValue = useMemo(() => {
    return favoriteVehicles.reduce((acc, v) => acc + v.price, 0);
  }, [favoriteVehicles]);

  const handleClearAll = () => {
    if (window.confirm("Очистити весь список обраних авто?")) {
      clearFavorites();
    }
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-[#0B0B0C] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-zinc-700 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#0B0B0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation & Header */}
        <div className="pb-8 border-b border-zinc-800">
          <div className="flex items-center gap-2 mb-4">
            <Link
              href="/catalog"
              className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{t.favoritesPage.backToCatalog}</span>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 block mb-2">
                {t.favoritesPage.badge}
              </span>
              <h1 className="text-2xl sm:text-4xl font-light text-white tracking-tight flex items-center gap-3">
                <span>{t.favoritesPage.title}</span>
                <span className="text-base font-mono px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300">
                  {favoritesCount}
                </span>
              </h1>
            </div>

            {favoritesCount > 0 && (
              <div className="flex flex-wrap items-center gap-4">
                <div className="text-right hidden sm:block">
                  <span className="text-xs text-zinc-400 block">
                    {t.favoritesPage.totalValue}
                  </span>
                  <span className="text-lg font-bold text-white font-mono">
                    {formatPrice(totalValue)}
                  </span>
                </div>

                {/* Sorting Dropdown */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-zinc-400 hidden md:inline">
                    {t.favoritesPage.sortByLabel}
                  </span>
                  <div className="relative">
                    <select
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value as FavoritesSortOption)}
                      className="bg-[#141416] border border-zinc-800 rounded-xl px-3 py-2 pr-8 text-xs text-white focus:outline-none focus:border-zinc-500 cursor-pointer appearance-none"
                    >
                      <option value="time_added">{t.favoritesPage.sortAddedTime}</option>
                      <option value="price_desc">{t.favoritesPage.sortPriceDesc}</option>
                      <option value="price_asc">{t.favoritesPage.sortPriceAsc}</option>
                      <option value="year_desc">{t.favoritesPage.sortYearDesc}</option>
                    </select>
                    <ArrowUpDown className="w-3 h-3 text-zinc-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <button
                  onClick={handleClearAll}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs text-zinc-400 hover:text-rose-400 transition-colors"
                  title={t.favoritesPage.clearAll}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>{t.favoritesPage.clearAll}</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="mt-8">
          {favoriteVehicles.length === 0 ? (
            <div className="text-center py-24 px-4 rounded-3xl bg-[#141416] border border-zinc-800/80 max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 mx-auto mb-5">
                <Heart className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">
                {t.favoritesPage.emptyTitle}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto mb-8">
                {t.favoritesPage.emptyDesc}
              </p>
              <Link
                href="/catalog"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-xl"
              >
                <span>{t.favoritesPage.goToCatalog}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6">
              {favoriteVehicles.map((vehicle, idx) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} priority={idx < 6} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
