import { UI } from "@/content/ui";
import { CONTACT } from "@/content/pages";
import type { Locale } from "@/lib/i18n";
import { BUSINESS } from "@/lib/site";

/** Nombre, dirección y teléfono exactos, con enlace "Cómo llegar". */
export default function NapBlock({ locale }: { locale: Locale }) {
  const t = CONTACT[locale];
  return (
    <div className="bg-card border border-border rounded-sm p-8">
      <address className="not-italic text-base leading-relaxed space-y-2">
        <p className="font-display text-xl text-foreground">{BUSINESS.name}</p>
        <p className="text-secondary">{BUSINESS.addressLine}</p>
        <p className="text-secondary">
          {UI[locale].footer.tel}{" "}
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
        className="inline-flex items-center gap-2 mt-5 text-sm text-accent hover:text-foreground transition-colors focus-ring rounded-sm py-2"
      >
        {t.directions} <span aria-hidden>↗</span>
      </a>
      <p className="text-sm text-secondary mt-4">{t.serviceArea}</p>
    </div>
  );
}
