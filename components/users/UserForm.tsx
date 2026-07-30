"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import FormActions from "@/components/ui/form/FormActions";
import FormInput from "@/components/ui/form/FormInput";
import FormSelect from "@/components/ui/form/FormSelect";

import {
  createUser,
  updateUser,
} from "@/app/admin/users/actions";

type Role =
  | "SUPER_ADMIN"
  | "ADMIN"
  | "PASTOR"
  | "LIDER"
  | "EDITOR";

interface UserFormProps {
  mode: "create" | "edit";

  user?: {
    id: string;
    name: string | null;
    email: string;
    role: Role;
    active: boolean;
  };
}

const roleOptions = [
  {
    label: "Super Administrador",
    value: "SUPER_ADMIN",
  },
  {
    label: "Administrador",
    value: "ADMIN",
  },
  {
    label: "Pastor",
    value: "PASTOR",
  },
  {
    label: "Líder",
    value: "LIDER",
  },
  {
    label: "Editor",
    value: "EDITOR",
  },
];

export default function UserForm({
  mode,
  user,
}: UserFormProps) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const [name, setName] = useState(user?.name ?? "");

  const [email, setEmail] = useState(
    user?.email ?? ""
  );

  const [password, setPassword] = useState("");

  const [role, setRole] = useState<Role>(
    user?.role ?? "EDITOR"
  );

  const [active, setActive] = useState(
    user?.active ?? true
  );

  async function onSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    startTransition(async () => {
      try {
        if (mode === "create") {
          await createUser({
            name,
            email,
            password,
            role,
          });
        } else {
          await updateUser(user!.id, {
            name,
            email,
            role,
            active,
          });
        }

        router.push("/admin/users");
        router.refresh();
      } catch (error) {
        alert(
          error instanceof Error
            ? error.message
            : "Ha ocurrido un error."
        );
      }
    });
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-6"
    >
      <FormInput
        label="Nombre"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        required
      />

      <FormInput
        type="email"
        label="Correo electrónico"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        required
      />

      {mode === "create" && (
        <FormInput
          type="password"
          label="Contraseña"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />
      )}

      <FormSelect
  label="Rol"
  value={role}
  onChange={(e) =>
    setRole(e.target.value as Role)
  }
>
  {roleOptions.map((option) => (
    <option
      key={option.value}
      value={option.value}
    >
      {option.label}
    </option>
  ))}
</FormSelect>

      {mode === "edit" && (
        <div className="flex items-center gap-3">
          <input
            id="active"
            type="checkbox"
            checked={active}
            onChange={(e) =>
              setActive(e.target.checked)
            }
          />

          <label
            htmlFor="active"
            className="text-sm"
          >
            Usuario activo
          </label>
        </div>
      )}

      <FormActions
  onCancel={() => router.push("/admin/users")}
  submitLabel={
    isPending
      ? "Guardando..."
      : mode === "create"
        ? "Crear Usuario"
        : "Guardar Cambios"
  }
/>
    </form>
  );
}