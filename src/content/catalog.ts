import type { Localized } from "@/lib/i18n";

/** Catálogo en PDF (5 páginas) con la misma información que publica el sitio. */
export const CATALOG: Localized<{
  href: string;
  fileName: string;
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  meta: string;
}> = {
  es: {
    href: "/catalogo/catalogo-kyotex.pdf",
    fileName: "catalogo-kyotex.pdf",
    eyebrow: "Catálogo",
    title: "Catálogo Kyotex en PDF",
    text: "Los cinco sistemas, la maquinaria Kyo, las aplicaciones y los datos de contacto en un archivo para compartir o imprimir.",
    cta: "Descargar catálogo en PDF",
    meta: "PDF · 5 páginas · 1 MB",
  },
  en: {
    href: "/catalog/kyotex-catalog.pdf",
    fileName: "kyotex-catalog.pdf",
    eyebrow: "Catalog",
    title: "Kyotex catalog (PDF)",
    text: "The five systems, Kyo machinery, applications and contact details in one file to share or print.",
    cta: "Download the PDF catalog",
    meta: "PDF · 5 pages · 1 MB",
  },
};
