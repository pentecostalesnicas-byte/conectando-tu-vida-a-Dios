import { LogOut } from "lucide-react";

export default function SidebarFooter() {
  return (
    <div className="border-t border-slate-700 p-5">
      <div className="mb-4">
        <p className="font-semibold text-white">
          Pastor Mauricio
        </p>

        <p className="text-sm text-slate-400">
          Administrador
        </p>
      </div>

      <button
        className="
          flex
          w-full
          items-center
          gap-3
          rounded-xl
          px-4
          py-3
          text-slate-300
          transition
          hover:bg-slate-800
          hover:text-white
        "
      >
        <LogOut size={18} />

        Cerrar sesión
      </button>
    </div>
  );
}