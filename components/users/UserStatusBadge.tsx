import { CheckCircle2, XCircle } from "lucide-react";

interface UserStatusBadgeProps {
  active: boolean;
}

export default function UserStatusBadge({
  active,
}: UserStatusBadgeProps) {
  if (active) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
        <CheckCircle2 className="h-3.5 w-3.5" />
        Activo
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-red-200 bg-red-100 px-3 py-1 text-xs font-semibold text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400">
      <XCircle className="h-3.5 w-3.5" />
      Inactivo
    </span>
  );
}