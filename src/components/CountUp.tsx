"use client";

import { useEffect, useRef, type CSSProperties } from "react";

/**
 * Número que cuenta hacia arriba al aparecer en pantalla. El número real
 * siempre es el texto del elemento (lo leen Google, los lectores de pantalla y
 * cualquier herramienta, nunca un 0); la cuenta es solo visual, con un
 * ::after de CSS (ver .count-up en globals.css).
 */
export default function CountUp({
  to,
  className = "",
}: {
  to: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    // Sin @property (navegadores viejos) la cuenta no se puede animar: queda fijo.
    const supported = typeof CSS !== "undefined" && "registerProperty" in CSS;
    const rect = el.getBoundingClientRect();
    const onScreen = rect.top < window.innerHeight && rect.bottom > 0;
    if (reduceMotion || !supported || onScreen) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        el.classList.add("is-counting");
      },
      { threshold: 0.4 }
    );
    const onEnd = () => el.classList.remove("is-counting");
    el.addEventListener("animationend", onEnd);
    observer.observe(el);

    return () => {
      observer.disconnect();
      el.removeEventListener("animationend", onEnd);
      el.classList.remove("is-counting");
    };
  }, []);

  return (
    <span
      ref={ref}
      className={`count-up ${className}`}
      style={{ "--to": to } as CSSProperties}
    >
      <span className="count-up-value">{to}</span>
      <span className="count-up-anim" aria-hidden />
    </span>
  );
}
