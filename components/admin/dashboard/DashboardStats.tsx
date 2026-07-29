import {
  BookOpen,
  CalendarDays,
  MessageSquare,
  Mic2,
} from "lucide-react";

import {
  MetricCard,
  PageGrid,
} from "@/components/ui";

export default function DashboardStats() {
  return (
    <PageGrid>
      <MetricCard
        title="Predicaciones"
        value={58}
        description="Publicadas en el sitio"
        icon={Mic2}
      />

      <MetricCard
        title="Recursos"
        value={24}
        description="Disponibles para descarga"
        icon={BookOpen}
      />

      <MetricCard
        title="Eventos"
        value={6}
        description="Próximos eventos"
        icon={CalendarDays}
      />

      <MetricCard
        title="Mensajes"
        value={12}
        description="Pendientes de revisar"
        icon={MessageSquare}
      />
    </PageGrid>
  );
}