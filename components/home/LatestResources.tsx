import ResourceCard from "./ResourceCard";

const resources = [
  {
    image: "/images/resources/sermon-1.jpg",
    category: "RECIENTE",
    title: "Nunca es tarde para volver a Dios",
    description:
      "Un mensaje de esperanza para quienes desean restaurar su comunión con Dios.",
    href: "/sermones/nunca-es-tarde",
    date: "25 JUL 2026",
  },
  {
    image: "/images/resources/study-1.jpg",
    category: "RECIENTE",
    title: "¿Quién es Jesucristo según la Biblia?",
    description:
      "Un estudio fundamentado en las Escrituras acerca de la identidad de Jesucristo.",
    href: "/estudios/jesucristo",
    date: "24 JUL 2026",
  },
  {
    image: "/images/resources/video-1.jpg",
    category: "RECIENTE",
    title: "Cómo fortalecer tu vida de oración",
    description:
      "Principios prácticos para desarrollar una vida constante de oración.",
    href: "/videos/vida-de-oracion",
    date: "23 JUL 2026",
  },
];

export default function LatestResources() {
  return (
    <section className="bg-[#03061B] pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Encabezado */}

        <div className="mb-20 flex flex-col items-center">

          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-amber-500/30
              bg-amber-500/10
              px-10
              py-3
              text-2xl
              font-extrabold
              uppercase
              tracking-[0.18em]
              text-amber-400
              shadow-lg
            "
          >
            DESCUBRE LO MÁS RECIENTE
          </span>

          <p
            className="
              mt-8
              max-w-2xl
              text-center
              text-lg
              leading-8
              text-slate-300
            "
          >
            Descubre los últimos sermones, estudios bíblicos y videos
            incorporados al ministerio.
          </p>

        </div>

        {/* Tarjetas */}

        <div className="grid gap-10 lg:grid-cols-3">
          {resources.map((resource) => (
            <ResourceCard
              key={resource.title}
              {...resource}
            />
          ))}
        </div>

      </div>
    </section>
  );
}