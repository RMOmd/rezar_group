import { Suspense } from "react";
import { VehicleService } from "@/services/vehicleService";
import { CatalogClient } from "@/components/catalog/CatalogClient";

export const metadata = {
  title: "Каталог автомобілів в наявності — REZAR GROUP",
  description:
    "Преміальні автомобілі в наявності та в дорозі. Детальні характеристики, фотографії, фільтрація за маркою, моделлю та бюджетом.",
};

export default async function CatalogPage() {
  const [brands, bounds, initialVehiclesData] = await Promise.all([
    VehicleService.getBrands(),
    VehicleService.getFilterBounds(),
    VehicleService.getVehicles({ status: "all_active" }, "newest", 1, 24),
  ]);

  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-32 pb-20 bg-[#0B0B0C] flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-zinc-700 border-t-white rounded-full animate-spin" />
        </div>
      }
    >
      <CatalogClient
        initialBrands={brands}
        bounds={bounds}
        initialVehicles={initialVehiclesData.vehicles}
        initialTotal={initialVehiclesData.total}
        initialHasMore={initialVehiclesData.hasMore}
      />
    </Suspense>
  );
}
