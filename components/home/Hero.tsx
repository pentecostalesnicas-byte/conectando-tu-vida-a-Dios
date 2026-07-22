import Image from "next/image";
import { BookOpen, HeartHandshake } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src="/images/hero/hero.jpg"
        alt="Conectando tu vida a Dios"
        fill
        priority
        className="object-cover"
      />

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">

            <span className="inline-block rounded-full bg-blue-600/30 px-5 py-2 text-sm font-semibold text-blue-100 backdrop-blur">
              Ministerio Digital Cristiano
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-7xl">
              Conectando
              <br />
              tu vida
              <br />
              <span className="text-amber-400">
                a Dios
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-200">
              Sermones, estudios bíblicos, devocionales,
              consejería pastoral y recursos para ayudarte
              a crecer espiritualmente cada día.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="flex items-center gap-2 rounded-xl bg-amber-500 px-7 py-4 font-semibold text-slate-900 transition hover:scale-105 hover:bg-amber-400">

                <BookOpen size={22} />

                Ver Sermones

              </button>

              <button className="flex items-center gap-2 rounded-xl border border-white px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900">

                <HeartHandshake size={22} />

                Solicitar Oración

              </button>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}