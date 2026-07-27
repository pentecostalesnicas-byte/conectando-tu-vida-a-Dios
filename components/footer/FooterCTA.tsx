import { Handshake, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function FooterCTA() {
  return (
    <section className="relative z-30 mx-auto -mt-20 max-w-7xl px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[36px] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,.60)]">

        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/backgrounds/cta-bg.jpg')",
          }}
        />

        {/* Oscurecer imagen */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Degradado para mejorar lectura */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/55" />

        {/* Luces ambientales */}
        <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-amber-500/15 blur-[120px]" />
        <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-amber-400/15 blur-[120px]" />

        {/* Contenido */}
        <div className="relative z-10 flex flex-col items-center px-12 py-16 text-center">

          {/* Icono */}
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-amber-400/20 bg-black/30 backdrop-blur-sm shadow-[0_0_80px_rgba(251,191,36,.25)]">
            <Handshake
              size={42}
              className="text-amber-400"
            />
          </div>

          {/* Título */}
          <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Hoy puedes comenzar

            <span className="mt-2 block text-amber-400">
              una nueva vida
            </span>
          </h2>

          {/* Descripción */}
          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-200">
            Jesús te ama, perdona tus pecados y puede transformar tu vida.
            No importa cuál haya sido tu pasado; hoy puedes responder a su
            llamado, recibir su perdón y comenzar una nueva vida junto a Él.
          </p>

          {/* Botón */}
          <div className="mt-12">
            <Button
              href="/salvacion"
              className="
                px-14
                py-6
                rounded-2xl
                text-xl
                font-bold
                shadow-[0_25px_60px_rgba(251,191,36,.45)]
                hover:scale-105
                hover:shadow-[0_35px_80px_rgba(251,191,36,.60)]
                transition-all
                duration-300
              "
            >
              <Handshake size={26} />

              <span className="ml-3">
                Quiero entregar mi vida a Cristo
              </span>

              <ArrowRight
                className="ml-3"
                size={24}
              />
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}