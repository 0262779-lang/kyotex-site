import { ApplicationsHubView, applicationsHubMetadata } from "@/views/HubViews";

export const metadata = applicationsHubMetadata("es");

export default function Page() {
  return <ApplicationsHubView locale="es" />;
}
