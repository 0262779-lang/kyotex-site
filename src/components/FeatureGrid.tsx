"use client";

import { useReveal } from "@/lib/useReveal";
import { onSpotlightMove } from "@/lib/spotlight";
import RevealHeading from "@/components/RevealHeading";

const FEATURES = [
  {
    n: "01",
    title: "Libre de solventes por diseño",
    copy: "Menores emisiones de COV en planta, sin comprometer la fuerza de unión ni la velocidad de curado.",
  },
  {
    n: "02",
    title: "Diseñado para volumen",
    copy: "Sistemas afinados para líneas de alto rendimiento de calzado y marroquinería, no solo para prototipos. Es el único adhesivo que puedes aplicar hoy y utilizarlo posteriormente.",
  },
  {
    n: "03",
    title: "Maquinaria fabricada internamente",
    copy: "Los equipos de aplicación Kyo se diseñan junto a nuestros adhesivos — el sistema se concibe como uno solo.",
  },
  {
    n: "04",
    title: "Soporte técnico en planta",
    copy: "Nuestro equipo calibra en sitio con tu línea de producción, no solo por correo.",
  },
];

export default function FeatureGrid() {
  const introRef = useReveal<HTMLDivElement>(".reveal-item");
  const ref = useReveal<HTMLDivElement>(".reveal-item", { stagger: 0.1 });

  return (
    <section id="sustainability" className="py-[var(--space-section)] bg-card">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div ref={introRef} className="max-w-2xl mb-16">
          <p className="reveal-item text-accent text-sm tracking-[0.3em] uppercase mb-4">
            Por qué eligen Kyotex los fabricantes
          </p>
          <RevealHeading className="font-display text-[clamp(1.875rem,3vw+1.4rem,3rem)] leading-tight text-balance">
            Diseñado para alta productividad y desarrollo fuera de la línea de producción.
          </RevealHeading>
        </div>

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border"
        >
          {FEATURES.map((f) => (
            <div
              key={f.n}
              onMouseMove={onSpotlightMove}
              className="spotlight-card reveal-item bg-card p-8 hover:bg-background hover:scale-[1.03] transition-[background-color,transform] duration-300"
            >
              <span className="font-display text-accent text-sm">{f.n}</span>
              <h3 className="font-display text-xl mt-4 mb-3">{f.title}</h3>
              <p className="text-secondary text-sm leading-relaxed">
                {f.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
