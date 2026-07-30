import Link from "next/link";
import {
  BookOpen,
  CalendarDays,
  Plus,
  Users,
  Video,
  HandCoins,
} from "lucide-react";

const actions = [
  {
    title: "Nuevo Sermón",
    href: "/admin/sermons/new",
    icon: BookOpen,
  },
  {
    title: "Nuevo Estudio",
    href: "/admin/studies/new",
    icon: Plus,
  },
  {
    title: "Subir Multimedia",
    href: "/admin/media/upload",
    icon: Video,
  },
  {
    title: "Nuevo Evento",
    href: "/admin/events/new",
    icon: CalendarDays,
  },
  {
    title: "Miembros",
    href: "/admin/members",
    icon: Users,
  },
  {
    title: "Donaciones",
    href: "/admin/donations",
    icon: HandCoins,
  },
];

export default function QuickActions() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-slate-900">
        Accesos rápidos
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-amber-400 hover:bg-amber-50"
            >
              <div className="rounded-xl bg-amber-100 p-3">
                <Icon className="h-6 w-6 text-amber-600" />
              </div>

              <span className="font-semibold text-slate-800">
                {action.title}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}