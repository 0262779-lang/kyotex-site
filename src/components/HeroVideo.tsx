"use client";

import { useEffect, useRef, useState } from "react";

type HeroVideoProps = {
  webmSrc: string;
  mp4Src: string;
  poster: string;
  label: string;
  className?: string;
};

/**
 * Same duotone/edge-fade treatment as ZoomImage, applied to a looping
 * muted video instead of a still photo. Offers a WebM source first (smaller,
 * and the only format some open-source browser builds decode) with MP4 as
 * the universally-supported fallback. Pauses under prefers-reduced-motion,
 * leaving the poster frame as a static shot.
 */
export default function HeroVideo({
  webmSrc,
  mp4Src,
  poster,
  label,
  className = "",
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      video.pause();
      return;
    }

    video.play().catch(() => {
      /* Autoplay can be blocked; the poster frame still renders. */
    });
  }, []);

  return (
    <div className={`group relative overflow-hidden ${className}`}>
      {!failed ? (
        <video
          ref={videoRef}
          poster={poster}
          aria-label={label}
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover grayscale-[55%] contrast-105 transition-[filter] duration-700 group-hover:grayscale-0"
        >
          <source src={webmSrc} type="video/webm" />
          <source src={mp4Src} type="video/mp4" />
        </video>
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
      <div
        aria-hidden
        className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-40 [background:radial-gradient(ellipse_at_center,transparent_35%,var(--color-background)_100%)]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
    </div>
  );
}
