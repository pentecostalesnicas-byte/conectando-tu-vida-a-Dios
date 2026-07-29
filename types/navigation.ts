import { LucideIcon } from "lucide-react";

export interface NavigationItem {
  title: string;
  href: string;
  icon: LucideIcon;

  permission?: string;

  disabled?: boolean;

  badge?: string;
}

export interface NavigationGroup {
  title: string;
  items: NavigationItem[];
}