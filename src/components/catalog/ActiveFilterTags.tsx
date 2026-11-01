"use client";

import { X } from "lucide-react";
import { VehicleFilterParams } from "@/types/vehicle";
import { formatPrice, formatFuelType, formatBodyType, formatTransmission } from "@/utils/formatters";
import { useLanguage } from "@/context/LanguageContext";

interface ActiveFilterTagsProps {
  filters: VehicleFilterParams;
  onRemove: (key: keyof VehicleFilterParams) => void;
  onReset: () => void;
}

export function ActiveFilterTags({
  filters,
  onRemove,
  onReset,
}: ActiveFilterTagsProps) {
  const { t, locale } = useLanguage();
  const activeTags: { key: keyof VehicleFilterParams; label: string }[] = [];

  if (filters.brand) {
    activeTags.push({ key: "brand", label: `${t.filters.brandLabel}: ${filters.brand}` });
  }
  if (filters.model) {
    activeTags.push({ key: "model", label: `${t.filters.modelLabel}: ${filters.model}` });
  }
  if (filters.yearFrom || filters.yearTo) {
    activeTags.push({
      key: "yearFrom",
      label: `${t.filters.yearLabel}: ${filters.yearFrom || t.filters.from} — ${filters.yearTo || t.filters.to}`,
    });
  }
  if (filters.priceFrom || filters.priceTo) {
    activeTags.push({
      key: "priceFrom",
      label: `${t.filters.priceLabel}: ${filters.priceFrom ? formatPrice(filters.priceFrom) : t.filters.from} — ${
        filters.priceTo ? formatPrice(filters.priceTo) : t.filters.to
      }`,
    });
  }
  if (filters.mileageTo) {
    activeTags.push({
      key: "mileageTo",
      label: `${t.filters.mileageLabel} ${t.filters.upTo}: ${Math.round(filters.mileageTo / 1000)}k km`,
    });
  }
  if (filters.status && filters.status !== "all_active") {
    const statusMap = t.filters.statuses;
    activeTags.push({
      key: "status",
      label: `${t.filters.statusLabel}: ${statusMap[filters.status as keyof typeof statusMap] || filters.status}`,
    });
  }
  if (filters.isNewArrival) {
    activeTags.push({
      key: "isNewArrival",
      label: t.filters.newArrivals,
    });
  }
  if (filters.fuelType) {
    activeTags.push({
      key: "fuelType",
      label: formatFuelType(filters.fuelType, locale),
    });
  }
  if (filters.bodyType) {
    activeTags.push({
      key: "bodyType",
      label: formatBodyType(filters.bodyType, locale),
    });
  }
  if (filters.transmission) {
    activeTags.push({
      key: "transmission",
      label: formatTransmission(filters.transmission, locale),
    });
  }
  if (filters.searchQuery) {
    activeTags.push({
      key: "searchQuery",
      label: `"${filters.searchQuery}"`,
    });
  }

  if (activeTags.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 pt-2 pb-4">
      <span className="text-xs text-zinc-400 mr-1">{t.catalog.activeFilters}</span>
      {activeTags.map((tag) => (
        <span
          key={tag.key}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-zinc-800 border border-zinc-700 text-zinc-200"
        >
          {tag.label}
          <button
            onClick={() => onRemove(tag.key)}
            className="text-zinc-400 hover:text-white p-0.5"
            aria-label={`Remove filter ${tag.label}`}
          >
            <X className="w-3 h-3" />
          </button>
        </span>
      ))}

      <button
        onClick={onReset}
        className="text-xs text-zinc-400 hover:text-white underline underline-offset-4 ml-2"
      >
        {t.catalog.resetAll}
      </button>
    </div>
  );
}
