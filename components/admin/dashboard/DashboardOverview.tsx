export default function DashboardOverview() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Resumen
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            Estadísticas del sitio
          </h2>

          <p className="mt-2 text-slate-500">
            Próximamente podrás visualizar aquí el comportamiento de tu
            ministerio digital mediante gráficos y métricas en tiempo real.
          </p>
        </div>
      </div>

      <div className="mt-8 flex h-80 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50">
        <div className="text-center">
          <p className="text-lg font-semibold text-slate-700">
            Área reservada para gráficos
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Visitas • Recursos • Predicaciones • Eventos
          </p>
        </div>
      </div>
    </section>
  );
}