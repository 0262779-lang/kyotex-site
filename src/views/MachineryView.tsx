import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import HeroVideo from "@/components/HeroVideo";
import { BUTTON_PRIMARY, Figure, PageHeader } from "@/components/PageParts";
import { UI } from "@/content/ui";
import { IMAGES, VIDEOS } from "@/content/images";
import { MACHINERY } from "@/content/pages";
import { PAGES, SYSTEM_SLUGS, quoteHref } from "@/content/routes";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { pageGraph, videoNode, webPageNode } from "@/lib/schema";
import { Body, QuoteCta, Related, crumbs, systemCard } from "@/views/shared";

export function machineryMetadata(locale: Locale): Metadata {
  const copy = MACHINERY[locale];
  return pageMetadata({
    locale,
    paths: PAGES.machinery,
    title: copy.title,
    description: copy.description,
    image: IMAGES.kyo101,
  });
}

export function MachineryView({ locale }: { locale: Locale }) {
  const copy = MACHINERY[locale];
  const t = UI[locale];
  const path = PAGES.machinery[locale];
  const trail = crumbs(locale, [{ name: t.crumb.machinery, path }]);
  const video = VIDEOS.machinery;
  const jsonLd = pageGraph([
    webPageNode({ path, title: copy.title, description: copy.description, locale }),
    trail.schema,
    videoNode("machinery", locale),
  ]);

  return (
    <PageShell locale={locale} paths={PAGES.machinery} jsonLd={jsonLd}>
      <PageHeader locale={locale} crumbs={trail.visible} eyebrow={copy.eyebrow} title={copy.h1} lead={copy.lead}>
        <Link href={quoteHref(locale)} className={BUTTON_PRIMARY}>
          {t.quote}
        </Link>
      </PageHeader>

      <section className="pt-12 md:pt-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <figure className="max-w-5xl">
            <div className="relative aspect-video rounded-sm overflow-hidden bg-muted">
              <HeroVideo
                webmSrc={video.webm}
                mp4Src={video.mp4}
                poster={video.poster}
                label={video.name[locale]}
                className="h-full w-full"
              />
            </div>
            <figcaption className="text-sm text-secondary mt-3">{copy.videoCaption}</figcaption>
          </figure>
        </div>
      </section>

      <Body sections={copy.sections} />

      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="font-display text-2xl md:text-3xl mb-8">{copy.galleryHeading}</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {copy.gallery.map((item) => (
              <Figure
                key={item.image}
                image={IMAGES[item.image]}
                locale={locale}
                sizes="(min-width: 1280px) 600px, (min-width: 640px) 50vw, 100vw"
                caption={item.caption}
              />
            ))}
          </div>
        </div>
      </section>

      <Related
        heading={copy.systemsHeading}
        items={SYSTEM_SLUGS.map((slug) => systemCard(slug, locale))}
        columns={2}
      />
      <QuoteCta locale={locale} />
    </PageShell>
  );
}
