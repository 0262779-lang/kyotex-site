import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { UI } from "@/content/ui";
import type { SiteImage } from "@/content/images";
import { quoteHref } from "@/content/routes";
import type { Locale } from "@/lib/i18n";
import { BUSINESS } from "@/lib/site";
import { inline } from "@/components/RichText";

export const BUTTON_PRIMARY =
  "inline-flex items-center justify-center h-14 px-8 bg-accent text-accent-foreground text-sm tracking-wide font-medium hover:bg-accent/85 transition-colors duration-200 focus-ring rounded-sm";
export const BUTTON_SECONDARY =
  "inline-flex items-center justify-center h-14 px-8 border border-border bg-background/70 text-foreground text-sm tracking-wide hover:border-accent transition-colors duration-200 focus-ring rounded-sm";

export type CrumbLink = { name: string; href: string };

/** Migas de pan visibles (el JSON-LD BreadcrumbList se arma con los mismos datos). */
export function Breadcrumbs({
  locale,
  items,
}: {
  locale: Locale;
  items: CrumbLink[];
}) {
  return (
    <nav aria-label={UI[locale].breadcrumbAria} className="text-sm mb-8">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-secondary">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden>/</span>}
              {isLast ? (
                <span aria-current="page" className="text-foreground">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-foreground underline-offset-4 hover:underline focus-ring rounded-sm py-1"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** Encabezado de página: migas, eyebrow, el único H1 de la página y la entrada. */
export function PageHeader({
  locale,
  crumbs,
  eyebrow,
  title,
  lead,
  children,
}: {
  locale: Locale;
  crumbs: CrumbLink[];
  eyebrow: string;
  title: string;
  lead: string;
  children?: ReactNode;
}) {
  return (
    <section className="pt-32 md:pt-36 pb-12 md:pb-16 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Breadcrumbs locale={locale} items={crumbs} />
        <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
          {eyebrow}
        </p>
        <h1 className="font-display text-[clamp(2.25rem,3vw+1.5rem,3.75rem)] leading-[1.08] text-balance max-w-4xl mb-6">
          {title}
        </h1>
        <p className="text-secondary text-lg md:text-xl leading-relaxed max-w-3xl">
          {inline(lead)}
        </p>
        {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
      </div>
    </section>
  );
}

/** Botón de cotización + teléfono, al final de cada página. */
export function QuoteCta({ locale }: { locale: Locale }) {
  const t = UI[locale];
  return (
    <section className="py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="bg-card border border-border rounded-sm px-8 py-12 md:px-14 md:py-16 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <h2 className="font-display text-[clamp(1.75rem,2vw+1.2rem,2.5rem)] leading-tight text-balance mb-4">
              {t.cta.title}
            </h2>
            <p className="text-secondary text-lg leading-relaxed">{t.cta.text}</p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <Link href={quoteHref(locale)} className={BUTTON_PRIMARY}>
              {t.quote}
            </Link>
            <p className="text-sm text-secondary">
              {t.cta.call}{" "}
              <a
                href={BUSINESS.phoneHref}
                className="text-foreground underline underline-offset-4 hover:text-accent focus-ring rounded-sm"
              >
                {BUSINESS.phone}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export type CardItem = {
  href: string;
  eyebrow?: string;
  title: string;
  text: string;
  cta: string;
};

/** Tarjetas que enlazan a otras páginas del sitio (enlaces internos). */
export function CardGrid({
  items,
  columns = 3,
}: {
  items: CardItem[];
  columns?: 2 | 3;
}) {
  return (
    <div
      className={`grid gap-px bg-border border border-border sm:grid-cols-2 ${
        columns === 3 ? "lg:grid-cols-3" : ""
      }`}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group bg-card p-8 flex flex-col hover:bg-background transition-colors duration-300 focus-ring"
        >
          {item.eyebrow && (
            <span className="font-display text-accent text-sm tracking-wide mb-3">
              {item.eyebrow}
            </span>
          )}
          <h3 className="font-display text-xl mb-3">{item.title}</h3>
          <p className="text-secondary text-sm leading-relaxed mb-6">{item.text}</p>
          <span className="mt-auto text-sm text-accent group-hover:text-foreground transition-colors">
            {item.cta} <span aria-hidden>→</span>
          </span>
        </Link>
      ))}
    </div>
  );
}

/** Foto real del proyecto optimizada por next/image (AVIF/WebP, tamaños correctos). */
export function Figure({
  image,
  locale,
  sizes,
  caption,
  preload = false,
  className = "",
}: {
  image: SiteImage;
  locale: Locale;
  sizes: string;
  caption?: string;
  preload?: boolean;
  className?: string;
}) {
  return (
    <figure className={className}>
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt[locale]}
        sizes={sizes}
        preload={preload}
        className="w-full h-auto rounded-sm bg-muted"
      />
      {caption && (
        <figcaption className="text-sm text-secondary mt-3">{caption}</figcaption>
      )}
    </figure>
  );
}

/** Bloque de lectura con estilos de artículo (H2, H3, listas, enlaces). */
export function Prose({ children }: { children: ReactNode }) {
  return <div className="prose-k max-w-3xl">{children}</div>;
}
