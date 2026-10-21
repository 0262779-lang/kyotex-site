// Datos estructurados (JSON-LD). Cada página arma su @graph con los nodos del
// sitio (empresa y sitio web) más los suyos (migas, producto, artículo, FAQ, video).
import { IMAGES, VIDEOS, type SiteImage, type VideoKey } from "@/content/images";
import { HTML_LANG, type Locale } from "@/lib/i18n";
import { BUSINESS, CONTENT_UPDATED, SITE_NAME, absoluteUrl } from "@/lib/site";

const ORG_ID = `${absoluteUrl("/")}/#organization`;
const WEBSITE_ID = `${absoluteUrl("/")}/#website`;

type Node = Record<string, unknown>;

function organizationNode(): Node {
  return {
    "@type": ["Organization", "LocalBusiness"],
    "@id": ORG_ID,
    name: BUSINESS.name,
    alternateName: ["Kyotex-Terlan North America", "Kyotex Norteamérica"],
    url: absoluteUrl("/"),
    logo: absoluteUrl("/logo.png"),
    image: absoluteUrl(IMAGES.tradeShow.src),
    telephone: BUSINESS.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.countryCode,
    },
    areaServed: [...BUSINESS.areaServed],
    sameAs: [],
  };
}

function websiteNode(): Node {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    alternateName: [BUSINESS.name, "Kyotex Norteamérica"],
    url: absoluteUrl("/"),
    inLanguage: [HTML_LANG.es, HTML_LANG.en],
    publisher: { "@id": ORG_ID },
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbNode(crumbs: Crumb[]): Node {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function productNode({
  name,
  description,
  path,
  image,
  category,
}: {
  name: string;
  description: string;
  path: string;
  image: SiteImage;
  category: string;
}): Node {
  // Sin precios ni reseñas: solo la información publicada del producto.
  return {
    "@type": "Product",
    "@id": `${absoluteUrl(path)}#product`,
    name,
    description,
    url: absoluteUrl(path),
    image: absoluteUrl(image.src),
    category,
    brand: { "@type": "Brand", name: "Kyotex" },
    manufacturer: {
      "@type": "Organization",
      name: "ALC – Adhesives Leading Company",
      url: "https://alcgruppo.com/",
    },
  };
}

export function faqNode(items: { q: string; a: string }[]): Node {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function articleNode({
  title,
  description,
  path,
  image,
  locale,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  path: string;
  image: SiteImage;
  locale: Locale;
  datePublished: string;
  dateModified: string;
}): Node {
  return {
    "@type": "Article",
    "@id": `${absoluteUrl(path)}#article`,
    headline: title,
    description,
    image: [absoluteUrl(image.src)],
    datePublished,
    dateModified,
    inLanguage: HTML_LANG[locale],
    author: { "@type": "Organization", name: BUSINESS.name, url: absoluteUrl("/") },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: absoluteUrl(path),
  };
}

export function videoNode(key: VideoKey, locale: Locale): Node {
  const video = VIDEOS[key];
  return {
    "@type": "VideoObject",
    "@id": `${absoluteUrl(video.mp4)}#video`,
    name: video.name[locale],
    description: video.description[locale],
    thumbnailUrl: [absoluteUrl(video.thumbnail)],
    uploadDate: video.uploadDate,
    duration: video.duration,
    contentUrl: absoluteUrl(video.mp4),
    publisher: { "@id": ORG_ID },
  };
}

export function webPageNode({
  path,
  title,
  description,
  locale,
}: {
  path: string;
  title: string;
  description: string;
  locale: Locale;
}): Node {
  return {
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    inLanguage: HTML_LANG[locale],
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    dateModified: CONTENT_UPDATED,
  };
}

export function pageGraph(nodes: Node[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), websiteNode(), ...nodes],
  };
}
