import SermonForm from "@/components/sermons/SermonForm";

export default function NewSermonPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Nuevo Sermón
        </h1>

        <p className="mt-2 text-slate-500">
          Crea una nueva predicación para el ministerio.
        </p>
      </div>

      <div className="rounded-3xl border bg-white p-10 shadow-sm">
        <SermonForm />
      </div>

    </div>
  );
}