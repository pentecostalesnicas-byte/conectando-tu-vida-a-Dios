import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageGridProps {
  children: ReactNode;
  className?: string;
}

export default function PageGrid({
  children,
  className,
}: PageGridProps) {
  return (
    <div
      className={cn(
        "grid gap-6 sm:grid-cols-2 xl:grid-cols-4",
        className
      )}
    >
      {children}
    </div>
  );
}