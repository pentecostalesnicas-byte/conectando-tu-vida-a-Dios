import { ArrowUpRight, LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  className?: string;
}

export default function MetricCard({
  title,
  value,
  description,
  icon: Icon,
  className,
}: MetricCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl",
        className
      )}
    >
      {/* Decoración */}
      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-amber-100/40 blur-3xl transition-all duration-300 group-hover:bg-amber-200/60" />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            {title}
          </p>

          <h3 className="mt-4 text-5xl font-extrabold tracking-tight text-slate-900">
            {value}
          </h3>

          {description && (
            <p className="mt-3 text-sm text-slate-500">
              {description}
            </p>
          )}

          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1">
            <ArrowUpRight className="h-4 w-4 text-emerald-600" />

            <span className="text-sm font-semibold text-emerald-600">
              +18% este mes
            </span>
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 p-4 shadow-lg">
          <Icon className="h-7 w-7 text-white" />
        </div>
      </div>
    </div>
  );
}