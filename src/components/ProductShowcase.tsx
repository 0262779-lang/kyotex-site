"use client";

import { useReveal } from "@/lib/useReveal";
import { onSpotlightMove } from "@/lib/spotlight";

const SYSTEMS = [
  {
    code: "K System",
    title: "Cintas autoadhesivas",
    copy: "Sistemas de cinta PSA autoadhesiva para un emplantillado limpio e instantáneo — sin hornos, sin llama abierta, sin evaporación de solventes.",
  },
  {
    code: "K Thermo",
    title: "Termoadhesivos ecológicos",
    copy: "Películas adhesivas activadas por calor, diseñadas para reducir las emisiones de COV en línea sin sacrificar la fuerza de unión.",
  },
  {
    code: "K Next",
    title: "Tecnología de emplantillado en frío",
    copy: "La fuerza de adhesión de un termoadhesivo, aplicada sin calor directo — pensada para células de alto rendimiento.",
  },
  {
    code: "K Pads",
    title: "Almohadillas de refuerzo",
    copy: "Insertos de soporte estructural para marroquinería y componentes de calzado que necesitan mantener su forma con el tiempo.",
  },
  {
    code: "Maquinaria Kyo",
    title: "Equipos de aplicación de precisión",
    copy: "Maquinaria automatizada de dosificación y laminado, diseñada internamente para operar nuestros sistemas adhesivos a velocidad de producción.",
  },
];

export default function ProductShowcase() {
  const ref = useReveal<HTMLDivElement>(".reveal-item", { stagger: 0.08 });

  return (
    <section id="systems" className="py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl mb-4 md:mb-16 px-6 md:px-0">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
            Líneas de producto
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight text-balance">
            Cinco sistemas. Una sola filosofía de emplantillado.
          </h2>
        </div>

        <p className="md:hidden text-muted-foreground text-xs uppercase tracking-[0.2em] px-6 mb-4">
          Desliza para explorar →
        </p>

        {/* Móvil: carrusel horizontal con snap, un sistema a la vez — no una grilla encogida.
            Escritorio: grilla completa. */}
        <div
          ref={ref}
          className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-px bg-border md:border md:border-y border-y px-6 md:px-0 -mx-6 md:mx-0 md:grid-cols-2 lg:grid-cols-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {SYSTEMS.map((s) => (
            <div
              key={s.code}
              onMouseMove={onSpotlightMove}
              className="spotlight-card reveal-item shrink-0 w-[82vw] sm:w-[60vw] md:w-auto snap-start bg-card p-8 flex flex-col hover:bg-background hover:scale-[1.03] transition-[background-color,transform] duration-300"
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
