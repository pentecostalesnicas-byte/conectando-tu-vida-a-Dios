import { ReactNode } from "react";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({
  children,
}: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex h-screen overflow-hidden">
        {/* ===================== SIDEBAR ===================== */}
        <aside className="hidden lg:flex">
          <Sidebar />
        </aside>

        {/* ===================== CONTENIDO ===================== */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* ===================== TOPBAR ===================== */}
          <Topbar />

          {/* ===================== CONTENIDO ===================== */}
          <main className="flex-1 overflow-y-auto bg-slate-100 p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}