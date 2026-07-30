import UserForm from "@/components/users/UserForm";

import {
  PageContainer,
  PageHeader,
  PageSection,
} from "@/components/ui";

export default function NewUserPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Nuevo Usuario"
        description="Crear un nuevo usuario del sistema."
      />

      <PageSection
        title="Información"
        description="Complete todos los campos para registrar el usuario."
      >
        <UserForm mode="create" />
      </PageSection>
    </PageContainer>
  );
}