import { notFound } from "next/navigation";
import { GUIDE_IDS, GUIDE_SLUGS, guideIdFromSlug } from "@/content/routes";
import { GuideView, guideMetadata } from "@/views/GuideView";

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDE_IDS.map((id) => ({ slug: GUIDE_SLUGS[id].es }));
}

async function resolve(params: PageProps<"/guias/[slug]">["params"]) {
  const id = guideIdFromSlug("es", (await params).slug);
  if (!id) notFound();
  return id;
}

export async function generateMetadata({ params }: PageProps<"/guias/[slug]">) {
  return guideMetadata("es", await resolve(params));
}

export default async function Page({ params }: PageProps<"/guias/[slug]">) {
  return <GuideView locale="es" id={await resolve(params)} />;
}
