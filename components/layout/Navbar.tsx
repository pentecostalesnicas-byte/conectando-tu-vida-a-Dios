"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/20 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-white tracking-wide"
        >
          BETEL
        </Link>

        {/* Menú */}
        <nav className="hidden md:flex items-center gap-8 text-white font-medium">
          <Link href="/">Inicio</Link>
          <Link href="#">Sermones</Link>
          <Link href="#">Estudios</Link>
          <Link href="#">Videos</Link>
          <Link href="#">Biblioteca</Link>
          <Link href="#">Contacto</Link>
        </nav>

        {/* Botón */}
        <button className="rounded-lg bg-amber-500 px-5 py-2 font-semibold text-slate-900 hover:bg-amber-400 transition">
          Pedir Oración
        </button>
      </div>
    </header>
  );
}