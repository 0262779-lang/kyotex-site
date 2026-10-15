"use client";

import { useMagnetic } from "@/lib/useMagnetic";
import HeroVideo from "@/components/HeroVideo";

// La entrada del hero es CSS (clases hero-rise / hero-zoom en globals.css):
// arranca con la primera pintura y no depende de que cargue el JavaScript.
export default function Hero() {
  const primaryCtaRef = useMagnetic<HTMLAnchorElement>();
  const secondaryCtaRef = useMagnetic<HTMLAnchorElement>();

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-28 pb-16 overflow-hidden"
    >
      <div className="relative w-full pl-6 md:pl-10 flex flex-col md:flex-row md:items-end gap-10 md:gap-0">
        <div className="w-fit max-w-xl shrink-0">
          {/* La marca va dentro del h1 para que el título principal diga "Kyotex". */}
          <h1 className="font-display text-[clamp(2.25rem,3.4vw+1.4rem,3.75rem)] leading-[1.1] text-balance mb-8">
            <span className="hero-eyebrow hero-rise [animation-delay:250ms] block font-sans text-accent text-sm leading-5 tracking-[0.3em] uppercase text-wrap mb-6">
              Kyotex-Terlan Norteamérica — desde 2006
            </span>
            <span className="hero-title-line hero-rise-lg [animation-delay:400ms] block overflow-hidden">
              Sistema ecológico de adhesivado
            </span>
            <span className="hero-title-line hero-rise-lg [animation-delay:520ms] block overflow-hidden">
              aprobado por la <span className="text-accent">FDA US</span>.
            </span>
          </h1>

          <p className="hero-copy hero-rise [animation-delay:850ms] text-secondary text-lg leading-relaxed max-w-md mb-10">
            Sistemas adhesivos libres de solventes, termoadhesivos y
            maquinaria de aplicación de precisión — diseñados para la
            manufactura industrial de calzado y marroquinería.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              ref={primaryCtaRef}
              href="#contact"
              className="hero-cta hero-rise [animation-delay:1050ms] inline-flex items-center justify-center h-14 px-8 bg-accent text-accent-foreground text-sm tracking-wide font-medium hover:bg-accent/85 transition-colors duration-200 focus-ring rounded-sm"
            >
              Solicitar cotización
            </a>
            <a
              ref={secondaryCtaRef}
              href="#systems"
              className="hero-cta hero-rise [animation-delay:1130ms] inline-flex items-center justify-center h-14 px-8 border border-border bg-background/70 backdrop-blur-sm text-foreground text-sm tracking-wide hover:border-accent transition-colors duration-200 focus-ring rounded-sm"
            >
              Explorar sistemas
            </a>
          </div>
        </div>

        <div className="hero-frame hero-zoom relative flex-1 aspect-video rounded-sm overflow-hidden shadow-[0_8px_40px_-8px_rgba(0,0,0,0.25)]">
          <HeroVideo
            webmSrc="/video/kyotex-hero.webm"
            mp4Src="/video/kyotex-hero.mp4"
            poster="/video/kyotex-hero-poster.jpg"
            label="Componentes de un sistema Kyotex separándose para mostrar su ensamblaje interno"
            className="h-full w-full"
            autoPlay
          />
        </div>
      </div>
    </section>
  );
}
