import type { Metadata } from "next";
import type { SiteImage } from "@/content/images";
import type { PathPair } from "@/content/routes";
import { OG_LOCALE, otherLocale, type Locale } from "@/lib/i18n";
import { SITE_NAME } from "@/lib/site";

type PageSeo = {
  locale: Locale;
  /** Ruta de esta página en los dos idiomas (canonical + hreflang). */
  paths: PathPair;
  title: string;
  description: string;
  image: SiteImage;
  article?: { publishedTime: string; modifiedTime: string };
};

/** Title, description, canonical propio, hreflang es-MX / en-US / x-default y Open Graph. */
export function pageMetadata({
  locale,
  paths,
  title,
  description,
  image,
  article,
}: PageSeo): Metadata {
  const ogImage = {
    url: image.src,
    width: image.width,
    height: image.height,
    alt: image.alt[locale],
  };
  const shared = {
    url: paths[locale],
    title,
    description,
    siteName: SITE_NAME,
    locale: OG_LOCALE[locale],
    alternateLocale: [OG_LOCALE[otherLocale(locale)]],
    images: [ogImage],
  };

  return {
    title,
    description,
    alternates: {
      canonical: paths[locale],
      languages: {
        "es-MX": paths.es,
        "en-US": paths.en,
        "x-default": paths.es,
      },
    },
    openGraph: article
      ? { ...shared, type: "article", ...article }
      : { ...shared, type: "website" },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.src],
    },
  };
}
