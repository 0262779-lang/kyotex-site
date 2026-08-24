"use client";

import { useReveal } from "@/lib/useReveal";
import { useState, type FormEvent } from "react";

export default function Reserve() {
  const ref = useReveal<HTMLDivElement>(".reveal-item");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitted");
  }

  return (
    <section
      id="contact"
      className="py-[var(--space-section)] bg-card border-t border-border"
    >
      <div className="mx-auto max-w-3xl px-6 md:px-10 text-center">
        <div ref={ref}>
          <p className="reveal-item text-accent text-sm tracking-[0.3em] uppercase mb-4">
            Talk to our technical team
          </p>
          <h2 className="reveal-item font-display text-4xl sm:text-5xl leading-tight text-balance mb-6">
            Let&apos;s spec the right system for your line.
          </h2>
          <p className="reveal-item text-secondary text-lg mb-12 max-w-xl mx-auto">
            Tell us about your production volume and materials, and a Kyotex
            technical specialist will follow up with a recommendation.
          </p>
        </div>

        {status === "idle" ? (
          <form
            onSubmit={handleSubmit}
            className="reveal-item grid gap-3 max-w-lg mx-auto text-left"
          >
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="name" className="sr-only">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Full name"
                  className="w-full h-14 px-5 bg-background border border-border text-foreground placeholder:text-muted-foreground focus-ring rounded-sm"
                />
              </div>
              <div>
                <label htmlFor="company" className="sr-only">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  required
                  placeholder="Company"
                  className="w-full h-14 px-5 bg-background border border-border text-foreground placeholder:text-muted-foreground focus-ring rounded-sm"
                />
              </div>
            </div>

            <label htmlFor="email" className="sr-only">
              Work email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="Work email"
              className="w-full h-14 px-5 bg-background border border-border text-foreground placeholder:text-muted-foreground focus-ring rounded-sm"
            />

            <label htmlFor="message" className="sr-only">
              What are you looking to bond?
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="What are you looking to bond, and at what volume?"
              className="w-full px-5 py-4 bg-background border border-border text-foreground placeholder:text-muted-foreground focus-ring rounded-sm resize-none"
            />

            <button
              type="submit"
              className="h-14 px-8 bg-accent text-accent-foreground text-sm tracking-wide font-medium hover:bg-accent/85 transition-colors duration-200 focus-ring rounded-sm"
            >
              Request a quote
            </button>
          </form>
        ) : (
          <div
            role="status"
            className="reveal-item border border-accent px-8 py-6 max-w-lg mx-auto"
          >
            <p className="font-display text-xl mb-1">Request received.</p>
            <p className="text-secondary text-sm">
              A Kyotex technical specialist will reach out within one
              business day.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
