import test from "node:test";
import assert from "node:assert/strict";
import { RecommendationEngine } from "../recommendationEngine";
import { Vehicle } from "../../types/vehicle";
import { DEFAULT_RECOMMENDATION_CONFIG } from "../../types/recommendation";

// Mock Target Vehicle (Porsche 911 Coupe, 2023, $200,000, 500hp, Petrol)
const mockTarget: Vehicle = {
  id: "target-porsche-911",
  brand_id: "brand_porsche",
  model_id: "model_porsche_911",
  brand: "Porsche",
  model: "911",
  trim: "Carrera GTS",
  year: 2023,
  price: 200000,
  mileage: 5000,
  fuelType: "petrol",
  engine: "3.0L Boxer-6",
  powerHp: 500,
  transmission: "robot",
  drive: "rear_wheel",
  bodyType: "coupe",
  colorExterior: "Agate Grey",
  colorInterior: "Black Leather",
  vin: "WP0AA000000000001",
  status: "in_stock",
  isNewArrival: false,
  createdAt: "2024-10-01T00:00:00Z",
  location: "Kyiv",
  description: "Test Porsche 911",
  features: [],
  images: ["https://example.com/porsche.jpg"],
};

test("1. Score Calculation - Perfect Match receives 100 points", () => {
  const perfectCandidate: Vehicle = {
    ...mockTarget,
    id: "candidate-exact",
  };

  const result = RecommendationEngine.calculateScore(
    mockTarget,
    perfectCandidate,
    1,
    DEFAULT_RECOMMENDATION_CONFIG
  );

  assert.equal(result.score, 100);
  assert.equal(result.breakdown.brandModelScore, 40);
  assert.equal(result.breakdown.priceScore, 25);
  assert.equal(result.breakdown.yearScore, 25);
  assert.equal(result.breakdown.engineFuelScore, 10);
});

test("2. Price Proximity Constraint - strictly enforces max 20% price deviation", () => {
  // $200,000 target: +19% ($238,000) is allowed; +21% ($242,000) must be rejected
  const allowedVehicle: Vehicle = {
    ...mockTarget,
    id: "allowed-price",
    price: 238000, // +19%
  };

  const rejectedVehicle: Vehicle = {
    ...mockTarget,
    id: "rejected-price",
    price: 242000, // +21%
  };

  const pool = [allowedVehicle, rejectedVehicle];
  const recommendations = RecommendationEngine.getSimilarVehicles(mockTarget, pool);

  assert.equal(recommendations.total, 1);
  assert.equal(recommendations.items[0].vehicle.id, "allowed-price");
});

test("3. Year Proximity Constraint - strictly enforces max 2 years deviation", () => {
  // Target year 2023: 2021 (2 years diff) is allowed; 2020 (3 years diff) must be rejected
  const allowedYearVehicle: Vehicle = {
    ...mockTarget,
    id: "allowed-year",
    year: 2021,
  };

  const rejectedYearVehicle: Vehicle = {
    ...mockTarget,
    id: "rejected-year",
    year: 2020,
  };

  const pool = [allowedYearVehicle, rejectedYearVehicle];
  const recommendations = RecommendationEngine.getSimilarVehicles(mockTarget, pool);

  assert.equal(recommendations.total, 1);
  assert.equal(recommendations.items[0].vehicle.id, "allowed-year");
});

test("4. Exclude Sold Vehicles and Target Vehicle itself", () => {
  const targetSelf: Vehicle = { ...mockTarget };
  const soldVehicle: Vehicle = {
    ...mockTarget,
    id: "sold-car",
    status: "sold",
  };
  const activeVehicle: Vehicle = {
    ...mockTarget,
    id: "active-car",
    status: "in_transit",
  };

  const pool = [targetSelf, soldVehicle, activeVehicle];
  const recommendations = RecommendationEngine.getSimilarVehicles(mockTarget, pool);

  assert.equal(recommendations.total, 1);
  assert.equal(recommendations.items[0].vehicle.id, "active-car");
});

test("5. Multi-Level Cascade - Priority: Level 1 > Level 2 > Level 3", () => {
  // Level 1: Same Brand, Same Model
  const level1Car: Vehicle = {
    ...mockTarget,
    id: "l1-car",
    model: "911",
    price: 215000, // 7.5% price diff
  };

  // Level 2: Same Brand, Other Model (e.g. 718 Cayman Coupe)
  const level2Car: Vehicle = {
    ...mockTarget,
    id: "l2-car",
    model: "718 Cayman",
    price: 198000, // 1% price diff (closer in price, but Level 2)
  };

  // Level 3: Other Brand, Same BodyType (e.g. BMW M8 Coupe)
  const level3Car: Vehicle = {
    ...mockTarget,
    id: "l3-car",
    brand: "BMW",
    model: "M8",
    price: 200000, // 0% price diff, but Level 3
  };

  const pool = [level3Car, level2Car, level1Car];
  const recommendations = RecommendationEngine.getSimilarVehicles(mockTarget, pool);

  assert.equal(recommendations.total, 3);
  assert.equal(recommendations.items[0].level, 1);
  assert.equal(recommendations.items[0].vehicle.id, "l1-car");

  assert.equal(recommendations.items[1].level, 2);
  assert.equal(recommendations.items[1].vehicle.id, "l2-car");

  assert.equal(recommendations.items[2].level, 3);
  assert.equal(recommendations.items[2].vehicle.id, "l3-car");
});

test("6. Sorting within same Level - Higher similarity score ranks first", () => {
  // Candidate A: 100% price match ($200k), identical year (2023)
  const candidateA: Vehicle = {
    ...mockTarget,
    id: "cand-a",
    price: 200000,
    year: 2023,
  };

  // Candidate B: $230,000 price (15% diff), 1 year diff (2022)
  const candidateB: Vehicle = {
    ...mockTarget,
    id: "cand-b",
    price: 230000,
    year: 2022,
  };

  const pool = [candidateB, candidateA];
  const recommendations = RecommendationEngine.getSimilarVehicles(mockTarget, pool);

  assert.equal(recommendations.items[0].vehicle.id, "cand-a");
  assert.ok(recommendations.items[0].score > recommendations.items[1].score);
});

test("7. Deterministic Tie-breaking - equal score sorts by smaller price diff, then year diff", () => {
  // Both Level 3 with equal score setup
  const carA: Vehicle = {
    ...mockTarget,
    id: "tie-a",
    brand: "Aston Martin",
    model: "Vantage",
    price: 205000, // $5,000 diff
    year: 2023,
  };

  const carB: Vehicle = {
    ...mockTarget,
    id: "tie-b",
    brand: "Ferrari",
    model: "Roma",
    price: 210000, // $10,000 diff
    year: 2023,
  };

  const pool = [carB, carA];
  const recommendations = RecommendationEngine.getSimilarVehicles(mockTarget, pool);

  assert.equal(recommendations.items[0].vehicle.id, "tie-a");
});

test("8. Configurable Criteria & Weights - ability to toggle criteria off", () => {
  const candidate: Vehicle = {
    ...mockTarget,
    id: "cand-toggle",
    price: 220000, // 10% diff
    year: 2022,    // 1 yr diff
  };

  // Default calculation
  const defaultScore = RecommendationEngine.calculateScore(
    mockTarget,
    candidate,
    1,
    DEFAULT_RECOMMENDATION_CONFIG
  );

  // Disable price criterion
  const customConfig = {
    ...DEFAULT_RECOMMENDATION_CONFIG,
    enabledCriteria: {
      ...DEFAULT_RECOMMENDATION_CONFIG.enabledCriteria,
      price: false,
    },
  };

  const customScore = RecommendationEngine.calculateScore(
    mockTarget,
    candidate,
    1,
    customConfig
  );

  assert.equal(customScore.breakdown.priceScore, 0);
  assert.ok(customScore.score < defaultScore.score);
});

test("9. Empty candidate pool returns total: 0 and empty items array", () => {
  const recommendations = RecommendationEngine.getSimilarVehicles(mockTarget, []);
  assert.equal(recommendations.total, 0);
  assert.equal(recommendations.items.length, 0);
  assert.equal(recommendations.hasMore, false);
});
