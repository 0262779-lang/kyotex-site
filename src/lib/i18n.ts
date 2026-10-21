export type Locale = "es" | "en";
export type Localized<T> = Record<Locale, T>;

export const LOCALES: readonly Locale[] = ["es", "en"];

/** Atributo lang del <html> y códigos hreflang. */
export const HTML_LANG: Localized<string> = { es: "es-MX", en: "en-US" };
export const OG_LOCALE: Localized<string> = { es: "es_MX", en: "en_US" };

export function otherLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es";
}
