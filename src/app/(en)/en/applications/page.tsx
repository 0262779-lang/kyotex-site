import { ApplicationsHubView, applicationsHubMetadata } from "@/views/HubViews";

export const metadata = applicationsHubMetadata("en");

export default function Page() {
  return <ApplicationsHubView locale="en" />;
}
