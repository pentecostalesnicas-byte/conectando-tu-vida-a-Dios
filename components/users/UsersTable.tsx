import Link from "next/link";

import DataTable from "@/components/ui/DataTable";
import UserRoleBadge from "./UserRoleBadge";
import UserStatusBadge from "./UserStatusBadge";
import DeleteUserDialog from "./DeleteUserDialog";

interface UserRow {
  id: string;
  name: string | null;
  email: string;
  role: string;
  active: boolean;
  createdAt: Date;
}

interface UsersTableProps {
  users: UserRow[];
}

export default function UsersTable({
  users,
}: UsersTableProps) {
  return (
    <DataTable>
      <thead className="bg-muted/50">
        <tr className="border-b">
          <th className="px-4 py-3 text-left text-sm font-semibold">
            Nombre
          </th>

          <th className="px-4 py-3 text-left text-sm font-semibold">
            Correo
          </th>

          <th className="px-4 py-3 text-left text-sm font-semibold">
            Rol
          </th>

          <th className="px-4 py-3 text-left text-sm font-semibold">
            Estado
          </th>

          <th className="px-4 py-3 text-left text-sm font-semibold">
            Creado
          </th>

          <th className="px-4 py-3 text-right text-sm font-semibold">
            Acciones
          </th>
        </tr>
      </thead>

      <tbody>
        {users.length === 0 ? (
          <tr>
            <td
              colSpan={6}
              className="px-6 py-12 text-center text-muted-foreground"
            >
              No existen usuarios registrados.
            </td>
          </tr>
        ) : (
          users.map((user) => (
            <tr
              key={user.id}
              className="border-b transition hover:bg-muted/40"
            >
              <td className="px-4 py-4 font-medium">
                {user.name ?? "Sin nombre"}
              </td>

              <td className="px-4 py-4">
                {user.email}
              </td>

              <td className="px-4 py-4">
                <UserRoleBadge role={user.role} />
              </td>

              <td className="px-4 py-4">
                <UserStatusBadge active={user.active} />
              </td>

              <td className="px-4 py-4">
                {user.createdAt.toLocaleDateString("es-NI")}
              </td>

              <td className="px-4 py-4">
                <div className="flex justify-end gap-2">
                  <Link
                    href={`/admin/users/${user.id}/edit`}
                    className="rounded-lg border px-3 py-1 text-sm hover:bg-muted"
                  >
                    Editar
                  </Link>

                  <DeleteUserDialog
                    id={user.id}
                    name={user.name ?? user.email}
                  />
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </DataTable>
  );
}