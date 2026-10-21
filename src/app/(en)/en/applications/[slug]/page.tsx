import { notFound } from "next/navigation";
import { APPLICATION_SLUGS, applicationIdFromSlug, type ApplicationId } from "@/content/routes";
import { ApplicationView, applicationMetadata } from "@/views/ApplicationView";

export const dynamicParams = false;

export function generateStaticParams() {
  return (Object.keys(APPLICATION_SLUGS) as ApplicationId[]).map((id) => ({
    slug: APPLICATION_SLUGS[id].en,
  }));
}

async function resolve(params: PageProps<"/en/applications/[slug]">["params"]) {
  const id = applicationIdFromSlug("en", (await params).slug);
  if (!id) notFound();
  return id;
}

export async function generateMetadata({ params }: PageProps<"/en/applications/[slug]">) {
  return applicationMetadata("en", await resolve(params));
}

export default async function Page({ params }: PageProps<"/en/applications/[slug]">) {
  return <ApplicationView locale="en" id={await resolve(params)} />;
}
