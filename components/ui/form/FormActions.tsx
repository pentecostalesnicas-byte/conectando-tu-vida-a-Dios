interface FormActionsProps {
  onCancel?: () => void;
  submitLabel?: string;
}

export default function FormActions({
  onCancel,
  submitLabel = "Guardar",
}: FormActionsProps) {
  return (
    <div className="flex justify-end gap-4 pt-6">
      <button
        type="button"
        onClick={onCancel}
        className="rounded-xl border border-slate-300 px-6 py-3 font-medium hover:bg-slate-100"
      >
        Cancelar
      </button>

      <button
        type="submit"
        className="rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white hover:bg-amber-600"
      >
        {submitLabel}
      </button>
    </div>
  );
}