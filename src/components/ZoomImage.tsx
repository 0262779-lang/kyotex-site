"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ZoomImageProps = {
  src: string;
  alt: string;
  className?: string;
  /** Continuous slow "breathing" zoom, for hero-scale hold shots. */
  ambient?: boolean;
  priority?: boolean;
};

/**
 * A photo that zooms in slightly as it scrolls into view, then (optionally)
 * keeps a slow ambient breathing zoom. A duotone treatment (grayscale +
 * brand-color overlay via mix-blend-mode) folds any source photo — studio
 * shot or editorial — into the site's own palette so nothing reads as
 * pasted in; hovering lifts the overlay to reveal true color. Falls back to
 * a branded gradient placeholder if the image fails to load.
 */
export default function ZoomImage({
  src,
  alt,
  className = "",
  ambient = false,
  priority = false,
}: ZoomImageProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const frame = frameRef.current;
    const img = imgRef.current;
    if (!frame || !img) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      gsap.set(img, { scale: 1 });
      return;
    }

    const startScale = 1.22;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { scale: startScale },
        {
          scale: ambient ? startScale - 0.14 : 1,
          ease: "none",
          scrollTrigger: {
            trigger: frame,
            start: "top bottom",
            end: ambient ? "top top" : "bottom top",
            scrub: true,
          },
        }
      );

      if (ambient) {
        gsap.to(img, {
          scale: startScale - 0.07,
          duration: 10,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 1,
        });
      }
    }, frame);

    return () => ctx.revert();
  }, [ambient]);

  return (
    <div ref={frameRef} className={`group relative overflow-hidden ${className}`}>
      {!failed ? (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover will-change-transform grayscale-[70%] contrast-110 brightness-75 transition-[filter] duration-700 group-hover:grayscale-0 group-hover:brightness-100"
        />
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--color-card),var(--color-muted))] flex items-center justify-center">
          <span className="font-display text-accent/40 text-sm tracking-[0.3em] uppercase">
            Kyotex
          </span>
        </div>
      )}
      {!failed && (
        <div
          aria-hidden
          className="absolute inset-0 mix-blend-color bg-[linear-gradient(160deg,var(--color-accent)_0%,var(--color-background)_70%)] opacity-40 transition-opacity duration-700 group-hover:opacity-0"
        />
      )}
      {/* Fades the photo's own edges into the page background — no hard rectangle. */}
      <div
        aria-hidden
        className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-40 [background:radial-gradient(ellipse_at_center,transparent_35%,var(--color-background)_100%)]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
    </div>
  );
}
