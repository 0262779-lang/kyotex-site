"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { UI } from "@/content/ui";
import { PAGES, quoteHref } from "@/content/routes";
import { HTML_LANG, otherLocale, type Locale } from "@/lib/i18n";

/** Menú con enlaces a páginas reales, selector de idioma y botón de cotización. */
export default function SiteNav({
  locale,
  alternateHref,
}: {
  locale: Locale;
  /** La misma página en el otro idioma. */
  alternateHref: string;
}) {
  const t = UI[locale];
  const target = otherLocale(locale);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const langLink = (className: string, label: string) => (
    <a
      href={alternateHref}
      hrefLang={HTML_LANG[target]}
      lang={HTML_LANG[target]}
      aria-label={t.langAria}
      className={className}
    >
      {label}
    </a>
  );

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-background/95 backdrop-blur border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-20 flex items-center justify-between gap-6">
        <Link
          href={PAGES.home[locale]}
          className="font-display text-xl tracking-[0.2em] focus-ring rounded-sm py-[10px] -my-[10px]"
        >
          KYOTEX
        </Link>

        <nav aria-label={t.mainNav} className="hidden xl:flex items-center gap-7">
          {t.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-secondary hover:text-foreground transition-colors duration-200 focus-ring rounded-sm py-3"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {langLink(
            "hidden xl:inline-flex items-center justify-center h-11 px-3 text-sm tracking-[0.15em] text-secondary hover:text-foreground focus-ring rounded-sm",
            t.langShort
          )}
          <Link
            href={quoteHref(locale)}
            className="hidden md:inline-flex items-center h-11 px-6 border border-accent text-accent text-sm tracking-wide hover:bg-accent hover:text-accent-foreground transition-colors duration-200 focus-ring rounded-sm"
          >
            {t.quote}
          </Link>
          <button
            type="button"
            aria-label={open ? t.closeMenu : t.openMenu}
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((v) => !v)}
            className="xl:hidden w-11 h-11 flex items-center justify-center focus-ring rounded-sm"
          >
            <span className="relative w-6 h-4 block">
              <span
                className={`absolute left-0 top-0 w-6 h-px bg-foreground transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 w-6 h-px bg-foreground transition-transform duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-movil"
          aria-label={t.mainNav}
          className="xl:hidden bg-background border-t border-border px-6 py-6 flex flex-col gap-1"
        >
          {t.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base text-secondary hover:text-foreground transition-colors py-3"
            >
              {link.label}
            </Link>
          ))}
          {langLink(
            "text-base text-secondary hover:text-foreground transition-colors py-3",
            t.langLong
          )}
          <Link
            href={quoteHref(locale)}
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center h-12 px-6 border border-accent text-accent text-sm tracking-wide"
          >
            {t.quote}
          </Link>
        </nav>
      )}
    </header>
  );
}
