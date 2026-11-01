import { NextRequest, NextResponse } from "next/server";
import { VehicleService } from "@/services/vehicleService";
import { RecommendationEngine } from "@/services/recommendationEngine";
import { VEHICLES } from "@/data/vehicles";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return VEHICLES.map((v) => ({ id: v.id }));
}

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, props: RouteParams) {
  try {
    const { id } = await props.params;

    if (!id) {
      return NextResponse.json(
        { error: "Vehicle ID is required" },
        { status: 400 }
      );
    }

    const targetVehicle = await VehicleService.getVehicleById(id);

    if (!targetVehicle) {
      return NextResponse.json(
        { error: "Vehicle not found" },
        { status: 404 }
      );
    }

    const page = 1;
    const limit = 12;

    const result = RecommendationEngine.getSimilarVehicles(
      targetVehicle,
      VEHICLES,
      { page, limit }
    );

    // Format output matching Section 9 specification
    const responsePayload = {
      targetVehicleId: targetVehicle.id,
      targetVehicleTitle: `${targetVehicle.brand} ${targetVehicle.model} (${targetVehicle.year})`,
      total: result.total,
      page: result.page,
      limit: result.limit,
      hasMore: result.hasMore,
      items: result.items.map((item) => ({
        id: item.vehicle.id,
        brand: item.vehicle.brand,
        model: item.vehicle.model,
        trim: item.vehicle.trim || null,
        year: item.vehicle.year,
        price: item.vehicle.price,
        mileage: item.vehicle.mileage,
        fuelType: item.vehicle.fuelType,
        transmission: item.vehicle.transmission,
        drive: item.vehicle.drive,
        bodyType: item.vehicle.bodyType,
        engine: item.vehicle.engine,
        powerHp: item.vehicle.powerHp,
        image: item.vehicle.images[0] || null,
        imagesCount: item.vehicle.images.length,
        status: item.vehicle.status,
        level: item.level,
        similarityScore: item.score,
        scoreBreakdown: item.breakdown,
        priceDifference: item.priceDiff,
        yearDifference: item.yearDiff,
      })),
    };

    return NextResponse.json(responsePayload, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
      },
    });
  } catch (error) {
    console.error("Error in /api/vehicles/[id]/similar:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
