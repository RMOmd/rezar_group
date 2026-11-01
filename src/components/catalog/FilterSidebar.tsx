"use client";

import { useState, useMemo } from "react";
import { Search, RotateCcw, Check, Sparkles } from "lucide-react";
import {
  VehicleFilterParams,
  BrandOption,
  ModelOption,
  FilterBounds,
  FuelType,
  BodyType,
  TransmissionType,
} from "@/types/vehicle";
import { useLanguage } from "@/context/LanguageContext";
import {
  formatFuelType,
  formatBodyType,
  formatTransmission,
} from "@/utils/formatters";

interface FilterSidebarProps {
  filters: VehicleFilterParams;
  onChange: (updated: Partial<VehicleFilterParams>) => void;
  onReset: () => void;
  brands: BrandOption[];
  models: ModelOption[];
  bounds: FilterBounds;
  totalFound: number;
  className?: string;
}

export function FilterSidebar({
  filters,
  onChange,
  onReset,
  brands,
  models,
  bounds,
  totalFound,
  className = "",
}: FilterSidebarProps) {
  const { t, locale } = useLanguage();
  const [brandSearch, setBrandSearch] = useState("");

  // Filtered brands based on user search in brand list
  const filteredBrands = useMemo(() => {
    if (!brandSearch.trim()) return brands;
    return brands.filter((b) =>
      b.name.toLowerCase().includes(brandSearch.toLowerCase().trim())
    );
  }, [brands, brandSearch]);

  const yearOptions = useMemo(() => {
    const list = [];
    for (let y = bounds.maxYear; y >= bounds.minYear; y--) {
      list.push(y);
    }
    return list;
  }, [bounds.minYear, bounds.maxYear]);

  return (
    <aside
      className={`w-full bg-[#141416] border border-zinc-800 rounded-2xl flex flex-col text-white text-sm overflow-hidden ${className}`}
    >
      {/* Pinned Header */}
      <div className="shrink-0 flex items-center justify-between px-5 py-4 border-b border-zinc-800 bg-[#141416] z-10">
        <div>
          <h2 className="text-sm uppercase tracking-wider font-semibold text-white">
            {t.filters.title}
          </h2>
          <span className="text-xs text-zinc-400">
            {t.filters.totalFound} <strong className="text-white font-mono">{totalFound}</strong>
          </span>
        </div>

        <button
          onClick={onReset}
          className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
          title={t.filters.reset}
        >
          <RotateCcw className="w-3.5 h-3.5" />
          {t.filters.reset}
        </button>
      </div>

      {/* Independently Scrollable Filter Body */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6 custom-scrollbar overscroll-contain">
        {/* New Arrivals Toggle */}
      <div className="bg-[#1B1B1E] border border-zinc-800/80 rounded-xl p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-medium text-white">{t.filters.newArrivals}</span>
        </div>
        <button
          type="button"
          onClick={() => onChange({ isNewArrival: !filters.isNewArrival })}
          className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${
            filters.isNewArrival ? "bg-white" : "bg-zinc-800"
          }`}
          aria-label={t.filters.newArrivals}
        >
          <div
            className={`w-4 h-4 rounded-full transition-transform ${
              filters.isNewArrival
                ? "transform translate-x-5 bg-black"
                : "bg-zinc-400"
            }`}
          />
        </button>
      </div>

      {/* Status Filter */}
      <div className="space-y-2">
        <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold">
          {t.filters.statusLabel}
        </label>
        <div className="grid grid-cols-2 gap-1.5">
          {[
            { id: "all_active", label: t.filters.statuses.all_active },
            { id: "in_stock", label: t.filters.statuses.in_stock },
            { id: "in_transit", label: t.filters.statuses.in_transit },
            { id: "sold", label: t.filters.statuses.sold },
          ].map((item) => {
            const isSelected = (filters.status || "all_active") === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  onChange({
                    status: item.id as VehicleFilterParams["status"],
                  })
                }
                className={`py-2 px-2.5 rounded-xl text-xs font-medium transition-all text-left truncate ${
                  isSelected
                    ? "bg-white text-black font-semibold shadow-md"
                    : "bg-[#1B1B1E] text-zinc-300 hover:bg-zinc-800 border border-zinc-800/60"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Brand with Search */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold">
            {t.filters.brandLabel}
          </label>
          {filters.brand && (
            <button
              onClick={() => onChange({ brand: undefined, model: undefined })}
              className="text-[11px] text-zinc-400 hover:text-white underline"
            >
              {t.filters.clear}
            </button>
          )}
        </div>

        {/* Brand search input */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            placeholder={t.filters.brandSearch}
            value={brandSearch}
            onChange={(e) => setBrandSearch(e.target.value)}
            className="w-full bg-[#1B1B1E] border border-zinc-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
          />
        </div>

        {/* Brand list */}
        <div className="max-h-40 overflow-y-auto space-y-1 pr-1">
          {filteredBrands.map((brand) => {
            const isSelected =
              filters.brand?.toLowerCase() === brand.name.toLowerCase();
            return (
              <button
                key={brand.name}
                type="button"
                onClick={() => {
                  if (isSelected) {
                    onChange({ brand: undefined, model: undefined });
                  } else {
                    onChange({ brand: brand.name, model: undefined });
                  }
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors ${
                  isSelected
                    ? "bg-zinc-800 text-white font-medium border border-zinc-700"
                    : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-2">
                  {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                  {brand.name}
                </span>
                <span className="text-[10px] font-mono text-zinc-400 px-1.5 py-0.5 rounded bg-zinc-900">
                  {brand.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Model (Enabled only when brand is selected) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold">
            {t.filters.modelLabel}
          </label>
          {filters.model && (
            <button
              onClick={() => onChange({ model: undefined })}
              className="text-[11px] text-zinc-400 hover:text-white underline"
            >
              {t.filters.clear}
            </button>
          )}
        </div>

        {!filters.brand ? (
          <div className="p-3 rounded-xl bg-[#1B1B1E]/60 border border-zinc-800/40 text-xs text-zinc-400 text-center">
            {t.filters.selectBrandFirst}
          </div>
        ) : models.length === 0 ? (
          <div className="p-3 rounded-xl bg-[#1B1B1E]/60 border border-zinc-800/40 text-xs text-zinc-400 text-center">
            {t.filters.noModels}
          </div>
        ) : (
          <div className="max-h-36 overflow-y-auto space-y-1 pr-1">
            {models.map((mod) => {
              const isSelected =
                filters.model?.toLowerCase() === mod.name.toLowerCase();
              return (
                <button
                  key={mod.name}
                  type="button"
                  onClick={() => {
                    if (isSelected) {
                      onChange({ model: undefined });
                    } else {
                      onChange({ model: mod.name });
                    }
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors ${
                    isSelected
                      ? "bg-zinc-800 text-white font-medium border border-zinc-700"
                      : "text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                    {mod.name}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 px-1.5 py-0.5 rounded bg-zinc-900">
                    {mod.count}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="space-y-2.5">
        <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold">
          {t.filters.priceLabel}
        </label>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <span className="text-[10px] text-zinc-400 block mb-1">{t.filters.from}</span>
            <input
              type="number"
              placeholder={`$ ${bounds.minPrice.toLocaleString()}`}
              value={filters.priceFrom || ""}
              onChange={(e) =>
                onChange({
                  priceFrom: e.target.value ? Number(e.target.value) : undefined,
                })
              }
              className="w-full bg-[#1B1B1E] border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
            />
          </div>
          <div>
            <span className="text-[10px] text-zinc-400 block mb-1">{t.filters.to}</span>
            <input
              type="number"
              placeholder={`$ ${bounds.maxPrice.toLocaleString()}`}
              value={filters.priceTo || ""}
              onChange={(e) =>
                onChange({
                  priceTo: e.target.value ? Number(e.target.value) : undefined,
                })
              }
              className="w-full bg-[#1B1B1E] border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
            />
          </div>
        </div>
      </div>

      {/* Year Range */}
      <div className="space-y-2.5">
        <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold">
          {t.filters.yearLabel}
        </label>
        <div className="grid grid-cols-2 gap-2">
          <select
            value={filters.yearFrom || ""}
            onChange={(e) =>
              onChange({
                yearFrom: e.target.value ? Number(e.target.value) : undefined,
              })
            }
            className="w-full bg-[#1B1B1E] border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-zinc-500"
          >
            <option value="">{t.filters.yearFrom}</option>
            {yearOptions.map((y) => (
              <option key={`from-${y}`} value={y}>
                {y}
              </option>
            ))}
          </select>

          <select
            value={filters.yearTo || ""}
            onChange={(e) =>
              onChange({
                yearTo: e.target.value ? Number(e.target.value) : undefined,
              })
            }
            className="w-full bg-[#1B1B1E] border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-zinc-500"
          >
            <option value="">{t.filters.yearTo}</option>
            {yearOptions.map((y) => (
              <option key={`to-${y}`} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Mileage max */}
      <div className="space-y-2.5">
        <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold">
          {t.filters.mileageLabel}
        </label>
        <select
          value={filters.mileageTo || ""}
          onChange={(e) =>
            onChange({
              mileageTo: e.target.value ? Number(e.target.value) : undefined,
            })
          }
          className="w-full bg-[#1B1B1E] border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-zinc-500"
        >
          <option value="">{t.filters.anyMileage}</option>
          <option value="15000">{t.filters.upTo} 15 000 km</option>
          <option value="30000">{t.filters.upTo} 30 000 km</option>
          <option value="50000">{t.filters.upTo} 50 000 km</option>
          <option value="80000">{t.filters.upTo} 80 000 km</option>
        </select>
      </div>

      {/* Fuel Type */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold">
            {locale === "en" ? "Fuel Type" : locale === "ru" ? "Тип топлива" : "Тип пального"}
          </label>
          {filters.fuelType && (
            <button
              onClick={() => onChange({ fuelType: undefined })}
              className="text-[11px] text-zinc-400 hover:text-white underline"
            >
              {t.filters.clear}
            </button>
          )}
        </div>
        <select
          value={filters.fuelType || ""}
          onChange={(e) =>
            onChange({ fuelType: (e.target.value as FuelType) || undefined })
          }
          className="w-full bg-[#1B1B1E] border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-zinc-500 cursor-pointer"
        >
          <option value="">
            {locale === "en"
              ? "All fuel types"
              : locale === "ru"
              ? "Все типы топлива"
              : "Всі типи пального"}
          </option>
          <option value="petrol">{formatFuelType("petrol", locale)}</option>
          <option value="diesel">{formatFuelType("diesel", locale)}</option>
          <option value="hybrid">{formatFuelType("hybrid", locale)}</option>
          <option value="electric">{formatFuelType("electric", locale)}</option>
          <option value="plug_in_hybrid">{formatFuelType("plug_in_hybrid", locale)}</option>
        </select>
      </div>

      {/* Body Type */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold">
            {locale === "en" ? "Body Type" : locale === "ru" ? "Тип кузова" : "Тип кузова"}
          </label>
          {filters.bodyType && (
            <button
              onClick={() => onChange({ bodyType: undefined })}
              className="text-[11px] text-zinc-400 hover:text-white underline"
            >
              {t.filters.clear}
            </button>
          )}
        </div>
        <select
          value={filters.bodyType || ""}
          onChange={(e) =>
            onChange({ bodyType: (e.target.value as BodyType) || undefined })
          }
          className="w-full bg-[#1B1B1E] border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-zinc-500 cursor-pointer"
        >
          <option value="">
            {locale === "en"
              ? "All body types"
              : locale === "ru"
              ? "Все типы кузова"
              : "Всі типи кузова"}
          </option>
          <option value="suv">{formatBodyType("suv", locale)}</option>
          <option value="sedan">{formatBodyType("sedan", locale)}</option>
          <option value="coupe">{formatBodyType("coupe", locale)}</option>
          <option value="cabriolet">{formatBodyType("cabriolet", locale)}</option>
          <option value="wagon">{formatBodyType("wagon", locale)}</option>
        </select>
      </div>

      {/* Transmission */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold">
            {locale === "en"
              ? "Transmission"
              : locale === "ru"
              ? "Коробка передач"
              : "Коробка передач"}
          </label>
          {filters.transmission && (
            <button
              onClick={() => onChange({ transmission: undefined })}
              className="text-[11px] text-zinc-400 hover:text-white underline"
            >
              {t.filters.clear}
            </button>
          )}
        </div>
        <select
          value={filters.transmission || ""}
          onChange={(e) =>
            onChange({
              transmission: (e.target.value as TransmissionType) || undefined,
            })
          }
          className="w-full bg-[#1B1B1E] border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-zinc-500 cursor-pointer"
        >
          <option value="">
            {locale === "en"
              ? "All transmissions"
              : locale === "ru"
              ? "Все КПП"
              : "Всі КПП"}
          </option>
          <option value="automatic">{formatTransmission("automatic", locale)}</option>
          <option value="robot">{formatTransmission("robot", locale)}</option>
          <option value="manual">{formatTransmission("manual", locale)}</option>
        </select>
      </div>
      </div>
    </aside>
  );
}
