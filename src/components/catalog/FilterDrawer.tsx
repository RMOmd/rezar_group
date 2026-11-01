"use client";

import { X } from "lucide-react";
import { FilterSidebar } from "./FilterSidebar";
import { VehicleFilterParams, BrandOption, ModelOption, FilterBounds } from "@/types/vehicle";
import { useLanguage } from "@/context/LanguageContext";

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: VehicleFilterParams;
  onChange: (updated: Partial<VehicleFilterParams>) => void;
  onReset: () => void;
  brands: BrandOption[];
  models: ModelOption[];
  bounds: FilterBounds;
  totalFound: number;
}

export function FilterDrawer({
  isOpen,
  onClose,
  filters,
  onChange,
  onReset,
  brands,
  models,
  bounds,
  totalFound,
}: FilterDrawerProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Container */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0E0E10] border-l border-zinc-800 flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
            <h3 className="text-base font-semibold text-white tracking-wide">
              {t.filters.mobileTitle}
            </h3>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Filters */}
          <div className="flex-1 overflow-y-auto p-4">
            <FilterSidebar
              filters={filters}
              onChange={onChange}
              onReset={onReset}
              brands={brands}
              models={models}
              bounds={bounds}
              totalFound={totalFound}
            />
          </div>

          {/* Footer with Apply button */}
          <div className="p-4 border-t border-zinc-800 bg-[#141416] flex items-center gap-3">
            <button
              onClick={onReset}
              className="px-4 py-3 rounded-xl border border-zinc-700 text-xs text-zinc-300 hover:text-white hover:bg-zinc-800"
            >
              {t.filters.reset}
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-xl bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-colors text-center"
            >
              {t.filters.mobileApply} ({totalFound})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
