import type { Localized } from "@/lib/i18n";
import type { ImageKey } from "@/content/images";
import type { ApplicationId, GuideId, SystemSlug } from "@/content/routes";
import type { GuideCopy } from "@/content/guides/types";
import { GUIDES_ES } from "@/content/guides/es";
import { GUIDES_EN } from "@/content/guides/en";

export type { GuideCopy } from "@/content/guides/types";

export type GuideEntry = {
  /** Imagen del Open Graph y del schema Article. */
  image: ImageKey;
  /** false cuando ninguna foto real del proyecto corresponde al tema del artículo. */
  showFigure: boolean;
  datePublished: string;
  dateModified: string;
  related: { systems: SystemSlug[]; applications: ApplicationId[]; guides: GuideId[] };
  copy: Localized<GuideCopy>;
};

type GuideMeta = Omit<GuideEntry, "copy">;

// Fechas reales de publicación y última modificación de cada guía
// (también alimentan el lastmod del sitemap).
const META: Record<GuideId, GuideMeta> = {
  solvents: {
    image: "insoleTape",
    showFigure: true,
    datePublished: "2026-10-21",
    dateModified: "2026-10-21",
    related: {
      systems: ["k-system", "k-thermo", "k-next"],
      applications: ["insole"],
      guides: ["hotmelt", "voc"],
    },
  },
  hotmelt: {
    image: "heroPoster",
    showFigure: true,
    datePublished: "2026-10-21",
    dateModified: "2026-10-21",
    related: {
      systems: ["k-thermo", "k-system"],
      applications: ["insole", "lamination"],
      guides: ["psa", "cold"],
    },
  },
  psa: {
    image: "kyo101",
    showFigure: true,
    datePublished: "2026-10-21",
    dateModified: "2026-10-21",
    related: {
      systems: ["k-system", "k-next"],
      applications: ["insole", "leather"],
      guides: ["solvents", "cold"],
    },
  },
  voc: {
    image: "tradeShow",
    showFigure: true,
    datePublished: "2026-10-21",
    dateModified: "2026-10-21",
    related: {
      systems: ["k-system", "k-thermo", "k-pads"],
      applications: ["insole", "lamination"],
      guides: ["solvents", "hotmelt"],
    },
  },
  cold: {
    image: "components",
    showFigure: true,
    datePublished: "2026-10-21",
    dateModified: "2026-10-21",
    related: {
      systems: ["k-next", "k-system"],
      applications: ["insole", "leather"],
      guides: ["psa", "hotmelt"],
    },
  },
  insoling: {
    image: "machineryPoster",
    showFigure: true,
    datePublished: "2026-10-21",
    dateModified: "2026-10-21",
    related: {
      systems: ["k-system", "k-thermo", "k-next"],
      applications: ["insole"],
      guides: ["solvents", "materials"],
    },
  },
  reinforcements: {
    image: "tradeShow",
    showFigure: false,
    datePublished: "2026-10-21",
    dateModified: "2026-10-21",
    related: {
      systems: ["k-pads", "k-thermo"],
      applications: ["leather", "insole"],
      guides: ["materials", "voc"],
    },
  },
  hotmeltTypes: {
    image: "heroPoster",
    showFigure: false,
    datePublished: "2026-10-21",
    dateModified: "2026-10-21",
    related: {
      systems: ["k-thermo", "k-pads"],
      applications: ["lamination", "insole", "leather"],
      guides: ["hotmelt", "materials"],
    },
  },
  materials: {
    image: "kyo101",
    showFigure: true,
    datePublished: "2026-10-21",
    dateModified: "2026-10-21",
    related: {
      systems: ["k-system", "k-thermo", "k-next", "k-pads"],
      applications: ["insole", "leather", "lamination"],
      guides: ["hotmeltTypes", "insoling"],
    },
  },
};

export const GUIDES = Object.fromEntries(
  (Object.keys(META) as GuideId[]).map((id) => [
    id,
    { ...META[id], copy: { es: GUIDES_ES[id], en: GUIDES_EN[id] } },
  ])
) as Record<GuideId, GuideEntry>;

/** Fecha de la guía modificada más recientemente (lastmod del índice de guías). */
export const GUIDES_UPDATED = Object.values(META)
  .map((m) => m.dateModified)
  .sort()
  .at(-1) as string;
