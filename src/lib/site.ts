// Datos del sitio que comparten los metadatos, el sitemap, robots.txt y los
// datos estructurados. Si cambia el dominio o el nombre, se cambia solo aquí
// (y en el destino de la redirección de next.config.ts).
// La versión principal es sin "www": next.config.ts redirige www.kyotex.company
// (y la URL de Vercel) a esta.
export const SITE_URL = "https://kyotex.company";
export const SITE_NAME = "Kyotex";
export const ORG_NAME = "Kyotex-Terlan Norteamérica";

/** URL absoluta de una ruta del sitio (la raíz sin "/" final, igual que el canonical). */
export function absoluteUrl(path: string) {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

// Datos de contacto: se usan tal cual en el footer, la página de contacto y el schema.
const ADDRESS_LINE =
  "Calle 4 No. 2710-B, Colón Industrial, 44940 Guadalajara, Jalisco, México";

export const BUSINESS = {
  name: ORG_NAME,
  addressLine: ADDRESS_LINE,
  streetAddress: "Calle 4 No. 2710-B, Colón Industrial",
  postalCode: "44940",
  city: "Guadalajara",
  region: "Jalisco",
  countryCode: "MX",
  phone: "+52 33 3645 0272",
  phoneHref: "tel:+523336450272",
  whatsapp: "+52 33 3598 1722",
  whatsappNumber: "523335981722",
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    ADDRESS_LINE
  )}`,
  areaServed: ["MX", "US", "CA"],
} as const;

/** Enlace de WhatsApp (wa.me) con un mensaje listo para enviar. */
export function whatsappHref(message: string) {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Fecha real de la última actualización del contenido (para sitemap y schema). */
export const CONTENT_UPDATED = "2026-10-21";
