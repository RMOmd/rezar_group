"use client";

import { usePathname } from "next/navigation";
import { AdminAuthProvider } from "@/context/AdminAuthContext";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminHeader } from "@/components/admin/AdminHeader";

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  if (isLoginPage) {
    return <div className="min-h-screen bg-[#09090B] flex items-center justify-center p-4">{children}</div>;
  }

  return (
    <div className="flex h-screen bg-[#09090B] text-zinc-100 overflow-hidden">
      <AdminSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto p-6 lg:p-8 bg-[#09090B]">
          {children}
        </main>
      </div>
    </div>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminAuthProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </AdminAuthProvider>
  );
}
