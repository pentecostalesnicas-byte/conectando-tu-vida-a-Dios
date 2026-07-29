import { ReactNode } from "react";

interface DataTableProps {
  children: ReactNode;
}

export default function DataTable({
  children,
}: DataTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          {children}
        </table>
      </div>
    </div>
  );
}