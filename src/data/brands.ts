import { BrandEntity } from "@/types/vehicle";

export const brands: BrandEntity[] = [
  {
    id: "brand_porsche",
    name: "Porsche",
    slug: "porsche",
    is_active: true,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "brand_bmw",
    name: "BMW",
    slug: "bmw",
    is_active: true,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "brand_mercedes_benz",
    name: "Mercedes-Benz",
    slug: "mercedes-benz",
    is_active: true,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "brand_audi",
    name: "Audi",
    slug: "audi",
    is_active: true,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "brand_land_rover",
    name: "Land Rover",
    slug: "land-rover",
    is_active: true,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "brand_lexus",
    name: "Lexus",
    slug: "lexus",
    is_active: true,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "brand_bentley",
    name: "Bentley",
    slug: "bentley",
    is_active: true,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "brand_maserati",
    name: "Maserati",
    slug: "maserati",
    is_active: true,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "brand_tesla",
    name: "Tesla",
    slug: "tesla",
    is_active: true,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "brand_volvo",
    name: "Volvo",
    slug: "volvo",
    is_active: true,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "brand_volkswagen",
    name: "Volkswagen",
    slug: "volkswagen",
    is_active: true,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "brand_toyota",
    name: "Toyota",
    slug: "toyota",
    is_active: true,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
];

import { VEHICLES } from "@/data/vehicles";
import { BrandOption } from "@/types/vehicle";
import { getModelsForBrand } from "@/data/models";

export { getModelsForBrand };

export function getAvailableBrands(): BrandOption[] {
  return brands
    .filter((b) => b.is_active)
    .map((b) => {
      const activeVehicles = VEHICLES.filter(
        (v) =>
          (v.brand_id === b.id || v.brand.toLowerCase() === b.name.toLowerCase()) &&
          v.status !== "sold"
      );
      return {
        id: b.id,
        name: b.name,
        slug: b.slug,
        count: activeVehicles.length,
        logoText: b.name.slice(0, 2).toUpperCase(),
      };
    })
    .filter((b) => b.count > 0)
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export function getBrandBySlug(slug: string) {
  const norm = slug.toLowerCase().trim();
  return brands.find(
    (b) => b.slug.toLowerCase() === norm || b.name.toLowerCase() === norm || b.id === norm
  );
}

export function getBrandById(id: string) {
  return brands.find((b) => b.id === id);
}

