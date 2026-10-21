"use client";

import Link from "next/link";
import { preload } from "react-dom";
import { useMagnetic } from "@/lib/useMagnetic";
import HeroVideo from "@/components/HeroVideo";
import type { HomeCopy } from "@/content/home";
import { VIDEOS } from "@/content/images";
import { PAGES, QUOTE_ANCHOR } from "@/content/routes";
import type { Locale } from "@/lib/i18n";

// La entrada del hero es CSS (clases hero-rise / hero-zoom en globals.css):
// arranca con la primera pintura y no depende de que cargue el JavaScript.
export default function Hero({ locale, t }: { locale: Locale; t: HomeCopy["hero"] }) {
  const primaryCtaRef = useMagnetic<HTMLAnchorElement>();
  const secondaryCtaRef = useMagnetic<HTMLAnchorElement>();
  const video = VIDEOS.hero;

  // La portada del video es lo primero que se ve: se pide antes que todo lo demás.
  preload(video.poster, { as: "image", fetchPriority: "high" });

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-28 pb-16 overflow-hidden"
    >
      <div className="relative w-full pl-6 md:pl-10 flex flex-col md:flex-row md:items-end gap-10 md:gap-0">
        <div className="w-fit max-w-xl shrink-0 pr-6 md:pr-0">
          {/* La marca va dentro del h1 para que el título principal diga "Kyotex". */}
          <h1 className="font-display text-[clamp(2.25rem,3.4vw+1.4rem,3.75rem)] leading-[1.1] text-balance mb-8">
            <span className="hero-eyebrow hero-rise [animation-delay:250ms] block font-sans text-accent text-sm leading-5 tracking-[0.3em] uppercase text-wrap mb-6">
              {t.eyebrow}
            </span>{" "}
            {/* Los espacios entre líneas evitan que el texto del título se lea pegado ("2006Sistema"). */}
            <span className="hero-title-line hero-rise-lg [animation-delay:400ms] block overflow-hidden">
              {t.line1}
            </span>{" "}
            <span className="hero-title-line hero-rise-lg [animation-delay:520ms] block overflow-hidden">
              {t.line2.before}
              <span className="text-accent">{t.line2.accent}</span>
              {t.line2.after}
            </span>
          </h1>

          <p className="hero-copy hero-rise [animation-delay:850ms] text-secondary text-lg leading-relaxed max-w-md mb-10">
            {t.copy}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              ref={primaryCtaRef}
              href={`#${QUOTE_ANCHOR[locale]}`}
              className="hero-cta hero-rise [animation-delay:1050ms] inline-flex items-center justify-center h-14 px-8 bg-accent text-accent-foreground text-sm tracking-wide font-medium hover:bg-accent/85 transition-colors duration-200 focus-ring rounded-sm"
            >
              {t.primaryCta}
            </a>
            <Link
              ref={secondaryCtaRef}
              href={PAGES.systems[locale]}
              className="hero-cta hero-rise [animation-delay:1130ms] inline-flex items-center justify-center h-14 px-8 border border-border bg-background/70 backdrop-blur-sm text-foreground text-sm tracking-wide hover:border-accent transition-colors duration-200 focus-ring rounded-sm"
            >
              {t.secondaryCta}
            </Link>
          </div>
        </div>

        <div className="hero-frame hero-zoom relative flex-1 aspect-video rounded-sm overflow-hidden shadow-[0_8px_40px_-8px_rgba(0,0,0,0.25)]">
          <HeroVideo
            webmSrc={video.webm}
            mp4Src={video.mp4}
            poster={video.poster}
            label={t.videoLabel}
            className="h-full w-full"
            autoPlay
          />
        </div>
      </div>
    </section>
  );
}
