import {
  ArrowRight,
  ChevronRight,
  BookOpen,
  HeartHandshake,
  HandHeart,
} from "lucide-react";

export default function HeroContent() {
  return (
    <div className="max-w-[590px]">
      {/* Badge */}
<div
  className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-sm font-medium text-amber-300 backdrop-blur-sm"
  style={{ marginTop: "0px" }}
>
  <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
  Ministerio Digital Cristiano
</div>

      {/* Título */}
<h1
  className="mt-8 max-w-[520px] font-[family-name:var(--font-playfair)] text-4xl font-bold leading-[1.02] tracking-tight text-white md:text-5xl xl:text-6xl"
  style={{ marginLeft: "10px" }}
>        Nunca es tarde
        <br />
        para volver
        <br />
        <span className="text-amber-300">
          a Dios.
        </span>
      </h1>

      {/* Descripción */}
<p
  className="max-w-[600px] text-justify text-[19px] leading-6 text-slate-200"
  style={{
    marginTop: "0px",
    marginLeft: "10px",
  }}

>
  Dios continúa llamando a cada corazón con amor y misericordia.
  Aquí encontrarás enseñanzas bíblicas, orientación pastoral y
  recursos que fortalecerán tu fe para caminar cada día más cerca
  de Jesucristo.
</p>

      {/* Versículo */}
<div
  className="rounded-2xl border border-white/10 bg-white/5 px-7 py-6 backdrop-blur-md"
  style={{
    marginTop: "10px",
    marginLeft: "10px",
  }}

>
        <p className="text-lg italic leading-6 text-slate-200">
          «Venid luego, dice Jehová, y estemos a cuenta; aunque vuestros
          pecados sean como la grana, como la nieve serán emblanquecidos.»
        </p>

        <p className="mt-5 font-semibold text-amber-300">
          Isaías 1:18
        </p>
      </div>

    {/* Botones */}
<div
  className="flex flex-wrap justify-center gap-4"
  style={{
    marginTop: "10px",
  }}
>

        <button className="group flex items-center gap-2 rounded-xl bg-amber-400 px-8 py-4 font-semibold text-slate-900 transition-all duration-300 hover:bg-amber-300">
          Comenzar

          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>

        <button className="group flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10">
          Quiero que oren por mí

          <ChevronRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>

      {/* Características */}
<div
  className="flex flex-wrap gap-x-8 gap-y-4 text-slate-200"
  style={{
    marginTop: "10px",
    marginLeft: "10px",
  }}
>
        <div className="flex items-center gap-2">
          <BookOpen size={18} className="text-amber-300" />
          <span>Estudios Bíblicos</span>
        </div>

        <div className="flex items-center gap-2">
          <HeartHandshake size={18} className="text-amber-300" />
          <span>Consejería Pastoral</span>
        </div>

        <div className="flex items-center gap-2">
          <HandHeart size={18} className="text-amber-300" />
          <span>Recursos Gratuitos</span>
        </div>
      </div>
    </div>
  );
}