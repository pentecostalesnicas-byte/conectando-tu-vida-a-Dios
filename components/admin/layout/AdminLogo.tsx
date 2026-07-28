import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function AdminLogo() {
  return (
    <Link
      href="/admin"
      className="group flex items-center gap-4 transition-all duration-300"
    >
      {/* Logo */}
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 shadow-lg shadow-amber-500/20 transition-transform duration-300 group-hover:scale-105">
        <ShieldCheck className="h-7 w-7 text-slate-900" />
      </div>

      {/* Texto */}
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-wide text-white">
          BETEL ADN
        </span>

        <span className="text-sm font-medium text-amber-400">
          Centro de Operaciones
        </span>

        <span className="mt-1 text-xs text-slate-400">
          Tecnología al servicio del Reino de Dios
        </span>
      </div>
    </Link>
  );
}