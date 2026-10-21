import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { BUTTON_PRIMARY, BUTTON_SECONDARY, Figure, PageHeader } from "@/components/PageParts";
import { UI } from "@/content/ui";
import { IMAGES } from "@/content/images";
import { APPLICATIONS } from "@/content/applications";
import { PAGES, applicationPaths, quoteHref, type ApplicationId } from "@/content/routes";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { pageGraph, webPageNode } from "@/lib/schema";
import { Body, QuoteCta, Related, crumbs, guideCard, systemCard } from "@/views/shared";

export function applicationMetadata(locale: Locale, id: ApplicationId): Metadata {
  const entry = APPLICATIONS[id];
  const copy = entry.copy[locale];
  return pageMetadata({
    locale,
    paths: applicationPaths(id),
    title: copy.title,
    description: copy.description,
    image: IMAGES[entry.image],
  });
}

/** Página de una aplicación (emplantillado, marroquinería, laminado). */
export function ApplicationView({ locale, id }: { locale: Locale; id: ApplicationId }) {
  const entry = APPLICATIONS[id];
  const copy = entry.copy[locale];
  const t = UI[locale];
  const paths = applicationPaths(id);
  const path = paths[locale];
  const trail = crumbs(locale, [
    { name: t.crumb.applications, path: PAGES.applications[locale] },
    { name: copy.cardTitle, path },
  ]);

  const jsonLd = pageGraph([
    webPageNode({ path, title: copy.title, description: copy.description, locale }),
    trail.schema,
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

      <Body sections={copy.sections} />

      <Related
        heading={t.systemsHeading}
        items={entry.related.systems.map((s) => systemCard(s, locale))}
      />
      <Related
        heading={t.guidesHeading}
        items={entry.related.guides.map((g) => guideCard(g, locale))}
      />
      <QuoteCta locale={locale} />
    </PageShell>
  );
}
