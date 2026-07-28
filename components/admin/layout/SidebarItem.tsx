"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationItem } from "./types";

interface SidebarItemProps {
  item: NavigationItem;
}

export default function SidebarItem({
  item,
}: SidebarItemProps) {
  const pathname = usePathname();

  const active = pathname === item.href;

  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className={`
        flex items-center gap-3 rounded-xl px-4 py-3
        transition-all duration-200
        ${
          active
            ? "bg-blue-600 text-white shadow-lg"
            : "text-slate-400 hover:bg-slate-900 hover:text-white"
        }
      `}
    >
      <Icon size={20} />

      <span className="text-sm font-medium">
        {item.title}
      </span>
    </Link>
  );
}