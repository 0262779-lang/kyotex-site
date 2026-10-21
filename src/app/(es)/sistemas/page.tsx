import { SystemsHubView, systemsHubMetadata } from "@/views/HubViews";

export const metadata = systemsHubMetadata("es");

export default function Page() {
  return <SystemsHubView locale="es" />;
}
