"use client";

import Image from "next/image";
import { Star, MessageSquareQuote, ShieldAlert } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import { useLanguage } from "@/context/LanguageContext";

export function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#141416] border-y border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 mb-2">
              <MessageSquareQuote className="w-3.5 h-3.5 text-zinc-300" />
              <span>{t.testimonials.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
              {t.testimonials.title1} <span className="font-semibold">{t.testimonials.title2}</span>
            </h2>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-400">
            <ShieldAlert className="w-3.5 h-3.5 text-zinc-400" />
            <span>{t.testimonials.demoBadge}</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.testimonials.items.map((item, index) => {
            const raw = TESTIMONIALS[index] || TESTIMONIALS[0];
            return (
              <div
                key={raw.id}
                className="bg-[#1B1B1E] border border-zinc-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 italic">
                    &ldquo;{item.comment}&rdquo;
                  </p>
                </div>

                {/* Author & Vehicle */}
                <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-zinc-800 border border-zinc-700 shrink-0">
                    <Image
                      src={raw.avatar}
                      alt={item.author}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-xs font-semibold text-white truncate">
                      {item.author}
                    </h4>
                    <p className="text-[10px] text-zinc-400 truncate">
                      {item.role}
                    </p>
                    <p className="text-[10px] text-zinc-300 truncate font-mono mt-0.5">
                      {item.vehicle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
