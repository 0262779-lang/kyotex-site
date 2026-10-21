import { FaqView, faqMetadata } from "@/views/FaqView";

export const metadata = faqMetadata("es");

export default function Page() {
  return <FaqView locale="es" />;
}
