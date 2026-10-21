import Link from "next/link";
import { UI } from "@/content/ui";
import { PAGES } from "@/content/routes";
import { HTML_LANG, otherLocale, type Locale } from "@/lib/i18n";
import { BUSINESS } from "@/lib/site";

/** Footer con los datos de contacto exactos y enlaces a todas las secciones. */
export default function SiteFooter({
  locale,
  alternateHref,
}: {
  locale: Locale;
  alternateHref: string;
}) {
  const t = UI[locale];
  const target = otherLocale(locale);

  return (
    <footer className="mt-auto border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link
            href={PAGES.home[locale]}
            className="font-display text-lg tracking-[0.2em] focus-ring rounded-sm"
          >
            KYOTEX
          </Link>
          <p className="text-secondary text-sm leading-relaxed mt-4 max-w-sm">
            {t.footer.tagline}
          </p>
          <address className="not-italic text-sm leading-relaxed mt-6 space-y-1">
            <p className="font-medium text-foreground">{BUSINESS.name}</p>
            <p className="text-secondary">{BUSINESS.addressLine}</p>
            <p className="text-secondary">
              {t.footer.tel}{" "}
              <a
                href={BUSINESS.phoneHref}
                className="text-foreground underline underline-offset-4 hover:text-accent focus-ring rounded-sm"
              >
                {BUSINESS.phone}
              </a>
            </p>
          </address>
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sm text-accent hover:text-foreground transition-colors focus-ring rounded-sm py-2"
          >
            {t.footer.directions} <span aria-hidden>↗</span>
          </a>
        </div>

        {t.footer.columns.map((column) => (
          <div key={column.title}>
            <p className="text-accent text-xs tracking-[0.25em] uppercase mb-4">
              {column.title}
            </p>
            <ul className="space-y-1">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary hover:text-foreground transition-colors focus-ring rounded-sm inline-block py-1.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {t.footer.rights}
          </p>
          <span className="text-sm text-secondary">ADH TERRELL</span>
          <a
            href={alternateHref}
            hrefLang={HTML_LANG[target]}
            lang={HTML_LANG[target]}
            aria-label={t.langAria}
            className="text-sm text-secondary hover:text-foreground focus-ring rounded-sm py-2"
          >
            {t.langLong}
          </a>
        </div>
      </div>
    </footer>
  );
}
