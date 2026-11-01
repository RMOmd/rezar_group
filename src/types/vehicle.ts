export type VehicleStatus = "in_stock" | "in_transit" | "sold";

export type FuelType = "petrol" | "diesel" | "hybrid" | "electric" | "plug_in_hybrid";

export type DriveType = "all_wheel" | "rear_wheel" | "front_wheel";

export type TransmissionType = "automatic" | "manual" | "robot" | "variator";

export type BodyType = "suv" | "sedan" | "coupe" | "wagon" | "cabriolet" | "liftback";

export interface BrandEntity {
  id: string;
  name: string;
  slug: string;
  logo?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ModelEntity {
  id: string;
  brand_id: string;
  name: string;
  slug: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProviderBrandMapping {
  id: string;
  provider: string;
  raw_brand_name: string;
  internal_brand_id: string;
  internal_brand_name: string;
  status: "mapped" | "pending_review" | "ignored";
  confidence: number;
  created_at: string;
  updated_at: string;
}

export interface ProviderModelMapping {
  id: string;
  provider: string;
  raw_brand_name: string;
  raw_model_name: string;
  internal_brand_id: string;
  internal_model_id: string;
  internal_model_name: string;
  status: "mapped" | "pending_review" | "ignored";
  confidence: number;
  created_at: string;
  updated_at: string;
}

export interface Vehicle {
  id: string;
  brand_id: string;
  model_id: string;
  brand: string;
  model: string;
  trim?: string; // e.g. "Competition", "M Sport", "AMG Line", "Autobiography"
  year: number;
  price: number; // in USD
  mileage: number; // in km
  fuelType: FuelType;
  engine: string; // e.g. "4.4L V8 Twin-Turbo"
  powerHp: number; // e.g. 625
  transmission: TransmissionType;
  drive: DriveType;
  bodyType: BodyType;
  colorExterior: string;
  colorInterior: string;
  vin: string;
  status: VehicleStatus;
  isNewArrival: boolean;
  createdAt: string; // ISO date string
  location: string;
  description: string;
  features: {
    category: string;
    items: string[];
  }[];
  images: string[];
}

export interface VehicleFilterParams {
  brand?: string;
  model?: string;
  brandId?: string;
  modelId?: string;
  brandSlug?: string;
  modelSlug?: string;
  yearFrom?: number;
  yearTo?: number;
  priceFrom?: number;
  priceTo?: number;
  mileageFrom?: number;
  mileageTo?: number;
  fuelType?: string;
  bodyType?: string;
  transmission?: string;
  status?: VehicleStatus | "all_active" | "all"; // 'all_active' = in_stock + in_transit (default)
  isNewArrival?: boolean;
  searchQuery?: string;
}

export type VehicleSortOption =
  | "newest"
  | "oldest"
  | "price_asc"
  | "price_desc"
  | "year_desc"
  | "mileage_asc";

export interface BrandOption {
  name: string;
  count: number;
  logoText: string;
}

export interface ModelOption {
  brand: string;
  name: string;
  count: number;
}

export interface FilterBounds {
  minPrice: number;
  maxPrice: number;
  minYear: number;
  maxYear: number;
  minMileage: number;
  maxMileage: number;
}
