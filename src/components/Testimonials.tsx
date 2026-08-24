"use client";

import { useReveal } from "@/lib/useReveal";
import CountUp from "@/components/CountUp";
import ZoomImage from "@/components/ZoomImage";

const STATS = [
  { value: 2006, label: "Fundación, parte de ALC Gruppo" },
  { value: 5, label: "Sistemas adhesivos y de maquinaria" },
  { value: 2, label: "Industrias atendidas: calzado y marroquinería" },
];

export default function Testimonials() {
  const ref = useReveal<HTMLDivElement>(".reveal-item", { stagger: 0.1 });

  return (
    <section id="machinery" className="py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-8 items-center mb-16">
          <div>
            <p className="reveal-item text-accent text-sm tracking-[0.3em] uppercase mb-4">
              Maquinaria Kyo
            </p>
            <h2 className="reveal-item font-display text-4xl sm:text-5xl leading-tight text-balance mb-6">
              Adhesivo y maquinaria, diseñados en conjunto.
            </h2>
            <p className="reveal-item text-secondary text-lg leading-relaxed max-w-md">
              Nuestros equipos de aplicación se construyen junto a cada
              sistema adhesivo que enviamos — así, dosificación, laminado y
              curado se calibran como una sola máquina, no como piezas
              ensambladas después.
            </p>
          </div>
          <div className="reveal-item relative aspect-[4/3] rounded-sm">
            <ZoomImage
              src="/images/kyotex-4.jpg"
              alt="Máquina Kyotex KYO101 con rodillos de aplicación de cinta y soporte de mesa"
              className="h-full w-full rounded-sm"
            />
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
