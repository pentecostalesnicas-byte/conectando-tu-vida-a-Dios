"use client";

import Link from "next/link";
import Image from "next/image";
import { HeartHandshake } from "lucide-react";

const menuItems = [
  { label: "Inicio", href: "/" },
  { label: "Sermones", href: "/sermons" },
  { label: "Estudios", href: "/studies" },
  { label: "Videos", href: "/videos" },
  { label: "Biblioteca", href: "/library" },
  { label: "Contacto", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-28 max-w-7xl items-center justify-between px-8">

        {/* ================= LOGO ================= */}

        <Link
          href="/"
          className="flex items-center gap-5 transition duration-300 hover:opacity-90"
        >
          <Image
            src="/images/logo/logo-ipun-betel.png"
            alt="IPUN BETEL"
            width={72}
            height={72}
            priority
            unoptimized
            className="h-16 w-16 object-contain"
          />

          <div className="leading-none -mt-1">

            <h1 className="text-4xl font-black tracking-wide">

              <span className="text-white">
                IPUN
              </span>

              <span className="ml-2 text-amber-400">
                BETEL
              </span>

            </h1>

            <p className="mt-2 text-xs uppercase tracking-[0.38em] text-slate-300">
              Conectando tu Vida a Dios
            </p>

          </div>
        </Link>

        {/* ================= MENÚ ================= */}

        <nav className="hidden md:flex items-center gap-10">

          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative text-lg font-semibold text-white transition-all duration-300 hover:text-amber-400 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}

        </nav>

        {/* ================= BOTÓN ================= */}

        <Link
          href="/prayer"
          className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 px-8 py-3 font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/25">
            <HeartHandshake className="h-5 w-5" />
          </div>

          <span className="whitespace-nowrap">
            Pedir Oración
          </span>
        </Link>

      </div>
    </header>
  );
}