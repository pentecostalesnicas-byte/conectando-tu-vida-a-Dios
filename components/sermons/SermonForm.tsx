"use client";

export default function SermonForm() {
  return (
    <form className="space-y-8">

      <div className="grid gap-6 lg:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Título del sermón
          </label>

          <input
            type="text"
            placeholder="Ej. El Poder del Espíritu Santo"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Predicador
          </label>

          <input
            type="text"
            placeholder="Pastor Mauricio López"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
          />
        </div>

      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Descripción
        </label>

        <textarea
          rows={5}
          placeholder="Resumen del sermón..."
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-500"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Fecha
          </label>

          <input
            type="date"
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Estado
          </label>

          <select className="w-full rounded-xl border border-slate-300 px-4 py-3">
            <option>Borrador</option>
            <option>Publicado</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Categoría
          </label>

          <select className="w-full rounded-xl border border-slate-300 px-4 py-3">
            <option>Evangelístico</option>
            <option>Doctrinal</option>
            <option>Discipulado</option>
            <option>Juventud</option>
            <option>Familia</option>
          </select>
        </div>

      </div>

      <div className="flex justify-end gap-4">

        <button
          type="button"
          className="rounded-xl border px-6 py-3"
        >
          Cancelar
        </button>

        <button
          type="submit"
          className="rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white hover:bg-amber-600"
        >
          Guardar Sermón
        </button>

      </div>

    </form>
  );
}