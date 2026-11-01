"use client";

import { useState } from "react";
import { ShieldCheck, Lock, Mail, ArrowRight, AlertCircle } from "lucide-react";
import { useAdminAuth } from "@/context/AdminAuthContext";

export default function AdminLoginPage() {
  const { login } = useAdminAuth();
  const [email, setEmail] = useState("admin@rezargroup.com");
  const [password, setPassword] = useState("rezar2026!");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const res = await login(email, password);
      if (!res.success) {
        setError(res.error || "Помилка авторизації");
      }
    } catch {
      setError("Помилка підключення до сервера безпеки");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-[#121215] border border-zinc-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Decorative Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-zinc-700 via-white to-zinc-700" />

        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white mx-auto mb-4 shadow-inner">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-wide uppercase">
            REZAR <span className="font-light text-zinc-400">ADMIN</span>
          </h1>
          <p className="text-xs text-zinc-400 mt-1 font-mono">
            Авторизація в системі управління каталогом
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1.5">
              Електронна пошта
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#18181C] border border-zinc-800 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-white transition-colors"
                placeholder="admin@rezargroup.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1.5">
              Пароль
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#18181C] border border-zinc-800 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-white transition-colors font-mono"
                placeholder="••••••••••••"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all active:scale-98 disabled:opacity-50 cursor-pointer shadow-xl"
            >
              <span>{isSubmitting ? "Вхід..." : "Увійти в панель"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Demo credentials tip */}
        <div className="mt-8 pt-6 border-t border-zinc-800/80 text-center text-[11px] text-zinc-300 font-mono space-y-1">
          <p className="text-zinc-400">Демо-доступ для тестування:</p>
          <p>Super Admin: <span className="text-white">admin@rezargroup.com</span> / <span className="text-white">rezar2026!</span></p>
        </div>
      </div>
    </div>
  );
}
