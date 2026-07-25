import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ResourceCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  href: string;
  date: string;
}

export default function ResourceCard({
  image,
  category,
  title,
  description,
  href,
  date,
}: ResourceCardProps) {
  return (
    <Link
      href={href}
      className="
        group
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white
        shadow-[0_18px_50px_rgba(15,23,42,.10)]
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-amber-300
        hover:shadow-[0_35px_80px_rgba(245,158,11,.18)]
      "
    >
      {/* ================= Imagen ================= */}

      <div className="p-2 pb-0">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[24px]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

          {/* Brillo */}

          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 via-amber-300/0 to-white/0 opacity-0 transition duration-500 group-hover:opacity-20" />

          {/* Etiqueta */}

          <span
            className="
              absolute
              left-6
              top-6
              rounded-full
              border
              border-white/20
              bg-amber-500/95
              px-4
              py-2
              text-xs
              font-bold
              uppercase
              tracking-[0.15em]
              text-white
              shadow-xl
              backdrop-blur
            "
          >
            RECIENTE
          </span>
        </div>
      </div>

      {/* ================= Contenido ================= */}

      <div className="px-8 pt-10 pb-8">

        {/* Fecha */}

        <span className="block text-center text-sm font-medium tracking-wide text-slate-500">
          Recientemente actualizado
        </span>

        {/* Título */}

        <h3
          className="
            mt-4
            text-center
            text-4xl
            font-bold
            leading-tight
            text-slate-900
            transition-colors
            duration-300
            group-hover:text-amber-700
          "
        >
          {title}
        </h3>

        {/* Separador */}

        <div className="mx-auto mt-6 mb-7 h-px w-24 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />

        {/* Acción */}

        <div className="flex justify-center">

          <div className="flex items-center gap-4">

            <span className="font-semibold tracking-wide text-slate-900 transition-colors duration-300 group-hover:text-amber-700">
              Explorar
            </span>

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-amber-100
                transition-all
                duration-300
                group-hover:scale-110
                group-hover:bg-amber-500
              "
            >
              <ArrowRight className="h-5 w-5 text-amber-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
            </div>

          </div>

        </div>

      </div>
    </Link>
  );
}