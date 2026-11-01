"use client";

import { useState } from "react";
import {
  Calendar,
  Gauge,
  Fuel,
  Zap,
  Cog,
  Compass,
  FileCheck,
  Palette,
  ShieldCheck,
  MapPin,
  Copy,
  Check,
} from "lucide-react";
import { Vehicle } from "@/types/vehicle";
import {
  formatExactMileage,
  formatYear,
  formatFuelType,
  formatTransmission,
  formatDrive,
  formatBodyType,
} from "@/utils/formatters";
import { useLanguage } from "@/context/LanguageContext";

interface VehicleSpecsProps {
  vehicle: Vehicle;
}

export function VehicleSpecs({ vehicle }: VehicleSpecsProps) {
  const { t, locale } = useLanguage();
  const [isVinCopied, setIsVinCopied] = useState(false);

  const handleCopyVin = (vin: string) => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(vin);
      setIsVinCopied(true);
      setTimeout(() => setIsVinCopied(false), 2000);
    }
  };

  const hpUnit = locale === "en" ? "hp" : locale === "ru" ? "л.с." : "к.с.";

  const specItems = [
    {
      icon: Calendar,
      label: t.specs.year,
      value: vehicle.year ? formatYear(vehicle.year, locale) : null,
    },
    {
      icon: Gauge,
      label: t.specs.mileage,
      value: vehicle.mileage ? formatExactMileage(vehicle.mileage, locale) : null,
    },
    {
      icon: Zap,
      label: t.specs.enginePower,
      value: vehicle.engine
        ? `${vehicle.engine} (${vehicle.powerHp} ${hpUnit})`
        : null,
    },
    {
      icon: Fuel,
      label: t.specs.fuel,
      value: vehicle.fuelType ? formatFuelType(vehicle.fuelType, locale) : null,
    },
    {
      icon: Cog,
      label: t.specs.transmission,
      value: vehicle.transmission
        ? formatTransmission(vehicle.transmission, locale)
        : null,
    },
    {
      icon: Compass,
      label: t.specs.drive,
      value: vehicle.drive ? formatDrive(vehicle.drive, locale) : null,
    },
    {
      icon: Palette,
      label: t.specs.bodyColor,
      value: vehicle.colorExterior
        ? `${formatBodyType(vehicle.bodyType, locale)} / ${vehicle.colorExterior}`
        : null,
    },
    {
      icon: Palette,
      label: t.specs.interior,
      value: vehicle.colorInterior || null,
    },
    {
      icon: MapPin,
      label: t.specs.location,
      value: vehicle.location || null,
    },
    {
      icon: ShieldCheck,
      label: t.specs.vin,
      value: vehicle.vin || null,
      isVin: true,
    },
  ].filter((item) => item.value !== null && item.value !== undefined && item.value !== "");

  return (
    <div className="space-y-6">
      {/* Specs Grid */}
      <div className="bg-[#141416] border border-zinc-800 rounded-2xl p-5 sm:p-6">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-5 flex items-center gap-2">
          <FileCheck className="w-4 h-4 text-zinc-400" />
          {t.vehicleDetail.specsTitle}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
          {specItems.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <div
                key={i}
                className="flex items-start justify-between py-2 border-b border-zinc-800/80 gap-3 text-sm"
              >
                <div className="flex items-center gap-2.5 text-zinc-400 text-xs sm:text-sm">
                  <Icon className="w-4 h-4 text-zinc-300 shrink-0" />
                  <span>{spec.label}</span>
                </div>
                <div className="text-right font-medium text-white text-xs sm:text-sm">
                  {spec.isVin ? (
                    <button
                      type="button"
                      onClick={() => handleCopyVin(String(spec.value))}
                      className="inline-flex items-center gap-1.5 font-mono tracking-wider text-zinc-200 hover:text-white transition-colors group/vin"
                      title={locale === "en" ? "Copy VIN" : locale === "ru" ? "Скопировать VIN" : "Скопіювати VIN"}
                    >
                      <span>{spec.value}</span>
                      {isVinCopied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover/vin:text-zinc-200 transition-colors" />
                      )}
                    </button>
                  ) : (
                    spec.value
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Description (Hidden if empty) */}
      {vehicle.description && vehicle.description.trim() !== "" && (
        <div className="bg-[#141416] border border-zinc-800 rounded-2xl p-5 sm:p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-3">
            {t.vehicleDetail.descTitle}
          </h3>
          <p className="text-zinc-300 text-sm leading-relaxed whitespace-pre-line">
            {vehicle.description}
          </p>
        </div>
      )}
    </div>
  );
}
