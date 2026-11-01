"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Filter,
  Plus,
  Eye,
  EyeOff,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Clock,
  Archive,
  ArrowUpDown,
} from "lucide-react";
import { VEHICLES } from "@/data/vehicles";
import { Vehicle, VehicleStatus } from "@/types/vehicle";

export default function AdminCarsPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(VEHICLES);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [brandFilter, setBrandFilter] = useState<string>("all");
  const [publishFilter, setPublishFilter] = useState<string>("all");
  const [page, setPage] = useState(1);
  const pageSize = 15;

  // Unique brands
  const brands = useMemo(() => {
    return Array.from(new Set(VEHICLES.map((v) => v.brand))).sort();
  }, []);

  // Filtered vehicles
  const filteredVehicles = useMemo(() => {
    return vehicles.filter((car) => {
      if (search.trim()) {
        const query = search.toLowerCase();
        const matchTitle = `${car.brand} ${car.model}`.toLowerCase().includes(query);
        const matchVin = car.vin.toLowerCase().includes(query);
        const matchId = car.id.toLowerCase().includes(query);
        if (!matchTitle && !matchVin && !matchId) return false;
      }
      if (statusFilter !== "all" && car.status !== statusFilter) return false;
      if (brandFilter !== "all" && car.brand !== brandFilter) return false;
      return true;
    });
  }, [vehicles, search, statusFilter, brandFilter]);

  const totalPages = Math.ceil(filteredVehicles.length / pageSize) || 1;
  const paginatedVehicles = filteredVehicles.slice((page - 1) * pageSize, page * pageSize);

  const toggleStatus = (id: string, newStatus: VehicleStatus) => {
    setVehicles((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: newStatus } : c))
    );
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Ви дійсно бажаєте видалити ${name} з каталогу?`)) {
      setVehicles((prev) => prev.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header & Create Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Каталог автомобілів</h2>
          <p className="text-xs text-zinc-400 mt-0.5">
            Знайдено {filteredVehicles.length} з {vehicles.length} автомобілів
          </p>
        </div>

        <Link
          href="/admin/cars/new"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-md cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Додати автомобіль</span>
        </Link>
      </div>

      {/* Filters Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-[#121215] p-4 rounded-2xl border border-zinc-800">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="Пошук за назвою, VIN або ID..."
            className="w-full bg-[#18181C] border border-zinc-800 rounded-xl py-2 pl-9 pr-3 text-xs text-white focus:outline-none focus:border-white transition-colors"
          />
        </div>

        {/* Brand Filter */}
        <div>
          <select
            value={brandFilter}
            onChange={(e) => {
              setBrandFilter(e.target.value);
              setPage(1);
            }}
            className="w-full bg-[#18181C] border border-zinc-800 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-white cursor-pointer"
          >
            <option value="all">Всі марки ({brands.length})</option>
            {brands.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        {/* Status Filter */}
        <div>
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setPage(1);
            }}
            className="w-full bg-[#18181C] border border-zinc-800 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-white cursor-pointer"
          >
            <option value="all">Всі статуси наявності</option>
            <option value="in_stock">В наявності</option>
            <option value="in_transit">В дорозі</option>
            <option value="sold">Продано</option>
          </select>
        </div>

        {/* Clear Filters */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setStatusFilter("all");
              setBrandFilter("all");
              setPage(1);
            }}
            className="w-full py-2 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-300 hover:text-white transition-colors text-center cursor-pointer"
          >
            Скинути фільтри
          </button>
        </div>
      </div>

      {/* Vehicles Table */}
      <div className="bg-[#121215] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-zinc-800 bg-[#16161A] text-zinc-400 font-mono text-[11px]">
                <th className="py-3 px-4">Авто</th>
                <th className="py-3 px-3">Рік / Пробіг</th>
                <th className="py-3 px-3">Двигун / КПП</th>
                <th className="py-3 px-3">Ціна (USD)</th>
                <th className="py-3 px-3">VIN</th>
                <th className="py-3 px-3">Статус</th>
                <th className="py-3 px-3">Джерело</th>
                <th className="py-3 px-4 text-right">Дії</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {paginatedVehicles.map((car) => (
                <tr key={car.id} className="hover:bg-zinc-800/40 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-9 rounded-lg bg-zinc-900 border border-zinc-800 overflow-hidden relative shrink-0">
                        <Image
                          src={car.images[0] || "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=200&q=80"}
                          alt={car.model}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{car.brand} {car.model}</div>
                        <div className="text-[10px] text-zinc-400 font-mono">{car.trim || car.bodyType}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-3 font-mono">
                    <div className="text-white">{car.year}</div>
                    <div className="text-[10px] text-zinc-400">{(car.mileage / 1000).toFixed(0)} тис. км</div>
                  </td>
                  <td className="py-3 px-3">
                    <div className="text-zinc-300 text-[11px]">{car.engine}</div>
                    <div className="text-[10px] text-zinc-400 capitalize">{car.transmission} • {car.drive}</div>
                  </td>
                  <td className="py-3 px-3 font-mono font-bold text-white text-sm">
                    ${car.price.toLocaleString()}
                  </td>
                  <td className="py-3 px-3 font-mono text-[10px] text-zinc-400">
                    {car.vin}
                  </td>
                  <td className="py-3 px-3">
                    <select
                      value={car.status}
                      onChange={(e) => toggleStatus(car.id, e.target.value as VehicleStatus)}
                      className={`text-[10px] font-medium px-2 py-1 rounded-full border cursor-pointer focus:outline-none ${
                        car.status === "in_stock"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                          : car.status === "in_transit"
                          ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                          : "bg-zinc-800 text-zinc-400 border-zinc-700"
                      }`}
                    >
                      <option value="in_stock" className="bg-[#18181C] text-emerald-400">В наявності</option>
                      <option value="in_transit" className="bg-[#18181C] text-amber-400">В дорозі</option>
                      <option value="sold" className="bg-[#18181C] text-zinc-400">Продано</option>
                    </select>
                  </td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-800/80 text-zinc-300 border border-zinc-700/50">
                      supplier_feed
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/catalog/${car.id}`}
                        target="_blank"
                        className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                        title="Переглянути на сайті"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleDelete(car.id, `${car.brand} ${car.model}`)}
                        className="p-1.5 rounded-lg text-zinc-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer"
                        title="Видалити"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between p-4 border-t border-zinc-800 text-xs text-zinc-400 font-mono">
          <div>
            Показано {(page - 1) * pageSize + 1} - {Math.min(page * pageSize, filteredVehicles.length)} з {filteredVehicles.length}
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="p-1.5 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white disabled:opacity-30 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="px-3 py-1 bg-zinc-800 text-white rounded-lg">
              {page} / {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="p-1.5 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white disabled:opacity-30 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
