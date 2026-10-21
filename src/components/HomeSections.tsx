import Link from "next/link";
import { CardGrid, Figure, type CardItem } from "@/components/PageParts";
import { IMAGES, type ImageKey } from "@/content/images";
import type { Locale } from "@/lib/i18n";

/** Bloque de la portada con tarjetas que enlazan a páginas internas. */
export function HomeCardsSection({
  eyebrow,
  heading,
  text,
  items,
  columns = 3,
  link,
  className = "",
}: {
  eyebrow: string;
  heading: string;
  text?: string;
  items: CardItem[];
  columns?: 2 | 3;
  link?: { href: string; label: string };
  className?: string;
}) {
  return (
    <section className={`py-[var(--space-section)] ${className}`}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">{eyebrow}</p>
            <h2 className="font-display text-[clamp(1.875rem,3vw+1.4rem,3rem)] leading-tight text-balance">
              {heading}
            </h2>
            {text && <p className="text-secondary text-lg leading-relaxed mt-4">{text}</p>}
          </div>
          {link && (
            <Link
              href={link.href}
              className="shrink-0 inline-flex items-center gap-2 text-sm text-accent hover:text-foreground transition-colors focus-ring rounded-sm py-2"
            >
              {link.label} <span aria-hidden>→</span>
            </Link>
          )}
        </div>
        <CardGrid items={items} columns={columns} />
      </div>
    </section>
  );
}

/** Fotos reales de los equipos, con su descripción. */
export function HomeGallery({
  locale,
  eyebrow,
  heading,
  items,
  link,
}: {
  locale: Locale;
  eyebrow: string;
  heading: string;
  items: { image: ImageKey; caption: string }[];
  link: { href: string; label: string };
}) {
  return (
    <section className="py-[var(--space-section)] bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">{eyebrow}</p>
            <h2 className="font-display text-[clamp(1.875rem,3vw+1.4rem,3rem)] leading-tight text-balance">
              {heading}
            </h2>
          </div>
          <Link
            href={link.href}
            className="shrink-0 inline-flex items-center gap-2 text-sm text-accent hover:text-foreground transition-colors focus-ring rounded-sm py-2"
          >
            {link.label} <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <Figure
              key={item.image}
              image={IMAGES[item.image]}
              locale={locale}
              sizes="(min-width: 1280px) 400px, (min-width: 768px) 33vw, 100vw"
              caption={item.caption}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
