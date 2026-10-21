import type { Localized } from "@/lib/i18n";
import type { ImageKey } from "@/content/images";
import type { ApplicationId, GuideId, SystemSlug } from "@/content/routes";
import { CONTENT_UPDATED } from "@/lib/site";
import type { GuideCopy } from "@/content/guides/types";
import { GUIDES_ES } from "@/content/guides/es";
import { GUIDES_EN } from "@/content/guides/en";

export type { GuideCopy } from "@/content/guides/types";

export type GuideEntry = {
  image: ImageKey;
  datePublished: string;
  dateModified: string;
  related: { systems: SystemSlug[]; applications: ApplicationId[]; guides: GuideId[] };
  copy: Localized<GuideCopy>;
};

type GuideMeta = Omit<GuideEntry, "copy" | "datePublished" | "dateModified">;

// Publicadas el mismo día que esta versión del sitio.
const META: Record<GuideId, GuideMeta> = {
  solvents: {
    image: "insoleTape",
    related: {
      systems: ["k-system", "k-thermo", "k-next"],
      applications: ["insole"],
      guides: ["hotmelt", "voc"],
    },
  },
  hotmelt: {
    image: "heroPoster",
    related: {
      systems: ["k-thermo", "k-system"],
      applications: ["insole", "lamination"],
      guides: ["psa", "cold"],
    },
  },
  psa: {
    image: "kyo101",
    related: {
      systems: ["k-system", "k-next"],
      applications: ["insole", "leather"],
      guides: ["solvents", "cold"],
    },
  },
  voc: {
    image: "tradeShow",
    related: {
      systems: ["k-system", "k-thermo", "k-pads"],
      applications: ["insole", "lamination"],
      guides: ["solvents", "hotmelt"],
    },
  },
  cold: {
    image: "components",
    related: {
      systems: ["k-next", "k-system"],
      applications: ["insole", "leather"],
      guides: ["psa", "hotmelt"],
    },
  },
};

export const GUIDES = Object.fromEntries(
  (Object.keys(META) as GuideId[]).map((id) => [
    id,
    {
      ...META[id],
      datePublished: CONTENT_UPDATED,
      dateModified: CONTENT_UPDATED,
      copy: { es: GUIDES_ES[id], en: GUIDES_EN[id] },
    },
  ])
) as Record<GuideId, GuideEntry>;
