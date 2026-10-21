"use client";

import { useState, type FormEvent } from "react";
import type { QuoteFormCopy } from "@/content/home";
import type { Locale } from "@/lib/i18n";

// La solicitud llega por correo (FormSubmit) y por WhatsApp al número que dio
// el dueño para recibir cotizaciones. No se muestra como dato de contacto.
const QUOTE_EMAIL = "logistics.support.terlan@gmail.com";
const QUOTE_WHATSAPP = "523335981722";

const FIELD =
  "w-full h-14 px-5 bg-background border border-border text-foreground placeholder:text-muted-foreground focus-ring rounded-sm";

/** Formulario de cotización: envía los datos por correo y abre WhatsApp. */
export default function QuoteForm({
  locale,
  t,
  className = "",
}: {
  locale: Locale;
  t: QuoteFormCopy;
  className?: string;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const company = String(form.get("company") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");

    try {
      await fetch(`https://formsubmit.co/ajax/${QUOTE_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: `Nueva solicitud de cotización${
            locale === "en" ? " (sitio en inglés)" : ""
          } — ${name || company}`,
          Nombre: name,
          Empresa: company,
          "Correo del cliente": email,
          Mensaje: message || "(sin detalle)",
          "Idioma del sitio": locale === "en" ? "Inglés" : "Español",
          Página: window.location.pathname,
        }),
      });
    } catch {
      // El correo puede fallar sin conexión; el WhatsApp sigue disponible.
    }

    const l = t.whatsappLabels;
    const waText = encodeURIComponent(
      `${t.whatsappTitle}\n${l.name}: ${name}\n${l.company}: ${company}\n${l.email}: ${email}\n${l.message}: ${
        message || t.noDetail
      }`
    );
    window.open(`https://wa.me/${QUOTE_WHATSAPP}?text=${waText}`, "_blank");

    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div role="status" className={`border border-accent px-8 py-6 ${className}`}>
        <p className="font-display text-xl mb-1">{t.doneTitle}</p>
        <p className="text-secondary text-sm">{t.doneText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`grid gap-3 text-left ${className}`}>
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="name" className="sr-only">
            {t.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={t.name}
            className={FIELD}
          />
        </div>
        <div>
          <label htmlFor="company" className="sr-only">
            {t.company}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            placeholder={t.company}
            className={FIELD}
          />
        </div>
      </div>

      <label htmlFor="email" className="sr-only">
        {t.email}
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder={t.email}
        className={FIELD}
      />

      <label htmlFor="message" className="sr-only">
        {t.messageLabel}
      </label>
      <textarea
        id="message"
        name="message"
        rows={4}
        placeholder={t.messagePlaceholder}
        className="w-full px-5 py-4 bg-background border border-border text-foreground placeholder:text-muted-foreground focus-ring rounded-sm resize-none"
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="h-14 px-8 bg-accent text-accent-foreground text-sm tracking-wide font-medium hover:bg-accent/85 transition-colors duration-200 focus-ring rounded-sm disabled:opacity-60"
      >
        {status === "submitting" ? t.submitting : t.submit}
      </button>
    </form>
  );
}
