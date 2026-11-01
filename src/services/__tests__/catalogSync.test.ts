import test from "node:test";
import assert from "node:assert";
import { CatalogSyncService } from "../catalogSyncService";

test("1. String Normalization removes punctuation, extra spaces and noise", () => {
  const normalized = CatalogSyncService.normalizeString("  PORSCHE   (AG) - Motorsport!  ");
  assert.strictEqual(normalized, "porsche ag motorsport");
});

test("2. Brand Alias Matching maps supplier variants to canonical brand_id", () => {
  const res1 = CatalogSyncService.matchBrand("PORSCHE AG");
  assert.strictEqual(res1.brand?.id, "brand_porsche");
  assert.ok(res1.confidence >= 90);

  const res2 = CatalogSyncService.matchBrand("Bayerische Motoren Werke");
  assert.strictEqual(res2.brand?.id, "brand_bmw");

  const res3 = CatalogSyncService.matchBrand("Mercedes Benz");
  assert.strictEqual(res3.brand?.id, "brand_mercedes_benz");
});

test("3. Model Matching finds canonical model within brand", () => {
  const porscheBrand = CatalogSyncService.matchBrand("Porsche").brand!;
  const res = CatalogSyncService.matchModel(porscheBrand, "911 Carrera 4S (992)");
  assert.strictEqual(res.model?.id, "model_porsche_911");
  assert.strictEqual(res.model?.name, "911");
});

test("4. Unknown supplier brand is NOT auto-published and goes to pending review", () => {
  const initialPending = CatalogSyncService.getPendingItems().length;
  const syncResult = CatalogSyncService.syncItem("NEW UNKNOWN HYPERCAR BRAND", "Hyper 1");

  assert.strictEqual(syncResult.status, "pending_review");
  assert.strictEqual(syncResult.brand, undefined);

  const currentPending = CatalogSyncService.getPendingItems();
  assert.strictEqual(currentPending.length, initialPending + 1);
});

test("5. Admin approval of pending supplier item creates persistent link", () => {
  const pending = CatalogSyncService.getPendingItems();
  const testItem = pending[0];
  assert.ok(testItem, "Should have at least one pending item");

  const success = CatalogSyncService.approveMapping(
    testItem.id,
    "brand_porsche",
    "model_porsche_911"
  );
  assert.strictEqual(success, true);

  const updatedPending = CatalogSyncService.getPendingItems();
  assert.ok(!updatedPending.some((p) => p.id === testItem.id), "Item should be removed from pending queue");
});
