"use client";

import { useReveal } from "@/lib/useReveal";
import CountUp from "@/components/CountUp";
import MachineryDiagram from "@/components/graphics/MachineryDiagram";

const STATS = [
  { value: 2006, label: "Founded, part of ALC Gruppo" },
  { value: 5, label: "Adhesive & machinery systems" },
  { value: 2, label: "Industries served: footwear & leather goods" },
];

export default function Testimonials() {
  const ref = useReveal<HTMLDivElement>(".reveal-item", { stagger: 0.1 });

  return (
    <section id="machinery" className="py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-8 items-center mb-16">
          <div>
            <p className="reveal-item text-accent text-sm tracking-[0.3em] uppercase mb-4">
              Kyo Machinery
            </p>
            <h2 className="reveal-item font-display text-4xl sm:text-5xl leading-tight text-balance mb-6">
              Adhesive and machinery, engineered together.
            </h2>
            <p className="reveal-item text-secondary text-lg leading-relaxed max-w-md">
              Our application equipment is built alongside every adhesive
              system we ship — so dispensing, lamination, and cure behavior
              are calibrated as one machine, not bolted together after the
              fact.
            </p>
          </div>
          <div className="reveal-item relative aspect-[4/3] rounded-sm overflow-hidden border border-border bg-card">
            <MachineryDiagram className="absolute inset-0 h-full w-full text-foreground" />
          </div>
        </div>

        <div
          ref={ref}
          className="grid sm:grid-cols-3 gap-8 border-t border-border pt-12"
        >
          {STATS.map((s) => (
            <div key={s.label} className="reveal-item">
              <CountUp
                to={s.value}
                className="font-display text-4xl text-accent block mb-2 tabular-nums"
              />
              <span className="text-secondary text-sm leading-relaxed">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
