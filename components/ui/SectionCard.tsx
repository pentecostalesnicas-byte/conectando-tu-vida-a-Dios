import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionCardProps {
  children: ReactNode;
  className?: string;
}

export default function SectionCard({
  children,
  className,
}: SectionCardProps) {
  return (
    <section
      className={cn(
        "rounded-2xl border border-border bg-card p-6 shadow-sm",
        className
      )}
    >
      {children}
    </section>
  );
}