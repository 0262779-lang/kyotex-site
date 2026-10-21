import { BUTTON_SECONDARY } from "@/components/PageParts";
import { CATALOG } from "@/content/catalog";
import type { Locale } from "@/lib/i18n";

/** Bloque para descargar el catálogo en PDF del idioma de la página. */
export default function CatalogDownload({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  const t = CATALOG[locale];
  return (
    <div
      className={`bg-card border border-border rounded-sm p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 ${className}`}
    >
      <div className="max-w-xl">
        <p className="text-accent text-sm tracking-[0.3em] uppercase mb-3">{t.eyebrow}</p>
        <h2 className="font-display text-2xl leading-tight mb-2">{t.title}</h2>
        <p className="text-secondary leading-relaxed">{t.text}</p>
      </div>
      <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
        <a href={t.href} download={t.fileName} type="application/pdf" className={BUTTON_SECONDARY}>
          {t.cta}
        </a>
        <span className="text-xs text-secondary">{t.meta}</span>
      </div>
    </div>
  );
}
