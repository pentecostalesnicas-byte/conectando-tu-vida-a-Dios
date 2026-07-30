import { Shield } from "lucide-react";

interface UserRoleBadgeProps {
  role: string;
}

const roleConfig: Record<
  string,
  {
    label: string;
    className: string;
  }
> = {
  SUPER_ADMIN: {
    label: "Super Admin",
    className:
      "bg-red-100 text-red-700 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20",
  },

  ADMIN: {
    label: "Administrador",
    className:
      "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20",
  },

  PASTOR: {
    label: "Pastor",
    className:
      "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20",
  },

  LIDER: {
    label: "Líder",
    className:
      "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
  },

  EDITOR: {
    label: "Editor",
    className:
      "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20",
  },
};

export default function UserRoleBadge({
  role,
}: UserRoleBadgeProps) {
  const config =
    roleConfig[role] ??
    {
      label: role,
      className:
        "bg-muted text-muted-foreground border-border",
    };

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold ${config.className}`}
    >
      <Shield className="h-3.5 w-3.5" />
      {config.label}
    </span>
  );
}