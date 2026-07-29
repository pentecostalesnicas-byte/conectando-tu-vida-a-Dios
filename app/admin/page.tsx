import DashboardOverview from "@/components/admin/dashboard/DashboardOverview";
import DashboardStats from "@/components/admin/dashboard/DashboardStats";

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
        title="Actividad"
        description="Información general del sistema."
      >
        <DashboardOverview />
      </PageSection>
    </PageContainer>
  );
}