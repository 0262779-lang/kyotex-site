import type { ReactNode } from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { PathPair } from "@/content/routes";
import { otherLocale, type Locale } from "@/lib/i18n";

/** Menú + contenido + footer + datos estructurados de cada página. */
export default function PageShell({
  locale,
  paths,
  jsonLd,
  children,
}: {
  locale: Locale;
  paths: PathPair;
  jsonLd: object;
  children: ReactNode;
}) {
  const alternateHref = paths[otherLocale(locale)];
  return (
    <>
      <JsonLd data={jsonLd} />
      <SiteNav locale={locale} alternateHref={alternateHref} />
      <main className="flex-1">{children}</main>
      <SiteFooter locale={locale} alternateHref={alternateHref} />
      <WhatsAppButton locale={locale} />
    </>
  );
}
