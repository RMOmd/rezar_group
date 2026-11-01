"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { LeadModal } from "@/components/common/LeadModal";
import { useLanguage } from "@/context/LanguageContext";

export function AboutSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <section id="about" className="py-20 sm:py-28 bg-[#0B0B0C] overflow-hidden scroll-mt-20 sm:scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visual Box with Premium Automotive Shot */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85"
                alt="REZAR GROUP Showroom"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 text-white">
                <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 block">
                  {t.about.philosophyLabel}
                </span>
                <p className="text-xs sm:text-sm font-medium mt-0.5">
                  {t.about.philosophyText}
                </p>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 block mb-2">
                  {t.about.label}
                </span>
                <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight leading-tight">
                  {t.about.title1} <span className="font-semibold">{t.about.title2}</span>
                </h2>
              </div>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                {t.about.desc1}
              </p>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                {t.about.desc2}
              </p>

              <div className="space-y-3 pt-2">
                {t.about.bullets.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all active:scale-95 shadow-lg"
                >
                  <span>{t.about.learnMore}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sourceContext={t.about.label}
      />
    </>
  );
}
