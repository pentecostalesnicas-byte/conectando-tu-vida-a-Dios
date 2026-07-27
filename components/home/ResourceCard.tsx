import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Mic2,
  BookOpen,
  Video,
  BookMarked,
  HeartHandshake,
  Library,
} from "lucide-react";

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
  const categories = {
    "SERMÓN": {
      color: "bg-violet-700 border-violet-500 text-white",
      icon: <Mic2 size={14} />,
    },

    "ESTUDIO BÍBLICO": {
      color: "bg-blue-700 border-blue-500 text-white",
      icon: <BookOpen size={14} />,
    },

    VIDEO: {
      color: "bg-red-700 border-red-500 text-white",
      icon: <Video size={14} />,
    },

    DEVOCIONAL: {
      color: "bg-green-700 border-green-500 text-white",
      icon: <BookMarked size={14} />,
    },

    TESTIMONIO: {
      color: "bg-pink-700 border-pink-500 text-white",
      icon: <HeartHandshake size={14} />,
    },

    BIBLIOTECA: {
      color: "bg-amber-700 border-amber-500 text-white",
      icon: <Library size={14} />,
    },
  };

  const current =
    categories[category as keyof typeof categories] ?? {
      color: "bg-slate-700 border-slate-500 text-white",
      icon: null,
    };

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
      {/* Imagen */}

      <div className="p-2 pb-0">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[24px]">

          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 via-amber-300/0 to-white/0 opacity-0 transition duration-500 group-hover:opacity-20" />

          {/* Categoría */}

          <span
            className={`
              absolute
              left-5
              top-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              px-5
              py-2.5
              text-sm
              font-semibold
              uppercase
              tracking-[0.12em]
              shadow-xl
              backdrop-blur
              ${current.color}
            `}
          >
            {current.icon}
            {category}
          </span>

        </div>
      </div>

      {/* Contenido */}

      <div className="px-8 pt-10 pb-8">

        <span className="block text-center text-sm font-medium tracking-wide text-slate-500">
          Publicado el {date}
        </span>

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

        <div className="mx-auto mt-6 mb-7 h-px w-24 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />

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