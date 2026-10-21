import { GuidesHubView, guidesHubMetadata } from "@/views/HubViews";

export const metadata = guidesHubMetadata("en");

export default function Page() {
  return <GuidesHubView locale="en" />;
}
