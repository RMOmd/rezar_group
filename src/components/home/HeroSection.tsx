"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall, ShieldCheck, Award } from "lucide-react";
import { LeadModal } from "@/components/common/LeadModal";

import { useLanguage } from "@/context/LanguageContext";

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=2400&q=90"
            alt="REZAR GROUP Premium Automotive"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.4] contrast-[1.1] scale-105 transition-transform duration-1000"
          />

          {/* Luxury dark gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/60 to-black/70" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B0B0C]/40 to-[#0B0B0C]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col justify-center items-center sm:items-start min-h-[70vh]">
          {/* Top Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
            <Award className="w-3.5 h-3.5 text-zinc-300" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-zinc-300 uppercase">
              {t.hero.badge}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.1] max-w-4xl mb-6">
            {t.hero.titleLine1} <br className="hidden sm:inline" />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              {t.hero.titleLine2}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mb-10">
            {t.hero.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/catalog"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all active:scale-95 shadow-2xl"
            >
              <span>{t.hero.viewCatalog}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 text-white font-medium text-xs uppercase tracking-widest backdrop-blur-md transition-all active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-zinc-400" />
              <span>{t.hero.contactUs}</span>
            </button>
          </div>

          {/* Subtle Trust Bar */}
          <div className="mt-14 sm:mt-20 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-12 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t.hero.trustHistory}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t.hero.trustStock}</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <span className="font-mono text-zinc-400">EU &rarr; UA</span>
              <span>{t.hero.trustDirect}</span>
            </div>
          </div>
        </div>
      </section>

      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sourceContext={t.hero.badge}
      />
    </>
  );
}
