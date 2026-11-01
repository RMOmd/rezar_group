"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";

export type AdminRole = "super_admin" | "admin" | "manager";

export interface AdminUser {
  id: string;
  email: string;
  fullName: string;
  role: AdminRole;
}

interface AdminAuthContextType {
  user: AdminUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  hasPermission: (allowedRoles: AdminRole[]) => boolean;
}

const AdminAuthContext = createContext<AdminAuthContextType | null>(null);

const STORAGE_KEY = "rezar_admin_auth";

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<AdminUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setUser(parsed.user);
        setToken(parsed.token);
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Route protection
  useEffect(() => {
    if (isLoading) return;

    const isLoginPage = pathname === "/admin/login";
    const isAdminRoute = pathname.startsWith("/admin");

    if (isAdminRoute && !isLoginPage && !user) {
      router.push("/admin/login");
    } else if (isLoginPage && user) {
      router.push("/admin");
    }
  }, [user, isLoading, pathname, router]);

  const login = async (email: string, pass: string) => {
    // Check credentials (supports local superadmin for dev & API fallback)
    if (
      (email === "admin@rezargroup.com" && pass === "rezar2026!") ||
      (email === "manager@rezargroup.com" && pass === "rezar2026!")
    ) {
      const role: AdminRole = email.startsWith("admin") ? "super_admin" : "manager";
      const authData = {
        user: {
          id: role === "super_admin" ? "usr_super_admin" : "usr_manager",
          email,
          fullName: role === "super_admin" ? "Super Admin" : "Менеджер Каталогу",
          role,
        },
        token: `mock_jwt_token_${Date.now()}`,
      };

      setUser(authData.user);
      setToken(authData.token);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(authData));
      return { success: true };
    }

    return {
      success: false,
      error: "Невірний email або пароль. Перевірте облікові дані.",
    };
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem(STORAGE_KEY);
    router.push("/admin/login");
  };

  const hasPermission = (allowedRoles: AdminRole[]) => {
    if (!user) return false;
    if (user.role === "super_admin") return true;
    return allowedRoles.includes(user.role);
  };

  return (
    <AdminAuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        hasPermission,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) {
    throw new Error("useAdminAuth must be used within an AdminAuthProvider");
  }
  return ctx;
}
