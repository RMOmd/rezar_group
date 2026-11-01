import { Vehicle } from "./vehicle";

export type RecommendationLevel = 1 | 2 | 3;

export interface ScoreBreakdown {
  brandModelScore: number; // 0..40
  priceScore: number;      // 0..25
  yearScore: number;       // 0..25
  engineFuelScore: number; // 0..10
  totalScore: number;      // 0..100
}

export interface RecommendationCandidate {
  vehicle: Vehicle;
  level: RecommendationLevel;
  score: number;
  breakdown: ScoreBreakdown;
  priceDiff: number;       // Absolute difference in USD
  priceDiffRatio: number;  // 0.00..0.20
  yearDiff: number;        // 0..2
}

export interface RecommendationWeights {
  brandModelMax: number;   // default 40
  priceMax: number;        // default 25
  yearMax: number;         // default 25
  engineFuelMax: number;   // default 10
}

export interface RecommendationCriteriaToggle {
  brandModel: boolean;
  price: boolean;
  year: boolean;
  engineFuel: boolean;
}

export interface RecommendationConfig {
  maxPriceDiffRatio: number; // default 0.20 (20%)
  maxYearDiff: number;        // default 2 (years)
  weights: RecommendationWeights;
  enabledCriteria: RecommendationCriteriaToggle;
  limit: number;              // default 12
}

export const DEFAULT_RECOMMENDATION_CONFIG: RecommendationConfig = {
  maxPriceDiffRatio: 0.20,
  maxYearDiff: 2,
  weights: {
    brandModelMax: 40,
    priceMax: 25,
    yearMax: 25,
    engineFuelMax: 10,
  },
  enabledCriteria: {
    brandModel: true,
    price: true,
    year: true,
    engineFuel: true,
  },
  limit: 12,
};

export interface PaginatedSimilarResult {
  targetVehicleId: string;
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
  items: RecommendationCandidate[];
}
