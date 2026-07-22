import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Conectando tu Vida a Dios",
  description:
    "Ministerio Digital Cristiano dedicado a compartir la Palabra de Dios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}