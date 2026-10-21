import { notFound } from "next/navigation";
import { APPLICATION_SLUGS, applicationIdFromSlug, type ApplicationId } from "@/content/routes";
import { ApplicationView, applicationMetadata } from "@/views/ApplicationView";

export const dynamicParams = false;

export function generateStaticParams() {
  return (Object.keys(APPLICATION_SLUGS) as ApplicationId[]).map((id) => ({
    slug: APPLICATION_SLUGS[id].es,
  }));
}

async function resolve(params: PageProps<"/aplicaciones/[slug]">["params"]) {
  const id = applicationIdFromSlug("es", (await params).slug);
  if (!id) notFound();
  return id;
}

export async function generateMetadata({ params }: PageProps<"/aplicaciones/[slug]">) {
  return applicationMetadata("es", await resolve(params));
}

export default async function Page({ params }: PageProps<"/aplicaciones/[slug]">) {
  return <ApplicationView locale="es" id={await resolve(params)} />;
}
