import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { BUTTON_PRIMARY, Figure, PageHeader } from "@/components/PageParts";
import NapBlock from "@/components/NapBlock";
import { UI } from "@/content/ui";
import { IMAGES } from "@/content/images";
import { ABOUT } from "@/content/pages";
import { PAGES, SYSTEM_SLUGS, quoteHref } from "@/content/routes";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { pageGraph, webPageNode } from "@/lib/schema";
import { Body, QuoteCta, Related, crumbs, systemCard } from "@/views/shared";

export function aboutMetadata(locale: Locale): Metadata {
  const copy = ABOUT[locale];
  return pageMetadata({
    locale,
    paths: PAGES.about,
    title: copy.title,
    description: copy.description,
    image: IMAGES.tradeShow,
  });
}

export function AboutView({ locale }: { locale: Locale }) {
  const copy = ABOUT[locale];
  const t = UI[locale];
  const path = PAGES.about[locale];
  const trail = crumbs(locale, [{ name: t.crumb.about, path }]);
  const jsonLd = pageGraph([
    webPageNode({ path, title: copy.title, description: copy.description, locale }),
    trail.schema,
  ]);

  return (
    <PageShell locale={locale} paths={PAGES.about} jsonLd={jsonLd}>
      <PageHeader locale={locale} crumbs={trail.visible} eyebrow={copy.eyebrow} title={copy.h1} lead={copy.lead}>
        <Link href={quoteHref(locale)} className={BUTTON_PRIMARY}>
          {t.quote}
        </Link>
      </PageHeader>

      <section className="pt-12 md:pt-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Figure
            image={IMAGES.tradeShow}
            locale={locale}
            sizes="(min-width: 1280px) 1024px, (min-width: 768px) 90vw, 100vw"
            className="max-w-5xl"
          />
        </div>
      </section>

      <Body sections={copy.sections}>
        <div className="max-w-3xl mt-12">
          <h2 className="font-display text-[clamp(1.5rem,1.1rem+1.2vw,2rem)] leading-tight mb-6">
            {copy.visitHeading}
          </h2>
          <NapBlock locale={locale} />
        </div>
      </Body>

      <Related
        heading={t.systemsHeading}
        items={SYSTEM_SLUGS.map((slug) => systemCard(slug, locale))}
        columns={2}
      />
      <QuoteCta locale={locale} />
    </PageShell>
  );
}
