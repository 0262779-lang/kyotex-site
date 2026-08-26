"use client";

import { useReveal } from "@/lib/useReveal";
import CountUp from "@/components/CountUp";
import HeroVideo from "@/components/HeroVideo";
import RevealHeading from "@/components/RevealHeading";

const STATS = [
  { value: 2006, label: "Fundación, parte de ALC Gruppo" },
  { value: 5, label: "Sistemas adhesivos y de maquinaria" },
  { symbol: "∞", label: "Millones de posibilidades" },
];

export default function Testimonials() {
  const introRef = useReveal<HTMLDivElement>(".reveal-item", { stagger: 0.12 });
  const statsRef = useReveal<HTMLDivElement>(".reveal-item", { stagger: 0.1 });

  return (
    <section id="machinery" className="py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div
          ref={introRef}
          className="grid md:grid-cols-[1fr_1.5fr] gap-16 md:gap-10 items-center mb-16"
        >
          <div>
            <p className="reveal-item text-accent text-sm tracking-[0.3em] uppercase mb-4">
              Maquinaria Kyo
            </p>
            <RevealHeading className="font-display text-[clamp(1.875rem,3vw+1.4rem,3rem)] leading-tight text-balance mb-6">
              Adhesivo y maquinaria, diseñados en conjunto.
            </RevealHeading>
            <p className="reveal-item text-secondary text-lg leading-relaxed max-w-md">
              Nuestros equipos de aplicación se construyen junto a cada
              sistema adhesivo que enviamos — así, dosificación, laminado y
              curado se calibran como una sola máquina, no como piezas
              ensambladas después.
            </p>
          </div>
          <div className="reveal-item relative aspect-video rounded-sm">
            <HeroVideo
              webmSrc="/video/kyotex-machinery.webm"
              mp4Src="/video/kyotex-machinery.mp4"
              poster="/video/kyotex-machinery-poster.jpg"
              label="Maquinaria Kyotex industrial en funcionamiento"
              className="h-full w-full rounded-sm"
            />
          </div>
        </div>

        <div
          ref={statsRef}
          className="grid sm:grid-cols-3 gap-8 border-t border-border pt-12"
        >
          {STATS.map((s) => (
            <div key={s.label} className="reveal-item">
              {"symbol" in s ? (
                <span className="font-display text-4xl text-accent block mb-2 tabular-nums">
                  {s.symbol}
                </span>
              ) : (
                <CountUp
                  to={s.value}
                  className="font-display text-4xl text-accent block mb-2 tabular-nums"
                />
              )}
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
