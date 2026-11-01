"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { COMPANY_CONFIG } from "@/data/companyConfig";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0B0B0C] border-t border-zinc-800/80 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-[0.25em] text-white uppercase">
                  REZAR
                </span>
                <span className="text-xs font-semibold tracking-[0.3em] text-zinc-400 uppercase border-l border-zinc-700 pl-2">
                  GROUP
                </span>
              </div>
              <span className="text-[10px] font-mono tracking-[0.35em] text-zinc-300 uppercase block mt-1">
                AUTOMOTIVE CONCIERGE
              </span>
            </Link>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>

            <div className="pt-2 flex items-center gap-4">
              <a
                href={COMPANY_CONFIG.telegram}
                target={COMPANY_CONFIG.telegram.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors"
                aria-label="Telegram"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_CONFIG.whatsapp}
                target={COMPANY_CONFIG.whatsapp.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors"
                aria-label="WhatsApp"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_CONFIG.instagram}
                target={COMPANY_CONFIG.instagram.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors"
                aria-label="Instagram"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="hover:text-white transition-colors">
                  {t.footer.inStockLink}
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog?status=in_transit"
                  className="hover:text-white transition-colors"
                >
                  {t.footer.inTransitLink}
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog?status=sold"
                  className="hover:text-white transition-colors"
                >
                  {t.footer.archiveLink}
                </Link>
              </li>
              <li>
                <Link href="/favorites" className="hover:text-white transition-colors">
                  {t.footer.favoritesLink}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Services & Advantages */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">
                  {t.footer.aboutLink}
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-white transition-colors">
                  {t.footer.stepsLink}
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-white transition-colors">
                  {t.footer.customOrderLink}
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">
                  {t.footer.customsLink}
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-white transition-colors">
                  {t.footer.reviewsLink}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contacts */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              {t.footer.contactsTitle}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                <span>{COMPANY_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-zinc-300 shrink-0" />
                {COMPANY_CONFIG.phoneRaw === "#" ? (
                  <span className="font-mono text-zinc-300">{COMPANY_CONFIG.phone}</span>
                ) : (
                  <a
                    href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                    className="hover:text-white font-mono transition-colors"
                  >
                    {COMPANY_CONFIG.phone}
                  </a>
                )}
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-zinc-300 shrink-0" />
                <a
                  href={`mailto:${COMPANY_CONFIG.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  {COMPANY_CONFIG.workHours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="mt-16 pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-300">
          <p>
            &copy; {new Date().getFullYear()} REZAR GROUP. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-zinc-400 cursor-pointer">
              {t.footer.privacy}
            </span>
            <span className="hover:text-zinc-400 cursor-pointer">
              {t.footer.terms}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
