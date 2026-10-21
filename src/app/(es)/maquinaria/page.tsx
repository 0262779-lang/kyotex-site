import { MachineryView, machineryMetadata } from "@/views/MachineryView";

export const metadata = machineryMetadata("es");

export default function Page() {
  return <MachineryView locale="es" />;
}
