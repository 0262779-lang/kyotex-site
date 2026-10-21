"use client";

import { useEffect, useState } from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { UI } from "@/content/ui";
import type { Locale } from "@/lib/i18n";
import { whatsappHref } from "@/lib/site";

/**
 * Botón flotante de WhatsApp: un enlace normal (funciona sin JavaScript). Solo
 * se oculta mientras un formulario de cotización está en pantalla, para no
 * tapar su botón en celular.
 */
export default function WhatsAppButton({ locale }: { locale: Locale }) {
  const t = UI[locale].whatsapp;
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const forms = document.querySelectorAll("[data-quote-form]");
    if (forms.length === 0) return;
    const visible = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      }
      setHidden(visible.size > 0);
    });
    forms.forEach((form) => observer.observe(form));
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={whatsappHref(t.message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.aria}
      title={t.label}
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
      className={`fixed z-40 right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] md:right-6 md:bottom-6 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_6px_20px_-4px_rgba(0,0,0,0.35)] transition-[opacity,translate] duration-300 hover:bg-[#1ebe5a] focus-ring ${
        hidden ? "opacity-0 translate-y-4 pointer-events-none" : "opacity-100"
      }`}
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
