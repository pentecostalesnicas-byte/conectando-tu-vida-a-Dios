import { LucideIcon } from "lucide-react";

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
        "rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            {title}
          </p>

          <h3 className="mt-3 text-3xl font-bold tracking-tight">
            {value}
          </h3>

          {description && (
            <p className="mt-2 text-sm text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        <div className="rounded-xl bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </div>
  );
}