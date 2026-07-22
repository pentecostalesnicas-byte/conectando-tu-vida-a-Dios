import { Target, Eye, Heart } from "lucide-react";

export default function Mission() {
  const cards = [
    {
      icon: Target,
      title: "Nuestra Misión",
      text: "Conectar a las personas con Dios mediante la enseñanza fiel de Su Palabra, promoviendo el crecimiento espiritual y el discipulado.",
    },
    {
      icon: Eye,
      title: "Nuestra Visión",
      text: "Ser una plataforma digital que lleve el evangelio a miles de personas y fortalezca iglesias y familias en todo el mundo.",
    },
    {
      icon: Heart,
      title: "Nuestros Valores",
      text: "Amor, verdad, santidad, servicio, integridad y compromiso con la Palabra de Dios.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Nuestra Identidad
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            Todo lo que hacemos tiene un propósito: acercar a las personas a una
            relación más profunda con Jesucristo.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-200 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-xl bg-amber-100 p-4">
                  <Icon className="h-8 w-8 text-amber-600" />
                </div>

                <h3 className="mb-4 text-2xl font-bold">
                  {card.title}
                </h3>

                <p className="leading-8 text-slate-600">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}