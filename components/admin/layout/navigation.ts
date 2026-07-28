import {
  BookOpen,
  CalendarDays,
  GraduationCap,
  HandCoins,
  HandHeart,
  HeartHandshake,
  LayoutDashboard,
  Settings,
  Users,
  Video,
} from "lucide-react";

import { NavigationGroup } from "./types";

export const navigation: NavigationGroup[] = [
  {
    title: "GENERAL",
    items: [
      {
        title: "Dashboard",
        href: "/admin",
        icon: LayoutDashboard,
      },
    ],
  },

  {
    title: "CONTENIDO",
    items: [
      {
        title: "Sermones",
        href: "/admin/sermons",
        icon: BookOpen,
      },
      {
        title: "Estudios",
        href: "/admin/studies",
        icon: GraduationCap,
      },
      {
        title: "Multimedia",
        href: "/admin/media",
        icon: Video,
      },
    ],
  },

  {
    title: "MINISTERIO",
    items: [
      {
        title: "Eventos",
        href: "/admin/events",
        icon: CalendarDays,
      },
      {
        title: "Consejería",
        href: "/admin/counseling",
        icon: HandHeart,
      },
      {
        title: "Miembros",
        href: "/admin/members",
        icon: Users,
      },
      {
        title: "Peticiones",
        href: "/admin/prayers",
        icon: HeartHandshake,
      },
    ],
  },

  {
    title: "ADMINISTRACIÓN",
    items: [
      {
        title: "Donaciones",
        href: "/admin/donations",
        icon: HandCoins,
      },
      {
        title: "Configuración",
        href: "/admin/settings",
        icon: Settings,
      },
    ],
  },
];