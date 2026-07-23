import {
  Heart,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function HeroCard() {
  return (
    <div className="relative w-full max-w-[440px] overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-10 shadow-[0_25px_70px_rgba(0,0,0,.45)] backdrop-blur-xl">

      {/* Luces decorativas */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-400/15 blur-3xl" />
      <div className="absolute -left-12 bottom-0 h-32 w-32 rounded-full bg-sky-400/10 blur-3xl" />

      {/* Encabezado */}
      <div className="relative text-center">

        <span className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-6 py-3 text-[18px] font-bold uppercase tracking-[0.20em] text-amber-300">
          <Sparkles size={18} />
          Versículo del día
        </span>

        <h3 className="mt-6 text-[2rem] font-semibold leading-tight text-white">
          Hoy Dios quiere
          <br />
          hablar contigo
        </h3>

      </div>

      {/* Versículo */}
      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">

        <blockquote className="text-center text-[1.35rem] italic leading-10 text-slate-100">
          “Venid a mí todos los que estáis trabajados y cargados,
          y yo os haré descansar.”
        </blockquote>

        <p className="mt-5 text-center font-semibold tracking-wide text-amber-300">
          Mateo 11:28
        </p>

      </div>

      {/* Reflexión */}
      <div className="mt-8 flex items-start gap-3">

        <Heart
          size={20}
          className="mt-1 shrink-0 text-amber-300"
        />

        <p className="text-[17px] leading-8 text-slate-200">
          No importa cómo llegaste hoy.
          Cristo sigue llamándote con amor,
          gracia y esperanza.
        </p>

      </div>

      {/* Botón */}
      <button className="group mt-10 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 py-[22px] text-[17px] font-semibold text-slate-900 shadow-lg shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-300">

        Enviar petición de oración

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />

      </button>

      {/* Separador */}
      <div className="mt-12 border-t border-white/10 pt-8">

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