"use client";

import { useLanguage } from "@/context/LanguageContext";
import { LOCALES } from "@/types/i18n";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={`inline-flex items-center p-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-[11px] font-mono tracking-wider ${className}`}
    >
      {LOCALES.map((item) => {
        const isActive = locale === item.code;
        return (
          <button
            key={item.code}
            onClick={() => setLocale(item.code)}
            className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
              isActive
                ? "bg-white text-black font-bold shadow-md"
                : "text-zinc-400 hover:text-white"
            }`}
            aria-label={`Switch to ${item.label}`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
