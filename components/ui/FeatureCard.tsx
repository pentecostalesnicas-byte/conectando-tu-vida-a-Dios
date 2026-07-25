import Link from "next/link";
import { LucideIcon, ArrowRight } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
}: FeatureCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/40 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_rgba(245,158,11,.18)]"
    >
      {/* Luz de fondo */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 flex h-full flex-col">

        {/* Cabecera */}
        <div className="flex items-start gap-6">

          {/* Icono */}
          <div className="mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-900 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
            <Icon size={24} />
          </div>

          {/* Contenido */}
          <div className="flex-1">

            <h3 className="text-[2rem] font-bold leading-tight text-white transition-colors duration-300 group-hover:text-amber-200">
              {title}
            </h3>

            <div className="mt-2 h-[2px] w-0 rounded-full bg-amber-400 transition-all duration-500 group-hover:w-20" />

            <p className="mt-4 text-lg leading-8 text-slate-300">
              {description}
            </p>

          </div>

        </div>

        {/* Espacio */}
        <div className="flex-1" />

        {/* Botón */}
        <div className="mt-7 border-t border-white/10 pt-5">

          <div className="flex justify-center">

            <span className="inline-flex items-center gap-3 rounded-full border border-amber-400/20 bg-amber-400/5 px-6 py-2 text-sm font-bold uppercase tracking-[0.22em] text-amber-400 transition-all duration-300 group-hover:border-amber-400/50 group-hover:bg-amber-400/10 group-hover:gap-4">

              Explorar

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </span>

          </div>

        </div>

      </div>
    </Link>
  );
}