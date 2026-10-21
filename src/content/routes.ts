import type { Locale, Localized } from "@/lib/i18n";

/** Rutas de cada página en los dos idiomas: alimentan el menú, hreflang y el sitemap. */
export type PathPair = Localized<string>;

export const PAGES = {
  home: { es: "/", en: "/en" },
  systems: { es: "/sistemas", en: "/en/systems" },
  machinery: { es: "/maquinaria", en: "/en/machinery" },
  applications: { es: "/aplicaciones", en: "/en/applications" },
  about: { es: "/nosotros", en: "/en/about" },
  contact: { es: "/contacto", en: "/en/contact" },
  faq: { es: "/preguntas-frecuentes", en: "/en/faq" },
  guides: { es: "/guias", en: "/en/guides" },
} satisfies Record<string, PathPair>;

export type SystemSlug = "k-system" | "k-thermo" | "k-next" | "k-pads";
export const SYSTEM_SLUGS: readonly SystemSlug[] = [
  "k-system",
  "k-thermo",
  "k-next",
  "k-pads",
];

export function systemPaths(slug: SystemSlug): PathPair {
  return { es: `/sistemas/${slug}`, en: `/en/systems/${slug}` };
}

export type ApplicationId = "insole" | "leather" | "lamination";
export const APPLICATION_SLUGS: Record<ApplicationId, Localized<string>> = {
  insole: { es: "emplantillado-sin-solventes", en: "solvent-free-insole-bonding" },
  leather: { es: "marroquineria", en: "leather-goods" },
  lamination: { es: "laminado", en: "lamination" },
};

export function applicationPaths(id: ApplicationId): PathPair {
  const slug = APPLICATION_SLUGS[id];
  return { es: `/aplicaciones/${slug.es}`, en: `/en/applications/${slug.en}` };
}

export type GuideId =
  | "solvents"
  | "hotmelt"
  | "psa"
  | "voc"
  | "cold"
  | "insoling"
  | "reinforcements"
  | "hotmeltTypes"
  | "materials";
export const GUIDE_SLUGS: Record<GuideId, Localized<string>> = {
  solvents: {
    es: "como-eliminar-solventes-en-el-emplantillado-de-calzado",
    en: "how-to-remove-solvents-from-insole-bonding",
  },
  hotmelt: {
    es: "termoadhesivo-vs-pegamento-base-solvente-en-calzado",
    en: "hot-melt-vs-solvent-based-shoe-adhesive",
  },
  psa: {
    es: "que-es-un-adhesivo-psa-y-como-se-usa-en-calzado",
    en: "what-is-a-psa-adhesive-in-footwear",
  },
  voc: {
    es: "como-reducir-emisiones-de-cov-en-una-fabrica-de-calzado",
    en: "how-to-reduce-voc-emissions-in-a-shoe-factory",
  },
  cold: {
    es: "emplantillado-en-frio-que-es-y-cuando-conviene",
    en: "cold-insole-bonding-what-it-is-and-when-to-use-it",
  },
  insoling: {
    es: "que-es-el-emplantillado-y-como-se-hace",
    en: "insole-bonding-in-shoe-manufacturing",
  },
  reinforcements: {
    es: "punteras-y-contrafuertes-para-calzado",
    en: "toe-puffs-and-heel-counters-for-footwear",
  },
  hotmeltTypes: {
    es: "tipos-de-hot-melt-para-calzado-tpu-pes-eva-pbs",
    en: "types-of-hot-melt-adhesive-for-footwear",
  },
  materials: {
    es: "como-elegir-el-adhesivo-segun-el-material-del-calzado",
    en: "how-to-choose-a-shoe-adhesive-by-material",
  },
};
export const GUIDE_IDS = Object.keys(GUIDE_SLUGS) as GuideId[];

export function guidePaths(id: GuideId): PathPair {
  const slug = GUIDE_SLUGS[id];
  return { es: `/guias/${slug.es}`, en: `/en/guides/${slug.en}` };
}

export const QUOTE_ANCHOR: Localized<string> = { es: "cotizar", en: "quote" };

/** Botón de cotización: lleva al formulario de la página de contacto. */
export function quoteHref(locale: Locale) {
  return `${PAGES.contact[locale]}#${QUOTE_ANCHOR[locale]}`;
}

/** Identificador de la aplicación o guía a partir del slug de la URL (o null si no existe). */
export function applicationIdFromSlug(locale: Locale, slug: string): ApplicationId | null {
  const ids = Object.keys(APPLICATION_SLUGS) as ApplicationId[];
  return ids.find((id) => APPLICATION_SLUGS[id][locale] === slug) ?? null;
}

export function guideIdFromSlug(locale: Locale, slug: string): GuideId | null {
  return GUIDE_IDS.find((id) => GUIDE_SLUGS[id][locale] === slug) ?? null;
}

export function isSystemSlug(slug: string): slug is SystemSlug {
  return (SYSTEM_SLUGS as readonly string[]).includes(slug);
}
