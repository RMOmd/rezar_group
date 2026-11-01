"use client";

import { Search, ClipboardCheck, Truck, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function HowWeWorkSection() {
  const { t } = useLanguage();
  const icons = [Search, ClipboardCheck, Truck, Sparkles];
  const stepNumbers = ["01", "02", "03", "04"];

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#141416] border-y border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 block mb-2">
            {t.howWeWork.label}
          </span>
          <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
            {t.howWeWork.title1} <span className="font-semibold">{t.howWeWork.title2}</span>
          </h2>
          <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
            {t.howWeWork.desc}
          </p>
        </div>

        {/* Steps Grid with Connecting line */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {t.howWeWork.steps.map((item, index) => {
            const Icon = icons[index] || Search;
            return (
              <div
                key={index}
                className="relative bg-[#1B1B1E] border border-zinc-800/80 rounded-2xl p-6 flex flex-col justify-between group hover:border-zinc-700 transition-all duration-300"
              >
                <div>
                  {/* Step number & icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl sm:text-3xl font-light font-mono text-zinc-300 group-hover:text-white transition-colors">
                      {stepNumbers[index]}
                    </span>
                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-base font-semibold text-white tracking-wide mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>{t.howWeWork.stage} {index + 1} / 4</span>
                  <span className="text-white">{t.howWeWork.concierge}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
