"use client";

import { useState, useTransition } from "react";
import { Trash2 } from "lucide-react";

import { deleteUser } from "@/app/admin/users/actions";

interface DeleteUserDialogProps {
  id: string;
  name: string;
}

export default function DeleteUserDialog({
  id,
  name,
}: DeleteUserDialogProps) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    startTransition(async () => {
      await deleteUser(id);
      setOpen(false);
    });
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-lg border border-red-300 px-3 py-1 text-sm text-red-600 transition hover:bg-red-50 dark:border-red-500/20 dark:hover:bg-red-500/10"
      >
        <Trash2 className="h-4 w-4" />
        Eliminar
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl border border-border bg-background p-6 shadow-xl">
            <h2 className="text-lg font-semibold">
              Eliminar usuario
            </h2>

            <p className="mt-3 text-sm text-muted-foreground">
              ¿Está seguro de eliminar el usuario{" "}
              <strong>{name}</strong>?
            </p>

            <p className="mt-2 text-sm text-red-500">
              Esta acción no se puede deshacer.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setOpen(false)}
                disabled={isPending}
                className="rounded-xl border px-4 py-2 text-sm hover:bg-muted"
              >
                Cancelar
              </button>

              <button
                type="button"
                onClick={handleDelete}
                disabled={isPending}
                className="rounded-xl bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-50"
              >
                {isPending ? "Eliminando..." : "Eliminar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}