import { Heart } from "lucide-react";

const prayers = [
  {
    name: "María López",
    request: "Oración por sanidad.",
  },
  {
    name: "Carlos Pérez",
    request: "Restauración familiar.",
  },
  {
    name: "Anónimo",
    request: "Necesidad económica.",
  },
];

export default function PrayerRequests() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <Heart className="h-6 w-6 text-red-500" />

        <h2 className="text-xl font-bold text-slate-900">
          Peticiones de oración
        </h2>
      </div>

      <div className="space-y-5">
        {prayers.map((prayer) => (
          <div
            key={prayer.name + prayer.request}
            className="rounded-2xl bg-slate-50 p-5"
          >
            <h3 className="font-semibold text-slate-800">
              {prayer.name}
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              {prayer.request}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}