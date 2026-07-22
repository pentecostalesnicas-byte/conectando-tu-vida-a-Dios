import {
  BookOpen,
  Video,
  Heart,
  HandHelping,
  Library,
  MessageCircle,
} from "lucide-react";

const items = [
  {
    title: "Sermones",
    description: "Predicaciones para fortalecer tu fe.",
    icon: BookOpen,
  },
  {
    title: "Estudios Bíblicos",
    description: "Profundiza en la Palabra de Dios.",
    icon: Library,
  },
  {
    title: "Videos",
    description: "Contenido audiovisual edificante.",
    icon: Video,
  },
  {
    title: "Devocionales",
    description: "Reflexiones para cada día.",
    icon: Heart,
  },
  {
    title: "Peticiones de Oración",
    description: "Permítenos orar contigo.",
    icon: HandHelping,
  },
  {
    title: "Consejería",
    description: "Orientación pastoral basada en la Biblia.",
    icon: MessageCircle,
  },
];

export default function QuickLinks() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-4xl font-bold text-slate-900">
          ¿Cómo podemos ayudarte?
        </h2>

        <p className="mx-auto mb-14 max-w-3xl text-center text-lg text-slate-600">
          Encuentra recursos diseñados para ayudarte a crecer espiritualmente y
          acercarte más a Dios.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-5 inline-flex rounded-xl bg-blue-100 p-4">
                  <Icon className="h-8 w-8 text-blue-700" />
                </div>

                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}