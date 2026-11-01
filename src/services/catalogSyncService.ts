import { brands } from "@/data/brands";
import { models } from "@/data/models";
import {
  BrandEntity,
  ModelEntity,
  ProviderBrandMapping,
  ProviderModelMapping,
} from "@/types/vehicle";

export interface SyncResult {
  status: "mapped" | "pending_review";
  confidence: number;
  brand?: BrandEntity;
  model?: ModelEntity;
  rawBrand: string;
  rawModel: string;
  provider: string;
  message: string;
}

export interface SyncFeedItem {
  provider: string;
  rawBrand: string;
  rawModel: string;
  rawVin?: string;
  rawPrice?: number;
  rawYear?: number;
}

// Pre-defined supplier normalization aliases
const BRAND_ALIASES: Record<string, string> = {
  "porsche ag": "brand_porsche",
  "porsche cars": "brand_porsche",
  "dr. ing. h.c. f. porsche": "brand_porsche",
  "bmw ag": "brand_bmw",
  "bayerische motoren werke": "brand_bmw",
  "bmw m": "brand_bmw",
  "mercedes": "brand_mercedes_benz",
  "mercedes-benz": "brand_mercedes_benz",
  "mercedes benz": "brand_mercedes_benz",
  "mb": "brand_mercedes_benz",
  "daimler": "brand_mercedes_benz",
  "mercedes-amg": "brand_mercedes_benz",
  "amg": "brand_mercedes_benz",
  "audi ag": "brand_audi",
  "audi sport": "brand_audi",
  "land rover": "brand_land_rover",
  "jaguar land rover": "brand_land_rover",
  "jlr": "brand_land_rover",
  "range rover": "brand_land_rover",
  "lexus division": "brand_lexus",
  "bentley motors": "brand_bentley",
  "maserati s.p.a.": "brand_maserati",
  "tesla inc": "brand_tesla",
  "tesla motors": "brand_tesla",
  "volvo cars": "brand_volvo",
  "volvo car corporation": "brand_volvo",
  "volkswagen ag": "brand_volkswagen",
  "vw": "brand_volkswagen",
  "toyota motor": "brand_toyota",
};

// In-memory persistent state for mappings & pending reviews
const brandMappings: ProviderBrandMapping[] = [
  {
    id: "map_b_1",
    provider: "x_auto",
    raw_brand_name: "PORSCHE AG",
    internal_brand_id: "brand_porsche",
    internal_brand_name: "Porsche",
    status: "mapped",
    confidence: 100,
    created_at: "2024-01-10T10:00:00Z",
    updated_at: "2024-01-10T10:00:00Z",
  },
  {
    id: "map_b_2",
    provider: "x_auto",
    raw_brand_name: "MERCEDES-BENZ",
    internal_brand_id: "brand_mercedes_benz",
    internal_brand_name: "Mercedes-Benz",
    status: "mapped",
    confidence: 100,
    created_at: "2024-01-10T10:00:00Z",
    updated_at: "2024-01-10T10:00:00Z",
  },
  {
    id: "map_b_3",
    provider: "x_auto",
    raw_brand_name: "BMW AG / M GMBH",
    internal_brand_id: "brand_bmw",
    internal_brand_name: "BMW",
    status: "mapped",
    confidence: 95,
    created_at: "2024-01-10T10:00:00Z",
    updated_at: "2024-01-10T10:00:00Z",
  },
];

const modelMappings: ProviderModelMapping[] = [
  {
    id: "map_m_1",
    provider: "x_auto",
    raw_brand_name: "PORSCHE AG",
    raw_model_name: "911 Carrera 4S Coupe (992)",
    internal_brand_id: "brand_porsche",
    internal_model_id: "model_porsche_911",
    internal_model_name: "911",
    status: "mapped",
    confidence: 96,
    created_at: "2024-01-10T10:00:00Z",
    updated_at: "2024-01-10T10:00:00Z",
  },
];

// Unknown supplier queue waiting for manual admin resolution
const pendingQueue: {
  id: string;
  provider: string;
  rawBrand: string;
  rawModel: string;
  suggestedBrandId?: string;
  suggestedModelId?: string;
  confidence: number;
  createdAt: string;
}[] = [
  {
    id: "pen_1",
    provider: "x_auto",
    rawBrand: "PORSCHE AG SPECIAL",
    rawModel: "911 GT3 Touring Package",
    suggestedBrandId: "brand_porsche",
    suggestedModelId: "model_porsche_911",
    confidence: 94,
    createdAt: new Date().toISOString(),
  },
  {
    id: "pen_2",
    provider: "x_auto",
    rawBrand: "ALPINA BURKARD BOVENSIEPEN",
    rawModel: "B8 Gran Coupe AWD",
    suggestedBrandId: "brand_bmw",
    suggestedModelId: "model_bmw_8_series",
    confidence: 65,
    createdAt: new Date().toISOString(),
  },
  {
    id: "pen_3",
    provider: "x_auto",
    rawBrand: "LUCID MOTORS",
    rawModel: "Air Sapphire Tri-Motor",
    suggestedBrandId: undefined,
    suggestedModelId: undefined,
    confidence: 0,
    createdAt: new Date().toISOString(),
  },
];

export class CatalogSyncService {
  /**
   * Normalize brand string: trim, lowercase, remove noise characters
   */
  public static normalizeString(str: string): string {
    return str
      .toLowerCase()
      .replace(/[\(\)\[\]\{\}\.,\/#!$%\^&\*;:{}=\-_`~?]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  /**
   * Match raw supplier brand to internal BrandEntity
   */
  public static matchBrand(rawBrand: string): {
    brand?: BrandEntity;
    confidence: number;
  } {
    const norm = this.normalizeString(rawBrand);

    // 1. Check existing mapped table
    const existing = brandMappings.find(
      (m) =>
        m.status === "mapped" &&
        this.normalizeString(m.raw_brand_name) === norm
    );
    if (existing?.internal_brand_id) {
      const b = brands.find((x) => x.id === existing.internal_brand_id);
      if (b) return { brand: b, confidence: 100 };
    }

    // 2. Check alias dictionary
    for (const [alias, brandId] of Object.entries(BRAND_ALIASES)) {
      if (norm === alias || norm.includes(alias)) {
        const b = brands.find((x) => x.id === brandId);
        if (b) return { brand: b, confidence: 95 };
      }
    }

    // 3. Exact name or slug match
    for (const b of brands) {
      const bNorm = this.normalizeString(b.name);
      if (norm === bNorm || norm === b.slug) {
        return { brand: b, confidence: 98 };
      }
      if (norm.startsWith(bNorm) || norm.includes(bNorm)) {
        return { brand: b, confidence: 85 };
      }
    }

    return { confidence: 0 };
  }

  /**
   * Match raw supplier model to internal ModelEntity for a given brand
   */
  public static matchModel(
    brand: BrandEntity,
    rawModel: string
  ): {
    model?: ModelEntity;
    confidence: number;
  } {
    const norm = this.normalizeString(rawModel);
    const brandModels = models.filter((m) => m.brand_id === brand.id);

    // 1. Check existing model mappings
    const existing = modelMappings.find(
      (m) =>
        m.status === "mapped" &&
        m.internal_brand_id === brand.id &&
        this.normalizeString(m.raw_model_name) === norm
    );
    if (existing?.internal_model_id) {
      const mod = brandModels.find((x) => x.id === existing.internal_model_id);
      if (mod) return { model: mod, confidence: 100 };
    }

    // 2. Exact match against model name or slug
    for (const m of brandModels) {
      const mNorm = this.normalizeString(m.name);
      if (norm === mNorm || norm === m.slug) {
        return { model: m, confidence: 98 };
      }
    }

    // 3. Substring match (e.g. "911 Carrera 4S" contains "911")
    // Pick longest matching model name to avoid false positives
    let bestMatch: ModelEntity | undefined;
    let maxMatchLen = 0;

    for (const m of brandModels) {
      const mNorm = this.normalizeString(m.name);
      // Word boundary regex
      const re = new RegExp(`\\b${mNorm}\\b`, "i");
      if (re.test(norm)) {
        if (mNorm.length > maxMatchLen) {
          bestMatch = m;
          maxMatchLen = mNorm.length;
        }
      }
    }

    if (bestMatch) {
      return { model: bestMatch, confidence: 90 };
    }

    return { confidence: 0 };
  }

  /**
   * Synchronize an incoming vehicle item from supplier feed
   */
  public static syncItem(
    rawBrand: string,
    rawModel: string,
    provider: string = "x_auto"
  ): SyncResult {
    const brandMatch = this.matchBrand(rawBrand);

    // If brand not found or confidence too low, queue for manual review
    if (!brandMatch.brand || brandMatch.confidence < 80) {
      const pendingId = `pen_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
      pendingQueue.push({
        id: pendingId,
        provider,
        rawBrand,
        rawModel,
        confidence: brandMatch.confidence,
        createdAt: new Date().toISOString(),
      });

      return {
        status: "pending_review",
        confidence: brandMatch.confidence,
        rawBrand,
        rawModel,
        provider,
        message: "Марка не розпізнана автоматично. Додано в чергу ручного сопоставлення в адмінці.",
      };
    }

    const modelMatch = this.matchModel(brandMatch.brand, rawModel);

    // If model not found or confidence low, queue for review
    if (!modelMatch.model || modelMatch.confidence < 75) {
      const pendingId = `pen_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
      pendingQueue.push({
        id: pendingId,
        provider,
        rawBrand,
        rawModel,
        suggestedBrandId: brandMatch.brand.id,
        confidence: modelMatch.confidence,
        createdAt: new Date().toISOString(),
      });

      return {
        status: "pending_review",
        confidence: modelMatch.confidence,
        brand: brandMatch.brand,
        rawBrand,
        rawModel,
        provider,
        message: `Марку «${brandMatch.brand.name}» знайдено, але модель не зіставлена. Додано в чергу ручної верифікації.`,
      };
    }

    // Success: auto-mapped cleanly!
    return {
      status: "mapped",
      confidence: Math.round((brandMatch.confidence + modelMatch.confidence) / 2),
      brand: brandMatch.brand,
      model: modelMatch.model,
      rawBrand,
      rawModel,
      provider,
      message: `Успішно зіставлено: ${brandMatch.brand.name} → ${modelMatch.model.name}`,
    };
  }

  /**
   * Get all items pending manual admin review
   */
  public static getPendingItems() {
    return [...pendingQueue];
  }

  /**
   * Admin approves mapping for a pending supplier entry
   */
  public static approveMapping(
    pendingId: string,
    brandId: string,
    modelId: string
  ): boolean {
    const idx = pendingQueue.findIndex((p) => p.id === pendingId);
    if (idx === -1) return false;

    const item = pendingQueue[idx];
    const targetBrand = brands.find((b) => b.id === brandId);
    const targetModel = models.find((m) => m.id === modelId);

    if (!targetBrand || !targetModel) return false;

    // Register persistent brand mapping
    brandMappings.push({
      id: `map_b_${Date.now()}`,
      provider: item.provider,
      raw_brand_name: item.rawBrand,
      internal_brand_id: targetBrand.id,
      internal_brand_name: targetBrand.name,
      status: "mapped",
      confidence: 100,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });

    // Register persistent model mapping
    modelMappings.push({
      id: `map_m_${Date.now()}`,
      provider: item.provider,
      raw_brand_name: item.rawBrand,
      raw_model_name: item.rawModel,
      internal_brand_id: targetBrand.id,
      internal_model_id: targetModel.id,
      internal_model_name: targetModel.name,
      status: "mapped",
      confidence: 100,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });

    // Remove from pending queue
    pendingQueue.splice(idx, 1);
    return true;
  }

  /**
   * Dismiss or ignore pending item
   */
  public static dismissPending(pendingId: string): boolean {
    const idx = pendingQueue.findIndex((p) => p.id === pendingId);
    if (idx === -1) return false;
    pendingQueue.splice(idx, 1);
    return true;
  }

  /**
   * Get sync module summary stats
   */
  public static getStats() {
    return {
      totalBrandsCount: brands.length,
      totalModelsCount: models.length,
      mappedBrandsCount: brandMappings.length,
      mappedModelsCount: modelMappings.length,
      pendingReviewCount: pendingQueue.length,
    };
  }
}
