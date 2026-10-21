import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { PageHeader } from "@/components/PageParts";
import NapBlock from "@/components/NapBlock";
import CatalogDownload from "@/components/CatalogDownload";
import QuoteForm from "@/components/QuoteForm";
import { inline } from "@/components/RichText";
import { UI } from "@/content/ui";
import { IMAGES } from "@/content/images";
import { HOME, QUOTE_FORM } from "@/content/home";
import { CONTACT } from "@/content/pages";
import { PAGES, QUOTE_ANCHOR } from "@/content/routes";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { pageGraph, webPageNode } from "@/lib/schema";
import { crumbs } from "@/views/shared";

export function contactMetadata(locale: Locale): Metadata {
  const copy = CONTACT[locale];
  return pageMetadata({
    locale,
    paths: PAGES.contact,
    title: copy.title,
    description: copy.description,
    image: IMAGES.tradeShow,
  });
}

/** Contacto: datos exactos, "Cómo llegar" y el formulario de cotización. */
export function ContactView({ locale }: { locale: Locale }) {
  const copy = CONTACT[locale];
  const form = HOME[locale].form;
  const t = UI[locale];
  const path = PAGES.contact[locale];
  const trail = crumbs(locale, [{ name: t.crumb.contact, path }]);
  const jsonLd = pageGraph([
    webPageNode({ path, title: copy.title, description: copy.description, locale }),
    trail.schema,
  ]);

  return (
    <PageShell locale={locale} paths={PAGES.contact} jsonLd={jsonLd}>
      <PageHeader locale={locale} crumbs={trail.visible} eyebrow={copy.eyebrow} title={copy.h1} lead={copy.lead} />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="space-y-10">
            <div>
              <h2 className="font-display text-[clamp(1.5rem,1.1rem+1.2vw,2rem)] leading-tight mb-6">
                {copy.addressHeading}
              </h2>
              <NapBlock locale={locale} />
              <CatalogDownload locale={locale} className="mt-6" />
            </div>
            <div className="prose-k">
              <h2>{copy.includeHeading}</h2>
              <ul>
                {copy.includeList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h2>{copy.moreHeading}</h2>
              <p>{inline(copy.moreText)}</p>
            </div>
          </div>

          <div id={QUOTE_ANCHOR[locale]} className="scroll-mt-24">
            <div className="bg-card border border-border rounded-sm p-8 md:p-10">
              <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">{form.eyebrow}</p>
              <h2 className="font-display text-[clamp(1.5rem,1.1rem+1.2vw,2rem)] leading-tight text-balance mb-4">
                {form.heading}
              </h2>
              <p className="text-secondary text-base leading-relaxed mb-8">{form.text}</p>
              <QuoteForm locale={locale} t={QUOTE_FORM[locale]} />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
