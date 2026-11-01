import { notFound } from "next/navigation";
import { VehicleService } from "@/services/vehicleService";
import { VehicleDetailClient } from "./VehicleDetailClient";
import { CatalogClient } from "@/components/catalog/CatalogClient";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata(props: PageProps) {
  const { slug } = await props.params;

  if (!slug || slug.length === 0) {
    return { title: "Каталог автомобілів — REZAR GROUP" };
  }

  // 1. Single slug: Vehicle ID OR Brand Slug
  if (slug.length === 1) {
    const segment = slug[0];

    // Check if it's a specific vehicle
    const vehicle = await VehicleService.getVehicleById(segment);
    if (vehicle) {
      return {
        title: `${vehicle.brand} ${vehicle.model} ${vehicle.year} (${vehicle.price.toLocaleString()} $) — REZAR GROUP`,
        description: vehicle.description.slice(0, 160),
        alternates: {
          canonical: `/catalog/${vehicle.id}`,
        },
        openGraph: {
          title: `${vehicle.brand} ${vehicle.model} ${vehicle.year}`,
          description: vehicle.description.slice(0, 160),
          images: vehicle.images.slice(0, 1),
        },
      };
    }

    // Check if it's a brand slug
    const brand = await VehicleService.getBrandBySlug(segment);
    if (brand) {
      return {
        title: `Купити ${brand.name} в наявності — REZAR GROUP`,
        description: `Каталог автомобілів ${brand.name} в наявності та в дорозі в REZAR GROUP. Офіційна історія з Європи, гарантія прозорості та повний супровід.`,
        alternates: {
          canonical: `/catalog/${brand.slug}`,
        },
        openGraph: {
          title: `Автомобілі ${brand.name} в наявності — REZAR GROUP`,
          description: `Преміальні автомобілі ${brand.name} в автосалоні REZAR GROUP.`,
        },
      };
    }

    return { title: "Сторінку не знайдено — REZAR GROUP" };
  }

  // 2. Two slugs: Brand Slug + Model Slug
  if (slug.length === 2) {
    const [brandSlug, modelSlug] = slug;
    const brand = await VehicleService.getBrandBySlug(brandSlug);
    const model = await VehicleService.getModelBySlug(brandSlug, modelSlug);

    if (brand && model) {
      return {
        title: `${brand.name} ${model.name} в наявності — REZAR GROUP`,
        description: `Купити ${brand.name} ${model.name} в автосалоні REZAR GROUP. Офіційна європейська історія, перевірений пробіг, лізинг та доставка.`,
        alternates: {
          canonical: `/catalog/${brand.slug}/${model.slug}`,
        },
        openGraph: {
          title: `${brand.name} ${model.name} — REZAR GROUP`,
          description: `Преміальні автомобілі ${brand.name} ${model.name} в наявності.`,
        },
      };
    }

    return { title: "Сторінку не знайдено — REZAR GROUP" };
  }

  return { title: "Сторінку не знайдено — REZAR GROUP" };
}

export default async function CatalogDynamicPage(props: PageProps) {
  const { slug } = await props.params;

  if (!slug || slug.length === 0 || slug.length > 2) {
    notFound();
  }

  // Case 1: Single segment (/catalog/porsche OR /catalog/porsche-911-gt3-2023)
  if (slug.length === 1) {
    const segment = slug[0];

    // Check if it's a vehicle
    const vehicle = await VehicleService.getVehicleById(segment);
    if (vehicle) {
      const [similarVehicles, similarCandidates] = await Promise.all([
        VehicleService.getSimilarVehicles(vehicle, 12),
        VehicleService.getSimilarCandidates(vehicle, 12),
      ]);

      return (
        <VehicleDetailClient
          vehicle={vehicle}
          similarVehicles={similarVehicles}
          similarCandidates={similarCandidates}
        />
      );
    }

    // Check if it's a brand
    const brand = await VehicleService.getBrandBySlug(segment);
    if (brand) {
      const [brands, bounds, initialVehiclesData] = await Promise.all([
        VehicleService.getBrands(),
        VehicleService.getFilterBounds(),
        VehicleService.getVehicles(
          { brand: brand.name, status: "all_active" },
          "newest",
          1,
          24
        ),
      ]);

      return (
        <CatalogClient
          initialBrands={brands}
          bounds={bounds}
          initialVehicles={initialVehiclesData.vehicles}
          initialTotal={initialVehiclesData.total}
          initialHasMore={initialVehiclesData.hasMore}
          activeBrand={brand}
        />
      );
    }

    // Neither vehicle nor brand found
    notFound();
  }

  // Case 2: Two segments (/catalog/porsche/911)
  if (slug.length === 2) {
    const [brandSlug, modelSlug] = slug;
    const brand = await VehicleService.getBrandBySlug(brandSlug);
    const model = await VehicleService.getModelBySlug(brandSlug, modelSlug);

    if (!brand || !model) {
      notFound();
    }

    const [brands, bounds, initialVehiclesData] = await Promise.all([
      VehicleService.getBrands(),
      VehicleService.getFilterBounds(),
      VehicleService.getVehicles(
        { brand: brand.name, model: model.name, status: "all_active" },
        "newest",
        1,
        24
      ),
    ]);

    return (
      <CatalogClient
        initialBrands={brands}
        bounds={bounds}
        initialVehicles={initialVehiclesData.vehicles}
        initialTotal={initialVehiclesData.total}
        initialHasMore={initialVehiclesData.hasMore}
        activeBrand={brand}
        activeModel={model}
      />
    );
  }

  notFound();
}
