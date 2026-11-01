import { ModelEntity } from "@/types/vehicle";

export const models: ModelEntity[] = [
  // Porsche
  { id: "model_porsche_911", brand_id: "brand_porsche", name: "911", slug: "911", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_porsche_718_boxster", brand_id: "brand_porsche", name: "718 Boxster", slug: "718-boxster", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_porsche_718_cayman", brand_id: "brand_porsche", name: "718 Cayman", slug: "718-cayman", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_porsche_cayenne", brand_id: "brand_porsche", name: "Cayenne", slug: "cayenne", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_porsche_cayenne_coupe", brand_id: "brand_porsche", name: "Cayenne Coupe", slug: "cayenne-coupe", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_porsche_macan", brand_id: "brand_porsche", name: "Macan", slug: "macan", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_porsche_panamera", brand_id: "brand_porsche", name: "Panamera", slug: "panamera", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_porsche_taycan", brand_id: "brand_porsche", name: "Taycan", slug: "taycan", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },

  // BMW
  { id: "model_bmw_8_series", brand_id: "brand_bmw", name: "8 Series", slug: "8-series", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_bmw_m2", brand_id: "brand_bmw", name: "M2", slug: "m2", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_bmw_m3", brand_id: "brand_bmw", name: "M3", slug: "m3", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_bmw_m4_coupe", brand_id: "brand_bmw", name: "M4 Coupe", slug: "m4-coupe", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_bmw_m5", brand_id: "brand_bmw", name: "M5", slug: "m5", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_bmw_m8_gran_coupe", brand_id: "brand_bmw", name: "M8 Gran Coupe", slug: "m8-gran-coupe", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_bmw_x5", brand_id: "brand_bmw", name: "X5", slug: "x5", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_bmw_x5_m", brand_id: "brand_bmw", name: "X5 M", slug: "x5-m", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_bmw_x6", brand_id: "brand_bmw", name: "X6", slug: "x6", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_bmw_x7", brand_id: "brand_bmw", name: "X7", slug: "x7", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_bmw_i4", brand_id: "brand_bmw", name: "i4", slug: "i4", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_bmw_i7", brand_id: "brand_bmw", name: "i7", slug: "i7", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_bmw_ix", brand_id: "brand_bmw", name: "iX", slug: "ix", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },

  // Mercedes-Benz
  { id: "model_mercedes_amg_gt", brand_id: "brand_mercedes_benz", name: "AMG GT", slug: "amg-gt", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_mercedes_c_class", brand_id: "brand_mercedes_benz", name: "C-Class", slug: "c-class", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_mercedes_c_class_coupe", brand_id: "brand_mercedes_benz", name: "C-Class Coupe", slug: "c-class-coupe", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_mercedes_eqe", brand_id: "brand_mercedes_benz", name: "EQE", slug: "eqe", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_mercedes_g_class", brand_id: "brand_mercedes_benz", name: "G-Class", slug: "g-class", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_mercedes_gle", brand_id: "brand_mercedes_benz", name: "GLE", slug: "gle", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_mercedes_gle_coupe", brand_id: "brand_mercedes_benz", name: "GLE Coupe", slug: "gle-coupe", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_mercedes_maybach_gls", brand_id: "brand_mercedes_benz", name: "Maybach GLS", slug: "maybach-gls", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_mercedes_s_class", brand_id: "brand_mercedes_benz", name: "S-Class", slug: "s-class", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_mercedes_sl_class", brand_id: "brand_mercedes_benz", name: "SL-Class", slug: "sl-class", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },

  // Land Rover
  { id: "model_land_rover_defender", brand_id: "brand_land_rover", name: "Defender", slug: "defender", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_land_rover_range_rover", brand_id: "brand_land_rover", name: "Range Rover", slug: "range-rover", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_land_rover_range_rover_sport", brand_id: "brand_land_rover", name: "Range Rover Sport", slug: "range-rover-sport", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_land_rover_range_rover_velar", brand_id: "brand_land_rover", name: "Range Rover Velar", slug: "range-rover-velar", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },

  // Audi
  { id: "model_audi_q8", brand_id: "brand_audi", name: "Q8", slug: "q8", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_audi_r8", brand_id: "brand_audi", name: "R8", slug: "r8", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_audi_rs_q8", brand_id: "brand_audi", name: "RS Q8", slug: "rs-q8", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_audi_rs4", brand_id: "brand_audi", name: "RS4", slug: "rs4", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_audi_rs5", brand_id: "brand_audi", name: "RS5", slug: "rs5", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_audi_rs6", brand_id: "brand_audi", name: "RS6", slug: "rs6", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_audi_rs6_avant", brand_id: "brand_audi", name: "RS6 Avant", slug: "rs6-avant", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_audi_rs7", brand_id: "brand_audi", name: "RS7", slug: "rs7", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_audi_s8", brand_id: "brand_audi", name: "S8", slug: "s8", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_audi_sq7", brand_id: "brand_audi", name: "SQ7", slug: "sq7", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_audi_e_tron_gt", brand_id: "brand_audi", name: "e-tron GT", slug: "e-tron-gt", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },

  // Lexus
  { id: "model_lexus_gx", brand_id: "brand_lexus", name: "GX", slug: "gx", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_lexus_lc", brand_id: "brand_lexus", name: "LC", slug: "lc", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_lexus_ls", brand_id: "brand_lexus", name: "LS", slug: "ls", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_lexus_lx", brand_id: "brand_lexus", name: "LX", slug: "lx", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_lexus_rx", brand_id: "brand_lexus", name: "RX", slug: "rx", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },

  // Bentley
  { id: "model_bentley_bentayga", brand_id: "brand_bentley", name: "Bentayga", slug: "bentayga", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_bentley_continental_gt", brand_id: "brand_bentley", name: "Continental GT", slug: "continental-gt", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_bentley_flying_spur", brand_id: "brand_bentley", name: "Flying Spur", slug: "flying-spur", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },

  // Maserati
  { id: "model_maserati_granturismo", brand_id: "brand_maserati", name: "GranTurismo", slug: "granturismo", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_maserati_grecale", brand_id: "brand_maserati", name: "Grecale", slug: "grecale", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "model_maserati_mc20", brand_id: "brand_maserati", name: "MC20", slug: "mc20", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },

  // Tesla
  { id: "model_tesla_model_s", brand_id: "brand_tesla", name: "Model S", slug: "model-s", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },

  // Volvo
  { id: "model_volvo_xc90", brand_id: "brand_volvo", name: "XC90", slug: "xc90", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },

  // Volkswagen
  { id: "model_volkswagen_touareg", brand_id: "brand_volkswagen", name: "Touareg", slug: "touareg", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },

  // Toyota
  { id: "model_toyota_land_cruiser_300", brand_id: "brand_toyota", name: "Land Cruiser 300", slug: "land-cruiser-300", is_active: true, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
];

import { ModelOption } from "@/types/vehicle";
import { VEHICLES } from "@/data/vehicles";
import { brands } from "@/data/brands";

export function getModelsForBrand(brandOrSlug?: string): ModelOption[] {
  if (!brandOrSlug) return [];
  const norm = brandOrSlug.toLowerCase().trim();
  const matchedBrand = brands.find(
    (b) => b.slug.toLowerCase() === norm || b.name.toLowerCase() === norm || b.id === norm
  );
  if (!matchedBrand) return [];

  return models
    .filter((m) => m.brand_id === matchedBrand.id && m.is_active)
    .map((m) => {
      const activeVehicles = VEHICLES.filter(
        (v) =>
          (v.model_id === m.id || v.model.toLowerCase() === m.name.toLowerCase()) &&
          (v.brand_id === matchedBrand.id || v.brand.toLowerCase() === matchedBrand.name.toLowerCase()) &&
          v.status !== "sold"
      );
      return {
        id: m.id,
        brand_id: m.brand_id,
        brand: matchedBrand.name,
        name: m.name,
        slug: m.slug,
        count: activeVehicles.length,
      };
    })
    .filter((m) => m.count > 0)
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export function getModelBySlug(brandSlug: string, modelSlug: string): ModelEntity | undefined {
  const brandNorm = brandSlug.toLowerCase().trim();
  const modelNorm = modelSlug.toLowerCase().trim();
  const matchedBrand = brands.find(
    (b) => b.slug.toLowerCase() === brandNorm || b.name.toLowerCase() === brandNorm
  );
  if (!matchedBrand) return undefined;

  return models.find(
    (m) =>
      m.brand_id === matchedBrand.id &&
      (m.slug.toLowerCase() === modelNorm || m.name.toLowerCase() === modelNorm)
  );
}

export function getModelById(id: string): ModelEntity | undefined {
  return models.find((m) => m.id === id);
}

