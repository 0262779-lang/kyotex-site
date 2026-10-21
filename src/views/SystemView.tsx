import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { BUTTON_PRIMARY, BUTTON_SECONDARY, Figure, PageHeader } from "@/components/PageParts";
import { UI } from "@/content/ui";
import { IMAGES } from "@/content/images";
import { SYSTEMS } from "@/content/systems";
import { PAGES, quoteHref, systemPaths, type SystemSlug } from "@/content/routes";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { pageGraph, productNode, webPageNode } from "@/lib/schema";
import { Body, QuoteCta, Related, applicationCard, crumbs, guideCard, systemCard } from "@/views/shared";

export function systemMetadata(locale: Locale, slug: SystemSlug): Metadata {
  const entry = SYSTEMS[slug];
  const copy = entry.copy[locale];
  return pageMetadata({
    locale,
    paths: systemPaths(slug),
    title: copy.title,
    description: copy.description,
    image: IMAGES[entry.ogImage],
  });
}

/** Página de un sistema (K System, K Thermo, K Next, K Pads). */
export function SystemView({ locale, slug }: { locale: Locale; slug: SystemSlug }) {
  const entry = SYSTEMS[slug];
  const copy = entry.copy[locale];
  const t = UI[locale];
  const paths = systemPaths(slug);
  const path = paths[locale];
  const trail = crumbs(locale, [
    { name: t.crumb.systems, path: PAGES.systems[locale] },
    { name: entry.code, path },
  ]);

  const jsonLd = pageGraph([
    webPageNode({ path, title: copy.title, description: copy.description, locale }),
    trail.schema,
    productNode({
      name: entry.code,
      description: copy.description,
      path,
      image: IMAGES[entry.ogImage],
      category: copy.schemaCategory,
    }),
  ]);

  return (
    <PageShell locale={locale} paths={paths} jsonLd={jsonLd}>
      <PageHeader
        locale={locale}
        crumbs={trail.visible}
        eyebrow={copy.eyebrow}
        title={copy.h1}
        lead={copy.lead}
      >
        <Link href={quoteHref(locale)} className={BUTTON_PRIMARY}>
          {t.quote}
        </Link>
        <Link href={PAGES.machinery[locale]} className={BUTTON_SECONDARY}>
          {t.seeMachinery}
        </Link>
      </PageHeader>

      {entry.image && (
        <section className="pt-12 md:pt-16">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <Figure
              image={IMAGES[entry.image]}
              locale={locale}
              sizes="(min-width: 1280px) 1024px, (min-width: 768px) 90vw, 100vw"
              caption={copy.imageCaption}
              className="max-w-5xl"
            />
          </div>
        </section>
      )}

      <Body sections={copy.sections} />

      <Related
        heading={t.applicationsHeading}
        items={entry.related.applications.map((id) => applicationCard(id, locale))}
      />
      <Related
        heading={t.systemsHeading}
        items={entry.related.systems.map((s) => systemCard(s, locale))}
        columns={2}
      />
      <Related
        heading={t.guidesHeading}
        items={entry.related.guides.map((g) => guideCard(g, locale))}
      />
      <QuoteCta locale={locale} />
    </PageShell>
  );
}
