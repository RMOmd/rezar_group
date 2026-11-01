"use client";

import { useState, useEffect, useTransition, useMemo, useRef } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { SlidersHorizontal, Search, Loader2, Layers, ChevronRight, RotateCcw } from "lucide-react";
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
import { VehicleService } from "@/services/vehicleService";
import { VehicleCard } from "@/components/catalog/VehicleCard";
import { FilterSidebar } from "@/components/catalog/FilterSidebar";
import { FilterDrawer } from "@/components/catalog/FilterDrawer";
import { ActiveFilterTags } from "@/components/catalog/ActiveFilterTags";
import { MappingAdminModal } from "@/components/admin/MappingAdminModal";
import { CatalogSyncService } from "@/services/catalogSyncService";
import { brands as allBrands } from "@/data/brands";
import { models as allModels } from "@/data/models";
import { useLanguage } from "@/context/LanguageContext";

interface CatalogClientProps {
  initialBrands: BrandOption[];
  bounds: FilterBounds;
  initialVehicles?: Vehicle[];
  initialTotal?: number;
  initialHasMore?: boolean;
  activeBrand?: BrandEntity;
  activeModel?: ModelEntity;
}

export function CatalogClient({
  initialBrands,
  bounds,
  initialVehicles = [],
  initialTotal = 0,
  initialHasMore = false,
  activeBrand,
  activeModel,
}: CatalogClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();
  const { t, locale } = useLanguage();

  // Admin mapping modal state
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [pendingCount, setPendingCount] = useState(() =>
    CatalogSyncService.getPendingItems().length
  );

  // Read initial filter values from URL params or props
  const [filters, setFilters] = useState<VehicleFilterParams>(() => {
    return {
      brand: activeBrand?.name || searchParams.get("brand") || undefined,
      model: activeModel?.name || searchParams.get("model") || undefined,
      yearFrom: searchParams.get("yearFrom")
        ? Number(searchParams.get("yearFrom"))
        : undefined,
      yearTo: searchParams.get("yearTo")
        ? Number(searchParams.get("yearTo"))
        : undefined,
      priceFrom: searchParams.get("priceFrom")
        ? Number(searchParams.get("priceFrom"))
        : undefined,
      priceTo: searchParams.get("priceTo")
        ? Number(searchParams.get("priceTo"))
        : undefined,
      mileageTo: searchParams.get("mileageTo")
        ? Number(searchParams.get("mileageTo"))
        : undefined,
      status:
        (searchParams.get("status") as VehicleFilterParams["status"]) ||
        "all_active",
      isNewArrival: searchParams.get("new") === "true",
      fuelType: searchParams.get("fuel") || undefined,
      bodyType: searchParams.get("body") || undefined,
      transmission: searchParams.get("trans") || undefined,
      searchQuery: searchParams.get("q") || undefined,
    };
  });

  const [sort, setSort] = useState<VehicleSortOption>(() => {
    return (searchParams.get("sort") as VehicleSortOption) || "newest";
  });

  const [page, setPage] = useState(1);
  const [vehicles, setVehicles] = useState<Vehicle[]>(initialVehicles);
  const [totalFound, setTotalFound] = useState(initialTotal);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [availableModels, setAvailableModels] = useState<ModelOption[]>([]);

  // Find effective brand and model entities for breadcrumbs & SEO routing
  const currentBrandEntity = useMemo(() => {
    if (activeBrand) return activeBrand;
    if (!filters.brand) return undefined;
    return allBrands.find(
      (b) => b.name.toLowerCase() === filters.brand!.toLowerCase()
    );
  }, [activeBrand, filters.brand]);

  const currentModelEntity = useMemo(() => {
    if (activeModel) return activeModel;
    if (!filters.model || !currentBrandEntity) return undefined;
    return allModels.find(
      (m) =>
        m.brand_id === currentBrandEntity.id &&
        m.name.toLowerCase() === filters.model!.toLowerCase()
    );
  }, [activeModel, filters.model, currentBrandEntity]);

  // Synchronize state with SEO URL routes (/catalog, /catalog/{brand}, /catalog/{brand}/{model})
  const updateUrlParams = (
    newFilters: VehicleFilterParams,
    newSort: VehicleSortOption
  ) => {
    const params = new URLSearchParams();

    // Query params for non-hierarchical filters
    if (newFilters.yearFrom) params.set("yearFrom", String(newFilters.yearFrom));
    if (newFilters.yearTo) params.set("yearTo", String(newFilters.yearTo));
    if (newFilters.priceFrom) params.set("priceFrom", String(newFilters.priceFrom));
    if (newFilters.priceTo) params.set("priceTo", String(newFilters.priceTo));
    if (newFilters.mileageTo) params.set("mileageTo", String(newFilters.mileageTo));
    if (newFilters.fuelType) params.set("fuel", newFilters.fuelType);
    if (newFilters.bodyType) params.set("body", newFilters.bodyType);
    if (newFilters.transmission) params.set("trans", newFilters.transmission);
    if (newFilters.status && newFilters.status !== "all_active") {
      params.set("status", newFilters.status);
    }
    if (newFilters.isNewArrival) params.set("new", "true");
    if (newFilters.searchQuery) params.set("q", newFilters.searchQuery);
    if (newSort !== "newest") params.set("sort", newSort);

    // Determine target clean SEO base URL
    let basePath = "/catalog";
    if (newFilters.brand) {
      const b = allBrands.find(
        (brand) => brand.name.toLowerCase() === newFilters.brand!.toLowerCase()
      );
      if (b) {
        basePath += `/${b.slug}`;
        if (newFilters.model) {
          const m = allModels.find(
            (model) =>
              model.brand_id === b.id &&
              model.name.toLowerCase() === newFilters.model!.toLowerCase()
          );
          if (m) {
            basePath += `/${m.slug}`;
          }
        }
      } else {
        // Fallback to query param if brand entity not recognized
        params.set("brand", newFilters.brand);
        if (newFilters.model) params.set("model", newFilters.model);
      }
    }

    const query = params.toString();
    const targetUrl = query ? `${basePath}?${query}` : basePath;

    startTransition(() => {
      router.replace(targetUrl, { scroll: false });
    });
  };

  // Load models whenever brand changes
  useEffect(() => {
    if (filters.brand) {
      VehicleService.getModels(filters.brand).then(setAvailableModels);
    } else {
      setAvailableModels([]);
    }
  }, [filters.brand]);

  // Fetch vehicles whenever filters, sort or page changes
  useEffect(() => {
    let isMounted = true;

    VehicleService.getVehicles(filters, sort, page, 24).then((res) => {
      if (!isMounted) return;
      setVehicles(res.vehicles);
      setTotalFound(res.total);
      setHasMore(res.hasMore);
      setIsLoadingMore(false);
    });

    return () => {
      isMounted = false;
    };
  }, [filters, sort, page]);

  // Handle filter changes (dependent logic)
  const handleFilterChange = (updated: Partial<VehicleFilterParams>) => {
    const next = { ...filters, ...updated };

    // Dependent filter: if brand changed, check if current model is still valid
    if (updated.brand !== undefined && updated.brand !== filters.brand) {
      if (!updated.brand) {
        delete next.brand;
        delete next.model;
      } else {
        const brandEntity = allBrands.find(
          (b) => b.name.toLowerCase() === updated.brand!.toLowerCase()
        );
        const validModels = brandEntity
          ? allModels.filter((m) => m.brand_id === brandEntity.id)
          : [];
        const isCurrentModelValid = validModels.some(
          (m) => m.name.toLowerCase() === next.model?.toLowerCase()
        );
        if (!isCurrentModelValid) {
          delete next.model;
        }
      }
    }

    setFilters(next);
    setPage(1);
    updateUrlParams(next, sort);
  };

  // Handle single filter tag removal
  const handleRemoveSingleFilter = (key: keyof VehicleFilterParams) => {
    const next = { ...filters };
    if (key === "brand") {
      delete next.brand;
      delete next.model;
    } else if (key === "yearFrom") {
      delete next.yearFrom;
      delete next.yearTo;
    } else if (key === "priceFrom") {
      delete next.priceFrom;
      delete next.priceTo;
    } else if (key === "status") {
      next.status = "all_active";
    } else if (key === "isNewArrival") {
      next.isNewArrival = false;
    } else {
      delete next[key];
    }

    setFilters(next);
    setPage(1);
    updateUrlParams(next, sort);
  };

  // Reset all filters
  const handleResetFilters = () => {
    const reset: VehicleFilterParams = {
      status: "all_active",
    };
    setFilters(reset);
    setPage(1);
    updateUrlParams(reset, sort);
  };

  // Quick switch model pill
  const handleSelectModel = (modelName?: string) => {
    handleFilterChange({ model: modelName });
  };

  // Handle sorting change
  const handleSortChange = (newSort: VehicleSortOption) => {
    setSort(newSort);
    setPage(1);
    updateUrlParams(filters, newSort);
  };

  const observerTarget = useRef<HTMLDivElement>(null);

  // Infinite scroll simulation: Load more vehicles
  const handleLoadMore = () => {
    if (hasMore && !isLoadingMore) {
      setIsLoadingMore(true);
      setTimeout(() => {
        setPage((prev) => prev + 1);
      }, 500);
    }
  };

  // Automated infinite scroll via IntersectionObserver
  useEffect(() => {
    if (!hasMore || isLoadingMore) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          handleLoadMore();
        }
      },
      { threshold: 0.1, rootMargin: "300px" }
    );

    const current = observerTarget.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [hasMore, isLoadingMore]);

  // Count active filters for mobile badge
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (filters.brand) count++;
    if (filters.model) count++;
    if (filters.yearFrom || filters.yearTo) count++;
    if (filters.priceFrom || filters.priceTo) count++;
    if (filters.mileageTo) count++;
    if (filters.fuelType) count++;
    if (filters.bodyType) count++;
    if (filters.transmission) count++;
    if (filters.status && filters.status !== "all_active") count++;
    if (filters.isNewArrival) count++;
    if (filters.searchQuery) count++;
    return count;
  }, [filters]);

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#0B0B0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEO Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-xs text-zinc-500 mb-6 flex-wrap" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">
            {locale === "en" ? "Home" : "Головна"}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
          <Link
            href="/catalog"
            className={`${!currentBrandEntity ? "text-zinc-200 font-medium" : "hover:text-white transition-colors"}`}
          >
            {locale === "en" ? "Catalog" : "Каталог"}
          </Link>
          {currentBrandEntity && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
              {currentModelEntity ? (
                <Link
                  href={`/catalog/${currentBrandEntity.slug}`}
                  className="hover:text-white transition-colors"
                >
                  {currentBrandEntity.name}
                </Link>
              ) : (
                <span className="text-zinc-200 font-medium">
                  {currentBrandEntity.name}
                </span>
              )}
            </>
          )}
          {currentModelEntity && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
              <span className="text-white font-medium">
                {currentModelEntity.name}
              </span>
            </>
          )}
        </nav>

        {/* Catalog Header */}
        <div className="pb-8 border-b border-zinc-800">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 block mb-2">
                {currentModelEntity
                  ? `${currentBrandEntity?.name} ${currentModelEntity.name}`
                  : currentBrandEntity
                  ? `${currentBrandEntity.name} ${locale === "en" ? "Catalog" : "Каталог"}`
                  : t.catalog.badge}
              </span>
              <h1 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
                {currentModelEntity ? (
                  <>
                    {currentBrandEntity?.name}{" "}
                    <span className="font-semibold">{currentModelEntity.name}</span>
                  </>
                ) : currentBrandEntity ? (
                  <>
                    Автомобілі <span className="font-semibold">{currentBrandEntity.name}</span>
                  </>
                ) : (
                  <>
                    {t.catalog.title1} <span className="font-semibold">{t.catalog.title2}</span>
                  </>
                )}
              </h1>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
                {currentModelEntity
                  ? `Всі доступні автомобілі ${currentBrandEntity?.name} ${currentModelEntity.name} в наявності та в дорозі.`
                  : currentBrandEntity
                  ? `Модельний ряд та автомобілі ${currentBrandEntity.name} у наявності від REZAR GROUP.`
                  : t.catalog.desc}
              </p>
            </div>

            {/* Quick Search & Supplier Sync Trigger */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-72">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  placeholder={t.catalog.searchPlaceholder}
                  value={filters.searchQuery || ""}
                  onChange={(e) =>
                    handleFilterChange({
                      searchQuery: e.target.value ? e.target.value : undefined,
                    })
                  }
                  className="w-full bg-[#141416] border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
                />
              </div>

              {/* Admin Supplier Mapping Tool Button */}
              <button
                onClick={() => setIsAdminModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-2 px-3 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                title="Синхронізація довідників марок і моделей з API Х-Авто"
              >
                <Layers className="w-4 h-4 text-amber-400" />
                <span className="font-medium">Х-Авто</span>
                {pendingCount > 0 && (
                  <span className="px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono text-[10px] font-bold border border-amber-500/30">
                    {pendingCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Dependent Horizontal Model Pills Bar (when a Brand is active) */}
          {currentBrandEntity && availableModels.length > 0 && (
            <div className="mt-6 pt-4 border-t border-zinc-800/60">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  Моделі {currentBrandEntity.name}
                </span>
                {filters.model && (
                  <button
                    onClick={() => handleSelectModel(undefined)}
                    className="text-xs text-zinc-400 hover:text-white transition-colors"
                  >
                    Показати всі {currentBrandEntity.name}
                  </button>
                )}
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
                <button
                  onClick={() => handleSelectModel(undefined)}
                  className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-colors ${
                    !filters.model
                      ? "bg-white text-black font-semibold"
                      : "bg-[#141416] text-zinc-400 hover:text-white border border-zinc-800"
                  }`}
                >
                  Всі моделі ({availableModels.reduce((acc, m) => acc + m.count, 0)})
                </button>
                {availableModels.map((m) => {
                  const isSelected = filters.model?.toLowerCase() === m.name.toLowerCase();
                  return (
                    <button
                      key={m.name}
                      onClick={() => handleSelectModel(isSelected ? undefined : m.name)}
                      className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                        isSelected
                          ? "bg-white text-black font-semibold"
                          : "bg-[#141416] text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700"
                      }`}
                    >
                      <span>{m.name}</span>
                      <span className={`text-[10px] font-mono ${isSelected ? "text-zinc-700" : "text-zinc-500"}`}>
                        {m.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Subheader Toolbar: Found count, Sorting & Mobile filter trigger */}
          <div className="mt-6 pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs text-zinc-400">
                {t.catalog.foundCount} <strong className="text-white font-mono">{totalFound}</strong>{" "}
                {t.catalog.vehiclesWord}
              </span>

              {/* Mobile Filter Button */}
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="lg:hidden inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 hover:text-white"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>{t.catalog.filtersBtn}</span>
                {activeFiltersCount > 0 && (
                  <span className="w-4 h-4 rounded-full bg-white text-black text-[10px] font-bold flex items-center justify-center">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              {/* Mobile Supplier Mapping Button */}
              <button
                onClick={() => setIsAdminModalOpen(true)}
                className="sm:hidden inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300"
              >
                <Layers className="w-3 h-3 text-amber-400" />
                <span>Х-Авто</span>
                {pendingCount > 0 && (
                  <span className="px-1 py-0.2 rounded-full bg-amber-500 text-black text-[9px] font-bold">
                    {pendingCount}
                  </span>
                )}
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-zinc-400 hidden sm:inline">{t.catalog.sortLabel}</span>
              <select
                value={sort}
                onChange={(e) =>
                  handleSortChange(e.target.value as VehicleSortOption)
                }
                className="bg-[#141416] border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-zinc-500 cursor-pointer"
              >
                <option value="newest">{t.catalog.sorts.newest}</option>
                <option value="price_asc">{t.catalog.sorts.price_asc}</option>
                <option value="price_desc">{t.catalog.sorts.price_desc}</option>
                <option value="year_desc">{t.catalog.sorts.year_desc}</option>
                <option value="mileage_asc">{t.catalog.sorts.mileage_asc}</option>
                <option value="oldest">{t.catalog.sorts.oldest}</option>
              </select>
            </div>
          </div>

          {/* Active Filter Chips */}
          <ActiveFilterTags
            filters={filters}
            onRemove={handleRemoveSingleFilter}
            onReset={handleResetFilters}
          />
        </div>

        {/* Main Catalog Layout: Sidebar + Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block lg:col-span-1 sticky top-24 self-start">
            <FilterSidebar
              filters={filters}
              onChange={handleFilterChange}
              onReset={handleResetFilters}
              brands={initialBrands}
              models={availableModels}
              bounds={bounds}
              totalFound={totalFound}
              className="max-h-[calc(100vh-7.5rem)]"
            />
          </div>

          {/* Vehicle Grid: 3 cols desktop, 2 cols mobile */}
          <div className="lg:col-span-3">
            {vehicles.length === 0 ? (
              <div className="text-center py-20 px-4 rounded-2xl bg-[#141416] border border-zinc-800">
                <Search className="w-10 h-10 text-zinc-500 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-1">
                  {filters.model
                    ? `У моделі «${filters.model}» немає автомобілів за обраними фільтрами`
                    : filters.brand
                    ? `У марки «${filters.brand}» немає автомобілів за обраними фільтрами`
                    : t.catalog.emptyTitle}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto mb-6">
                  {filters.model
                    ? "Спробуйте очистити вибір моделі або скинути інші фільтри, щоб побачити більше автомобілів."
                    : filters.brand
                    ? "Спробуйте змінити фільтри або переглянути всі марки автомобілів."
                    : t.catalog.emptyDesc}
                </p>
                <div className="flex items-center justify-center gap-3">
                  {filters.model && (
                    <button
                      onClick={() => handleSelectModel(undefined)}
                      className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Всі {filters.brand}</span>
                    </button>
                  )}
                  <button
                    onClick={handleResetFilters}
                    className="px-6 py-2.5 rounded-xl bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-colors"
                  >
                    {t.catalog.resetAll}
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6">
                  {vehicles.map((vehicle, idx) => (
                    <VehicleCard
                      key={vehicle.id}
                      vehicle={vehicle}
                      priority={idx < 6}
                    />
                  ))}
                </div>

                {/* Sentinel for automated infinite scroll */}
                <div ref={observerTarget} className="h-8 w-full pointer-events-none" />

                {/* Infinite Scroll / Load More Section */}
                {hasMore && (
                  <div className="mt-12 text-center">
                    <button
                      onClick={handleLoadMore}
                      disabled={isLoadingMore}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white text-xs font-semibold uppercase tracking-wider hover:bg-zinc-800 transition-all active:scale-95 disabled:opacity-60"
                    >
                      {isLoadingMore ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-zinc-400" />
                          <span>{t.catalog.loading}</span>
                        </>
                      ) : (
                        <span>{t.catalog.loadMore}</span>
                      )}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <FilterDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        filters={filters}
        onChange={handleFilterChange}
        onReset={handleResetFilters}
        brands={initialBrands}
        models={availableModels}
        bounds={bounds}
        totalFound={totalFound}
      />

      {/* Admin X-Auto Mapping Modal */}
      <MappingAdminModal
        isOpen={isAdminModalOpen}
        onClose={() => {
          setIsAdminModalOpen(false);
          setPendingCount(CatalogSyncService.getPendingItems().length);
        }}
      />
    </div>
  );
}
