import {
  BookOpen,
  CalendarDays,
  Users,
  Video,
} from "lucide-react";

import SystemStatus from "./SystemStatus";

const activities = [
  {
    title: "Nuevo sermón publicado",
    description: "El Poder del Espíritu Santo",
    icon: BookOpen,
    time: "10 min",
  },
  {
    title: "Nuevo evento",
    description: "Culto Evangelístico",
    icon: CalendarDays,
    time: "35 min",
  },
  {
    title: "Nuevo miembro",
    description: "José Martínez",
    icon: Users,
    time: "1 h",
  },
  {
    title: "Nuevo video",
    description: "Escuela Dominical",
    icon: Video,
    time: "2 h",
  },
];

export default function RecentActivity() {
  return (
    <div className="space-y-6">
      <SystemStatus />

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-xl font-bold text-slate-900">
          Actividad reciente
        </h2>

        <div className="space-y-5">
          {activities.map((activity) => {
            const Icon = activity.icon;

            return (
              <div
                key={activity.title}
                className="flex items-start gap-4 border-b border-slate-100 pb-5 last:border-none"
              >
                <div className="rounded-xl bg-slate-100 p-3">
                  <Icon className="h-5 w-5 text-slate-700" />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-slate-800">
                    {activity.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {activity.description}
                  </p>
                </div>

                <span className="text-xs text-slate-400">
                  {activity.time}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}