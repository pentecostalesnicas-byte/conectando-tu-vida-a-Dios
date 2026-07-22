import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-7 py-4 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-amber-500 text-slate-900 hover:bg-amber-400 hover:scale-105",
    secondary:
      "border border-white text-white hover:bg-white hover:text-slate-900",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </Link>
  );
}