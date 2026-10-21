"use client";

import Link from "next/link";
import { useReveal } from "@/lib/useReveal";
import { onSpotlightMove } from "@/lib/spotlight";
import RevealHeading from "@/components/RevealHeading";
import type { HomeCopy } from "@/content/home";

export type ShowcaseCard = {
  href: string;
  code: string;
  title: string;
  text: string;
  cta: string;
};

// Los textos llegan del servidor: así el JavaScript del navegador no carga el
// contenido completo de los sistemas.
export default function ProductShowcase({
  t,
  cards,
}: {
  t: HomeCopy["showcase"];
  cards: ShowcaseCard[];
}) {
  const ref = useReveal<HTMLDivElement>(".reveal-item", { stagger: 0.08 });

  return (
    <section id="systems" className="py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl mb-4 md:mb-16 px-6 md:px-0">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">{t.eyebrow}</p>
          <RevealHeading className="font-display text-[clamp(1.875rem,3vw+1.4rem,3rem)] leading-tight text-balance">
            {t.heading}
          </RevealHeading>
        </div>

        <p className="md:hidden text-muted-foreground text-xs uppercase tracking-[0.2em] px-6 mb-4">
          {t.swipeHint}
        </p>

        {/* Móvil: carrusel horizontal con snap, un sistema a la vez — no una grilla encogida.
            Escritorio: grilla completa. Cada tarjeta lleva a la página de su sistema. */}
        <div
          ref={ref}
          className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-px bg-border md:border md:border-y border-y px-6 md:px-0 -mx-6 md:mx-0 md:grid-cols-2 lg:grid-cols-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              onMouseMove={onSpotlightMove}
              className="group spotlight-card reveal-item shrink-0 w-[82vw] sm:w-[60vw] md:w-auto snap-start bg-card p-8 flex flex-col hover:bg-background hover:scale-[1.03] transition-[background-color,scale] duration-300 focus-ring"
            >
              <span className="font-display text-accent text-sm tracking-wide mb-4">
                {card.code}
              </span>
              <h3 className="font-display text-xl mb-3">{card.title}</h3>
              <p className="text-secondary text-sm leading-relaxed mb-6">{card.text}</p>
              <span className="mt-auto text-sm text-accent group-hover:text-foreground transition-colors">
                {card.cta} <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
