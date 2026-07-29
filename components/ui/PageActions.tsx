import { ReactNode } from "react";

interface PageActionsProps {
  children: ReactNode;
}

export default function PageActions({
  children,
}: PageActionsProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {children}
    </div>
  );
}