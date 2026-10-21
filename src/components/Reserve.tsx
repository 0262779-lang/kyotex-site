"use client";

import { useReveal } from "@/lib/useReveal";
import RevealHeading from "@/components/RevealHeading";
import QuoteForm from "@/components/QuoteForm";
import type { HomeCopy, QuoteFormCopy } from "@/content/home";
import { QUOTE_ANCHOR } from "@/content/routes";
import type { Locale } from "@/lib/i18n";

/** Sección de cotización de la portada (el mismo formulario de la página de contacto). */
export default function Reserve({
  locale,
  t,
  form,
}: {
  locale: Locale;
  t: HomeCopy["form"];
  form: QuoteFormCopy;
}) {
  const ref = useReveal<HTMLDivElement>(".reveal-item", { stagger: 0.1 });

  return (
    <section
      id={QUOTE_ANCHOR[locale]}
      className="scroll-mt-24 py-[var(--space-section)] bg-card border-t border-border"
    >
      <div ref={ref} className="mx-auto max-w-3xl px-6 md:px-10 text-center">
        <div>
          <p className="reveal-item text-accent text-sm tracking-[0.3em] uppercase mb-4">
            {t.eyebrow}
          </p>
          <RevealHeading className="font-display text-[clamp(1.875rem,3vw+1.4rem,3rem)] leading-tight text-balance mb-6">
            {t.heading}
          </RevealHeading>
          <p className="reveal-item text-secondary text-lg mb-12 max-w-xl mx-auto">
            {t.text}
          </p>
        </div>

        <div className="reveal-item">
          <QuoteForm locale={locale} t={form} className="max-w-lg mx-auto" />
        </div>
      </div>
    </section>
  );
}
