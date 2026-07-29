import {
  BookOpen,
  CalendarDays,
  GraduationCap,
  Images,
  LayoutDashboard,
  Newspaper,
  Settings,
  Users,
  Video,
  FolderOpen,
  ImageIcon,
  Quote,
  BarChart3,
  Search,
} from "lucide-react";

import { NavigationGroup } from "@/types/navigation";

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
        title: "Estudios Bíblicos",
        href: "/admin/studies",
        icon: GraduationCap,
      },
      {
        title: "Devocionales",
        href: "/admin/devotionals",
        icon: Quote,
      },
      {
        title: "Noticias",
        href: "/admin/news",
        icon: Newspaper,
      },
    ],
  },

  {
    title: "MULTIMEDIA",
    items: [
      {
        title: "Imágenes",
        href: "/admin/images",
        icon: ImageIcon,
      },
      {
        title: "Videos",
        href: "/admin/videos",
        icon: Video,
      },
      {
        title: "Galería",
        href: "/admin/gallery",
        icon: Images,
      },
      {
        title: "Recursos",
        href: "/admin/resources",
        icon: FolderOpen,
      },
    ],
  },

  {
    title: "GESTIÓN",
    items: [
      {
        title: "Eventos",
        href: "/admin/events",
        icon: CalendarDays,
      },
      {
        title: "Usuarios",
        href: "/admin/users",
        icon: Users,
      },
    ],
  },

  {
    title: "SISTEMA",
    items: [
      {
        title: "SEO",
        href: "/admin/seo",
        icon: Search,
      },
      {
        title: "Estadísticas",
        href: "/admin/statistics",
        icon: BarChart3,
      },
      {
        title: "Configuración",
        href: "/admin/settings",
        icon: Settings,
      },
    ],
  },
];