"use client";

import { useReveal } from "@/lib/useReveal";
import { onSpotlightMove } from "@/lib/spotlight";

const SYSTEMS = [
  {
    code: "K System",
    title: "Pressure-sensitive tapes",
    copy: "Self-adhesive PSA tape systems for clean, instant bonding — no ovens, no open flame, no solvent flash-off.",
  },
  {
    code: "K Thermo",
    title: "Eco-friendly thermo-adhesives",
    copy: "Heat-activated adhesive films engineered to cut VOC emissions on the line without sacrificing bond strength.",
  },
  {
    code: "K Next",
    title: "Cold-bonding technology",
    copy: "The holding power of a thermo-adhesive, applied without direct heat — built for high-throughput cells.",
  },
  {
    code: "K Pads",
    title: "Reinforcement pads",
    copy: "Structural support inserts for leather goods and footwear components that need shape retention over time.",
  },
  {
    code: "Kyo Machinery",
    title: "Precision application equipment",
    copy: "Automated dispensing and lamination machinery, engineered in-house to run our adhesive systems at production speed.",
  },
];

export default function ProductShowcase() {
  const ref = useReveal<HTMLDivElement>(".reveal-item", { stagger: 0.08 });

  return (
    <section id="systems" className="py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl mb-4 md:mb-16 px-6 md:px-0">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
            Product lines
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight text-balance">
            Five systems. One bonding philosophy.
          </h2>
        </div>

        <p className="md:hidden text-muted-foreground text-xs uppercase tracking-[0.2em] px-6 mb-4">
          Swipe to explore →
        </p>

        {/* Mobile: horizontal snap-scroll, one system at a time — not a shrunk grid.
            Desktop: full grid. */}
        <div
          ref={ref}
          className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-px bg-border md:border md:border-y border-y px-6 md:px-0 -mx-6 md:mx-0 md:grid-cols-2 lg:grid-cols-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {SYSTEMS.map((s) => (
            <div
              key={s.code}
              onMouseMove={onSpotlightMove}
              className="spotlight-card reveal-item shrink-0 w-[82vw] sm:w-[60vw] md:w-auto snap-start bg-card p-8 flex flex-col hover:bg-background transition-colors duration-300"
            >
              <span className="font-display text-accent text-sm tracking-wide mb-4">
                {s.code}
              </span>
              <h3 className="font-display text-xl mb-3">{s.title}</h3>
              <p className="text-secondary text-sm leading-relaxed">
                {s.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
