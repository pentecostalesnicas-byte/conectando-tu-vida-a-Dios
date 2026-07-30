export default function SermonsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Sermones
        </h1>

        <p className="text-slate-500 mt-2">
          Administra todas las predicaciones del ministerio.
        </p>
      </div>

      <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-20 text-center">
        <h2 className="text-2xl font-bold">
          Lista de Sermones
        </h2>

        <p className="mt-3 text-slate-500">
          Próximamente aparecerá aquí el listado conectado a PostgreSQL.
        </p>
      </div>
    </div>
  );
}