import PrayerRequests from "./PrayerRequests";
import RecentActivity from "./RecentActivity";

export default function DashboardOverview() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
      <div className="space-y-6">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Dashboard Ejecutivo
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            Centro de Operaciones Ministeriales
          </h2>

          <p className="mt-3 max-w-2xl text-slate-500">
            Desde este panel podrás administrar todo el ecosistema BETEL ADN,
            visualizar estadísticas, monitorear la actividad del ministerio y
            gestionar el contenido del sitio web.
          </p>

          <div className="mt-8 flex h-80 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50">
            <div className="text-center">
              <h3 className="text-xl font-bold text-slate-800">
                Dashboard Analytics
              </h3>

              <p className="mt-3 text-slate-500">
                Google Analytics · Donaciones · Sermones · Estudios · Eventos
              </p>
            </div>
          </div>
        </section>

        <PrayerRequests />
      </div>

      <RecentActivity />
    </div>
  );
}