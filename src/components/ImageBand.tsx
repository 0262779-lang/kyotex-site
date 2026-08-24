"use client";

import { useReveal } from "@/lib/useReveal";
import ZoomImage from "@/components/ZoomImage";
import RevealHeading from "@/components/RevealHeading";

export default function ImageBand() {
  const ref = useReveal<HTMLDivElement>(".reveal-item");

  return (
    <section className="relative h-[70vh] min-h-[420px] max-h-[720px] overflow-hidden">
      <ZoomImage
        src="/images/kyotex-3.jpg"
        alt="Sistemas Kyotex KYO100S y KYO101 presentados en una feria industrial"
        className="absolute inset-0 h-full w-full"
      />
      <div className="absolute inset-0 bg-background/40" />
      <div ref={ref} className="relative h-full flex items-end">
        <div className="mx-auto max-w-7xl w-full px-6 md:px-10 pb-16">
          <p className="reveal-item text-accent text-sm tracking-[0.3em] uppercase mb-4">
            Presentes en la industria
          </p>
          <RevealHeading className="font-display text-[clamp(1.875rem,3vw+1.4rem,3rem)] leading-tight text-balance max-w-2xl">
            Sistemas Kyotex, en piso de planta y en cada feria del sector.
          </RevealHeading>
        </div>
      </div>
    </section>
  );
}
