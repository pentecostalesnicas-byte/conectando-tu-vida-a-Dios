import Link from "next/link";

import { prisma } from "@/lib/prisma";

import UsersTable from "@/components/users/UsersTable";

import {
  PageActions,
  PageContainer,
  PageHeader,
  PageSection,
} from "@/components/ui";

export default async function UsersPage() {
  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      active: true,
      createdAt: true,
    },
  });

  return (
    <PageContainer>
      <PageHeader
        title="Usuarios"
        description="Administra los usuarios y permisos del sistema."
        actions={
          <PageActions>
            <Link
              href="/admin/users/new"
              className="inline-flex items-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Nuevo Usuario
            </Link>
          </PageActions>
        }
      />

      <PageSection
        title="Listado de usuarios"
        description={`${users.length} usuario(s) registrados.`}
      >
        <UsersTable users={users} />
      </PageSection>
    </PageContainer>
  );
}