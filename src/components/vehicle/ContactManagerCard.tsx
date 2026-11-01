"use client";

import { useState } from "react";
import {
  Phone,
  MessageSquare,
  Share2,
  Heart,
  ShieldCheck,
  Truck,
  Check,
} from "lucide-react";
import { Vehicle } from "@/types/vehicle";
import { formatPrice, formatStatus } from "@/utils/formatters";
import { COMPANY_CONFIG } from "@/data/companyConfig";
import { useFavorites } from "@/hooks/useFavorites";
import { LeadModal } from "@/components/common/LeadModal";
import { useLanguage } from "@/context/LanguageContext";

interface ContactManagerCardProps {
  vehicle: Vehicle;
}

export function ContactManagerCard({ vehicle }: ContactManagerCardProps) {
  const { t, locale } = useLanguage();
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(vehicle.id);
  const statusInfo = formatStatus(vehicle.status, locale);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <>
      <div className="bg-[#141416] border border-zinc-800 rounded-2xl p-6 space-y-6 lg:sticky lg:top-24">
        {/* Status & Action icons */}
        <div className="flex items-center justify-between">
          <span
            className={`text-xs font-medium px-3 py-1 rounded-full ${statusInfo.badgeClass}`}
          >
            {statusInfo.label}
          </span>

          <div className="flex items-center gap-2">
            {/* Share button */}
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              title={isCopied ? t.vehicleDetail.copiedTooltip : t.vehicleDetail.shareTooltip}
              aria-label="Share"
            >
              {isCopied ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Share2 className="w-4 h-4" />
              )}
            </button>

            {/* Favorite button */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleFavorite(vehicle.id, e);
              }}
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                favorited
                  ? "bg-rose-500/20 text-rose-400 border-rose-500/40"
                  : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white"
              }`}
              title={t.nav.favorites}
              aria-label={t.nav.favorites}
            >
              <Heart
                className={`w-4 h-4 ${favorited ? "fill-rose-500 stroke-rose-500" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Title & Price */}
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
            {vehicle.brand}
          </span>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wide mt-0.5">
            {vehicle.model}
          </h1>
          {vehicle.trim && (
            <p className="text-sm text-zinc-400 mt-0.5">{vehicle.trim}</p>
          )}

          <div className="mt-4 pt-4 border-t border-zinc-800/80 flex items-baseline justify-between">
            <span className="text-xs text-zinc-400">{t.vehicleDetail.costLabel}</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {formatPrice(vehicle.price)}
            </span>
          </div>
        </div>

        {/* Contact actions */}
        <div className="space-y-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-all active:scale-[0.98] shadow-lg"
          >
            <MessageSquare className="w-4 h-4" />
            {t.vehicleDetail.writeManager}
          </button>

          {COMPANY_CONFIG.phoneRaw === "#" ? (
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-zinc-900 border border-zinc-700/80 text-white font-medium text-xs tracking-wider uppercase hover:bg-zinc-800 transition-all"
            >
              <Phone className="w-4 h-4 text-zinc-400" />
              {t.vehicleDetail.callManager} {COMPANY_CONFIG.phone}
            </button>
          ) : (
            <a
              href={`tel:${COMPANY_CONFIG.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-zinc-900 border border-zinc-700/80 text-white font-medium text-xs tracking-wider uppercase hover:bg-zinc-800 transition-all"
            >
              <Phone className="w-4 h-4 text-zinc-400" />
              {t.vehicleDetail.callManager} {COMPANY_CONFIG.phone}
            </a>
          )}
        </div>

        {/* Messengers quick contact */}
        <div className="pt-2 border-t border-zinc-800/80">
          <span className="text-[11px] uppercase tracking-wider text-zinc-400 block mb-2 text-center">
            {t.vehicleDetail.quickMessengers}
          </span>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <a
              href={COMPANY_CONFIG.telegram}
              target={COMPANY_CONFIG.telegram.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
            >
              Telegram
            </a>
            <a
              href={COMPANY_CONFIG.whatsapp}
              target={COMPANY_CONFIG.whatsapp.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Guarantees micro-badges */}
        <div className="pt-3 border-t border-zinc-800 space-y-2.5 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{t.vehicleDetail.guarantee1}</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-zinc-400 shrink-0" />
            <span>{t.vehicleDetail.guarantee2}</span>
          </div>
        </div>
      </div>

      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        vehicleTitle={`${vehicle.brand} ${vehicle.model} (${vehicle.year})`}
        sourceContext={t.leadModal.titleVehicle}
      />
    </>
  );
}
