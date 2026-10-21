import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProductShowcase, { type ShowcaseCard } from "@/components/ProductShowcase";
import ImageBand from "@/components/ImageBand";
import FeatureGrid from "@/components/FeatureGrid";
import MachineryStats from "@/components/MachineryStats";
import Reserve from "@/components/Reserve";
import { HomeCardsSection, HomeGallery } from "@/components/HomeSections";
import { HOME, QUOTE_FORM } from "@/content/home";
import { SYSTEMS } from "@/content/systems";
import { SYSTEMS_HUB } from "@/content/pages";
import { IMAGES } from "@/content/images";
import { APPLICATION_IDS } from "@/content/applications";
import { PAGES, SYSTEM_SLUGS, systemPaths, type GuideId } from "@/content/routes";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { pageGraph, videoNode, webPageNode } from "@/lib/schema";
import { applicationCard, guideCard } from "@/views/shared";

const HOME_GUIDES: GuideId[] = ["solvents", "hotmelt", "cold"];

export function homeMetadata(locale: Locale): Metadata {
  const copy = HOME[locale];
  return pageMetadata({
    locale,
    paths: PAGES.home,
    title: copy.title,
    description: copy.description,
    image: IMAGES.tradeShow,
  });
}

/** Tarjetas de la portada: los cuatro sistemas y la maquinaria, cada una con su página. */
function showcaseCards(locale: Locale): ShowcaseCard[] {
  const machinery = SYSTEMS_HUB[locale].machineryCard;
  return [
    ...SYSTEM_SLUGS.map((slug) => {
      const copy = SYSTEMS[slug].copy[locale];
      return {
        href: systemPaths(slug)[locale],
        code: SYSTEMS[slug].code,
        title: copy.cardTitle,
        text: copy.cardText,
        cta: copy.cardCta,
      };
    }),
    {
      href: PAGES.machinery[locale],
      code: machinery.eyebrow ?? "",
      title: machinery.title,
      text: machinery.text,
      cta: machinery.cta,
    },
  ];
}

export function HomeView({ locale }: { locale: Locale }) {
  const copy = HOME[locale];
  const path = PAGES.home[locale];
  const jsonLd = pageGraph([
    webPageNode({ path, title: copy.title, description: copy.description, locale }),
    videoNode("hero", locale),
    videoNode("machinery", locale),
  ]);

  return (
    <PageShell locale={locale} paths={PAGES.home} jsonLd={jsonLd}>
      <Hero locale={locale} t={copy.hero} />
      <Marquee items={copy.marquee} />
      <ProductShowcase t={copy.showcase} cards={showcaseCards(locale)} />
      <ImageBand locale={locale} t={copy.band} />
      <HomeCardsSection
        eyebrow={copy.applications.eyebrow}
        heading={copy.applications.heading}
        text={copy.applications.text}
        items={APPLICATION_IDS.map((id) => applicationCard(id, locale))}
        link={{ href: PAGES.applications[locale], label: copy.applications.link }}
      />
      <FeatureGrid t={copy.features} />
      <MachineryStats locale={locale} t={copy.machinery} stats={copy.stats} />
      <HomeGallery
        locale={locale}
        eyebrow={copy.gallery.eyebrow}
        heading={copy.gallery.heading}
        items={copy.gallery.items}
        link={{ href: PAGES.machinery[locale], label: copy.gallery.link }}
      />
      <HomeCardsSection
        eyebrow={copy.guides.eyebrow}
        heading={copy.guides.heading}
        items={HOME_GUIDES.map((id) => guideCard(id, locale))}
        link={{ href: PAGES.guides[locale], label: copy.guides.link }}
      />
      <Reserve locale={locale} t={copy.form} form={QUOTE_FORM[locale]} />
    </PageShell>
  );
}
