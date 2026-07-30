import DashboardOverview from "@/components/admin/dashboard/DashboardOverview";
import DashboardStats from "@/components/admin/dashboard/DashboardStats";
import QuickActions from "@/components/admin/dashboard/QuickActions";

import {
  PageContainer,
  PageHeader,
  PageSection,
} from "@/components/ui";

export default function AdminDashboardPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Dashboard"
        description="Centro de operaciones de BETEL ADN WEB."
      />

      <PageSection
        title="Resumen General"
        description="Estado actual del ministerio."
      >
        <DashboardStats />
      </PageSection>

      <PageSection
        title="Accesos rápidos"
        description="Acciones frecuentes del administrador."
      >
        <QuickActions />
      </PageSection>

      <PageSection
        title="Actividad reciente"
        description="Información general del sistema."
      >
        <DashboardOverview />
      </PageSection>
    </PageContainer>
  );
}