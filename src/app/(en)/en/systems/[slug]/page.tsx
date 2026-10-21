import { notFound } from "next/navigation";
import { SYSTEM_SLUGS, isSystemSlug } from "@/content/routes";
import { SystemView, systemMetadata } from "@/views/SystemView";

export const dynamicParams = false;

export function generateStaticParams() {
  return SYSTEM_SLUGS.map((slug) => ({ slug }));
}

async function resolve(params: PageProps<"/en/systems/[slug]">["params"]) {
  const { slug } = await params;
  if (!isSystemSlug(slug)) notFound();
  return slug;
}

export async function generateMetadata({ params }: PageProps<"/en/systems/[slug]">) {
  return systemMetadata("en", await resolve(params));
}

export default async function Page({ params }: PageProps<"/en/systems/[slug]">) {
  return <SystemView locale="en" slug={await resolve(params)} />;
}
