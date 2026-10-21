import { notFound } from "next/navigation";
import { GUIDE_IDS, GUIDE_SLUGS, guideIdFromSlug } from "@/content/routes";
import { GuideView, guideMetadata } from "@/views/GuideView";

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDE_IDS.map((id) => ({ slug: GUIDE_SLUGS[id].en }));
}

async function resolve(params: PageProps<"/en/guides/[slug]">["params"]) {
  const id = guideIdFromSlug("en", (await params).slug);
  if (!id) notFound();
  return id;
}

export async function generateMetadata({ params }: PageProps<"/en/guides/[slug]">) {
  return guideMetadata("en", await resolve(params));
}

export default async function Page({ params }: PageProps<"/en/guides/[slug]">) {
  return <GuideView locale="en" id={await resolve(params)} />;
}
