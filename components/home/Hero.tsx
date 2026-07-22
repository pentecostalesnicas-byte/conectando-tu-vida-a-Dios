import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[85vh] items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero/hero.jpg')",
      }}
    >
      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Contenido */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 text-white">
        <div className="max-w-3xl">
          <span className="rounded-full bg-amber-500/20 px-4 py-2 text-sm font-semibold text-amber-300">
            Ministerio Digital Cristiano
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-7xl">
            Conectando tu Vida a Dios
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
            Un espacio para fortalecer tu fe mediante sermones, estudios
            bíblicos, devocionales y recursos que te ayuden a crecer en tu
            caminar con Jesucristo.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/plan-de-salvacion"
              className="rounded-lg bg-amber-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-400"
            >
              Conoce el Plan de Salvación
            </Link>

            <Link
              href="/sermones"
              className="rounded-lg border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-slate-900"
            >
              Escuchar Sermones
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}