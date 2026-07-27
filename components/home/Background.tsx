import Image from "next/image";

export default function Background() {
  return (
    <>
      {/* Imagen de fondo */}
      <div className="absolute inset-0 -z-30">
        <Image
          src="/images/hero/hero.jpg"
          alt="Biblia abierta"
          fill
          priority
          quality={75}
          className="object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 -z-20 bg-slate-950/45" />

      {/* Degradado */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20" />

      {/* Luz cálida */}
      <div className="absolute right-0 top-0 -z-10 h-[700px] w-[700px] rounded-full bg-amber-400/15 blur-[160px]" />

      {/* Luz azul */}
      <div className="absolute left-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-sky-400/10 blur-[140px]" />

      {/* Viñeta */}
      <div className="absolute inset-0 -z-10 shadow-[inset_0_0_120px_rgba(0,0,0,.45)]" />
    </>
  );
}