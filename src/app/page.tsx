import { VehicleService } from "@/services/vehicleService";
import { HeroSection } from "@/components/home/HeroSection";
import { AdvantagesSection } from "@/components/home/AdvantagesSection";
import { FeaturedVehicles } from "@/components/home/FeaturedVehicles";
import { HowWeWorkSection } from "@/components/home/HowWeWorkSection";
import { AboutSection } from "@/components/home/AboutSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CtaSection } from "@/components/home/CtaSection";

export const revalidate = 3600;

export default async function HomePage() {
  const result = await VehicleService.getVehicles(
    { status: "in_stock" },
    "newest",
    1,
    6
  );

  return (
    <div className="relative">
      <HeroSection />
      <AdvantagesSection />
      <FeaturedVehicles vehicles={result.vehicles} />
      <HowWeWorkSection />
      <AboutSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}
