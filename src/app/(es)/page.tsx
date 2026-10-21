import { HomeView, homeMetadata } from "@/views/HomeView";

export const metadata = homeMetadata("es");

export default function Page() {
  return <HomeView locale="es" />;
}
