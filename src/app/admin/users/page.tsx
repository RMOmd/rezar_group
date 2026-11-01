"use client";

import { useState } from "react";
import { Users, Shield, UserPlus, Lock, Unlock, Mail, ShieldAlert } from "lucide-react";
import { AdminRole } from "@/context/AdminAuthContext";

interface UserItem {
  id: string;
  name: string;
  email: string;
  role: AdminRole;
  isActive: boolean;
  createdAt: string;
  lastLogin: string;
}

export default function AdminUsersPage() {
  const [usersList, setUsersList] = useState<UserItem[]>([
    {
      id: "u1",
      name: "Данило (Super Admin)",
      email: "admin@rezargroup.com",
      role: "super_admin",
      isActive: true,
      createdAt: "2024-01-01",
      lastLogin: "Сьогодні, 14:15",
    },
    {
      name: "Олександр (Контент-менеджер)",
      id: "u2",
      email: "manager@rezargroup.com",
      role: "manager",
      isActive: true,
      createdAt: "2024-02-15",
      lastLogin: "Вчора, 18:30",
    },
    {
      id: "u3",
      name: "Ігор (Старший адміністратор)",
      email: "ihor.admin@rezargroup.com",
      role: "admin",
      isActive: true,
      createdAt: "2024-03-01",
      lastLogin: "2 дні тому",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState<AdminRole>("manager");

  const handleToggleActive = (id: string) => {
    setUsersList((prev) =>
      prev.map((u) => (u.id === id ? { ...u, isActive: !u.isActive } : u))
    );
  };

  const handleRoleChange = (id: string, role: AdminRole) => {
    setUsersList((prev) =>
      prev.map((u) => (u.id === id ? { ...u, role } : u))
    );
  };

  const handleCreateUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmail.trim() || !newName.trim()) return;

    const newUser: UserItem = {
      id: `u_${Date.now()}`,
      name: newName.trim(),
      email: newEmail.trim(),
      role: newRole,
      isActive: true,
      createdAt: new Date().toISOString().split("T")[0],
      lastLogin: "Ще не входив",
    };

    setUsersList([...usersList, newUser]);
    setIsModalOpen(false);
    setNewEmail("");
    setNewName("");
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Управління користувачами та RBAC</h2>
          <p className="text-xs text-zinc-400 mt-0.5">
            Контроль доступу, ролей (Super Admin, Admin, Manager) та безпеки
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-md cursor-pointer self-start sm:self-auto"
        >
          <UserPlus className="w-4 h-4" />
          <span>Створити користувача</span>
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-[#121215] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-zinc-800 bg-[#16161A] text-zinc-400 font-mono text-[11px]">
                <th className="py-3 px-4">Користувач</th>
                <th className="py-3 px-3">Роль (RBAC)</th>
                <th className="py-3 px-3">Статус</th>
                <th className="py-3 px-3">Дата реєстрації</th>
                <th className="py-3 px-3">Остання активність</th>
                <th className="py-3 px-4 text-right">Дія</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {usersList.map((u) => (
                <tr key={u.id} className="hover:bg-zinc-800/30">
                  <td className="py-3 px-4">
                    <div className="font-semibold text-white">{u.name}</div>
                    <div className="text-[11px] text-zinc-400 font-mono">{u.email}</div>
                  </td>
                  <td className="py-3 px-3">
                    <select
                      value={u.role}
                      onChange={(e) => handleRoleChange(u.id, e.target.value as AdminRole)}
                      className="bg-[#18181C] border border-zinc-800 rounded-lg p-1.5 text-xs text-white cursor-pointer"
                    >
                      <option value="super_admin">Super Admin (Повний доступ)</option>
                      <option value="admin">Admin (Каталог + Синхр.)</option>
                      <option value="manager">Manager (Перегляд + Редагування)</option>
                    </select>
                  </td>
                  <td className="py-3 px-3">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                      u.isActive
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                    }`}>
                      {u.isActive ? "Активний" : "Заблоковано"}
                    </span>
                  </td>
                  <td className="py-3 px-3 font-mono text-zinc-400 text-[11px]">{u.createdAt}</td>
                  <td className="py-3 px-3 font-mono text-zinc-300 text-[11px]">{u.lastLogin}</td>
                  <td className="py-3 px-4 text-right">
                    <button
                      type="button"
                      onClick={() => handleToggleActive(u.id)}
                      className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                        u.isActive
                          ? "border-zinc-800 text-zinc-400 hover:text-rose-400 hover:border-rose-500/30"
                          : "border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
                      }`}
                      title={u.isActive ? "Заблокувати" : "Розблокувати"}
                    >
                      {u.isActive ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Add User */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#141416] border border-zinc-800 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-4">
            <h3 className="text-base font-bold text-white">Створити нового адміністратора</h3>
            <form onSubmit={handleCreateUser} className="space-y-4">
              <div>
                <label className="block text-xs text-zinc-400 mb-1">Повне ім&apos;я</label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="напр. Дмитро Коваленко"
                  className="w-full bg-[#18181C] border border-zinc-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="block text-xs text-zinc-400 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="manager@rezargroup.com"
                  className="w-full bg-[#18181C] border border-zinc-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="block text-xs text-zinc-400 mb-1">Роль (Рівень доступу)</label>
                <select
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value as AdminRole)}
                  className="w-full bg-[#18181C] border border-zinc-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-white cursor-pointer"
                >
                  <option value="manager">Manager (Перегляд і редагування)</option>
                  <option value="admin">Admin (Каталог, фото і синхронізація)</option>
                  <option value="super_admin">Super Admin (Повний контроль)</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 text-xs hover:text-white cursor-pointer"
                >
                  Скасувати
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-white text-black text-xs font-bold hover:bg-zinc-200 cursor-pointer"
                >
                  Зберегти
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
