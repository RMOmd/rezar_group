"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Camera, Fuel, Gauge, Calendar } from "lucide-react";
import { Vehicle } from "@/types/vehicle";
import {
  formatPrice,
  formatMileage,
  formatFuelType,
  formatStatus,
  timeAgo,
} from "@/utils/formatters";
import { useFavorites } from "@/hooks/useFavorites";
import { useLanguage } from "@/context/LanguageContext";

interface VehicleCardProps {
  vehicle: Vehicle;
  priority?: boolean;
}

export function VehicleCard({ vehicle, priority = false }: VehicleCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { locale, t } = useLanguage();
  const favorited = isFavorite(vehicle.id);
  const statusInfo = formatStatus(vehicle.status, locale);

  const rawImage =
    vehicle.images[0] ||
    "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80";
  const imageSrc = `${rawImage}${rawImage.includes("?") ? "&" : "?"}vid=${vehicle.id}`;

  return (
    <div className="group relative bg-[#1B1B1E] rounded-2xl overflow-hidden border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-300 hover:shadow-2xl flex flex-col h-full">
      {/* Clickable Card Link for the entire container */}
      <Link
        href={`/catalog/${vehicle.id}`}
        className="block relative aspect-[16/10] overflow-hidden bg-zinc-900"
      >
        <Image
          src={imageSrc}
          alt={`${vehicle.brand} ${vehicle.model}`}
          fill
          priority={priority}
          loading={priority ? "eager" : undefined}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80" />

        {/* Top Badges Bar */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5 z-10 pointer-events-none">
          {/* Status Badge */}
          <span
            className={`text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-md ${statusInfo.badgeClass}`}
          >
            {statusInfo.label}
          </span>

          {/* Photo Count */}
          <div className="flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-zinc-300 border border-white/10">
            <Camera className="w-3 h-3" />
            <span>{vehicle.images.length}</span>
          </div>
        </div>

        {/* Time Ago Tag (Bottom-left of image on hover) */}
        <div className="absolute bottom-2 left-2.5 z-10 text-[10px] font-mono text-zinc-400 backdrop-blur-sm px-1.5 py-0.5 rounded bg-black/40">
          {timeAgo(vehicle.createdAt, locale)}
        </div>
      </Link>

      {/* Favorite Button (Explicit click handler, isolated from link) */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleFavorite(vehicle.id, e);
        }}
        aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
        className={`absolute top-2.5 right-2.5 z-20 p-2 sm:p-2.5 rounded-full backdrop-blur-md border transition-all active:scale-90 cursor-pointer ${
          favorited
            ? "bg-rose-500/20 text-rose-400 border-rose-500/40"
            : "bg-black/50 text-white/80 border-white/10 hover:text-white hover:bg-black/80"
        }`}
      >
        <Heart
          className={`w-4 h-4 ${favorited ? "fill-rose-500 stroke-rose-500" : ""}`}
        />
      </button>

      {/* Vehicle Info */}
      <div className="p-3.5 sm:p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Brand & Model */}
          <Link href={`/catalog/${vehicle.id}`} className="block group-hover:text-zinc-200">
            <div className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-zinc-400 mb-0.5">
              {vehicle.brand}
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-white tracking-wide truncate">
              {vehicle.model}
              {vehicle.trim && (
                <span className="text-xs font-normal text-zinc-400 ml-1.5 hidden sm:inline">
                  {vehicle.trim}
                </span>
              )}
            </h3>
          </Link>

          {/* Key Specs Row */}
          <div className="grid grid-cols-3 gap-1.5 py-3 my-2 border-y border-zinc-800/80 text-[10px] sm:text-xs text-zinc-400">
            <div className="flex items-center gap-1 truncate" title={t.specs.year}>
              <Calendar className="w-3 h-3 text-zinc-300 shrink-0" />
              <span>{vehicle.year}</span>
            </div>
            <div className="flex items-center gap-1 truncate" title={t.specs.mileage}>
              <Gauge className="w-3 h-3 text-zinc-300 shrink-0" />
              <span>{formatMileage(vehicle.mileage, locale)}</span>
            </div>
            <div className="flex items-center gap-1 truncate" title={t.specs.fuel}>
              <Fuel className="w-3 h-3 text-zinc-300 shrink-0" />
              <span>{formatFuelType(vehicle.fuelType, locale)}</span>
            </div>
          </div>
        </div>

        {/* Price & Action */}
        <div className="flex items-baseline justify-between pt-1">
          <div>
            <span className="text-base sm:text-lg font-bold text-white tracking-tight">
              {formatPrice(vehicle.price)}
            </span>
          </div>

          <Link
            href={`/catalog/${vehicle.id}`}
            className="text-[11px] font-medium text-zinc-400 group-hover:text-white transition-colors flex items-center gap-1"
          >
            {t.catalog.detailsBtn}
          </Link>
        </div>
      </div>
    </div>
  );
}
