import { GuidesHubView, guidesHubMetadata } from "@/views/HubViews";

export const metadata = guidesHubMetadata("es");

export default function Page() {
  return <GuidesHubView locale="es" />;
}
