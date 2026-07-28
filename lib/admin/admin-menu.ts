import {
  LayoutDashboard,
  BookOpen,
  Library,
  FolderOpen,
  ImageIcon,
  CalendarDays,
  Users,
  GraduationCap,
  HeartHandshake,
  ClipboardList,
  UserCog,
  Shield,
  Settings,
  type LucideIcon,
} from "lucide-react";

export interface AdminMenuItem {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
}

export interface AdminMenuSection {
  title: string;
  items: AdminMenuItem[];
}

export const adminMenu: AdminMenuSection[] = [
  {
    title: "Principal",
    items: [
      {
        label: "Dashboard",
        href: "/admin",
        icon: LayoutDashboard,
      },
    ],
  },

  {
    title: "Contenido",
    items: [
      {
        label: "Sermones",
        href: "/admin/sermones",
        icon: BookOpen,
      },
      {
        label: "Devocionales",
        href: "/admin/devocionales",
        icon: Library,
      },
      {
        label: "Estudios Bíblicos",
        href: "/admin/estudios",
        icon: BookOpen,
      },
      {
        label: "Recursos",
        href: "/admin/recursos",
        icon: FolderOpen,
      },
      {
        label: "Galería",
        href: "/admin/galeria",
        icon: ImageIcon,
      },
    ],
  },

  {
    title: "Ministerio",
    items: [
      {
        label: "Eventos",
        href: "/admin/eventos",
        icon: CalendarDays,
      },
      {
        label: "Células",
        href: "/admin/celulas",
        icon: Users,
      },
      {
        label: "Discipulado",
        href: "/admin/discipulado",
        icon: GraduationCap,
      },
      {
        label: "Solicitudes de Oración",
        href: "/admin/oracion",
        icon: HeartHandshake,
      },
      {
        label: "Seguimiento",
        href: "/admin/seguimiento",
        icon: ClipboardList,
      },
    ],
  },

  {
    title: "Administración",
    items: [
      {
        label: "Usuarios",
        href: "/admin/usuarios",
        icon: UserCog,
      },
      {
        label: "Roles y Permisos",
        href: "/admin/roles",
        icon: Shield,
      },
      {
        label: "Configuración",
        href: "/admin/configuracion",
        icon: Settings,
      },
      {
        label: "Auditoría",
        href: "/admin/auditoria",
        icon: ClipboardList,
      },
    ],
  },
];