import Image from "next/image";
import { BookOpen, HeartHandshake } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src="/images/hero/hero.jpg"
        alt="Conectando tu Vida a Dios"
        fill
        priority
        className="object-cover"
      />

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Contenido */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="max-w-3xl">

            {/* Badge */}
            <span className="inline-block rounded-full bg-blue-600/30 px-5 py-2 text-sm font-semibold text-blue-100 backdrop-blur">
              Ministerio Digital Cristiano
            </span>

            {/* Título */}
            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-7xl">
              Nunca es tarde
              <br />
              para volver
              <br />
              <span className="text-amber-400">
                a Dios.
              </span>
            </h1>

            {/* Descripción */}
            <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-200">
              Bienvenido a{" "}
              <strong>Conectando tu Vida a Dios</strong>, un ministerio
              dedicado a compartir la Palabra de Dios mediante sermones,
              estudios bíblicos, recursos y orientación pastoral para ayudarte
              a crecer espiritualmente y fortalecer tu relación con Jesucristo.
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
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-200">

              <span>✓ Estudios Bíblicos</span>

              <span>✓ Sermones</span>

              <span>✓ Consejería Pastoral</span>

              <span>✓ Recursos Gratuitos</span>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}