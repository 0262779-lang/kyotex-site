import type { ReactNode } from "react";
import { CardGrid, Prose, QuoteCta, type CardItem, type CrumbLink } from "@/components/PageParts";
import { Sections, type Section } from "@/components/RichText";
import { UI } from "@/content/ui";
import { APPLICATIONS } from "@/content/applications";
import { GUIDES } from "@/content/guides";
import { SYSTEMS } from "@/content/systems";
import {
  PAGES,
  applicationPaths,
  guidePaths,
  systemPaths,
  type ApplicationId,
  type GuideId,
  type SystemSlug,
} from "@/content/routes";
import type { Locale } from "@/lib/i18n";
import { breadcrumbNode } from "@/lib/schema";

/** Migas visibles y su BreadcrumbList, siempre desde el inicio del idioma. */
export function crumbs(locale: Locale, items: { name: string; path: string }[]) {
  const all = [{ name: UI[locale].homeLabel, path: PAGES.home[locale] }, ...items];
  const visible: CrumbLink[] = all.map((c) => ({ name: c.name, href: c.path }));
  return { visible, schema: breadcrumbNode(all) };
}

export function systemCard(slug: SystemSlug, locale: Locale): CardItem {
  const copy = SYSTEMS[slug].copy[locale];
  return {
    href: systemPaths(slug)[locale],
    eyebrow: SYSTEMS[slug].code,
    title: copy.cardTitle,
    text: copy.cardText,
    cta: copy.cardCta,
  };
}

export function applicationCard(id: ApplicationId, locale: Locale): CardItem {
  const copy = APPLICATIONS[id].copy[locale];
  return {
    href: applicationPaths(id)[locale],
    title: copy.cardTitle,
    text: copy.cardText,
    cta: copy.cardCta,
  };
}

export function guideCard(id: GuideId, locale: Locale): CardItem {
  const copy = GUIDES[id].copy[locale];
  return {
    href: guidePaths(id)[locale],
    eyebrow: UI[locale].guideLabel,
    title: copy.h1,
    text: copy.cardText,
    cta: UI[locale].readGuide,
  };
}

/** Cuerpo de texto de una página con secciones H2. */
export function Body({ sections, children }: { sections: Section[]; children?: ReactNode }) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Prose>
          <Sections sections={sections} />
        </Prose>
        {children}
      </div>
    </section>
  );
}

/** Bloque de enlaces relacionados al final de una página. */
export function Related({
  heading,
  items,
  columns = 3,
}: {
  heading: string;
  items: CardItem[];
  columns?: 2 | 3;
}) {
  if (items.length === 0) return null;
  return (
    <section className="pt-4 pb-8">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <h2 className="font-display text-2xl md:text-3xl mb-8">{heading}</h2>
        <CardGrid items={items} columns={columns} />
      </div>
    </section>
  );
}

export { QuoteCta };
