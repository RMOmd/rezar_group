"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Camera,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface VehicleGalleryProps {
  images: string[];
  vehicleTitle: string;
}

export function VehicleGallery({ images, vehicleTitle }: VehicleGalleryProps) {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const prevImage = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const nextImage = useCallback(() => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") setIsFullscreen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevImage, nextImage]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) {
      nextImage(); // swipe left -> next
    } else if (diff < -50) {
      prevImage(); // swipe right -> prev
    }
    setTouchStartX(null);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-3">
      {/* Main Image Stage */}
      <div
        className="relative aspect-[16/10] bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800/80 group select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={images[activeIndex]}
          alt={`${vehicleTitle} - ${t.vehicleDetail.photoCount} ${activeIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 800px"
          className="object-cover transition-opacity duration-300"
        />

        {/* Gradient shadow overlay for controls */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

        {/* Counter Badge */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-white font-mono">
          <Camera className="w-3.5 h-3.5 text-zinc-300" />
          <span>
            {activeIndex + 1} / {images.length}
          </span>
        </div>

        {/* Fullscreen Trigger */}
        <button
          onClick={() => setIsFullscreen(true)}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-black/90 transition-all hover:scale-105 active:scale-95"
          title="Fullscreen"
          aria-label="Fullscreen"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {/* Prev / Next Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-black hover:scale-110 active:scale-95"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-black hover:scale-110 active:scale-95"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails Strip */}
      {images.length > 1 && (
        <div className="flex gap-2.5 overflow-x-auto pb-1 pt-0.5 no-scrollbar">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative flex-shrink-0 w-20 sm:w-24 aspect-[16/10] rounded-xl overflow-hidden border transition-all ${
                activeIndex === idx
                  ? "border-white ring-2 ring-white/20 opacity-100 scale-[1.02]"
                  : "border-zinc-800 opacity-60 hover:opacity-90"
              }`}
            >
              <Image
                src={img}
                alt={`${vehicleTitle} ${idx + 1}`}
                fill
                sizes="100px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8">
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white z-10">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-sm sm:text-base tracking-wide">
                {vehicleTitle}
              </span>
              <span className="text-xs font-mono text-zinc-400">
                ({activeIndex + 1} {t.vehicleDetail.ofWord} {images.length})
              </span>
            </div>
            <button
              onClick={() => setIsFullscreen(false)}
              className="p-2.5 rounded-full bg-zinc-900 border border-zinc-700 text-white hover:bg-zinc-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Fullscreen Image Center */}
          <div
            className="relative flex-1 my-4 flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative w-full h-full max-w-6xl max-h-[82vh]">
              <Image
                src={images[activeIndex]}
                alt={vehicleTitle}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-6 p-3 sm:p-4 rounded-full bg-black/70 border border-white/20 text-white hover:bg-black transition-all"
                  aria-label="Попереднє фото"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-6 p-3 sm:p-4 rounded-full bg-black/70 border border-white/20 text-white hover:bg-black transition-all"
                  aria-label="Наступне фото"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Bottom Thumbnails in Lightbox */}
          <div className="flex justify-center gap-2 overflow-x-auto py-2 z-10">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative flex-shrink-0 w-16 sm:w-20 aspect-[16/10] rounded-lg overflow-hidden border transition-all ${
                  activeIndex === idx
                    ? "border-white ring-2 ring-white/30 opacity-100"
                    : "border-zinc-800 opacity-40 hover:opacity-80"
                }`}
              >
                <Image
                  src={img}
                  alt={`Мініатюра ${idx + 1}`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
