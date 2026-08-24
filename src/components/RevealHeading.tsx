"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Section headline treatment: a masked line-wipe on scroll, distinct from
 * the fade-up used on cards and body copy elsewhere on the page — so
 * headings read as a deliberate beat, not the same transition repeated
 * everywhere.
 */
export default function RevealHeading({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const wrapRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const line = lineRef.current;
    if (!wrap || !line) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      gsap.set(line, { yPercent: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(line, {
        yPercent: 100,
        duration: 0.85,
        ease: "power4.out",
        scrollTrigger: {
          trigger: wrap,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <h2 ref={wrapRef} className={`overflow-hidden ${className}`}>
      <span ref={lineRef} className="block">
        {children}
      </span>
    </h2>
  );
}
