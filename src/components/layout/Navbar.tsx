"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, X, PhoneCall, ChevronRight } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";
import { LeadModal } from "@/components/common/LeadModal";
import { COMPANY_CONFIG } from "@/data/companyConfig";

import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";

export function Navbar() {
  const pathname = usePathname();
  const { favoritesCount } = useFavorites();
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.catalog, href: "/catalog" },
    { label: t.nav.about, href: "/#about" },
    { label: t.nav.process, href: "/#process" },
    { label: t.nav.reviews, href: "/#reviews" },
    { label: t.nav.contacts, href: "/#contacts" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0B0B0C]/90 backdrop-blur-xl border-b border-zinc-800/80 py-3.5 shadow-2xl"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex flex-col items-start select-none">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-[0.25em] text-white group-hover:text-zinc-200 transition-colors uppercase">
                  REZAR
                </span>
                <span className="text-xs font-semibold tracking-[0.3em] text-zinc-400 group-hover:text-white transition-colors border-l border-zinc-700 pl-2 uppercase">
                  GROUP
                </span>
              </div>
              <span className="text-[9px] font-mono tracking-[0.35em] text-zinc-300 uppercase transition-colors">
                AUTOMOTIVE CONCIERGE
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm tracking-wide transition-colors relative py-1 ${
                      isActive
                        ? "text-white font-medium"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Actions: Language Switcher, Favorites & CTA */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* Favorites Link */}
              <Link
                href="/favorites"
                className="relative p-2.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800/80 text-zinc-300 hover:text-white transition-all"
                title={t.nav.favorites}
                aria-label={t.nav.favorites}
              >
                <Heart className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                {favoritesCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white text-black text-[10px] font-bold flex items-center justify-center shadow-lg animate-in zoom-in-50">
                    {favoritesCount}
                  </span>
                )}
              </Link>

              {/* Contact Button */}
              <button
                onClick={() => setIsLeadModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold tracking-wider uppercase hover:bg-zinc-200 transition-all active:scale-95 shadow-md"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                {t.nav.contactUs}
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-[#0E0E10] border-l border-zinc-800 p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold tracking-[0.2em] text-white">
                    REZAR
                  </span>
                  <span className="text-xs text-zinc-300 tracking-widest">
                    GROUP
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links */}
              <div className="py-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-3 rounded-xl text-base text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-zinc-400" />
                  </Link>
                ))}

                <Link
                  href="/favorites"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-3 rounded-xl text-base text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <Heart className="w-4 h-4 text-zinc-400" />
                    {t.nav.favorites}
                  </span>
                  {favoritesCount > 0 && (
                    <span className="px-2 py-0.5 rounded-full bg-white text-black text-xs font-bold">
                      {favoritesCount}
                    </span>
                  )}
                </Link>

                <div className="pt-4 px-3">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-2">
                    Мова / Language
                  </span>
                  <LanguageSwitcher />
                </div>
              </div>
            </div>

            {/* Bottom contact info */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsLeadModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                {t.nav.contactUs}
              </button>

              <div className="text-center text-xs text-zinc-300 space-y-1">
                {COMPANY_CONFIG.phoneRaw === "#" ? (
                  <span className="block font-mono text-zinc-300">
                    {COMPANY_CONFIG.phone}
                  </span>
                ) : (
                  <a
                    href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                    className="block font-mono text-zinc-300 hover:text-white"
                  >
                    {COMPANY_CONFIG.phone}
                  </a>
                )}
                <p>{COMPANY_CONFIG.address}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Lead Modal */}
      <LeadModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        sourceContext="Зворотний зв'язок"
      />
    </>
  );
}
