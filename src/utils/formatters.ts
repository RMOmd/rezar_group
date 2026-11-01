import { Locale } from "@/types/i18n";
import { TRANSLATIONS } from "@/i18n/translations";

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price).replace("$", "$ ");
}

export function formatMileage(km: number, locale: Locale = "uk"): string {
  const thousandUnits: Record<Locale, string> = {
    uk: "тис. км",
    ru: "тыс. км",
    en: "k km",
  };
  const formatted = new Intl.NumberFormat(locale === "en" ? "en-US" : "uk-UA").format(
    Math.round(km / 1000)
  );
  return `${formatted} ${thousandUnits[locale] || thousandUnits.uk}`;
}

export function formatExactMileage(km: number, locale: Locale = "uk"): string {
  const unit: Record<Locale, string> = {
    uk: "км",
    ru: "км",
    en: "km",
  };
  const formatted = new Intl.NumberFormat(locale === "en" ? "en-US" : "uk-UA").format(km);
  return `${formatted} ${unit[locale] || unit.uk}`;
}

export function formatYear(year: number, locale: Locale = "uk"): string {
  if (locale === "en") return `${year}`;
  if (locale === "ru") return `${year} г.`;
  return `${year} р.`;
}

export function formatFuelType(fuel: string, locale: Locale = "uk"): string {
  const dict = TRANSLATIONS[locale]?.fuels || TRANSLATIONS.uk.fuels;
  return dict[fuel as keyof typeof dict] || fuel;
}

export function formatDrive(drive: string, locale: Locale = "uk"): string {
  const dict = TRANSLATIONS[locale]?.drives || TRANSLATIONS.uk.drives;
  return dict[drive as keyof typeof dict] || drive;
}

export function formatTransmission(trans: string, locale: Locale = "uk"): string {
  const dict = TRANSLATIONS[locale]?.transmissions || TRANSLATIONS.uk.transmissions;
  return dict[trans as keyof typeof dict] || trans;
}

export function formatBodyType(body: string, locale: Locale = "uk"): string {
  const dict = TRANSLATIONS[locale]?.bodyTypes || TRANSLATIONS.uk.bodyTypes;
  return dict[body as keyof typeof dict] || body;
}

export function formatStatus(
  status: "in_stock" | "in_transit" | "sold",
  locale: Locale = "uk"
): {
  label: string;
  badgeClass: string;
} {
  const dict = TRANSLATIONS[locale]?.statusBadges || TRANSLATIONS.uk.statusBadges;

  switch (status) {
    case "in_stock":
      return {
        label: dict.in_stock,
        badgeClass: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
      };
    case "in_transit":
      return {
        label: dict.in_transit,
        badgeClass: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
      };
    case "sold":
      return {
        label: dict.sold,
        badgeClass: "bg-zinc-700/30 text-zinc-400 border border-zinc-700/40",
      };
  }
}

export function timeAgo(dateString: string, locale: Locale = "uk"): string {
  const now = new Date();
  const past = new Date(dateString);
  const diffInDays = Math.floor((now.getTime() - past.getTime()) / (1000 * 3600 * 24));

  if (locale === "en") {
    if (diffInDays <= 0) return "Today";
    if (diffInDays === 1) return "Yesterday";
    if (diffInDays < 7) return `${diffInDays}d ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)}w ago`;
    return `${Math.floor(diffInDays / 30)}mo ago`;
  }

  if (locale === "ru") {
    if (diffInDays <= 0) return "Сегодня";
    if (diffInDays === 1) return "Вчера";
    if (diffInDays < 7) return `${diffInDays} дн. назад`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} нед. назад`;
    return `${Math.floor(diffInDays / 30)} мес. назад`;
  }

  // default: uk
  if (diffInDays <= 0) return "Сьогодні";
  if (diffInDays === 1) return "Вчора";
  if (diffInDays < 7) return `${diffInDays} дн. тому`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} тижн. тому`;
  return `${Math.floor(diffInDays / 30)} міс. тому`;
}
