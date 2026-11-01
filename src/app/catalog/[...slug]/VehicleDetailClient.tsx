"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { Vehicle } from "@/types/vehicle";
import { VehicleGallery } from "@/components/vehicle/VehicleGallery";
import { VehicleSpecs } from "@/components/vehicle/VehicleSpecs";
import { VehicleFeatures } from "@/components/vehicle/VehicleFeatures";
import { ContactManagerCard } from "@/components/vehicle/ContactManagerCard";
import { SoldVehicleBanner } from "@/components/vehicle/SoldVehicleBanner";
import { SimilarVehicles } from "@/components/vehicle/SimilarVehicles";
import { LeadModal } from "@/components/common/LeadModal";
import { useLanguage } from "@/context/LanguageContext";
import { RecommendationCandidate } from "@/types/recommendation";

interface VehicleDetailClientProps {
  vehicle: Vehicle;
  similarVehicles?: Vehicle[];
  similarCandidates?: RecommendationCandidate[];
}

export function VehicleDetailClient({
  vehicle,
  similarVehicles = [],
  similarCandidates,
}: VehicleDetailClientProps) {
  const router = useRouter();
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const { t } = useLanguage();

  const handleBack = (e: React.MouseEvent) => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      e.preventDefault();
      router.back();
    }
  };

  const handleScrollToSimilar = () => {
    const el = document.getElementById("similar-vehicles");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      setIsLeadModalOpen(true);
    }
  };

  const fullTitle = `${vehicle.brand} ${vehicle.model} ${vehicle.trim || ""}`.trim();

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#0B0B0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Bar / Breadcrumbs */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-zinc-800 text-xs text-zinc-400">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">
              {t.vehicleDetail.home}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
            <Link href="/catalog" className="hover:text-white transition-colors">
              {t.vehicleDetail.catalog}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
            <span className="text-white font-medium truncate max-w-[200px] sm:max-w-xs">
              {vehicle.brand} {vehicle.model}
            </span>
          </nav>

          {/* Back button (returns to catalog preserving state and scroll) */}
          <Link
            href="/catalog"
            onClick={handleBack}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t.vehicleDetail.backToCatalog}</span>
          </Link>
        </div>

        {/* Sold State Banner */}
        {vehicle.status === "sold" && (
          <SoldVehicleBanner onFindSimilar={handleScrollToSimilar} />
        )}

        {/* Main Vehicle Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (Gallery + Specs + Features): 8 cols */}
          <div className="lg:col-span-8 space-y-8">
            {/* Gallery */}
            <VehicleGallery
              images={vehicle.images}
              vehicleTitle={fullTitle}
            />

            {/* Mobile Contact Card (Visible on mobile/tablet before specs) */}
            <div className="lg:hidden">
              <ContactManagerCard vehicle={vehicle} />
            </div>

            {/* Technical Specifications */}
            <VehicleSpecs vehicle={vehicle} />

            {/* Equipment and Features */}
            <VehicleFeatures features={vehicle.features} />
          </div>

          {/* Right Column (Sticky Manager Card): 4 cols */}
          <div className="hidden lg:block lg:col-span-4">
            <ContactManagerCard vehicle={vehicle} />
          </div>
        </div>

        {/* Similar Vehicles (Recommendation Algorithm) */}
        <SimilarVehicles vehicles={similarVehicles} candidates={similarCandidates} />
      </div>

      <LeadModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        vehicleTitle={fullTitle}
        sourceContext={t.vehicleDetail.findSimilarBtn}
      />
    </div>
  );
}
