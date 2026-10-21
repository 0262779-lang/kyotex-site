import { MachineryView, machineryMetadata } from "@/views/MachineryView";

export const metadata = machineryMetadata("en");

export default function Page() {
  return <MachineryView locale="en" />;
}
