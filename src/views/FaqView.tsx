import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { PageHeader } from "@/components/PageParts";
import { inline } from "@/components/RichText";
import { UI } from "@/content/ui";
import { IMAGES } from "@/content/images";
import { FAQ_PAGE, plainText } from "@/content/faq";
import { GUIDE_IDS, PAGES } from "@/content/routes";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { faqNode, pageGraph } from "@/lib/schema";
import { QuoteCta, Related, crumbs, guideCard } from "@/views/shared";

export function faqMetadata(locale: Locale): Metadata {
  const copy = FAQ_PAGE[locale];
  return pageMetadata({
    locale,
    paths: PAGES.faq,
    title: copy.title,
    description: copy.description,
    image: IMAGES.insoleTape,
  });
}

export function FaqView({ locale }: { locale: Locale }) {
  const copy = FAQ_PAGE[locale];
  const t = UI[locale];
  const path = PAGES.faq[locale];
  const trail = crumbs(locale, [{ name: t.crumb.faq, path }]);
  // El schema lleva exactamente las mismas preguntas y respuestas que se ven.
  const jsonLd = pageGraph([
    trail.schema,
    faqNode(copy.items.map((item) => ({ q: item.q, a: plainText(item.a) }))),
  ]);

  return (
    <PageShell locale={locale} paths={PAGES.faq} jsonLd={jsonLd}>
      <PageHeader locale={locale} crumbs={trail.visible} eyebrow={copy.eyebrow} title={copy.h1} lead={copy.lead} />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="prose-k max-w-3xl">
            {copy.items.map((item) => (
              <section key={item.q}>
                <h2>{item.q}</h2>
                <p>{inline(item.a)}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <Related
        heading={t.guidesHeading}
        items={GUIDE_IDS.slice(0, 3).map((id) => guideCard(id, locale))}
      />
      <QuoteCta locale={locale} />
    </PageShell>
  );
}
