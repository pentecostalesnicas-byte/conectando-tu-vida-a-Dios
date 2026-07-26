import { Handshake, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function FooterCTA() {
  return (
    <section className="relative z-30 mx-auto -mt-20 max-w-7xl px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-slate-900/70 backdrop-blur-2xl shadow-[0_40px_100px_rgba(0,0,0,.60)]">

        {/* Luces */}
        <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-sky-500/20 blur-[120px]" />
        <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-amber-400/20 blur-[120px]" />

        {/* Gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 via-transparent to-amber-400/5" />

        <div className="relative z-10 flex flex-col items-center px-12 py-12 text-center">

          {/* Icono */}
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-amber-400/20 bg-amber-400/10 shadow-[0_0_80px_rgba(251,191,36,.20)]">
            <Handshake
              size={42}
              className="text-amber-400"
            />
          </div>

          {/* Título */}
          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Hoy puedes comenzar
            <span className="block text-amber-400">
              una nueva vida
            </span>
          </h2>

          {/* Descripción */}
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            Jesús te ama, perdona tus pecados y puede transformar tu vida.
            No importa cuál haya sido tu pasado; hoy puedes responder a su
            llamado, recibir su perdón y comenzar una nueva vida junto a Él.
          </p>

          {/* Botón */}
          <div className="mt-10">
            <Button
              href="/salvacion"
              className="px-10 py-4 text-lg"
            >
              <Handshake size={20} />

              <span className="ml-2">
                Quiero entregar mi vida a Cristo
              </span>

              <ArrowRight
                className="ml-2"
                size={18}
              />
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}