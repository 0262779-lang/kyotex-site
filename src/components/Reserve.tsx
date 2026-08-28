"use client";

import { useReveal } from "@/lib/useReveal";
import RevealHeading from "@/components/RevealHeading";
import { useState, type FormEvent } from "react";

const QUOTE_EMAIL = "logistics.support.terlan@gmail.com";
const QUOTE_WHATSAPP = "523335981722";

export default function Reserve() {
  const ref = useReveal<HTMLDivElement>(".reveal-item", { stagger: 0.1 });
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">(
    "idle"
  );

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
          _subject: `Nueva solicitud de cotización — ${name || company}`,
          Nombre: name,
          Empresa: company,
          "Correo del cliente": email,
          Mensaje: message || "(sin detalle)",
        }),
      });
    } catch {
      // El correo puede fallar sin conexión; el WhatsApp sigue disponible.
    }

    const waText = encodeURIComponent(
      `Nueva solicitud de cotización Kyotex\nNombre: ${name}\nEmpresa: ${company}\nCorreo: ${email}\nMensaje: ${
        message || "(sin detalle)"
      }`
    );
    window.open(`https://wa.me/${QUOTE_WHATSAPP}?text=${waText}`, "_blank");

    setStatus("submitted");
  }

  return (
    <section
      id="contact"
      className="py-[var(--space-section)] bg-card border-t border-border"
    >
      <div ref={ref} className="mx-auto max-w-3xl px-6 md:px-10 text-center">
        <div>
          <p className="reveal-item text-accent text-sm tracking-[0.3em] uppercase mb-4">
            Habla con nuestro equipo técnico
          </p>
          <RevealHeading className="font-display text-[clamp(1.875rem,3vw+1.4rem,3rem)] leading-tight text-balance mb-6">
            Definamos el sistema correcto para tu línea.
          </RevealHeading>
          <p className="reveal-item text-secondary text-lg mb-12 max-w-xl mx-auto">
            Cuéntanos tu volumen de producción y materiales, y un
            especialista técnico de Kyotex te enviará una recomendación.
          </p>
        </div>

        {status !== "submitted" ? (
          <form
            onSubmit={handleSubmit}
            className="reveal-item grid gap-3 max-w-lg mx-auto text-left"
          >
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="name" className="sr-only">
                  Nombre completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Nombre completo"
                  className="w-full h-14 px-5 bg-background border border-border text-foreground placeholder:text-muted-foreground focus-ring rounded-sm"
                />
              </div>
              <div>
                <label htmlFor="company" className="sr-only">
                  Empresa
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  placeholder="Empresa"
                  className="w-full h-14 px-5 bg-background border border-border text-foreground placeholder:text-muted-foreground focus-ring rounded-sm"
                />
              </div>
            </div>

            <label htmlFor="email" className="sr-only">
              Correo laboral
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Correo laboral"
              className="w-full h-14 px-5 bg-background border border-border text-foreground placeholder:text-muted-foreground focus-ring rounded-sm"
            />

            <label htmlFor="message" className="sr-only">
              ¿Qué necesitas emplantillar?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="¿Qué necesitas emplantillar, y a qué volumen?"
              className="w-full px-5 py-4 bg-background border border-border text-foreground placeholder:text-muted-foreground focus-ring rounded-sm resize-none"
            />

            <button
              type="submit"
              disabled={status === "submitting"}
              className="h-14 px-8 bg-accent text-accent-foreground text-sm tracking-wide font-medium hover:bg-accent/85 transition-colors duration-200 focus-ring rounded-sm disabled:opacity-60"
            >
              {status === "submitting" ? "Enviando..." : "Solicitar cotización"}
            </button>
          </form>
        ) : (
          <div
            role="status"
            className="reveal-item border border-accent px-8 py-6 max-w-lg mx-auto"
          >
            <p className="font-display text-xl mb-1">Solicitud recibida.</p>
            <p className="text-secondary text-sm">
              Un especialista de Kyotex se pondrá en contacto.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
