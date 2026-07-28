import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";

export default function Sidebar() {
  return (
    <aside className="hidden h-screen w-72 flex-col border-r border-slate-800 bg-slate-950 lg:flex">
      <SidebarHeader />

      <SidebarNav />

      <div className="border-t border-slate-800 p-6">
        <p className="font-semibold text-white">
          Pastor Mauricio
        </p>

        <p className="text-sm text-slate-400">
          Administrador
        </p>
      </div>
    </aside>
  );
}