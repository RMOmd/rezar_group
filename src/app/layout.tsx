import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B0B0C",
};

export const metadata: Metadata = {
  title: "REZAR GROUP — Преміальні автомобілі в наявності та під замовлення",
  description:
    "Продаж, підбір та доставка преміальних автомобілів з офіційною європейською історією. Porsche, BMW, Mercedes-Benz, Range Rover, Audi. Прозорі умови, повна перевірка та супровід.",
  keywords: [
    "Rezar Group",
    "автомобілі в наявності",
    "купити Porsche",
    "купити BMW",
    "купити Mercedes",
    "авто з Європи",
    "преміум автосалон Київ",
  ],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.svg",
  },
};

import { LanguageProvider } from "@/context/LanguageContext";
import { FavoritesProvider } from "@/context/FavoritesContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className="dark scroll-smooth" data-scroll-behavior="smooth">
      <body className="min-h-screen bg-[#0B0B0C] text-white flex flex-col antialiased selection:bg-zinc-800 selection:text-white">
        <LanguageProvider>
          <FavoritesProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </FavoritesProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
