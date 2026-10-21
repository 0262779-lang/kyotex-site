import type { MetadataRoute } from "next";
import {
  APPLICATION_SLUGS,
  GUIDE_IDS,
  PAGES,
  SYSTEM_SLUGS,
  applicationPaths,
  guidePaths,
  systemPaths,
  type ApplicationId,
  type PathPair,
} from "@/content/routes";
import { GUIDES, GUIDES_UPDATED } from "@/content/guides";
import { CONTENT_UPDATED, absoluteUrl } from "@/lib/site";

// Todas las páginas en los dos idiomas, cada una con sus alternativas hreflang.
// lastModified es la fecha real de la última actualización de cada página:
// las guías usan su propia fecha y el resto la del contenido del sitio.
const PAIRS: { pair: PathPair; lastModified: string }[] = [
  ...[
    PAGES.home,
    PAGES.systems,
    ...SYSTEM_SLUGS.map(systemPaths),
    PAGES.machinery,
    PAGES.applications,
    ...(Object.keys(APPLICATION_SLUGS) as ApplicationId[]).map(applicationPaths),
    PAGES.about,
    PAGES.contact,
    PAGES.faq,
  ].map((pair) => ({ pair, lastModified: CONTENT_UPDATED })),
  {
    pair: PAGES.guides,
    lastModified: [CONTENT_UPDATED, GUIDES_UPDATED].sort().at(-1) as string,
  },
  ...GUIDE_IDS.map((id) => ({
    pair: guidePaths(id),
    lastModified: GUIDES[id].dateModified,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAIRS.flatMap(({ pair, lastModified }) => {
    const languages = {
      "es-MX": absoluteUrl(pair.es),
      "en-US": absoluteUrl(pair.en),
      "x-default": absoluteUrl(pair.es),
    };
    return [pair.es, pair.en].map((path) => ({
      url: absoluteUrl(path),
      lastModified,
      alternates: { languages },
    }));
  });
}
