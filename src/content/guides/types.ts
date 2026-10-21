import type { Section } from "@/components/RichText";

export type GuideCopy = {
  title: string;
  description: string;
  h1: string;
  lead: string;
  /** Resumen corto para las tarjetas de la lista de guías. */
  cardText: string;
  sections: Section[];
};
