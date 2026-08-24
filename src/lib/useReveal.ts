"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type RevealOptions = {
  y?: number;
  duration?: number;
  stagger?: number;
  start?: string;
};

/**
 * Reveals direct children matching `selector` on scroll.
 * Skips animation entirely under prefers-reduced-motion.
 */
export function useReveal<T extends HTMLElement>(
  selector: string,
  { y = 28, duration = 0.9, stagger = 0.08, start = "top 80%" }: RevealOptions = {}
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const targets = root.querySelectorAll(selector);
    if (targets.length === 0) return;

    if (reduceMotion) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        opacity: 0,
        y,
        duration,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root,
          start,
          toggleActions: "play none none reverse",
        },
      });
    }, root);

    return () => ctx.revert();
  }, [selector, y, duration, stagger, start]);

  return ref;
}
