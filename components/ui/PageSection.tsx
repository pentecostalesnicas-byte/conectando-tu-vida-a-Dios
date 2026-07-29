import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageSectionProps {
  title?: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function PageSection({
  title,
  description,
  actions,
  children,
  className,
}: PageSectionProps) {
  return (
    <section className={cn("space-y-5", className)}>
      {(title || actions) && (
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            {title && (
              <h2 className="text-xl font-semibold tracking-tight">
                {title}
              </h2>
            )}

            {description && (
              <p className="mt-1 text-sm text-muted-foreground">
                {description}
              </p>
            )}
          </div>

          {actions && (
            <div className="flex items-center gap-2">
              {actions}
            </div>
          )}
        </div>
      )}

      {children}
    </section>
  );
}