"use client";

import { navigation } from "./navigation";
import SidebarItem from "./SidebarItem";

export default function SidebarNav() {
  return (
    <nav className="flex-1 overflow-y-auto px-4 py-6">
      {navigation.map((group) => (
        <div key={group.title} className="mb-8">
          <p className="mb-3 px-4 text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
            {group.title}
          </p>

          <div className="space-y-1">
            {group.items.map((item) => (
              <SidebarItem
                key={item.href}
                item={item}
              />
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}