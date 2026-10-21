import type { Localized } from "@/lib/i18n";
import { PAGES, applicationPaths, systemPaths } from "@/content/routes";

/** Textos de la interfaz compartidos por todas las páginas. */
export const UI = {
  es: {
    nav: [
      { href: PAGES.systems.es, label: "Sistemas" },
      { href: PAGES.applications.es, label: "Aplicaciones" },
      { href: PAGES.machinery.es, label: "Maquinaria" },
      { href: PAGES.guides.es, label: "Guías" },
      { href: PAGES.about.es, label: "Nosotros" },
      { href: PAGES.contact.es, label: "Contacto" },
    ],
    homeLabel: "Inicio",
    quote: "Solicitar cotización",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    mainNav: "Navegación principal",
    langShort: "EN",
    langLong: "English",
    // Va en el idioma de destino porque el enlace lleva lang="en".
    langAria: "View this page in English",
    breadcrumbAria: "Migas de pan",
    whatsapp: {
      label: "WhatsApp",
      aria: "Escríbenos por WhatsApp (se abre en una pestaña nueva)",
      message: "Hola, quiero información sobre los sistemas Kyotex",
    },
    footer: {
      tagline:
        "Sistemas adhesivos sin solventes, termoadhesivos y maquinaria para la manufactura de calzado y marroquinería.",
      tel: "Tel.",
      directions: "Cómo llegar",
      columns: [
        {
          title: "Sistemas",
          links: [
            { href: systemPaths("k-system").es, label: "K System" },
            { href: systemPaths("k-thermo").es, label: "K Thermo" },
            { href: systemPaths("k-next").es, label: "K Next" },
            { href: systemPaths("k-pads").es, label: "K Pads" },
            { href: PAGES.machinery.es, label: "Maquinaria Kyo" },
          ],
        },
        {
          title: "Aplicaciones",
          links: [
            { href: applicationPaths("insole").es, label: "Emplantillado sin solventes" },
            { href: applicationPaths("leather").es, label: "Marroquinería" },
            { href: applicationPaths("lamination").es, label: "Laminado" },
          ],
        },
        {
          title: "Empresa",
          links: [
            { href: PAGES.about.es, label: "Nosotros" },
            { href: PAGES.guides.es, label: "Guías" },
            { href: PAGES.faq.es, label: "Preguntas frecuentes" },
            { href: PAGES.contact.es, label: "Contacto" },
          ],
        },
      ],
      rights: "Kyotex. Todos los derechos reservados.",
    },
    cta: {
      title: "¿Quieres probar un sistema Kyotex en tu línea?",
      text: "Cuéntanos qué materiales unes y a qué volumen. Un especialista de Kyotex te enviará una recomendación.",
      call: "O llámanos al",
    },
    related: "También te puede interesar",
    readGuide: "Leer la guía",
    guideLabel: "Guía",
    guidesHeading: "Guías relacionadas",
    systemsHeading: "Sistemas relacionados",
    applicationsHeading: "Aplicaciones",
    published: "Publicado el",
    updated: "Actualizado el",
    readingTime: "min de lectura",
    seeMachinery: "Ver maquinaria Kyo",
    crumb: {
      systems: "Sistemas",
      applications: "Aplicaciones",
      machinery: "Maquinaria",
      guides: "Guías",
      about: "Nosotros",
      contact: "Contacto",
      faq: "Preguntas frecuentes",
    },
  },
  en: {
    nav: [
      { href: PAGES.systems.en, label: "Systems" },
      { href: PAGES.applications.en, label: "Applications" },
      { href: PAGES.machinery.en, label: "Machinery" },
      { href: PAGES.guides.en, label: "Guides" },
      { href: PAGES.about.en, label: "About" },
      { href: PAGES.contact.en, label: "Contact" },
    ],
    homeLabel: "Home",
    quote: "Request a quote",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main navigation",
    langShort: "ES",
    langLong: "Español",
    langAria: "Ver esta página en español",
    breadcrumbAria: "Breadcrumb",
    whatsapp: {
      label: "WhatsApp",
      aria: "Message us on WhatsApp (opens in a new tab)",
      message: "Hello, I would like information about Kyotex systems",
    },
    footer: {
      tagline:
        "Solvent-free adhesive systems, hot melt adhesives and application machinery for footwear and leather goods manufacturing.",
      tel: "Tel.",
      directions: "Get directions",
      columns: [
        {
          title: "Systems",
          links: [
            { href: systemPaths("k-system").en, label: "K System" },
            { href: systemPaths("k-thermo").en, label: "K Thermo" },
            { href: systemPaths("k-next").en, label: "K Next" },
            { href: systemPaths("k-pads").en, label: "K Pads" },
            { href: PAGES.machinery.en, label: "Kyo machinery" },
          ],
        },
        {
          title: "Applications",
          links: [
            { href: applicationPaths("insole").en, label: "Solvent-free insole bonding" },
            { href: applicationPaths("leather").en, label: "Leather goods" },
            { href: applicationPaths("lamination").en, label: "Lamination" },
          ],
        },
        {
          title: "Company",
          links: [
            { href: PAGES.about.en, label: "About" },
            { href: PAGES.guides.en, label: "Guides" },
            { href: PAGES.faq.en, label: "FAQ" },
            { href: PAGES.contact.en, label: "Contact" },
          ],
        },
      ],
      rights: "Kyotex. All rights reserved.",
    },
    cta: {
      title: "Want to test a Kyotex system on your line?",
      text: "Tell us what you bond and at what volume, and a Kyotex specialist will send you a recommendation.",
      call: "Or call us at",
    },
    related: "Related reading",
    readGuide: "Read the guide",
    guideLabel: "Guide",
    guidesHeading: "Related guides",
    systemsHeading: "Related systems",
    applicationsHeading: "Applications",
    published: "Published",
    updated: "Updated",
    readingTime: "min read",
    seeMachinery: "See Kyo machinery",
    crumb: {
      systems: "Systems",
      applications: "Applications",
      machinery: "Machinery",
      guides: "Guides",
      about: "About",
      contact: "Contact",
      faq: "FAQ",
    },
  },
} satisfies Localized<unknown>;
