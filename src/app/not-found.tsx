"use client";

import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-[#0B0B0C] text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="inline-flex p-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 mb-2">
          <Compass className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-400 block">
          {t.notFoundPage.badge}
        </span>

        <h1 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
          {t.notFoundPage.title1} <span className="font-semibold">{t.notFoundPage.title2}</span>
        </h1>

        <p className="text-sm text-zinc-400 leading-relaxed">
          {t.notFoundPage.desc}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/catalog"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors"
          >
            {t.notFoundPage.toCatalog}
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {t.notFoundPage.toHome}
          </Link>
        </div>
      </div>
    </div>
  );
}
