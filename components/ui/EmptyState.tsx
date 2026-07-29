import { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function EmptyState({
  icon: Icon,
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card px-8 py-16 text-center">
      <div className="mb-6 rounded-2xl bg-primary/10 p-4">
        <Icon className="h-10 w-10 text-primary" />
      </div>

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 max-w-md text-muted-foreground">
        {description}
      </p>
    </div>
  );
}