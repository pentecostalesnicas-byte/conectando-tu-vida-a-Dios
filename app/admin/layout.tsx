import type { Metadata } from "next";
import DashboardShell from "@/components/admin/layout/DashboardShell";

export const metadata: Metadata = {
  title: "BETEL ADN | Panel Administrativo",
  description: "Panel administrativo de BETEL ADN",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardShell>{children}</DashboardShell>;
}