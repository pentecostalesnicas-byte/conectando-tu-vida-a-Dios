import Link from "next/link";
import {
  Heart,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { dailyVerses } from "@/components/content/dailyVerses";

export default function HeroCard() {
  const today = new Date();

  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
      86400000
  );

  const verse = dailyVerses[dayOfYear % dailyVerses.length];

  return (
    <div className="relative w-full max-w-[440px] overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-10 shadow-[0_25px_70px_rgba(0,0,0,.45)] backdrop-blur-xl">

      {/* Luces decorativas */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-400/15 blur-3xl" />
      <div className="absolute -left-12 bottom-0 h-32 w-32 rounded-full bg-sky-400/10 blur-3xl" />

      {/* Encabezado */}
      <div className="relative text-center">

        <span className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-6 py-3 text-[16px] font-bold uppercase tracking-[0.16em] text-amber-300">
          <Sparkles size={18} />
          UN MENSAJE PARA TI
        </span>

        <h3 className="mt-6 text-[2.2rem] font-bold leading-[1.15] text-white">
          {verse.title}
        </h3>

      </div>

      {/* Versículo */}
      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">

        <blockquote className="text-center text-[1.35rem] italic leading-9 text-slate-100">
          “{verse.verse}”
        </blockquote>

        <p className="mt-5 text-center font-semibold tracking-wide text-amber-300">
          {verse.reference}
        </p>

      </div>

      {/* Reflexión */}
      <div className="mt-8 flex flex-col items-center gap-4 text-center">

        <Heart
          size={22}
          className="text-amber-300"
        />

        <p className="max-w-[330px] text-[17px] leading-8 text-slate-200">
          {verse.reflection}
        </p>

      </div>

      {/* Botón */}
      <Link
        href={verse.buttonLink}
        className="group mt-10 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 py-[24px] text-[17px] font-semibold text-slate-900 shadow-lg shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-300"
      >
        {verse.buttonText}

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>

      {/* Separador */}
      <div className="mt-14 border-t border-white/10 pt-8">

        <div className="grid grid-cols-3 gap-4 text-center">

          <div>
            <p className="text-xl font-bold text-white">
              Biblia
            </p>

            <p className="mt-1 text-xs uppercase tracking-widest text-slate-400">
              Nuestra guía
            </p>
          </div>

          <div>
            <p className="text-xl font-bold text-white">
              Oración
            </p>

            <p className="mt-1 text-xs uppercase tracking-widest text-slate-400">
              Nuestra fuerza
            </p>
          </div>

          <div>
            <p className="text-xl font-bold text-white">
              Cristo
            </p>

            <p className="mt-1 text-xs uppercase tracking-widest text-slate-400">
              Nuestra esperanza
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}