"use client";

import { useState } from "react";
import { PhoneCall, MessageCircle, ArrowRight } from "lucide-react";
import { LeadModal } from "@/components/common/LeadModal";
import { COMPANY_CONFIG } from "@/data/companyConfig";
import { useLanguage } from "@/context/LanguageContext";

export function CtaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <section id="contacts" className="py-20 sm:py-28 bg-[#0B0B0C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#1B1B1E] via-[#141416] to-[#0E0E10] border border-zinc-800 p-8 sm:p-14 lg:p-20 overflow-hidden shadow-2xl">
            {/* Subtle glow effect */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 block mb-3">
                {t.cta.badge}
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight mb-4">
                {t.cta.title1} <br />
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                  {t.cta.title2}
                </span>
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8 sm:mb-10 max-w-xl">
                {t.cta.desc}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all active:scale-95 shadow-xl"
                >
                  <span>{t.cta.contactManager}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={COMPANY_CONFIG.telegram}
                  target={COMPANY_CONFIG.telegram.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-zinc-900 border border-zinc-700/80 text-white font-medium text-xs uppercase tracking-widest hover:bg-zinc-800 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-sky-400" />
                  <span>{t.cta.writeTelegram}</span>
                </a>
              </div>

              {/* Direct coordinates */}
              <div className="mt-12 pt-8 border-t border-zinc-800/80 flex flex-wrap items-center gap-6 sm:gap-10 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-zinc-400" />
                  {COMPANY_CONFIG.phoneRaw === "#" ? (
                    <span className="font-mono text-zinc-300">
                      {COMPANY_CONFIG.phone}
                    </span>
                  ) : (
                    <a
                      href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                      className="font-mono text-zinc-300 hover:text-white"
                    >
                      {COMPANY_CONFIG.phone}
                    </a>
                  )}
                </div>
                <div>{COMPANY_CONFIG.address}</div>
                <div>{COMPANY_CONFIG.workHours}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sourceContext={t.cta.badge}
      />
    </>
  );
}
