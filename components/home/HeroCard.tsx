import { BookOpen, Heart, HeartHandshake } from "lucide-react";

export default function HeroCard() {
  return (
    <div className="hidden lg:block">

      <div className="w-[400px] rounded-3xl border border-white/10 bg-black/35 p-8 backdrop-blur-md shadow-2xl">

        {/* Encabezado */}

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/40 bg-amber-500/10">
            <BookOpen className="h-7 w-7 text-amber-400" />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-300">
              Versículo del día
            </p>
          </div>

        </div>

        {/* Versículo */}

        <div className="mt-10">

          <p className="text-6xl font-bold leading-none text-amber-400">
            “
          </p>

          <p className="mt-4 text-2xl leading-relaxed text-white">
            Venid a mí todos los que estáis trabajados y cargados,
            y yo os haré descansar.
          </p>

          <div className="mt-8 h-[3px] w-16 rounded-full bg-amber-400" />

          <p className="mt-6 text-2xl font-bold text-amber-400">
            Mateo 11:28
          </p>

        </div>

        {/* Mensaje */}

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">

              <Heart className="h-7 w-7 text-white" />

            </div>

            <div>

              <p className="font-semibold text-white">
                Dios tiene un propósito para tu vida.
              </p>

            </div>

          </div>

        </div>

        {/* Botón */}

        <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-400 py-4 font-semibold text-slate-900 transition hover:scale-[1.02]">

          <HeartHandshake className="h-5 w-5" />

          Enviar petición de oración

        </button>

      </div>

    </div>
  );
}