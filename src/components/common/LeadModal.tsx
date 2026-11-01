"use client";

import { useState } from "react";
import { X, CheckCircle2, Phone, Send, MessageCircle } from "lucide-react";
import { COMPANY_CONFIG } from "@/data/companyConfig";
import { useLanguage } from "@/context/LanguageContext";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicleTitle?: string;
  sourceContext?: string;
}

export function LeadModal({
  isOpen,
  onClose,
  vehicleTitle,
  sourceContext,
}: LeadModalProps) {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate instant client response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName("");
    setPhone("");
    setComment("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity">
      <div
        className="relative w-full max-w-lg bg-[#141416] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 text-zinc-400 hover:text-white p-2 rounded-full hover:bg-zinc-800/60 transition-colors"
          aria-label={t.leadModal.close}
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-5">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-light tracking-wide text-white mb-2">
              {t.leadModal.successTitle}
            </h3>
            <p className="text-zinc-400 text-sm max-w-sm mx-auto mb-6">
              {t.leadModal.successDesc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={COMPANY_CONFIG.telegram}
                target={COMPANY_CONFIG.telegram.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-sm transition-colors border border-zinc-700"
              >
                <MessageCircle className="w-4 h-4 text-sky-400" />
                {t.leadModal.writeTelegram}
              </a>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors"
              >
                {t.leadModal.close}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                {sourceContext || t.leadModal.titleGeneral}
              </span>
              <h3 className="text-2xl font-light tracking-wide text-white mt-1">
                {vehicleTitle ? t.leadModal.titleVehicle : t.leadModal.titleGeneral}
              </h3>
              {vehicleTitle && (
                <p className="text-xs text-zinc-300 mt-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 inline-block">
                  {t.leadModal.vehiclePrefix} <span className="text-white font-medium">{vehicleTitle}</span>
                </p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5">
                  {t.leadModal.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.leadModal.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#1B1B1E] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5">
                  {t.leadModal.phoneLabel}
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+380 (__) ___-__-__"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#1B1B1E] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5">
                  {t.leadModal.commentLabel}
                </label>
                <textarea
                  rows={3}
                  placeholder={t.leadModal.commentPlaceholder}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full bg-[#1B1B1E] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-all active:scale-[0.99] disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-zinc-800 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {t.leadModal.submit}
                    </>
                  )}
                </button>
              </div>

              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
                <span>{t.leadModal.directCall}</span>
                {COMPANY_CONFIG.phoneRaw === "#" ? (
                  <span className="text-white flex items-center gap-1 font-mono font-medium">
                    <Phone className="w-3.5 h-3.5 text-zinc-400" />
                    {COMPANY_CONFIG.phone}
                  </span>
                ) : (
                  <a
                    href={`tel:${COMPANY_CONFIG.phoneRaw}`}
                    className="text-white hover:underline flex items-center gap-1 font-mono font-medium"
                  >
                    <Phone className="w-3.5 h-3.5 text-zinc-400" />
                    {COMPANY_CONFIG.phone}
                  </a>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
