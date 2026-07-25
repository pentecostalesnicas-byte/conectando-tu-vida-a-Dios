import {
  BookOpen,
  Video,
  HeartHandshake,
  Heart,
  Library,
} from "lucide-react";

import FeatureCard from "@/components/ui/FeatureCard";

const features = [
  {
    icon: BookOpen,
    title: "Estudios Bíblicos",
    description:
      "Profundiza en la Palabra de Dios con estudios claros, prácticos y fundamentados en la Biblia.",
    href: "/studies",
  },
  {
    icon: Video,
    title: "Predicaciones",
    description:
      "Accede a mensajes edificantes para fortalecer tu fe y crecer espiritualmente.",
    href: "/sermons",
  },
  {
    icon: HeartHandshake,
    title: "Consejería",
    description:
      "Encuentra orientación bíblica para las diferentes áreas de tu vida.",
    href: "/counseling",
  },
  {
    icon: Heart,
    title: "Peticiones de Oración",
    description:
      "Permítenos orar contigo y acompañarte en tus necesidades.",
    href: "/prayer",
  },
  {
    icon: Library,
    title: "Biblioteca",
    description:
      "Explora recursos cristianos, devocionales y material de crecimiento espiritual.",
    href: "/resources",
  },
];

export default function QuickLinks() {
  return (
    <section className="relative -mt-10 overflow-hidden bg-slate-950 pt-16 pb-24">
      <div className="mx-auto max-w-[1400px] px-8 sm:px-10 lg:px-16 xl:px-20">

        {/* ================= Encabezado ================= */}

        <div className="mb-20">

          <div className="flex justify-center">
            <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Recursos del Ministerio
            </span>
          </div>

          <h2 className="mt-6 mb-8 text-center text-5xl font-bold tracking-tight text-white">
  Crece en tu relación con Dios
</h2>

         <div className="mt-6 flex justify-center">
  <p className="max-w-3xl text-center text-lg leading-9 text-slate-300">
    Explora estudios bíblicos, predicaciones y recursos diseñados para ayudarte
    a conocer más a Jesucristo, fortalecer tu fe y caminar cada día conforme a
    Su Palabra.
  </p>
</div>
        </div>

        {/* ================= Tarjetas ================= */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              href={feature.href}
            />
          ))}
        </div>

      </div>
    </section>
  );
}