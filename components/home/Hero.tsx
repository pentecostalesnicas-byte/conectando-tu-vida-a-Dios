import Image from "next/image";
import { BookOpen, HeartHandshake } from "lucide-react";
import Button from "@/components/ui/Button";
import HeroCard from "./HeroCard";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src="/images/hero/hero.jpg"
        alt="Conectando tu Vida a Dios"
        fill
        priority
        className="object-cover"
      />

      {/* Capas de color */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/60 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

          <div className="flex flex-col items-center justify-between gap-16 lg:flex-row">

            {/* Columna Izquierda */}
<div className="w-full max-w-3xl">

              {/* Badge */}
              <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-600/20 px-5 py-2 text-sm font-semibold tracking-wide text-blue-100 backdrop-blur">
                Ministerio Digital Cristiano
              </span>

              {/* Título */}
              <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-6xl xl:text-7xl">
                Nunca es tarde
                <br />
                para volver
                <br />
                <span className="text-amber-400">
                  a Dios.
                </span>
              </h1>

              {/* Descripción */}
              <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-200 md:text-xl">
                Bienvenido a{" "}
                <strong>Conectando tu Vida a Dios</strong>, un ministerio
                dedicado a compartir la Palabra de Dios mediante sermones,
                estudios bíblicos, recursos y orientación pastoral para ayudarte
                a fortalecer tu relación con Jesucristo.
              </p>

              {/* Botones */}
              <div className="mt-10 flex flex-wrap gap-4">

                <Button href="/sermons">
                  <BookOpen size={22} />
                  <span className="ml-2">
                    Comienza Aquí
                  </span>
                </Button>

                <Button
                  href="/prayer"
                  variant="secondary"
                >
                  <HeartHandshake size={22} />
                  <span className="ml-2">
                    Necesito Oración
                  </span>
                </Button>

              </div>

              {/* Características */}
              <div className="mt-12 grid grid-cols-2 gap-4 text-sm text-slate-200 md:flex md:flex-wrap md:gap-8">

                <span>✓ Estudios Bíblicos</span>

                <span>✓ Sermones</span>

                <span>✓ Consejería Pastoral</span>

                <span>✓ Recursos Gratuitos</span>

              </div>

            </div>

            {/* Columna Derecha */}
<div className="w-full max-w-[410px]">
  <HeroCard />
</div>

          </div>

        </div>
      </div>
    </section>
  );
}