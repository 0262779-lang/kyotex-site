// Textos de la portada. En español se conservan los textos que ya tenía el sitio;
// la versión en inglés está adaptada para EE. UU. y Canadá (sin el sello de la FDA
// ni la mención ISO hasta tener el documento que las respalde).
import type { Localized } from "@/lib/i18n";
import type { ImageKey } from "@/content/images";

type Stat = { value: number; label: string } | { symbol: string; label: string };

export type HomeCopy = {
  title: string;
  description: string;
  hero: {
    eyebrow: string;
    line1: string;
    line2: { before: string; accent: string; after: string };
    copy: string;
    primaryCta: string;
    secondaryCta: string;
    videoLabel: string;
  };
  marquee: string[];
  showcase: { eyebrow: string; heading: string; swipeHint: string };
  band: { eyebrow: string; heading: string };
  applications: { eyebrow: string; heading: string; text: string; link: string };
  features: {
    eyebrow: string;
    heading: string;
    items: { n: string; title: string; copy: string }[];
  };
  machinery: { eyebrow: string; heading: string; text: string; link: string; videoLabel: string };
  stats: Stat[];
  gallery: {
    eyebrow: string;
    heading: string;
    items: { image: ImageKey; caption: string }[];
    link: string;
  };
  guides: { eyebrow: string; heading: string; link: string };
  form: { eyebrow: string; heading: string; text: string };
};

export const HOME: Localized<HomeCopy> = {
  es: {
    title: "Kyotex | Adhesivos sin solventes para calzado y marroquinería",
    description:
      "Adhesivos sin solventes, termoadhesivos, cinta autoadhesiva para plantillas y maquinaria para calzado y marroquinería. Kyotex-Terlan Norteamérica, Guadalajara.",
    hero: {
      eyebrow: "Kyotex-Terlan Norteamérica — desde 2006",
      line1: "Sistema ecológico de adhesivado",
      line2: { before: "aprobado por la ", accent: "FDA US", after: "." },
      copy: "Sistemas adhesivos libres de solventes, termoadhesivos y maquinaria de aplicación de precisión — diseñados para la manufactura industrial de calzado y marroquinería.",
      primaryCta: "Solicitar cotización",
      secondaryCta: "Explorar sistemas",
      videoLabel:
        "Componentes de un sistema Kyotex separándose para mostrar su ensamblaje interno",
    },
    marquee: [
      "Manufactura de calzado",
      "Marroquinería",
      "Emplantillado libre de solventes",
      "Tecnología de emplantillado en frío",
      "Laminación de precisión",
      "Sistemas certificados ISO",
    ],
    showcase: {
      eyebrow: "Líneas de producto",
      heading: "Cinco sistemas. Una sola filosofía de emplantillado.",
      swipeHint: "Desliza para explorar →",
    },
    band: {
      eyebrow: "Presentes en la industria",
      heading: "Sistemas Kyotex, en piso de planta y en cada feria del sector.",
    },
    applications: {
      eyebrow: "Aplicaciones",
      heading: "Del emplantillado a la marroquinería.",
      text: "Tres procesos en los que los adhesivos Kyotex sustituyen al pegamento base solvente.",
      link: "Ver todas las aplicaciones",
    },
    features: {
      eyebrow: "Por qué eligen Kyotex los fabricantes",
      heading: "Diseñado para alta productividad y desarrollo fuera de la línea de producción.",
      items: [
        {
          n: "01",
          title: "Libre de solventes por diseño",
          copy: "Menores emisiones de COV en planta, sin comprometer la fuerza de unión ni la velocidad de curado.",
        },
        {
          n: "02",
          title: "Diseñado para volumen",
          copy: "Sistemas afinados para líneas de alto rendimiento de calzado y marroquinería, no solo para prototipos. Es el único adhesivo que puedes aplicar hoy y utilizarlo posteriormente.",
        },
        {
          n: "03",
          title: "Maquinaria fabricada internamente",
          copy: "Los equipos de aplicación Kyo se diseñan junto a nuestros adhesivos — el sistema se concibe como uno solo.",
        },
        {
          n: "04",
          title: "Soporte técnico en planta",
          copy: "Nuestro equipo calibra en sitio con tu línea de producción, no solo por correo.",
        },
      ],
    },
    machinery: {
      eyebrow: "Maquinaria Kyo",
      heading: "Adhesivo y maquinaria, diseñados en conjunto.",
      text: "Nuestros equipos de aplicación se construyen junto a cada sistema adhesivo que enviamos — así, dosificación, laminado y curado se calibran como una sola máquina, no como piezas ensambladas después.",
      link: "Conocer la maquinaria Kyo",
      videoLabel: "Maquinaria Kyotex industrial en funcionamiento",
    },
    stats: [
      { value: 2006, label: "Fundación, parte de ALC Gruppo" },
      { value: 5, label: "Sistemas adhesivos y de maquinaria" },
      { symbol: "∞", label: "Millones de posibilidades" },
    ],
    gallery: {
      eyebrow: "En planta",
      heading: "Los equipos Kyotex, de cerca.",
      items: [
        { image: "kyo101", caption: "KYO101 con rollos de cinta adhesiva montados." },
        {
          image: "components",
          caption: "Rodillos, engranes y electrónica dentro de una máquina Kyotex System.",
        },
        {
          image: "insoleTape",
          caption: "Cinta PSA con las siluetas de las plantillas impresas.",
        },
      ],
      link: "Ver toda la maquinaria",
    },
    guides: {
      eyebrow: "Guías",
      heading: "Aprende a fabricar sin solventes.",
      link: "Ver todas las guías",
    },
    form: {
      eyebrow: "Habla con nuestro equipo técnico",
      heading: "Definamos el sistema correcto para tu línea.",
      text: "Cuéntanos tu volumen de producción y materiales, y un especialista técnico de Kyotex te enviará una recomendación.",
    },
  },
  en: {
    title: "Kyotex | Solvent-Free Shoe Adhesives & Footwear Machinery",
    description:
      "Solvent-free shoe adhesives, hot melt adhesive for footwear, insole adhesive tape and shoe machinery for manufacturers in the US, Canada and Mexico.",
    hero: {
      eyebrow: "Kyotex-Terlan North America — since 2006",
      line1: "Solvent-free shoe adhesive systems",
      line2: { before: "for ", accent: "footwear", after: " manufacturing." },
      copy: "Solvent-free adhesive systems, hot melt adhesives and precision application machinery — built for industrial footwear and leather goods manufacturing in the US, Canada and Mexico.",
      primaryCta: "Request a quote",
      secondaryCta: "Explore systems",
      videoLabel:
        "A Kyotex system separating into its components to show how it is built inside",
    },
    marquee: [
      "Footwear manufacturing",
      "Leather goods",
      "Solvent-free insole bonding",
      "Cold insole bonding",
      "Hot melt adhesives",
      "Precision lamination",
    ],
    showcase: {
      eyebrow: "Product lines",
      heading: "Five systems. One solvent-free approach.",
      swipeHint: "Swipe to explore →",
    },
    band: {
      eyebrow: "On the floor and at the shows",
      heading: "Kyotex systems, on factory floors and at industry trade shows.",
    },
    applications: {
      eyebrow: "Applications",
      heading: "From insole bonding to leather goods.",
      text: "Three processes where Kyotex adhesives replace solvent-based shoe cement.",
      link: "See all applications",
    },
    features: {
      eyebrow: "Why manufacturers choose Kyotex",
      heading: "Built for high output — and for prep work done off the production line.",
      items: [
        {
          n: "01",
          title: "Solvent-free by design",
          copy: "Lower VOC emissions on the floor, without compromising bond strength or cure speed.",
        },
        {
          n: "02",
          title: "Built for volume",
          copy: "Systems tuned for high-output footwear and leather goods lines, not just prototypes. Apply the adhesive today and bond later.",
        },
        {
          n: "03",
          title: "Machinery built in-house",
          copy: "Kyo application equipment is designed together with our adhesives — the system is conceived as one.",
        },
        {
          n: "04",
          title: "Hands-on technical support",
          copy: "Our team calibrates the system with your production line, not just over email.",
        },
      ],
    },
    machinery: {
      eyebrow: "Kyo machinery",
      heading: "Adhesive and machinery, engineered together.",
      text: "Our application equipment is built alongside every adhesive system we ship, so dispensing, lamination and curing are calibrated as one machine — not as parts bolted together later.",
      link: "See Kyo shoe machinery",
      videoLabel: "Kyotex industrial machinery in operation",
    },
    stats: [
      { value: 2006, label: "Kyotex founded, part of ALC" },
      { value: 5, label: "Adhesive and machinery systems" },
      { symbol: "∞", label: "Millions of possibilities" },
    ],
    gallery: {
      eyebrow: "Up close",
      heading: "Kyotex equipment, up close.",
      items: [
        { image: "kyo101", caption: "KYO101 loaded with rolls of adhesive tape." },
        {
          image: "components",
          caption: "Rollers, gears and electronics inside a Kyotex System machine.",
        },
        { image: "insoleTape", caption: "PSA tape printed with insole outlines." },
      ],
      link: "See all Kyo machinery",
    },
    guides: {
      eyebrow: "Guides",
      heading: "Learn how to bond without solvents.",
      link: "Browse all guides",
    },
    form: {
      eyebrow: "Talk to our technical team",
      heading: "Let's find the right system for your line.",
      text: "Tell us your production volume and materials, and a Kyotex specialist will send you a recommendation.",
    },
  },
};

/** Textos del formulario de cotización (portada y página de contacto). */
export type QuoteFormCopy = {
  name: string;
  company: string;
  email: string;
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  submitting: string;
  doneTitle: string;
  doneText: string;
  whatsappTitle: string;
  whatsappLabels: { name: string; company: string; email: string; message: string };
  noDetail: string;
};

export const QUOTE_FORM: Localized<QuoteFormCopy> = {
  es: {
    name: "Nombre completo",
    company: "Empresa",
    email: "Correo laboral",
    messageLabel: "¿Qué necesitas emplantillar?",
    messagePlaceholder: "¿Qué necesitas emplantillar, y a qué volumen?",
    submit: "Solicitar cotización",
    submitting: "Enviando...",
    doneTitle: "Solicitud recibida.",
    doneText: "Un especialista de Kyotex se pondrá en contacto.",
    whatsappTitle: "Nueva solicitud de cotización Kyotex",
    whatsappLabels: { name: "Nombre", company: "Empresa", email: "Correo", message: "Mensaje" },
    noDetail: "(sin detalle)",
  },
  en: {
    name: "Full name",
    company: "Company",
    email: "Work email",
    messageLabel: "What do you need to bond?",
    messagePlaceholder: "What do you need to bond, and at what volume?",
    submit: "Request a quote",
    submitting: "Sending...",
    doneTitle: "Request received.",
    doneText: "A Kyotex specialist will get in touch.",
    whatsappTitle: "New Kyotex quote request (English site)",
    whatsappLabels: { name: "Name", company: "Company", email: "Email", message: "Message" },
    noDetail: "(no details)",
  },
};
