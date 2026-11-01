import { VEHICLES } from "@/data/vehicles";
import {
  getAvailableBrands,
  getModelsForBrand,
  getBrandBySlug,
  getBrandById,
  brands,
} from "@/data/brands";
import {
  getModelBySlug,
  getModelById,
  models,
} from "@/data/models";
import {
  Vehicle,
  VehicleFilterParams,
  VehicleSortOption,
  BrandOption,
  ModelOption,
  FilterBounds,
  BrandEntity,
  ModelEntity,
} from "@/types/vehicle";
import { RecommendationEngine } from "@/services/recommendationEngine";
import { RecommendationCandidate } from "@/types/recommendation";

export interface PaginatedVehiclesResult {
  vehicles: Vehicle[];
  total: number;
  hasMore: boolean;
  page: number;
  limit: number;
}

export class VehicleService {
  /**
   * Get filtered, sorted, paginated vehicles
   */
  public static async getVehicles(
    params: VehicleFilterParams = {},
    sort: VehicleSortOption = "newest",
    page: number = 1,
    limit: number = 24
  ): Promise<PaginatedVehiclesResult> {
    // Client-side simulation with instant or micro-delay
    let filtered = [...VEHICLES];

    // Filter by Status: default behavior excludes sold cars unless explicitly requested
    if (params.status === "sold") {
      filtered = filtered.filter((v) => v.status === "sold");
    } else if (params.status === "in_stock") {
      filtered = filtered.filter((v) => v.status === "in_stock");
    } else if (params.status === "in_transit") {
      filtered = filtered.filter((v) => v.status === "in_transit");
    } else if (params.status === "all") {
      // Include all cars, including sold
    } else {
      // Default: 'all_active' -> only cars available or in transit
      filtered = filtered.filter((v) => v.status !== "sold");
    }

    // New Arrivals only
    if (params.isNewArrival) {
      filtered = filtered.filter((v) => v.isNewArrival);
    }

    // Brand filter (by brand_id, brand name, or brand slug)
    if (params.brandId) {
      filtered = filtered.filter((v) => v.brand_id === params.brandId);
    } else if (params.brandSlug) {
      const b = getBrandBySlug(params.brandSlug);
      if (b) {
        filtered = filtered.filter(
          (v) => v.brand_id === b.id || v.brand.toLowerCase() === b.name.toLowerCase()
        );
      } else {
        filtered = [];
      }
    } else if (params.brand && params.brand.trim() !== "") {
      const b = getBrandBySlug(params.brand);
      if (b) {
        filtered = filtered.filter(
          (v) => v.brand_id === b.id || v.brand.toLowerCase() === b.name.toLowerCase()
        );
      } else {
        filtered = filtered.filter(
          (v) => v.brand.toLowerCase() === params.brand!.toLowerCase()
        );
      }
    }

    // Model filter (by model_id, model name, or model slug)
    if (params.modelId) {
      filtered = filtered.filter((v) => v.model_id === params.modelId);
    } else if (params.modelSlug && (params.brandSlug || params.brand)) {
      const brandKey = params.brandSlug || params.brand || "";
      const m = getModelBySlug(brandKey, params.modelSlug);
      if (m) {
        filtered = filtered.filter(
          (v) => v.model_id === m.id || v.model.toLowerCase() === m.name.toLowerCase()
        );
      } else {
        filtered = [];
      }
    } else if (params.model && params.model.trim() !== "") {
      filtered = filtered.filter(
        (v) =>
          v.model.toLowerCase() === params.model!.toLowerCase() ||
          v.model.toLowerCase().replace(/\s+/g, "-") === params.model!.toLowerCase()
      );
    }

    // Fuel Type
    if (params.fuelType) {
      filtered = filtered.filter((v) => v.fuelType === params.fuelType);
    }

    // Body Type
    if (params.bodyType) {
      filtered = filtered.filter((v) => v.bodyType === params.bodyType);
    }

    // Transmission
    if (params.transmission) {
      filtered = filtered.filter((v) => v.transmission === params.transmission);
    }

    // Year range
    if (params.yearFrom) {
      filtered = filtered.filter((v) => v.year >= params.yearFrom!);
    }
    if (params.yearTo) {
      filtered = filtered.filter((v) => v.year <= params.yearTo!);
    }

    // Price range
    if (params.priceFrom) {
      filtered = filtered.filter((v) => v.price >= params.priceFrom!);
    }
    if (params.priceTo) {
      filtered = filtered.filter((v) => v.price <= params.priceTo!);
    }

    // Mileage range
    if (params.mileageFrom) {
      filtered = filtered.filter((v) => v.mileage >= params.mileageFrom!);
    }
    if (params.mileageTo) {
      filtered = filtered.filter((v) => v.mileage <= params.mileageTo!);
    }

    // Text search query (matches brand, model, trim, body, or description)
    if (params.searchQuery && params.searchQuery.trim() !== "") {
      const q = params.searchQuery.toLowerCase().trim();
      filtered = filtered.filter((v) => {
        const fullTitle = `${v.brand} ${v.model} ${v.trim || ""}`.toLowerCase();
        return (
          fullTitle.includes(q) ||
          v.colorExterior.toLowerCase().includes(q) ||
          v.bodyType.toLowerCase().includes(q) ||
          v.vin.toLowerCase().includes(q)
        );
      });
    }

    // Sorting
    filtered.sort((a, b) => {
      switch (sort) {
        case "newest":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case "oldest":
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case "price_asc":
          return a.price - b.price;
        case "price_desc":
          return b.price - a.price;
        case "year_desc":
          return b.year - a.year;
        case "mileage_asc":
          return a.mileage - b.mileage;
        default:
          return 0;
      }
    });

    const total = filtered.length;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const pagedVehicles = filtered.slice(0, endIndex); // Accumulative or sliced per page
    const hasMore = endIndex < total;

    return {
      vehicles: pagedVehicles,
      total,
      hasMore,
      page,
      limit,
    };
  }

  /**
   * Get single vehicle by ID
   */
  public static async getVehicleById(id: string): Promise<Vehicle | null> {
    const found = VEHICLES.find((v) => v.id === id);
    return found || null;
  }

  /**
   * 3-tier 100-point similarity algorithm via RecommendationEngine:
   * Level 1: Same brand & model
   * Level 2: Same brand, other model of same bodyType/class
   * Level 3: Other brands of same bodyType/class within +-20% price & +-2 years
   * Excludes sold cars and target car.
   */
  public static async getSimilarVehicles(
    currentVehicle: Vehicle,
    limit: number = 12
  ): Promise<Vehicle[]> {
    const result = RecommendationEngine.getSimilarVehicles(currentVehicle, VEHICLES, {
      limit,
    });
    return result.items.map((item) => item.vehicle);
  }

  public static async getSimilarCandidates(
    currentVehicle: Vehicle,
    limit: number = 12
  ): Promise<RecommendationCandidate[]> {
    const result = RecommendationEngine.getSimilarVehicles(currentVehicle, VEHICLES, {
      limit,
    });
    return result.items;
  }

  /**
   * Get all brands
   */
  public static async getBrands(): Promise<BrandOption[]> {
    return getAvailableBrands();
  }

  /**
   * Get models for brand
   */
  public static async getModels(brand?: string): Promise<ModelOption[]> {
    return getModelsForBrand(brand);
  }

  /**
   * Get brand entity by slug
   */
  public static async getBrandBySlug(slug: string): Promise<BrandEntity | null> {
    return getBrandBySlug(slug) || null;
  }

  /**
   * Get brand entity by ID
   */
  public static async getBrandById(id: string): Promise<BrandEntity | null> {
    return getBrandById(id) || null;
  }

  /**
   * Get model entity by brand slug and model slug
   */
  public static async getModelBySlug(
    brandSlug: string,
    modelSlug: string
  ): Promise<ModelEntity | null> {
    return getModelBySlug(brandSlug, modelSlug) || null;
  }

  /**
   * Get all registered brand entities
   */
  public static async getAllBrands(): Promise<BrandEntity[]> {
    return brands;
  }

  /**
   * Get all registered model entities
   */
  public static async getAllModels(): Promise<ModelEntity[]> {
    return models;
  }

  /**
   * Get filter min/max bounds from existing data
   */
  public static async getFilterBounds(): Promise<FilterBounds> {
    let minPrice = Infinity;
    let maxPrice = -Infinity;
    let minYear = Infinity;
    let maxYear = -Infinity;
    let minMileage = Infinity;
    let maxMileage = -Infinity;

    for (const v of VEHICLES) {
      if (v.price < minPrice) minPrice = v.price;
      if (v.price > maxPrice) maxPrice = v.price;
      if (v.year < minYear) minYear = v.year;
      if (v.year > maxYear) maxYear = v.year;
      if (v.mileage < minMileage) minMileage = v.mileage;
      if (v.mileage > maxMileage) maxMileage = v.mileage;
    }

    return {
      minPrice: minPrice === Infinity ? 40000 : minPrice,
      maxPrice: maxPrice === -Infinity ? 300000 : maxPrice,
      minYear: minYear === Infinity ? 2020 : minYear,
      maxYear: maxYear === -Infinity ? 2024 : maxYear,
      minMileage: minMileage === Infinity ? 0 : minMileage,
      maxMileage: maxMileage === -Infinity ? 100000 : maxMileage,
    };
  }
}
