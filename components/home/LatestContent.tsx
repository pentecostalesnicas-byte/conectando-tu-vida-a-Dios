import { BookOpen, Video, Library } from "lucide-react";
import Container from "@/components/ui/Container";

const resources = [
  {
    title: "¿Cómo escuchar la voz de Dios?",
    type: "Sermón",
    icon: BookOpen,
  },
  {
    title: "¿Qué enseña la Biblia sobre el bautismo?",
    type: "Estudio Bíblico",
    icon: Library,
  },
  {
    title: "Cinco minutos de esperanza",
    type: "Video",
    icon: Video,
  },
];

export default function LatestContent() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Recursos Recientes
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Descubre el contenido más reciente preparado para fortalecer tu fe.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {resources.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mb-5 inline-flex rounded-xl bg-blue-100 p-4">
                  <Icon className="h-8 w-8 text-blue-700" />
                </div>

                <span className="text-sm font-semibold text-blue-700">
                  {item.type}
                </span>

                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}