"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { SiteImage } from "@/content/images";
import type { Locale } from "@/lib/i18n";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ZoomImageProps = {
  image: SiteImage;
  locale: Locale;
  /** Ancho con el que se muestra, para que next/image sirva el tamaño justo. */
  sizes: string;
  className?: string;
  /** Continuous slow "breathing" zoom, for hero-scale hold shots. */
  ambient?: boolean;
};

/**
 * A photo that zooms in slightly as it scrolls into view, then (optionally)
 * keeps a slow ambient breathing zoom. Served by next/image (AVIF/WebP at the
 * right width). Falls back to a branded gradient placeholder if the image
 * fails to load.
 */
export default function ZoomImage({
  image,
  locale,
  sizes,
  className = "",
  ambient = false,
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

    // Kept subtle: the source photos are modest resolution, and a heavy
    // zoom on top of object-cover upscaling reads as blur, not motion.
    const startScale = 1.05;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { scale: startScale },
        {
          scale: ambient ? startScale - 0.03 : 1,
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
          scale: startScale - 0.015,
          duration: 12,
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
        <Image
          ref={imgRef}
          src={image.src}
          alt={image.alt[locale]}
          fill
          sizes={sizes}
          onError={() => setFailed(true)}
          className="object-cover will-change-transform"
        />
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--color-card),var(--color-muted))] flex items-center justify-center">
          <span className="font-display text-accent/40 text-sm tracking-[0.3em] uppercase">
            Kyotex
          </span>
        </div>
      )}
      {/* Fades the photo's own edges into the page background — no hard rectangle. */}
      <div
        aria-hidden
        className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_55%,var(--color-background)_100%)]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
    </div>
  );
}
