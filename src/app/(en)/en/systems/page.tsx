import { SystemsHubView, systemsHubMetadata } from "@/views/HubViews";

export const metadata = systemsHubMetadata("en");

export default function Page() {
  return <SystemsHubView locale="en" />;
}
