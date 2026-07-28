import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface DashboardShellProps {
  children: React.ReactNode;
}

export default function DashboardShell({
  children,
}: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Área principal */}
        <div className="flex min-h-screen flex-1 flex-col">
          {/* Topbar */}
          <Topbar />

          {/* Contenido */}
          <main className="flex-1 overflow-y-auto p-8">
            <div className="mx-auto w-full max-w-7xl">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}