// Textos de las páginas generales (índices, maquinaria, nosotros y contacto).
// Fuentes: lo que ya decía el sitio y lo que publican ALC y Kyotex
// (alcgruppo.com/en/brands/kyotex, /en/heritage, /it/storia, /en/why-us,
// kyotex.it/en/catalogues, kyotexthermo.com y la nota de ALC sobre Simac 2025).
import type { Localized } from "@/lib/i18n";
import type { Section } from "@/components/RichText";

export type PageCopy = {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  sections: Section[];
};

type CardText = { eyebrow?: string; title: string; text: string; cta: string };

export const SYSTEMS_HUB: Localized<
  PageCopy & { cardsHeading: string; machineryCard: CardText; applicationsHeading: string }
> = {
  es: {
    title: "Adhesivos para calzado industrial: sistemas Kyotex",
    description:
      "Los sistemas Kyotex para calzado y marroquinería: cinta PSA K System, termoadhesivos K Thermo, unión en frío K Next, refuerzos K Pads y maquinaria Kyo.",
    eyebrow: "Sistemas",
    h1: "Sistemas adhesivos para calzado industrial",
    lead: "Kyotex agrupa sus soluciones en cuatro unidades —K System, K Thermo, K Next y K Pads— y en la maquinaria Kyo que las aplica. Todas persiguen lo mismo: unir sin solventes.",
    cardsHeading: "Cinco sistemas. Una sola filosofía de emplantillado.",
    machineryCard: {
      eyebrow: "Maquinaria Kyo",
      title: "Equipos de aplicación de precisión",
      text: "Maquinaria automatizada de dosificación y laminado, diseñada internamente para operar nuestros sistemas adhesivos a velocidad de producción.",
      cta: "Conocer la maquinaria",
    },
    applicationsHeading: "Dónde se usan",
    sections: [
      {
        heading: "Cómo elegir un sistema",
        blocks: [
          "La pregunta clave es cómo debe activarse el adhesivo en tu proceso:",
          {
            list: [
              "**Con presión, en frío y sin esperas:** [K System](/sistemas/k-system), cinta autoadhesiva PSA.",
              "**Con calor y presión, si tienes prensas:** [K Thermo](/sistemas/k-thermo), termoadhesivos en granulado, polvo, película, velo o red.",
              "**Con fuerza estructural y sin calor:** [K Next](/sistemas/k-next).",
              "**Para dar forma y soporte a las piezas:** [K Pads](/sistemas/k-pads), punteras, contrafuertes y microfibras.",
              "**Para aplicar el adhesivo a velocidad de producción:** la [maquinaria Kyo](/maquinaria).",
            ],
          },
          "Si dudas entre dos opciones, la guía [termoadhesivo vs pegamento base solvente](/guias/termoadhesivo-vs-pegamento-base-solvente-en-calzado) te ayuda a comparar.",
        ],
      },
      {
        heading: "Adhesivos ecológicos para calzado",
        blocks: [
          "Kyotex toma su nombre del Protocolo de Kioto. Sus sistemas buscan unir sin solventes: los PSA unen en frío por presión, los termoadhesivos con calor y presión, y los refuerzos K Pads usan materiales naturales y reciclados tratados con adhesivos Kyotex que, según la marca, garantizan la ausencia de solventes y de COV. En la gama de polvos hay incluso una opción biodegradable: el PBS.",
        ],
      },
      {
        heading: "Proveedor de adhesivos para calzado en México",
        blocks: [
          "Desde Guadalajara, Jalisco, Kyotex-Terlan Norteamérica atiende a fábricas de calzado y marroquinería de León, Guanajuato, y del resto del país, además de Estados Unidos y Canadá. [Solicita una cotización](/contacto#cotizar) o revisa las [preguntas frecuentes](/preguntas-frecuentes).",
        ],
      },
    ],
  },
  en: {
    title: "Footwear Manufacturing Adhesives | Kyotex Systems",
    description:
      "Kyotex systems for footwear and leather goods: K System PSA tape, K Thermo hot melts, K Next cold bonding, K Pads reinforcements and Kyo shoe machinery.",
    eyebrow: "Systems",
    h1: "Footwear manufacturing adhesive systems",
    lead: "Kyotex organizes its solutions into four units — K System, K Thermo, K Next and K Pads — plus the Kyo machinery that applies them. All of them share one goal: bonding without solvents.",
    cardsHeading: "Five systems. One solvent-free approach.",
    machineryCard: {
      eyebrow: "Kyo machinery",
      title: "Precision application equipment",
      text: "Automated dispensing and laminating machinery, engineered in-house to run our adhesive systems at production speed.",
      cta: "Explore the machinery",
    },
    applicationsHeading: "Where they're used",
    sections: [
      {
        heading: "How to choose a system",
        blocks: [
          "The key question is how the adhesive needs to activate in your process:",
          {
            list: [
              "**With pressure, cold and no waiting:** [K System](/en/systems/k-system) pressure-sensitive insole adhesive tape.",
              "**With heat and pressure, if you run presses:** [K Thermo](/en/systems/k-thermo) hot melts as granules, powder, film, web or net.",
              "**With structural strength and no heat:** [K Next](/en/systems/k-next).",
              "**To shape and support parts:** [K Pads](/en/systems/k-pads) toe puffs, counters and microfibers.",
              "**To apply adhesive at production speed:** [Kyo shoe machinery](/en/machinery).",
            ],
          },
          "Torn between two options? [Hot melt vs. solvent-based shoe adhesive](/en/guides/hot-melt-vs-solvent-based-shoe-adhesive) lays out the trade-offs.",
        ],
      },
      {
        heading: "Eco-friendly footwear adhesives",
        blocks: [
          "Kyotex takes its name from the Kyoto Protocol. Its systems are built to bond without solvents: PSAs bond cold under pressure, hot melts bond with heat and pressure, and K Pads reinforcements use natural and recycled materials treated with Kyotex adhesives that, according to the brand, ensure no solvents and no VOCs. The powder range even includes a biodegradable option, PBS.",
        ],
      },
      {
        heading: "Serving manufacturers across North America",
        blocks: [
          "Kyotex-Terlan North America works from Guadalajara, Mexico, with footwear and leather goods manufacturers in the United States, Canada and Mexico. [Request a quote](/en/contact#quote) or browse the [FAQ](/en/faq).",
        ],
      },
    ],
  },
};

export const APPLICATIONS_HUB: Localized<PageCopy & { cardsHeading: string }> = {
  es: {
    title: "Emplantillado, marroquinería y laminado | Kyotex",
    description:
      "Dónde se usan los adhesivos Kyotex: emplantillado sin solventes, adhesivos para marroquinería y laminado con termoadhesivos, con la maquinaria que los aplica.",
    eyebrow: "Aplicaciones",
    h1: "Aplicaciones de los adhesivos Kyotex",
    lead: "Los sistemas Kyotex se usan en tres procesos clave de la manufactura de calzado y marroquinería: el emplantillado, el armado de artículos de piel y el laminado de materiales.",
    cardsHeading: "Elige tu proceso",
    sections: [
      {
        heading: "Una misma idea en cada aplicación",
        blocks: [
          "En las tres aplicaciones el objetivo es el mismo: quitar el solvente de la unión sin perder fuerza ni velocidad. Cambia la forma del adhesivo —cinta, polvo, película, velo o red— y la manera de activarlo: con presión, con calor y presión, o en frío con fuerza estructural.",
          "Conoce cada tecnología en [sistemas adhesivos para calzado industrial](/sistemas).",
        ],
      },
      {
        heading: "¿Tu aplicación no aparece aquí?",
        blocks: [
          "Kyotex publica usos de sus termoadhesivos en otras industrias: lencería y telas elásticas, automotriz, alfombras, filtración y artículos de viaje. Si tu proceso es distinto, [cuéntanos qué materiales unes](/contacto#cotizar) y lo revisamos.",
        ],
      },
    ],
  },
  en: {
    title: "Insole, Leather Goods & Lamination Adhesives | Kyotex",
    description:
      "Where Kyotex adhesives are used: solvent-free insole bonding, leather goods adhesives and hot melt lamination, with the machinery that applies them.",
    eyebrow: "Applications",
    h1: "Where Kyotex adhesives are used",
    lead: "Kyotex systems are used in three key steps of footwear and leather goods manufacturing: insole bonding, leather goods assembly and material lamination.",
    cardsHeading: "Pick your process",
    sections: [
      {
        heading: "One idea behind every application",
        blocks: [
          "The goal is the same in all three: take solvents out of the bond without giving up strength or speed. What changes is the adhesive's form — tape, powder, film, web or net — and how it's activated: with pressure, with heat and pressure, or cold with structural strength.",
          "Learn about each technology in [footwear manufacturing adhesive systems](/en/systems).",
        ],
      },
      {
        heading: "Don't see your application?",
        blocks: [
          "Kyotex publishes uses for its hot melts in other industries too: lingerie and stretch fabrics, automotive, carpet, filtration and luggage. If your process is different, [tell us what you bond](/en/contact#quote) and we'll take a look.",
        ],
      },
    ],
  },
};

export const GUIDES_HUB: Localized<PageCopy & { cardsHeading: string }> = {
  es: {
    title: "Guías de adhesivos sin solventes para calzado | Kyotex",
    description:
      "Guías para fabricantes de calzado: quitar solventes del emplantillado, termoadhesivo vs base solvente, adhesivos PSA, emisiones de COV y emplantillado en frío.",
    eyebrow: "Guías",
    h1: "Guías para fabricar calzado sin solventes",
    lead: "Artículos prácticos para jefes de producción, ingenieros y dueños de fábricas de calzado y marroquinería que quieren dejar atrás los pegamentos base solvente.",
    cardsHeading: "Todas las guías",
    sections: [
      {
        heading: "Por dónde empezar",
        blocks: [
          {
            list: [
              "Si apenas estás evaluando el cambio, empieza por [cómo eliminar solventes en el emplantillado de calzado](/guias/como-eliminar-solventes-en-el-emplantillado-de-calzado).",
              "Si quieres comparar tecnologías, lee [termoadhesivo vs pegamento base solvente](/guias/termoadhesivo-vs-pegamento-base-solvente-en-calzado) y [qué es un adhesivo PSA](/guias/que-es-un-adhesivo-psa-y-como-se-usa-en-calzado).",
              "Si tu prioridad es el aire de la planta, ve a [cómo reducir emisiones de COV](/guias/como-reducir-emisiones-de-cov-en-una-fabrica-de-calzado).",
              "Si tus materiales no toleran calor, revisa [emplantillado en frío](/guias/emplantillado-en-frio-que-es-y-cuando-conviene).",
            ],
          },
        ],
      },
    ],
  },
  en: {
    title: "Footwear Adhesive Guides for Manufacturers | Kyotex",
    description:
      "Guides for footwear manufacturers: removing solvents from insole bonding, hot melt vs. solvent-based cement, PSA tape, VOC reduction and cold insole bonding.",
    eyebrow: "Guides",
    h1: "Guides to solvent-free footwear bonding",
    lead: "Practical reading for production managers, engineers and owners of footwear and leather goods plants who want to move away from solvent-based cement.",
    cardsHeading: "All guides",
    sections: [
      {
        heading: "Where to start",
        blocks: [
          {
            list: [
              "Just exploring the switch? Start with [how to remove solvents from insole bonding](/en/guides/how-to-remove-solvents-from-insole-bonding).",
              "Comparing technologies? Read [hot melt vs. solvent-based shoe adhesive](/en/guides/hot-melt-vs-solvent-based-shoe-adhesive) and [what a PSA adhesive is](/en/guides/what-is-a-psa-adhesive-in-footwear).",
              "Focused on air quality and compliance? Go to [how to reduce VOC emissions in a shoe factory](/en/guides/how-to-reduce-voc-emissions-in-a-shoe-factory).",
              "Materials that can't take heat? See [cold insole bonding](/en/guides/cold-insole-bonding-what-it-is-and-when-to-use-it).",
            ],
          },
        ],
      },
    ],
  },
};

export const MACHINERY: Localized<
  PageCopy & {
    videoCaption: string;
    galleryHeading: string;
    gallery: { image: "tradeShow" | "kyo101" | "components" | "insoleTape"; caption: string }[];
    systemsHeading: string;
  }
> = {
  es: {
    title: "Maquinaria para calzado: equipos Kyo de aplicación | Kyotex",
    description:
      "Maquinaria para calzado y marroquinería: KYO100S y KYO101 aplican cinta PSA de hasta 145 mm y KYO500 piezas medianas y grandes. Diseñada junto con el adhesivo.",
    eyebrow: "Maquinaria Kyo",
    h1: "Maquinaria para calzado: equipos de aplicación Kyo",
    lead: "Los equipos Kyo se diseñan junto con los adhesivos Kyotex: el sistema se concibe como uno solo, para que dosificación, laminado y curado se calibren como una sola máquina.",
    videoCaption: "Máquina Kyotex System en funcionamiento.",
    galleryHeading: "Los equipos, de cerca",
    gallery: [
      {
        image: "tradeShow",
        caption: "Máquinas KYO100S y KYO101 en el stand de una feria del sector.",
      },
      { image: "kyo101", caption: "KYO101 con rollos de cinta adhesiva montados." },
      {
        image: "components",
        caption: "Interior de una máquina Kyotex System: rodillos, engranes y electrónica.",
      },
      {
        image: "insoleTape",
        caption: "Cinta PSA con las siluetas de las plantillas impresas.",
      },
    ],
    systemsHeading: "Los adhesivos que aplican",
    sections: [
      {
        heading: "Adhesivo y maquinaria, diseñados en conjunto",
        blocks: [
          "Nuestros equipos de aplicación se construyen junto a cada sistema adhesivo que enviamos. Así, dosificación, laminado y curado se calibran como una sola máquina, no como piezas ensambladas después.",
          "Kyotex ofrece maquinaria automatizada de dosificación y laminado, diseñada internamente para operar sus sistemas adhesivos a velocidad de producción.",
        ],
      },
      {
        heading: "Equipos para cinta autoadhesiva PSA",
        blocks: [
          "Estos son los equipos Kyo que publica Kyotex para sus adhesivos sensibles a la presión ([K System](/sistemas/k-system)):",
          {
            list: [
              "**KYO100S:** máquina neumática para la aplicación autoalineada de adhesivos PSA Kyotex de hasta 145 mm de ancho.",
              "**KYO101:** máquina con control electrónico para la aplicación autoalineada de adhesivos PSA Kyotex de hasta 145 mm de ancho.",
              "**KYO500:** máquina para aplicar adhesivos PSA Kyotex de tamaño mediano y grande en [marroquinería](/aplicaciones/marroquineria).",
              "**Equipo para cierres:** máquina nueva, presentada por ALC en la feria Simac 2025, para aplicar adhesivo en los cierres de artículos de marroquinería.",
            ],
          },
          "Con la KYO100S y la KYO101 se aplica la [cinta autoadhesiva para plantillas](/aplicaciones/emplantillado-sin-solventes).",
        ],
      },
      {
        heading: "Soporte técnico en planta",
        blocks: [
          "Nuestro equipo calibra en sitio con tu línea de producción, no solo por correo. La idea es que el adhesivo, la máquina y tu proceso queden ajustados como un solo sistema.",
        ],
      },
      {
        heading: "La experiencia de ALC",
        blocks: [
          "ALC, la empresa italiana detrás de Kyotex, reporta 2,500 máquinas instaladas y 40 patentes en el mundo, y presenta sus equipos en ferias del sector como Simac. Conoce su historia en [nosotros](/nosotros).",
        ],
      },
      {
        heading: "Qué necesitamos para cotizar una máquina",
        blocks: [
          {
            list: [
              "Qué adhesivo quieres aplicar: cinta PSA, termoadhesivo o refuerzos.",
              "El ancho de la cinta y el tamaño de las piezas.",
              "Tu volumen de producción por turno.",
              "Si tu planta cuenta con aire comprimido (la KYO100S es neumática).",
            ],
          },
          "[Solicita tu cotización](/contacto#cotizar) o llámanos.",
        ],
      },
    ],
  },
  en: {
    title: "Shoe Machinery for Adhesive Application | Kyotex",
    description:
      "Kyo shoe machinery built with Kyotex adhesives: KYO100S and KYO101 apply PSA tape up to 145 mm (5.7 in) wide; KYO500 handles medium and large leather parts.",
    eyebrow: "Kyo machinery",
    h1: "Shoe machinery: Kyo adhesive application equipment",
    lead: "Kyo machines are engineered together with Kyotex adhesives. The system is designed as one, so dispensing, lamination and curing are calibrated as a single machine.",
    videoCaption: "Kyotex System machine in operation.",
    galleryHeading: "A closer look at the equipment",
    gallery: [
      {
        image: "tradeShow",
        caption: "KYO100S and KYO101 machines on an industry trade show stand.",
      },
      { image: "kyo101", caption: "KYO101 loaded with rolls of adhesive tape." },
      {
        image: "components",
        caption: "Inside a Kyotex System machine: rollers, gears and electronics.",
      },
      {
        image: "insoleTape",
        caption: "PSA tape printed with insole outlines.",
      },
    ],
    systemsHeading: "The adhesives they apply",
    sections: [
      {
        heading: "Adhesive and machinery, engineered together",
        blocks: [
          "Our application equipment is built alongside every adhesive system we ship. Dispensing, lamination and curing are calibrated as one machine — not as parts bolted together later.",
          "Kyotex offers automated dispensing and laminating machinery, engineered in-house to run its adhesive systems at production speed.",
        ],
      },
      {
        heading: "Machines for pressure-sensitive tape",
        blocks: [
          "These are the Kyo machines Kyotex lists for its pressure-sensitive adhesives ([K System](/en/systems/k-system)):",
          {
            list: [
              "**KYO100S:** a pneumatic machine for self-aligning application of Kyotex PSA adhesives up to 145 mm (about 5.7 in) wide.",
              "**KYO101:** an electronically controlled machine for self-aligning application of Kyotex PSA adhesives up to 145 mm (about 5.7 in) wide.",
              "**KYO500:** a machine for applying medium and large Kyotex PSA adhesives in [leather goods](/en/applications/leather-goods).",
              "**Zipper equipment:** a new machine, introduced by ALC at the Simac 2025 trade show, for applying adhesive to zippers in leather goods.",
            ],
          },
          "The KYO100S and KYO101 apply our [insole adhesive tape](/en/applications/solvent-free-insole-bonding).",
        ],
      },
      {
        heading: "Hands-on technical support",
        blocks: [
          "Our team calibrates the system with your production line, not just over email. The goal is for the adhesive, the machine and your process to work as one system.",
        ],
      },
      {
        heading: "ALC's track record",
        blocks: [
          "ALC, the Italian company behind Kyotex, reports 2,500 machines installed and 40 patents worldwide, and shows its equipment at industry trade shows such as Simac. Read the story on our [about](/en/about) page.",
        ],
      },
      {
        heading: "What we need to quote a machine",
        blocks: [
          {
            list: [
              "Which adhesive you want to apply: PSA tape, hot melt or reinforcements.",
              "Tape width and part size.",
              "Your production volume per shift.",
              "Whether your plant has compressed air (the KYO100S is pneumatic).",
            ],
          },
          "[Request your quote](/en/contact#quote) or give us a call.",
        ],
      },
    ],
  },
};

export const ABOUT: Localized<PageCopy & { visitHeading: string }> = {
  es: {
    title: "Nosotros | Kyotex-Terlan Norteamérica, Guadalajara",
    description:
      "Kyotex-Terlan Norteamérica, en Guadalajara: sistemas Kyotex de ALC —adhesivos sin solventes, termoadhesivos y maquinaria— para México, EE. UU. y Canadá.",
    eyebrow: "Nosotros",
    h1: "Kyotex-Terlan Norteamérica: adhesivos ecológicos para calzado",
    lead: "Desde Guadalajara, Jalisco, acercamos a los fabricantes de calzado y marroquinería de México, Estados Unidos y Canadá los sistemas Kyotex: adhesivos sin solventes, termoadhesivos y maquinaria de aplicación diseñada junto con cada adhesivo.",
    visitHeading: "Visítanos o llámanos",
    sections: [
      {
        heading: "Quiénes somos",
        blocks: [
          "Kyotex-Terlan Norteamérica trabaja desde Guadalajara, Jalisco, con los sistemas Kyotex para calzado y marroquinería. Atendemos a fabricantes de León, Guanajuato, de Guadalajara y del resto de México, así como de Estados Unidos y Canadá.",
          "Nuestro trabajo es ayudarte a elegir el sistema correcto para tu línea, cotizarlo y acompañarte en la puesta en marcha.",
        ],
      },
      {
        heading: "Kyotex, la marca de ALC para calzado y marroquinería",
        blocks: [
          "Kyotex nació en 2006, cuando ALC lanzó la línea Kyotex System, su primer paso en el calzado. El nombre es un homenaje al Protocolo de Kioto. Hoy es la unidad de ALC que mejor representa su impulso por innovar, con soluciones, sistemas y productos para el mercado del calzado y la marroquinería, y con la meta de llegar también a otros sectores industriales.",
          "Kyotex se organiza en cuatro unidades:",
          {
            list: [
              "[K System](/sistemas/k-system): adhesivos sensibles a la presión (PSA), sólidos y en frío.",
              "[K Thermo](/sistemas/k-thermo): termoadhesivos en granulado, polvo, película, velo y red.",
              "[K Next](/sistemas/k-next): unión estructural para productos que no pueden calentarse.",
              "[K Pads](/sistemas/k-pads): refuerzos como punteras, contrafuertes y microfibras.",
            ],
          },
        ],
      },
      {
        heading: "ALC: más de cien años en tecnologías adhesivas",
        blocks: [
          "ALC (Adhesives Leading Company) es una empresa italiana con sede en Venaria Reale, cerca de Turín. Estos son algunos momentos de su historia:",
          {
            list: [
              "**1922:** fundación de la empresa.",
              "**1930:** primeros sistemas para abrasivos sólidos.",
              "**1970:** primeros sistemas adhesivos para el mercado automotriz.",
              "**2006:** nace Kyotex, su línea para calzado y marroquinería.",
              "**2013:** se integra al grupo CRAB y empieza a producir sus propios adhesivos sensibles a la presión.",
              "**2024:** renueva su imagen y empieza a producir K Next.",
            ],
          },
          "ALC destaca su producción propia, que le permite vigilar cada etapa de la fabricación; la asesoría a la medida, en colaboración con cada cliente; y un área completa dedicada a la investigación. Según su perfil corporativo, suma 40 patentes en el mundo y 2,500 máquinas instaladas.",
        ],
      },
      {
        heading: "Por qué eligen Kyotex los fabricantes",
        blocks: [
          {
            list: [
              "**Libre de solventes por diseño:** menores emisiones de COV en planta, sin comprometer la fuerza de unión ni la velocidad de curado.",
              "**Diseñado para volumen:** sistemas afinados para líneas de alto rendimiento de calzado y marroquinería, no solo para prototipos.",
              "**Maquinaria fabricada internamente:** los equipos de aplicación Kyo se diseñan junto a los adhesivos; el sistema se concibe como uno solo.",
              "**Soporte técnico en planta:** nuestro equipo calibra en sitio con tu línea de producción, no solo por correo.",
            ],
          },
        ],
      },
    ],
  },
  en: {
    title: "About Kyotex-Terlan North America | Kyotex",
    description:
      "From Guadalajara, Kyotex-Terlan North America brings ALC's Kyotex systems — solvent-free adhesives, hot melts and shoe machinery — to the US, Canada and Mexico.",
    eyebrow: "About",
    h1: "About Kyotex-Terlan North America",
    lead: "From Guadalajara, Mexico, we bring Kyotex systems to footwear and leather goods manufacturers in the United States, Canada and Mexico: solvent-free adhesives, hot melts and application machinery engineered together with each adhesive.",
    visitHeading: "Visit or call us",
    sections: [
      {
        heading: "Who we are",
        blocks: [
          "Kyotex-Terlan North America (Kyotex-Terlan Norteamérica) works from Guadalajara, Jalisco, with Kyotex systems for footwear and leather goods, serving manufacturers in the United States, Canada and Mexico.",
          "Our job is to help you choose the right system for your line, quote it and support you through start-up.",
        ],
      },
      {
        heading: "Kyotex, ALC's footwear and leather goods brand",
        blocks: [
          "Kyotex launched in 2006, when ALC introduced its Kyotex System line — the company's first move into footwear. The name honors the Kyoto Protocol. Today it's the ALC unit that best represents the company's drive to innovate, with solutions, systems and products for footwear and leather goods, and the goal of reaching other industrial sectors too.",
          "Kyotex is organized into four units:",
          {
            list: [
              "[K System](/en/systems/k-system): solid, cold pressure-sensitive adhesives (PSA).",
              "[K Thermo](/en/systems/k-thermo): hot melt adhesives as granules, powder, film, web and net.",
              "[K Next](/en/systems/k-next): structural bonding for products that can't be heated.",
              "[K Pads](/en/systems/k-pads): reinforcements such as toe puffs, counters and microfibers.",
            ],
          },
        ],
      },
      {
        heading: "ALC: a century in adhesive technology",
        blocks: [
          "ALC (Adhesives Leading Company) is an Italian company headquartered in Venaria Reale, near Turin. A few milestones:",
          {
            list: [
              "**1922:** the company is founded.",
              "**1930:** first systems for solid abrasives.",
              "**1970:** first adhesive systems for the automotive market.",
              "**2006:** Kyotex launches for footwear and leather goods.",
              "**2013:** ALC joins the CRAB group and begins producing its own pressure-sensitive adhesives.",
              "**2024:** a new brand identity, and production of K Next begins.",
            ],
          },
          "ALC highlights in-house production that lets it monitor every stage of manufacturing, tailored consulting in partnership with each customer, and an entire site dedicated to research. Its company profile cites 40 patents worldwide and 2,500 machines installed.",
        ],
      },
      {
        heading: "Why manufacturers choose Kyotex",
        blocks: [
          {
            list: [
              "**Solvent-free by design:** lower VOC emissions on the floor without compromising bond strength or cure speed.",
              "**Built for volume:** systems tuned for high-output footwear and leather goods lines, not just prototypes.",
              "**Machinery built in-house:** Kyo application equipment is designed together with the adhesives, so the system is conceived as one.",
              "**Hands-on technical support:** our team calibrates the system with your production line, not just over email.",
            ],
          },
        ],
      },
    ],
  },
};

export const CONTACT: Localized<{
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  addressHeading: string;
  phoneLabel: string;
  directions: string;
  serviceArea: string;
  includeHeading: string;
  includeList: string[];
  moreHeading: string;
  moreText: string;
}> = {
  es: {
    title: "Contacto y cotizaciones | Kyotex Guadalajara",
    description:
      "Cotiza adhesivos y maquinaria para calzado con Kyotex-Terlan Norteamérica: Calle 4 No. 2710-B, Colón Industrial, Guadalajara, Jalisco. Tel. +52 33 3645 0272.",
    eyebrow: "Contacto",
    h1: "Contacto y cotizaciones",
    lead: "Llámanos o escríbenos. Cuéntanos qué materiales unes y a qué volumen, y un especialista de Kyotex se pondrá en contacto.",
    addressHeading: "Dónde estamos",
    phoneLabel: "Teléfono",
    directions: "Cómo llegar",
    serviceArea:
      "Atendemos a fabricantes de calzado y marroquinería de todo México —incluidos León, Guanajuato, y Guadalajara, Jalisco—, de Estados Unidos y de Canadá.",
    includeHeading: "Qué incluir en tu solicitud",
    includeList: [
      "Qué fabricas: calzado, plantillas o artículos de marroquinería.",
      "Los materiales que unes y si toleran calor.",
      "Tu volumen de producción.",
      "Cómo pegas hoy y qué te gustaría mejorar.",
    ],
    moreHeading: "Antes de escribir",
    moreText:
      "Si quieres comparar opciones primero, revisa los [sistemas Kyotex](/sistemas), las [aplicaciones](/aplicaciones) o las [preguntas frecuentes](/preguntas-frecuentes).",
  },
  en: {
    title: "Contact & Request a Quote | Kyotex North America",
    description:
      "Request a quote for footwear adhesives and shoe machinery from Kyotex-Terlan Norteamérica in Guadalajara, Mexico. Serving the US and Canada. +52 33 3645 0272.",
    eyebrow: "Contact",
    h1: "Contact us and request a quote",
    lead: "Call or write to us. Tell us what you bond and at what volume, and a Kyotex specialist will get in touch.",
    addressHeading: "Where we are",
    phoneLabel: "Phone",
    directions: "Get directions",
    serviceArea:
      "We work with footwear and leather goods manufacturers in the United States, Canada and Mexico.",
    includeHeading: "What to include in your request",
    includeList: [
      "What you make: footwear, insoles or leather goods.",
      "The materials you bond and whether they can take heat.",
      "Your production volume.",
      "How you bond today and what you'd like to improve.",
    ],
    moreHeading: "Before you write",
    moreText:
      "Want to compare options first? Browse [Kyotex systems](/en/systems), [applications](/en/applications) or the [FAQ](/en/faq).",
  },
};
