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
import { CONTENT_UPDATED, absoluteUrl } from "@/lib/site";

// Todas las páginas en los dos idiomas, cada una con sus alternativas hreflang.
// lastModified es la fecha real de la última actualización del contenido.
const PAIRS: PathPair[] = [
  PAGES.home,
  PAGES.systems,
  ...SYSTEM_SLUGS.map(systemPaths),
  PAGES.machinery,
  PAGES.applications,
  ...(Object.keys(APPLICATION_SLUGS) as ApplicationId[]).map(applicationPaths),
  PAGES.about,
  PAGES.contact,
  PAGES.faq,
  PAGES.guides,
  ...GUIDE_IDS.map(guidePaths),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAIRS.flatMap((pair) => {
    const languages = {
      "es-MX": absoluteUrl(pair.es),
      "en-US": absoluteUrl(pair.en),
      "x-default": absoluteUrl(pair.es),
    };
    return [pair.es, pair.en].map((path) => ({
      url: absoluteUrl(path),
      lastModified: CONTENT_UPDATED,
      alternates: { languages },
    }));
  });
}
