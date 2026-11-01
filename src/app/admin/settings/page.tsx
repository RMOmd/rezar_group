"use client";

import { useState } from "react";
import {
  Save,
  Globe,
  RefreshCw,
  Server,
  Sliders,
  CheckCircle2,
  Lock,
  Phone,
  Send,
  Database,
  Shield,
} from "lucide-react";

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState<"general" | "sync" | "integrations" | "limits">("general");
  const [savedAlert, setSavedAlert] = useState(false);

  // Settings State
  const [settings, setSettings] = useState({
    // General
    siteName: "REZAR GROUP — Авто в наявності",
    supportPhone: "+380 (67) 000-00-00",
    telegramSupport: "@rezar_support",
    defaultCurrency: "USD",
    eurToUsdRate: "1.08",

    // Sync
    syncIntervalMinutes: 15,
    autoPublishNewCars: false,
    autoArchiveMissingCars: true,
    feedBatchSize: 50,
    priceTolerancePct: 5,

    // Integrations
    r2BucketName: "rezar-car-media",
    r2Endpoint: "https://<account-id>.r2.cloudflarestorage.com",
    r2AccessKey: "29f04128...c491",
    telegramBotToken: "7128912344:AAHq_...DEMO_TOKEN",
    telegramAlertChatId: "-1002938128391",
    providerApiEndpoint: "https://api.supplier-feed.internal/v2/vehicles",

    // Limits
    maxPhotosPerCar: 40,
    maxPhotoSizeMb: 15,
    requestTimeoutSec: 30,
    maxCatalogItemsPerPage: 24,
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedAlert(true);
    setTimeout(() => setSavedAlert(false), 3500);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Системні налаштування
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Конфігурація сайту, параметри автосинхронізації та ключі інтеграцій
          </p>
        </div>

        <button
          onClick={handleSave}
          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all shadow-lg shadow-white/5 active:scale-95"
        >
          <Save className="w-4 h-4" />
          <span>Зберегти зміни</span>
        </button>
      </div>

      {savedAlert && (
        <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-xs font-medium animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>Налаштування успішно збережено та застосовано до системи. Запис внесено в журнал аудиту.</span>
        </div>
      )}

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-zinc-800 pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab("general")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
            activeTab === "general"
              ? "bg-zinc-800 text-white font-semibold"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          <Globe className="w-3.5 h-3.5" />
          <span>Основні</span>
        </button>

        <button
          onClick={() => setActiveTab("sync")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
            activeTab === "sync"
              ? "bg-zinc-800 text-white font-semibold"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Синхронізація</span>
        </button>

        <button
          onClick={() => setActiveTab("integrations")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
            activeTab === "integrations"
              ? "bg-zinc-800 text-white font-semibold"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          <Server className="w-3.5 h-3.5" />
          <span>Інтеграції та API</span>
        </button>

        <button
          onClick={() => setActiveTab("limits")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
            activeTab === "limits"
              ? "bg-zinc-800 text-white font-semibold"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>Ліміти та безпека</span>
        </button>
      </div>

      {/* Content Form */}
      <form onSubmit={handleSave} className="space-y-6">
        {/* Tab 1: General */}
        {activeTab === "general" && (
          <div className="bg-[#141418] border border-zinc-800/80 rounded-2xl p-6 space-y-6">
            <h2 className="text-sm font-semibold text-white uppercase tracking-wider">
              Параметри сайту
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Назва платформи
                </label>
                <input
                  type="text"
                  value={settings.siteName}
                  onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                  className="w-full bg-[#1A1A1E] border border-zinc-800 text-white text-xs rounded-xl px-3.5 py-2.5 focus:border-zinc-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Телефон гарячої лінії
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                  <input
                    type="text"
                    value={settings.supportPhone}
                    onChange={(e) => setSettings({ ...settings, supportPhone: e.target.value })}
                    className="w-full bg-[#1A1A1E] border border-zinc-800 text-white text-xs rounded-xl pl-9 pr-3.5 py-2.5 focus:border-zinc-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Telegram консультант / бот
                </label>
                <div className="relative">
                  <Send className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                  <input
                    type="text"
                    value={settings.telegramSupport}
                    onChange={(e) => setSettings({ ...settings, telegramSupport: e.target.value })}
                    className="w-full bg-[#1A1A1E] border border-zinc-800 text-white text-xs rounded-xl pl-9 pr-3.5 py-2.5 focus:border-zinc-500 outline-none font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Основна валюта відображення
                </label>
                <select
                  value={settings.defaultCurrency}
                  onChange={(e) => setSettings({ ...settings, defaultCurrency: e.target.value })}
                  className="w-full bg-[#1A1A1E] border border-zinc-800 text-white text-xs rounded-xl px-3.5 py-2.5 focus:border-zinc-500 outline-none"
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="UAH">UAH (₴)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Sync */}
        {activeTab === "sync" && (
          <div className="bg-[#141418] border border-zinc-800/80 rounded-2xl p-6 space-y-6">
            <h2 className="text-sm font-semibold text-white uppercase tracking-wider">
              Параметри оновлення каталогу постачальника
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Інтервал автооновлення (хвилини)
                </label>
                <input
                  type="number"
                  value={settings.syncIntervalMinutes}
                  onChange={(e) => setSettings({ ...settings, syncIntervalMinutes: Number(e.target.value) })}
                  className="w-full bg-[#1A1A1E] border border-zinc-800 text-white text-xs rounded-xl px-3.5 py-2.5 focus:border-zinc-500 outline-none"
                />
                <span className="text-[10px] text-zinc-500 mt-1 block">
                  За замовчуванням кожні 15 хв через Celery / Cron таску.
                </span>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Розмір порції завантаження (Batch Size)
                </label>
                <input
                  type="number"
                  value={settings.feedBatchSize}
                  onChange={(e) => setSettings({ ...settings, feedBatchSize: Number(e.target.value) })}
                  className="w-full bg-[#1A1A1E] border border-zinc-800 text-white text-xs rounded-xl px-3.5 py-2.5 focus:border-zinc-500 outline-none"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800 space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.autoPublishNewCars}
                  onChange={(e) => setSettings({ ...settings, autoPublishNewCars: e.target.checked })}
                  className="w-4 h-4 rounded bg-[#1A1A1E] border-zinc-700 text-white focus:ring-0"
                />
                <div>
                  <div className="text-xs font-semibold text-white">
                    Автоматично публікувати нові імпортовані авто
                  </div>
                  <div className="text-[11px] text-zinc-500">
                    Якщо вимкнено — всі нові авто отримують статус &quot;needs_review&quot; і потребують перевірки контент-менеджером.
                  </div>
                </div>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.autoArchiveMissingCars}
                  onChange={(e) => setSettings({ ...settings, autoArchiveMissingCars: e.target.checked })}
                  className="w-4 h-4 rounded bg-[#1A1A1E] border-zinc-700 text-white focus:ring-0"
                />
                <div>
                  <div className="text-xs font-semibold text-white">
                    Автоматично приховувати авто, яких немає у фіді
                  </div>
                  <div className="text-[11px] text-zinc-500">
                    Якщо авто вибуло зі складу постачальника, статус автоматично перемикається в &quot;hidden&quot;.
                  </div>
                </div>
              </label>
            </div>
          </div>
        )}

        {/* Tab 3: Integrations */}
        {activeTab === "integrations" && (
          <div className="bg-[#141418] border border-zinc-800/80 rounded-2xl p-6 space-y-6">
            <h2 className="text-sm font-semibold text-white uppercase tracking-wider">
              Ключі та зовнішні сервіси
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Supplier Feed Endpoint (API Постачальника)
                </label>
                <div className="relative">
                  <Database className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                  <input
                    type="text"
                    value={settings.providerApiEndpoint}
                    onChange={(e) => setSettings({ ...settings, providerApiEndpoint: e.target.value })}
                    className="w-full bg-[#1A1A1E] border border-zinc-800 text-white text-xs rounded-xl pl-9 pr-3.5 py-2.5 focus:border-zinc-500 outline-none font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Cloudflare R2 Bucket
                  </label>
                  <input
                    type="text"
                    value={settings.r2BucketName}
                    onChange={(e) => setSettings({ ...settings, r2BucketName: e.target.value })}
                    className="w-full bg-[#1A1A1E] border border-zinc-800 text-white text-xs rounded-xl px-3.5 py-2.5 focus:border-zinc-500 outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Cloudflare R2 Access Key
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                    <input
                      type="password"
                      value={settings.r2AccessKey}
                      onChange={(e) => setSettings({ ...settings, r2AccessKey: e.target.value })}
                      className="w-full bg-[#1A1A1E] border border-zinc-800 text-white text-xs rounded-xl pl-9 pr-3.5 py-2.5 focus:border-zinc-500 outline-none font-mono"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Telegram Alerts Bot Token
                  </label>
                  <div className="relative">
                    <Shield className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                    <input
                      type="password"
                      value={settings.telegramBotToken}
                      onChange={(e) => setSettings({ ...settings, telegramBotToken: e.target.value })}
                      className="w-full bg-[#1A1A1E] border border-zinc-800 text-white text-xs rounded-xl pl-9 pr-3.5 py-2.5 focus:border-zinc-500 outline-none font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Telegram Admin Chat ID
                  </label>
                  <input
                    type="text"
                    value={settings.telegramAlertChatId}
                    onChange={(e) => setSettings({ ...settings, telegramAlertChatId: e.target.value })}
                    className="w-full bg-[#1A1A1E] border border-zinc-800 text-white text-xs rounded-xl px-3.5 py-2.5 focus:border-zinc-500 outline-none font-mono"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Limits */}
        {activeTab === "limits" && (
          <div className="bg-[#141418] border border-zinc-800/80 rounded-2xl p-6 space-y-6">
            <h2 className="text-sm font-semibold text-white uppercase tracking-wider">
              Обмеження системи та продуктивність
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Максимум фото на одне авто
                </label>
                <input
                  type="number"
                  value={settings.maxPhotosPerCar}
                  onChange={(e) => setSettings({ ...settings, maxPhotosPerCar: Number(e.target.value) })}
                  className="w-full bg-[#1A1A1E] border border-zinc-800 text-white text-xs rounded-xl px-3.5 py-2.5 focus:border-zinc-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Максимальний розмір фото (MB)
                </label>
                <input
                  type="number"
                  value={settings.maxPhotoSizeMb}
                  onChange={(e) => setSettings({ ...settings, maxPhotoSizeMb: Number(e.target.value) })}
                  className="w-full bg-[#1A1A1E] border border-zinc-800 text-white text-xs rounded-xl px-3.5 py-2.5 focus:border-zinc-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Таймаут API запитів (секунди)
                </label>
                <input
                  type="number"
                  value={settings.requestTimeoutSec}
                  onChange={(e) => setSettings({ ...settings, requestTimeoutSec: Number(e.target.value) })}
                  className="w-full bg-[#1A1A1E] border border-zinc-800 text-white text-xs rounded-xl px-3.5 py-2.5 focus:border-zinc-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Кількість авто на сторінку в каталозі
                </label>
                <input
                  type="number"
                  value={settings.maxCatalogItemsPerPage}
                  onChange={(e) => setSettings({ ...settings, maxCatalogItemsPerPage: Number(e.target.value) })}
                  className="w-full bg-[#1A1A1E] border border-zinc-800 text-white text-xs rounded-xl px-3.5 py-2.5 focus:border-zinc-500 outline-none"
                />
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
