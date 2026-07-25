import Link from "next/link";
import {
  Compass,
  Church,
  ScrollText,
  BookMarked,
} from "lucide-react";

import InstitutionalCard from "@/components/ui/InstitutionalCard";

const sections = [
  {
    title: "Nuestra Identidad",
    description: "Misión • Visión • Valores",
    href: "/identidad",
    icon: Compass,
    action: "Conocer más",
  },
  {
    title: "Quiénes Somos",
    description: "Nuestra iglesia y nuestro equipo",
    href: "/quienes-somos",
    icon: Church,
    action: "Descubrir",
  },
  {
    title: "Nuestra Historia",
    description: "Cómo Dios ha guiado nuestro caminar",
    href: "/historia",
    icon: BookMarked,
    action: "Leer historia",
  },
  {
    title: "En qué Creemos",
    description: "Nuestra declaración de fe",
    href: "/doctrina",
    icon: ScrollText,
    action: "Explorar",
  },
];

export default function Identity() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white pt-44 pb-28">
      <div className="mx-auto max-w-[1400px] px-8 sm:px-10 lg:px-16 xl:px-20">

        {/* Encabezado */}

        <div className="mb-20">

          <h2 className="text-center text-5xl font-bold tracking-tight text-slate-900">
            Conoce Nuestro Ministerio
          </h2>

          <div className="mt-6 flex justify-center">
            <p className="max-w-3xl text-center text-lg leading-9 text-slate-600">
              Descubre quiénes somos, nuestra historia, la visión que Dios ha
              puesto en nuestro corazón y las convicciones bíblicas que guían
              este ministerio.
            </p>
          </div>

        </div>

        {/* Tarjetas */}

        <div className="grid gap-8 md:grid-cols-2">
          {sections.map((section) => (
            <InstitutionalCard
              key={section.title}
              icon={section.icon}
              title={section.title}
              description={section.description}
              href={section.href}
              action={section.action}
            />
          ))}
        </div>

      </div>
    </section>
  );
}