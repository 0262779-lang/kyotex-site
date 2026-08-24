"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#systems", label: "Systems" },
  { href: "#sustainability", label: "Sustainability" },
  { href: "#machinery", label: "Machinery" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-20 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-xl tracking-[0.2em] focus-ring rounded-sm"
        >
          KYOTEX
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-secondary hover:text-foreground transition-colors duration-200 focus-ring rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center h-11 px-6 border border-accent text-accent text-sm tracking-wide hover:bg-accent hover:text-accent-foreground transition-colors duration-200 focus-ring rounded-sm"
        >
          Request a quote
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-11 h-11 flex items-center justify-center focus-ring rounded-sm"
        >
          <span className="relative w-6 h-4 block">
            <span
              className={`absolute left-0 top-0 w-6 h-px bg-foreground transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 w-6 h-px bg-foreground transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-background border-t border-border px-6 py-6 flex flex-col gap-5">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base text-secondary hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center h-12 px-6 border border-accent text-accent text-sm tracking-wide"
          >
            Request a quote
          </a>
        </nav>
      )}
    </header>
  );
}
