import { ReactNode } from "react";
import Sidebar from "./Sidebar";

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
          <header className="flex h-20 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">
                BETEL ADN
              </h1>

              <p className="text-sm text-slate-500">
                Centro de Operaciones Ministeriales
              </p>
            </div>

            <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
              Bienvenido
            </div>
          </header>

          {/* ===================== CONTENIDO ===================== */}
          <main className="flex-1 overflow-y-auto bg-slate-100 p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}