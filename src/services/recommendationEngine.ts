import { Vehicle } from "@/types/vehicle";
import {
  RecommendationCandidate,
  RecommendationConfig,
  RecommendationLevel,
  DEFAULT_RECOMMENDATION_CONFIG,
  ScoreBreakdown,
  PaginatedSimilarResult,
} from "@/types/recommendation";

export class RecommendationEngine {
  /**
   * Calculate similarity score (0..100) based on weighted multi-criteria formula
   */
  public static calculateScore(
    target: Vehicle,
    candidate: Vehicle,
    level: RecommendationLevel,
    config: RecommendationConfig = DEFAULT_RECOMMENDATION_CONFIG
  ): { score: number; breakdown: ScoreBreakdown; priceDiff: number; priceDiffRatio: number; yearDiff: number } {
    const { weights, enabledCriteria, maxPriceDiffRatio, maxYearDiff } = config;

    // 1. Price Proximity (0..25)
    // Formula: maxScore * (1 - diffRatio / maxAllowedRatio)
    const priceDiff = Math.abs(candidate.price - target.price);
    const priceDiffRatio = target.price > 0 ? priceDiff / target.price : 1;
    let priceScore = 0;
    if (enabledCriteria.price && priceDiffRatio <= maxPriceDiffRatio) {
      priceScore = weights.priceMax * (1 - priceDiffRatio / maxPriceDiffRatio);
    }

    // 2. Year Proximity (0..25)
    // Formula: maxScore * (1 - yearDiff / maxAllowedDiff)
    const yearDiff = Math.abs(candidate.year - target.year);
    let yearScore = 0;
    if (enabledCriteria.year && yearDiff <= maxYearDiff) {
      yearScore = weights.yearMax * (1 - yearDiff / maxYearDiff);
    }

    // 3. Brand & Model Match (0..40)
    // Level 1 = 100% of weight (40 pts)
    // Level 2 = 62.5% of weight (25 pts)
    // Level 3 = 25% of weight (10 pts)
    let brandModelScore = 0;
    if (enabledCriteria.brandModel) {
      if (level === 1) {
        brandModelScore = weights.brandModelMax; // 40
      } else if (level === 2) {
        brandModelScore = weights.brandModelMax * 0.625; // 25
      } else {
        brandModelScore = weights.brandModelMax * 0.25; // 10
      }
    }

    // 4. Engine & Fuel Match (0..10)
    // Fuel type matching: 5 pts
    // Power proximity (within 20%): 5 pts, within 35%: 2.5 pts
    let engineFuelScore = 0;
    if (enabledCriteria.engineFuel) {
      let fuelPoints = 0;
      if (candidate.fuelType && target.fuelType && candidate.fuelType === target.fuelType) {
        fuelPoints = weights.engineFuelMax * 0.5; // 5 pts
      }

      let powerPoints = 0;
      if (candidate.powerHp && target.powerHp && target.powerHp > 0) {
        const powerDiffRatio = Math.abs(candidate.powerHp - target.powerHp) / target.powerHp;
        if (powerDiffRatio <= 0.20) {
          powerPoints = weights.engineFuelMax * 0.5; // 5 pts
        } else if (powerDiffRatio <= 0.35) {
          powerPoints = weights.engineFuelMax * 0.25; // 2.5 pts
        }
      }

      engineFuelScore = fuelPoints + powerPoints;
    }

    // Round scores to 1 decimal place
    const breakdown: ScoreBreakdown = {
      brandModelScore: Math.round(brandModelScore * 10) / 10,
      priceScore: Math.round(priceScore * 10) / 10,
      yearScore: Math.round(yearScore * 10) / 10,
      engineFuelScore: Math.round(engineFuelScore * 10) / 10,
      totalScore: 0,
    };

    const rawTotal =
      breakdown.brandModelScore +
      breakdown.priceScore +
      breakdown.yearScore +
      breakdown.engineFuelScore;

    breakdown.totalScore = Math.min(100, Math.max(0, Math.round(rawTotal * 10) / 10));

    return {
      score: breakdown.totalScore,
      breakdown,
      priceDiff,
      priceDiffRatio,
      yearDiff,
    };
  }

  /**
   * Main recommendation algorithm adhering to strict constraints and 3-level cascade
   */
  public static getSimilarVehicles(
    targetVehicle: Vehicle,
    allVehicles: Vehicle[],
    options: {
      page?: number;
      limit?: number;
      config?: Partial<RecommendationConfig>;
    } = {}
  ): PaginatedSimilarResult {
    const page = options.page && options.page > 0 ? options.page : 1;
    const limit = options.limit && options.limit > 0 ? options.limit : 12;

    const config: RecommendationConfig = {
      ...DEFAULT_RECOMMENDATION_CONFIG,
      ...options.config,
      weights: {
        ...DEFAULT_RECOMMENDATION_CONFIG.weights,
        ...options.config?.weights,
      },
      enabledCriteria: {
        ...DEFAULT_RECOMMENDATION_CONFIG.enabledCriteria,
        ...options.config?.enabledCriteria,
      },
    };

    // Filter hard constraints:
    // 1. Exclude the target vehicle itself
    // 2. Exclude sold vehicles
    // 3. Price deviation must not exceed maxPriceDiffRatio (20%)
    // 4. Year difference must not exceed maxYearDiff (2 years)
    const eligibleCandidates = allVehicles.filter((candidate) => {
      if (candidate.id === targetVehicle.id) return false;
      if (candidate.status === "sold") return false;

      // Price constraint: max 20%
      const priceDiffRatio = Math.abs(candidate.price - targetVehicle.price) / targetVehicle.price;
      if (priceDiffRatio > config.maxPriceDiffRatio) return false;

      // Year constraint: max 2 years
      const yearDiff = Math.abs(candidate.year - targetVehicle.year);
      if (yearDiff > config.maxYearDiff) return false;

      return true;
    });

    const level1: RecommendationCandidate[] = [];
    const level2: RecommendationCandidate[] = [];
    const level3: RecommendationCandidate[] = [];

    const targetBrand = targetVehicle.brand.trim().toLowerCase();
    const targetModel = targetVehicle.model.trim().toLowerCase();

    for (const candidate of eligibleCandidates) {
      const candidateBrand = candidate.brand.trim().toLowerCase();
      const candidateModel = candidate.model.trim().toLowerCase();

      // Determine Priority Level
      if (candidateBrand === targetBrand && candidateModel === targetModel) {
        // Level 1: Same brand and same model
        const scored = this.calculateScore(targetVehicle, candidate, 1, config);
        level1.push({
          vehicle: candidate,
          level: 1,
          score: scored.score,
          breakdown: scored.breakdown,
          priceDiff: scored.priceDiff,
          priceDiffRatio: scored.priceDiffRatio,
          yearDiff: scored.yearDiff,
        });
      } else if (candidateBrand === targetBrand && candidate.bodyType === targetVehicle.bodyType) {
        // Level 2: Same brand, other model of same class/bodyType
        const scored = this.calculateScore(targetVehicle, candidate, 2, config);
        level2.push({
          vehicle: candidate,
          level: 2,
          score: scored.score,
          breakdown: scored.breakdown,
          priceDiff: scored.priceDiff,
          priceDiffRatio: scored.priceDiffRatio,
          yearDiff: scored.yearDiff,
        });
      } else if (candidate.bodyType === targetVehicle.bodyType) {
        // Level 3: Other brands of the same class/bodyType
        const scored = this.calculateScore(targetVehicle, candidate, 3, config);
        level3.push({
          vehicle: candidate,
          level: 3,
          score: scored.score,
          breakdown: scored.breakdown,
          priceDiff: scored.priceDiff,
          priceDiffRatio: scored.priceDiffRatio,
          yearDiff: scored.yearDiff,
        });
      }
    }

    // Sort function according to Section 6:
    // 1. Similarity score descending
    // 2. Smaller price difference ascending
    // 3. Smaller year difference ascending
    const sorter = (a: RecommendationCandidate, b: RecommendationCandidate) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      if (a.priceDiff !== b.priceDiff) {
        return a.priceDiff - b.priceDiff;
      }
      return a.yearDiff - b.yearDiff;
    };

    level1.sort(sorter);
    level2.sort(sorter);
    level3.sort(sorter);

    // Combine strictly in order of levels (Level 1 > Level 2 > Level 3)
    const combined: RecommendationCandidate[] = [];
    const addedIds = new Set<string>();

    const appendItems = (list: RecommendationCandidate[]) => {
      for (const item of list) {
        if (!addedIds.has(item.vehicle.id)) {
          addedIds.add(item.vehicle.id);
          combined.push(item);
        }
      }
    };

    appendItems(level1);
    appendItems(level2);
    appendItems(level3);

    const total = combined.length;
    const startIndex = (page - 1) * limit;
    const paginatedItems = combined.slice(startIndex, startIndex + limit);
    const hasMore = startIndex + limit < total;

    return {
      targetVehicleId: targetVehicle.id,
      total,
      page,
      limit,
      hasMore,
      items: paginatedItems,
    };
  }
}
