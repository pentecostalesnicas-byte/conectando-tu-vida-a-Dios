import {
  CheckCircle2,
  Database,
  Globe,
  Lock,
  Server,
} from "lucide-react";

const status = [
  {
    title: "Servidor",
    value: "Activo",
    icon: Server,
    color: "text-green-600",
  },
  {
    title: "Base de Datos",
    value: "Conectada",
    icon: Database,
    color: "text-green-600",
  },
  {
    title: "Autenticación",
    value: "En progreso",
    icon: Lock,
    color: "text-amber-500",
  },
  {
    title: "Sitio Web",
    value: "Operativo",
    icon: Globe,
    color: "text-green-600",
  },
];

export default function SystemStatus() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <CheckCircle2 className="h-6 w-6 text-green-600" />

        <h2 className="text-xl font-bold text-slate-900">
          Estado del Sistema
        </h2>
      </div>

      <div className="space-y-5">
        {status.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center justify-between rounded-2xl bg-slate-50 p-4"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white p-3 shadow-sm">
                  <Icon className={`h-5 w-5 ${item.color}`} />
                </div>

                <div>
                  <p className="font-semibold text-slate-800">
                    {item.title}
                  </p>

                  <p className="text-sm text-slate-500">
                    {item.value}
                  </p>
                </div>
              </div>

              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
          );
        })}
      </div>
    </section>
  );
}