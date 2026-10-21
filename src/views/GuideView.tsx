import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { Figure, PageHeader } from "@/components/PageParts";
import { countWords } from "@/components/RichText";
import { UI } from "@/content/ui";
import { IMAGES } from "@/content/images";
import { GUIDES } from "@/content/guides";
import { PAGES, guidePaths, type GuideId } from "@/content/routes";
import { HTML_LANG, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { articleNode, pageGraph } from "@/lib/schema";
import {
  Body,
  QuoteCta,
  Related,
  applicationCard,
  crumbs,
  guideCard,
  systemCard,
} from "@/views/shared";

export function guideMetadata(locale: Locale, id: GuideId): Metadata {
  const entry = GUIDES[id];
  const copy = entry.copy[locale];
  return pageMetadata({
    locale,
    paths: guidePaths(id),
    title: copy.title,
    description: copy.description,
    image: IMAGES[entry.image],
    article: {
      publishedTime: entry.datePublished,
      modifiedTime: entry.dateModified,
    },
  });
}

function formatDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(HTML_LANG[locale], {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

/** Artículo de la sección de guías, con su schema Article. */
export function GuideView({ locale, id }: { locale: Locale; id: GuideId }) {
  const entry = GUIDES[id];
  const copy = entry.copy[locale];
  const t = UI[locale];
  const paths = guidePaths(id);
  const path = paths[locale];
  const trail = crumbs(locale, [
    { name: t.crumb.guides, path: PAGES.guides[locale] },
    { name: copy.h1, path },
  ]);

  const words = countWords([
    copy.lead,
    ...copy.sections.flatMap((s) =>
      s.blocks.map((b) =>
        typeof b === "string" ? b : "h3" in b ? b.h3 : b.list.join(" ")
      )
    ),
  ]);
  const minutes = Math.max(1, Math.round(words / 200));

  const jsonLd = pageGraph([
    trail.schema,
    articleNode({
      title: copy.h1,
      description: copy.description,
      path,
      image: IMAGES[entry.image],
      locale,
      datePublished: entry.datePublished,
      dateModified: entry.dateModified,
    }),
  ]);

  return (
    <PageShell locale={locale} paths={paths} jsonLd={jsonLd}>
      <article>
        <PageHeader
          locale={locale}
          crumbs={trail.visible}
          eyebrow={t.guideLabel}
          title={copy.h1}
          lead={copy.lead}
        >
          <p className="text-sm text-secondary">
            {t.published}{" "}
            <time dateTime={entry.datePublished}>
              {formatDate(entry.datePublished, locale)}
            </time>{" "}
            · {minutes} {t.readingTime}
          </p>
        </PageHeader>

        <section className="pt-12 md:pt-16">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <Figure
              image={IMAGES[entry.image]}
              locale={locale}
              sizes="(min-width: 768px) 768px, 100vw"
              className="max-w-3xl"
            />
          </div>
        </section>

        <Body sections={copy.sections} />
      </article>

      <Related
        heading={t.guidesHeading}
        items={entry.related.guides.map((g) => guideCard(g, locale))}
        columns={2}
      />
      <Related
        heading={t.systemsHeading}
        items={entry.related.systems.map((s) => systemCard(s, locale))}
      />
      <Related
        heading={t.applicationsHeading}
        items={entry.related.applications.map((a) => applicationCard(a, locale))}
        columns={2}
      />
      <QuoteCta locale={locale} />
    </PageShell>
  );
}
