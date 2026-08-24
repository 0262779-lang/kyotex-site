"use client";

import { useReveal } from "@/lib/useReveal";
import { onSpotlightMove } from "@/lib/spotlight";

const FEATURES = [
  {
    n: "01",
    title: "Solvent-free by design",
    copy: "Lower VOC emissions on the production floor, without compromising bond strength or cure speed.",
  },
  {
    n: "02",
    title: "Engineered for volume",
    copy: "Systems tuned for high-throughput footwear and leather goods lines, not just prototype runs.",
  },
  {
    n: "03",
    title: "Machinery built in-house",
    copy: "Kyo application equipment is engineered alongside our adhesives — the system is designed as one.",
  },
  {
    n: "04",
    title: "Technical support, on the floor",
    copy: "Our team calibrates on-site with your production line, not just over email.",
  },
];

export default function FeatureGrid() {
  const ref = useReveal<HTMLDivElement>(".reveal-item", { stagger: 0.1 });

  return (
    <section id="sustainability" className="py-[var(--space-section)] bg-card">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl mb-16">
          <p className="reveal-item text-accent text-sm tracking-[0.3em] uppercase mb-4">
            Why manufacturers choose Kyotex
          </p>
          <h2 className="reveal-item font-display text-4xl sm:text-5xl leading-tight text-balance">
            Built for the line, not the lab.
          </h2>
        </div>

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border"
        >
          {FEATURES.map((f) => (
            <div
              key={f.n}
              onMouseMove={onSpotlightMove}
              className="spotlight-card reveal-item bg-card p-8 hover:bg-background transition-colors duration-300"
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
