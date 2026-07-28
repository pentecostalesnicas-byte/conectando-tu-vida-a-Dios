"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AdminLogo from "./AdminLogo";
import { adminMenu } from "@/lib/admin/admin-menu";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-950 text-white">
      {/* ================= LOGO ================= */}
      <div className="border-b border-slate-800 px-6 py-6">
        <AdminLogo />
      </div>

      {/* ================= MENÚ ================= */}
      <nav className="flex-1 overflow-y-auto px-4 py-6">
        {adminMenu.map((section) => (
          <div key={section.title} className="mb-8">
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              {section.title}
            </p>

            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;

                const isActive =
                  pathname === item.href ||
                  (item.href !== "/admin" &&
                    pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-200 ${
                      isActive
                        ? "bg-amber-500 text-slate-900 shadow-lg"
                        : "text-slate-300 hover:bg-slate-900 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 flex-shrink-0" />

                      <span className="text-sm font-medium">
                        {item.label}
                      </span>
                    </div>

                    {item.badge && (
                      <span
                        className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                          isActive
                            ? "bg-slate-900 text-white"
                            : "bg-slate-800 text-slate-300"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* ================= FOOTER ================= */}
      <div className="border-t border-slate-800 p-5">
        <div className="rounded-2xl bg-slate-900 p-4">
          <p className="text-xs uppercase tracking-widest text-slate-500">
            Plataforma
          </p>

          <h3 className="mt-2 text-sm font-semibold text-white">
            BETEL ADN
          </h3>

          <p className="mt-1 text-xs text-slate-400">
            Centro de Operaciones Ministeriales
          </p>

          <div className="mt-4 h-px bg-slate-800" />

          <p className="mt-3 text-xs text-slate-500">
            Versión 1.0.0
          </p>
        </div>
      </div>
    </aside>
  );
}