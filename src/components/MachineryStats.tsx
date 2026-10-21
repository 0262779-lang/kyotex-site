"use client";

import Link from "next/link";
import { useReveal } from "@/lib/useReveal";
import CountUp from "@/components/CountUp";
import HeroVideo from "@/components/HeroVideo";
import RevealHeading from "@/components/RevealHeading";
import type { HomeCopy } from "@/content/home";
import { VIDEOS } from "@/content/images";
import { PAGES } from "@/content/routes";
import type { Locale } from "@/lib/i18n";

/** Maquinaria Kyo (video) y las cifras de la marca. */
export default function MachineryStats({
  locale,
  t,
  stats,
}: {
  locale: Locale;
  t: HomeCopy["machinery"];
  stats: HomeCopy["stats"];
}) {
  const introRef = useReveal<HTMLDivElement>(".reveal-item", { stagger: 0.12 });
  const statsRef = useReveal<HTMLDivElement>(".reveal-item", { stagger: 0.1 });
  const video = VIDEOS.machinery;

  return (
    <section id="machinery" className="py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div
          ref={introRef}
          className="grid md:grid-cols-[1fr_1.5fr] gap-16 md:gap-10 items-center mb-16"
        >
          <div>
            <p className="reveal-item text-accent text-sm tracking-[0.3em] uppercase mb-4">
              {t.eyebrow}
            </p>
            <RevealHeading className="font-display text-[clamp(1.875rem,3vw+1.4rem,3rem)] leading-tight text-balance mb-6">
              {t.heading}
            </RevealHeading>
            <p className="reveal-item text-secondary text-lg leading-relaxed max-w-md mb-8">
              {t.text}
            </p>
            <Link
              href={PAGES.machinery[locale]}
              className="reveal-item inline-flex items-center gap-2 text-sm text-accent hover:text-foreground transition-colors focus-ring rounded-sm py-2"
            >
              {t.link} <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="reveal-item relative aspect-video rounded-sm">
            <HeroVideo
              webmSrc={video.webm}
              mp4Src={video.mp4}
              poster={video.poster}
              label={t.videoLabel}
              className="h-full w-full rounded-sm"
            />
          </div>
        </div>

        <div
          ref={statsRef}
          className="grid sm:grid-cols-3 gap-8 border-t border-border pt-12"
        >
          {stats.map((s) => (
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
              <span className="text-secondary text-sm leading-relaxed">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
