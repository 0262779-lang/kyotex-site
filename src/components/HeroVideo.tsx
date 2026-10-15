"use client";

import { useEffect, useRef, useState } from "react";

type HeroVideoProps = {
  webmSrc: string;
  mp4Src: string;
  poster: string;
  label: string;
  className?: string;
  /** Arranca desde el HTML, sin esperar al JavaScript: para el video que se ve al abrir la página. */
  autoPlay?: boolean;
};

/**
 * Video mudo en bucle con el mismo desvanecido de bordes que ZoomImage.
 * Ofrece MP4 (H.264, el que mejor decodifican los celulares) y WebM de
 * respaldo; cada navegador usa el primero que puede reproducir.
 *
 * Los celulares a veces bloquean o pausan el video (ahorro de batería, al
 * cambiar de app, al salir de pantalla), así que solo se reproduce cuando
 * está a la vista y se reintenta al volver a la página y al primer toque.
 * Con prefers-reduced-motion se queda en el fotograma de portada.
 */
export default function HeroVideo({
  webmSrc,
  mp4Src,
  poster,
  label,
  className = "",
  autoPlay = false,
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

    let inView = false;
    const tryPlay = () => {
      if (inView && video.paused && document.visibilityState === "visible") {
        video.play().catch(() => {
          /* Bloqueado por ahora: se reintenta en el siguiente evento. */
        });
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView) tryPlay();
        else video.pause();
      },
      { rootMargin: "200px 0px" }
    );
    observer.observe(video);

    const retryEvents = ["pointerdown", "touchend", "click", "keydown"];
    retryEvents.forEach((type) =>
      window.addEventListener(type, tryPlay, { passive: true })
    );
    document.addEventListener("visibilitychange", tryPlay);
    window.addEventListener("pageshow", tryPlay);

    return () => {
      observer.disconnect();
      retryEvents.forEach((type) => window.removeEventListener(type, tryPlay));
      document.removeEventListener("visibilitychange", tryPlay);
      window.removeEventListener("pageshow", tryPlay);
    };
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
          autoPlay={autoPlay}
          preload={autoPlay ? "auto" : "metadata"}
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={mp4Src} type={'video/mp4; codecs="avc1.64001F"'} />
          <source src={webmSrc} type={'video/webm; codecs="vp9"'} />
        </video>
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--color-card),var(--color-muted))] flex items-center justify-center">
          <span className="font-display text-accent/40 text-sm tracking-[0.3em] uppercase">
            Kyotex
          </span>
        </div>
      )}
      <div
        aria-hidden
        className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_55%,var(--color-background)_100%)]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
    </div>
  );
}
