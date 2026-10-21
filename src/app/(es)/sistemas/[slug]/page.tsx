import { notFound } from "next/navigation";
import { SYSTEM_SLUGS, isSystemSlug } from "@/content/routes";
import { SystemView, systemMetadata } from "@/views/SystemView";

export const dynamicParams = false;

export function generateStaticParams() {
  return SYSTEM_SLUGS.map((slug) => ({ slug }));
}

async function resolve(params: PageProps<"/sistemas/[slug]">["params"]) {
  const { slug } = await params;
  if (!isSystemSlug(slug)) notFound();
  return slug;
}

export async function generateMetadata({ params }: PageProps<"/sistemas/[slug]">) {
  return systemMetadata("es", await resolve(params));
}

export default async function Page({ params }: PageProps<"/sistemas/[slug]">) {
  return <SystemView locale="es" slug={await resolve(params)} />;
}
