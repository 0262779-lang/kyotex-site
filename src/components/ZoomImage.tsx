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
 * keeps a slow ambient breathing zoom. Falls back to a branded gradient
 * placeholder if the image fails to load, so a bad URL never shows as a
 * broken-image icon.
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

    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { scale: 1.22 },
        {
          scale: ambient ? 1.08 : 1,
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
          scale: 1.15,
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
    <div ref={frameRef} className={`relative overflow-hidden ${className}`}>
      {!failed ? (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
        />
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--color-card),var(--color-muted))] flex items-center justify-center">
          <span className="font-display text-accent/40 text-sm tracking-[0.3em] uppercase">
            Kyotex
          </span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
    </div>
  );
}
