"use client";

import { ShieldCheck, FileText, UserCheck, Key } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function AdvantagesSection() {
  const { t } = useLanguage();

  const icons = [ShieldCheck, FileText, UserCheck, Key];
  const numbers = ["01", "02", "03", "04"];

  return (
    <section className="py-16 sm:py-24 bg-[#141416] border-y border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 block mb-2">
              {t.advantages.label}
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
              {t.advantages.title1} <span className="font-semibold">{t.advantages.title2}</span>
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            {t.advantages.desc}
          </p>
        </div>

        {/* 4 Cards Horizontal Composition */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.advantages.items.map((adv, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            return (
              <div
                key={idx}
                className="group relative bg-[#1B1B1E] border border-zinc-800/80 rounded-2xl p-6 transition-all duration-300 hover:border-zinc-700 hover:bg-[#202024] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-zinc-300" />
                    </div>
                    <span className="text-xs font-mono text-zinc-400 font-bold">
                      {numbers[idx]}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-white tracking-wide mb-2.5">
                    {adv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {adv.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>{t.advantages.standard}</span>
                  <span className="text-emerald-400">&bull; {t.advantages.guaranteed}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
