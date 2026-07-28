import type { Metadata } from "next";
import AdminLayout from "@/components/admin/layout/AdminLayout";

export const metadata: Metadata = {
  title: "BETEL ADN | Centro de Operaciones Ministeriales",
  description:
    "Plataforma administrativa de BETEL ADN para la gestión integral del ministerio.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AdminLayout>{children}</AdminLayout>;
}