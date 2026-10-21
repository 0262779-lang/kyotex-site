import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import PageShell from "@/components/PageShell";
import CatalogDownload from "@/components/CatalogDownload";
import { BUTTON_PRIMARY, CardGrid, PageHeader } from "@/components/PageParts";
import { UI } from "@/content/ui";
import { IMAGES } from "@/content/images";
import { APPLICATIONS_HUB, GUIDES_HUB, SYSTEMS_HUB } from "@/content/pages";
import { APPLICATION_IDS } from "@/content/applications";
import { GUIDE_IDS, PAGES, SYSTEM_SLUGS, quoteHref } from "@/content/routes";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { pageGraph, webPageNode } from "@/lib/schema";
import { Body, QuoteCta, Related, applicationCard, crumbs, guideCard, systemCard } from "@/views/shared";

function CardsSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="pt-16 md:pt-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <h2 className="font-display text-2xl md:text-3xl mb-8">{heading}</h2>
        {children}
      </div>
    </section>
  );
}

// ——— Sistemas ———

export function systemsHubMetadata(locale: Locale): Metadata {
  const copy = SYSTEMS_HUB[locale];
  return pageMetadata({
    locale,
    paths: PAGES.systems,
    title: copy.title,
    description: copy.description,
    image: IMAGES.tradeShow,
  });
}

export function SystemsHubView({ locale }: { locale: Locale }) {
  const copy = SYSTEMS_HUB[locale];
  const t = UI[locale];
  const path = PAGES.systems[locale];
  const trail = crumbs(locale, [{ name: t.crumb.systems, path }]);
  const jsonLd = pageGraph([
    webPageNode({ path, title: copy.title, description: copy.description, locale }),
    trail.schema,
  ]);
  const machinery = copy.machineryCard;

  return (
    <PageShell locale={locale} paths={PAGES.systems} jsonLd={jsonLd}>
      <PageHeader locale={locale} crumbs={trail.visible} eyebrow={copy.eyebrow} title={copy.h1} lead={copy.lead}>
        <Link href={quoteHref(locale)} className={BUTTON_PRIMARY}>
          {t.quote}
        </Link>
      </PageHeader>
      <CardsSection heading={copy.cardsHeading}>
        <CardGrid
          items={[
            ...SYSTEM_SLUGS.map((slug) => systemCard(slug, locale)),
            {
              href: PAGES.machinery[locale],
              eyebrow: machinery.eyebrow,
              title: machinery.title,
              text: machinery.text,
              cta: machinery.cta,
            },
          ]}
        />
        <CatalogDownload locale={locale} className="mt-10" />
      </CardsSection>
      <Body sections={copy.sections} />
      <Related
        heading={copy.applicationsHeading}
        items={APPLICATION_IDS.map((id) => applicationCard(id, locale))}
      />
      <QuoteCta locale={locale} />
    </PageShell>
  );
}

// ——— Aplicaciones ———

export function applicationsHubMetadata(locale: Locale): Metadata {
  const copy = APPLICATIONS_HUB[locale];
  return pageMetadata({
    locale,
    paths: PAGES.applications,
    title: copy.title,
    description: copy.description,
    image: IMAGES.insoleTape,
  });
}

export function ApplicationsHubView({ locale }: { locale: Locale }) {
  const copy = APPLICATIONS_HUB[locale];
  const t = UI[locale];
  const path = PAGES.applications[locale];
  const trail = crumbs(locale, [{ name: t.crumb.applications, path }]);
  const jsonLd = pageGraph([
    webPageNode({ path, title: copy.title, description: copy.description, locale }),
    trail.schema,
  ]);

  return (
    <PageShell locale={locale} paths={PAGES.applications} jsonLd={jsonLd}>
      <PageHeader locale={locale} crumbs={trail.visible} eyebrow={copy.eyebrow} title={copy.h1} lead={copy.lead}>
        <Link href={quoteHref(locale)} className={BUTTON_PRIMARY}>
          {t.quote}
        </Link>
      </PageHeader>
      <CardsSection heading={copy.cardsHeading}>
        <CardGrid items={APPLICATION_IDS.map((id) => applicationCard(id, locale))} />
      </CardsSection>
      <Body sections={copy.sections} />
      <Related
        heading={t.systemsHeading}
        items={SYSTEM_SLUGS.map((slug) => systemCard(slug, locale))}
        columns={2}
      />
      <QuoteCta locale={locale} />
    </PageShell>
  );
}

// ——— Guías ———

export function guidesHubMetadata(locale: Locale): Metadata {
  const copy = GUIDES_HUB[locale];
  return pageMetadata({
    locale,
    paths: PAGES.guides,
    title: copy.title,
    description: copy.description,
    image: IMAGES.insoleTape,
  });
}

export function GuidesHubView({ locale }: { locale: Locale }) {
  const copy = GUIDES_HUB[locale];
  const t = UI[locale];
  const path = PAGES.guides[locale];
  const trail = crumbs(locale, [{ name: t.crumb.guides, path }]);
  const jsonLd = pageGraph([
    webPageNode({ path, title: copy.title, description: copy.description, locale }),
    trail.schema,
  ]);

  return (
    <PageShell locale={locale} paths={PAGES.guides} jsonLd={jsonLd}>
      <PageHeader locale={locale} crumbs={trail.visible} eyebrow={copy.eyebrow} title={copy.h1} lead={copy.lead} />
      <CardsSection heading={copy.cardsHeading}>
        <CardGrid items={GUIDE_IDS.map((id) => guideCard(id, locale))} />
      </CardsSection>
      <Body sections={copy.sections} />
      <QuoteCta locale={locale} />
    </PageShell>
  );
}
