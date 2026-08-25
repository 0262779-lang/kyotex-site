"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMagnetic } from "@/lib/useMagnetic";
import HeroVideo from "@/components/HeroVideo";
import CornerMarks from "@/components/CornerMarks";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const primaryCtaRef = useMagnetic<HTMLAnchorElement>();
  const secondaryCtaRef = useMagnetic<HTMLAnchorElement>();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      gsap.set(root.querySelectorAll("[data-reveal]"), { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { opacity: 0, y: 16, duration: 0.7 })
        .from(
          ".hero-title-line",
          { opacity: 0, y: 40, duration: 1, stagger: 0.12 },
          "-=0.35"
        )
        .from(".hero-copy", { opacity: 0, y: 20, duration: 0.8 }, "-=0.55")
        .from(
          ".hero-cta",
          { opacity: 0, y: 16, duration: 0.7, stagger: 0.08 },
          "-=0.5"
        )
        .from(
          ".hero-frame",
          { opacity: 0, scale: 0.96, duration: 1.1, ease: "power2.out" },
          "-=0.9"
        );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative min-h-[100svh] flex items-center pt-28 pb-16 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(187,56,35,0.08),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl w-full px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-8 items-center">
        <div>
          <p className="hero-eyebrow text-accent text-sm tracking-[0.3em] uppercase mb-6">
            Parte de ALC Gruppo — desde 2006
          </p>

          <h1 className="font-display text-[clamp(2.75rem,4vw+1.6rem,4.5rem)] leading-[1.05] text-balance mb-8">
            <span className="hero-title-line block overflow-hidden">
              Sistemas de emplantillado
            </span>
            <span className="hero-title-line block overflow-hidden">
              para <span className="text-accent">calzado</span> que perdura.
            </span>
          </h1>

          <p className="hero-copy text-secondary text-lg leading-relaxed max-w-md mb-10">
            Sistemas adhesivos libres de solventes, termoadhesivos y
            maquinaria de aplicación de precisión — diseñados para la
            manufactura industrial de calzado y marroquinería.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              ref={primaryCtaRef}
              href="#contact"
              className="hero-cta inline-flex items-center justify-center h-14 px-8 bg-accent text-accent-foreground text-sm tracking-wide font-medium hover:bg-accent/85 transition-colors duration-200 focus-ring rounded-sm"
            >
              Solicitar cotización
            </a>
            <a
              ref={secondaryCtaRef}
              href="#systems"
              className="hero-cta inline-flex items-center justify-center h-14 px-8 border border-border text-foreground text-sm tracking-wide hover:border-accent transition-colors duration-200 focus-ring rounded-sm"
            >
              Explorar sistemas
            </a>
          </div>
        </div>

        <div className="hero-frame relative aspect-[4/3] w-full max-w-md mx-auto md:mx-0 md:ml-auto rounded-sm">
          <HeroVideo
            webmSrc="/video/kyotex-hero.webm"
            mp4Src="/video/kyotex-hero.mp4"
            poster="/video/kyotex-hero-poster.jpg"
            label="Rodillo de aplicación de un sistema Kyotex en funcionamiento"
            className="h-full w-full rounded-sm"
          />
          <CornerMarks />
        </div>
      </div>
    </section>
  );
}
