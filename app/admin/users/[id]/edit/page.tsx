import { notFound } from "next/navigation";

import { prisma } from "@/lib/prisma";

import UserForm from "@/components/users/UserForm";

import {
  PageContainer,
  PageHeader,
  PageSection,
} from "@/components/ui";

interface EditUserPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditUserPage({
  params,
}: EditUserPageProps) {
  const { id } = await params;

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      active: true,
    },
  });

  if (!user) {
    notFound();
  }

  return (
    <PageContainer>
      <PageHeader
        title="Editar Usuario"
        description="Actualice la información del usuario."
      />

      <PageSection
        title="Información del usuario"
        description="Modifique los datos y guarde los cambios."
      >
        <UserForm
          mode="edit"
          user={user}
        />
      </PageSection>
    </PageContainer>
  );
}