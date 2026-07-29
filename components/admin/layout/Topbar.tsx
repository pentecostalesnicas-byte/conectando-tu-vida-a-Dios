import {
  Bell,
  Moon,
  Search,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">
      {/* Lado izquierdo */}
      <div>
        <p className="text-sm font-medium text-slate-500">
          Panel Administrativo
        </p>

        <h2 className="text-2xl font-bold text-slate-900">
          Dashboard
        </h2>
      </div>

      {/* Centro */}
      <div className="hidden w-full max-w-md px-10 lg:block">
        <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
          <Search className="mr-3 h-5 w-5 text-slate-400" />

          <input
            type="text"
            placeholder="Buscar..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Lado derecho */}
      <div className="flex items-center gap-4">
        <button className="rounded-xl border border-slate-200 p-3 transition hover:bg-slate-100">
          <Bell className="h-5 w-5 text-slate-600" />
        </button>

        <button className="rounded-xl border border-slate-200 p-3 transition hover:bg-slate-100">
          <Moon className="h-5 w-5 text-slate-600" />
        </button>

        <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-500 font-bold text-white">
            M
          </div>

          <div className="hidden text-left lg:block">
            <p className="font-semibold text-slate-800">
              Pastor Mauricio
            </p>

            <p className="text-sm text-slate-500">
              Administrador
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}