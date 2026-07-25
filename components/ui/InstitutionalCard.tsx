import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

interface InstitutionalCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  action: string;
}

export default function InstitutionalCard({
  icon: Icon,
  title,
  description,
  href,
  action,
}: InstitutionalCardProps) {
  return (
    <Link
      href={href}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-amber-300
        hover:shadow-[0_25px_60px_rgba(0,0,0,.12)]
      "
    >
      {/* Barra superior */}

      <div className="h-1 w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-300" />

      <div className="flex flex-col items-center px-10 pt-12 pb-8">

        {/* Icono */}

        <div
          className="
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            border
            border-amber-100
            bg-gradient-to-br
            from-amber-50
            to-white
            shadow-md
            transition-all
            duration-300
            group-hover:scale-105
          "
        >
          <Icon className="h-12 w-12 text-amber-600" />
        </div>

        {/* Contenido */}

        <div className="mt-8 flex w-full flex-col items-center">

          <h3 className="max-w-[280px] text-center text-3xl font-bold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-amber-700">
            {title}
          </h3>

          <p className="mt-5 max-w-[300px] text-center text-lg leading-8 text-slate-600">
            {description}
          </p>

          <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-amber-400 to-amber-600" />

        </div>

        {/* Acción */}

        <div className="mt-10 flex w-full items-center justify-end border-t border-slate-200 pt-6">

          <span className="mr-4 font-semibold text-slate-900 transition-colors duration-300 group-hover:text-amber-700">
            {action}
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
              group-hover:bg-amber-500
            "
          >
            <ArrowRight className="h-6 w-6 text-amber-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
          </div>

        </div>

      </div>
    </Link>
  );
}