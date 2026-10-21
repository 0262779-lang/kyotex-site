// Contenido de los cuatro sistemas Kyotex. Fuentes: lo que ya decía el sitio y lo
// que publican ALC y Kyotex (alcgruppo.com/en/brands/kyotex, kyotex.it, kyotexthermo.com).
// Sin datos técnicos, cifras ni certificaciones que no estén publicados.
import type { Localized } from "@/lib/i18n";
import type { Section } from "@/components/RichText";
import type { ImageKey } from "@/content/images";
import type { ApplicationId, GuideId, SystemSlug } from "@/content/routes";

export type SystemCopy = {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  cardTitle: string;
  cardText: string;
  cardCta: string;
  imageCaption?: string;
  schemaCategory: string;
  sections: Section[];
};

export type SystemEntry = {
  code: string;
  image?: ImageKey;
  ogImage: ImageKey;
  related: { applications: ApplicationId[]; guides: GuideId[]; systems: SystemSlug[] };
  copy: Localized<SystemCopy>;
};

export const SYSTEMS: Record<SystemSlug, SystemEntry> = {
  "k-system": {
    code: "K System",
    image: "insoleTape",
    ogImage: "insoleTape",
    related: {
      applications: ["insole", "leather"],
      guides: ["insoling", "psa", "solvents"],
      systems: ["k-thermo", "k-next"],
    },
    copy: {
      es: {
        title: "K System: cinta autoadhesiva PSA para plantillas | Kyotex",
        description:
          "K System de Kyotex: adhesivos sólidos en frío que se activan por presión, en cinta autoadhesiva para emplantillado sin solventes, sin hornos ni llama abierta.",
        eyebrow: "K System · Adhesivos PSA",
        h1: "K System: cinta autoadhesiva para plantillas y marroquinería",
        lead: "K System es el sistema de soluciones que ALC diseñó en el sector de los adhesivos sensibles a la presión (PSA): adhesivos sólidos en frío que se activan por presión, creados para fabricantes de calzado y marroquinería que quieren trabajar sin solventes.",
        cardTitle: "Cintas autoadhesivas",
        cardText:
          "Sistemas de cinta PSA autoadhesiva para un emplantillado limpio e instantáneo — sin hornos, sin llama abierta, sin evaporación de solventes.",
        cardCta: "Conocer K System",
        imageCaption:
          "Máquina Kyotex System con cinta adhesiva PSA; las siluetas impresas muestran dónde va cada plantilla.",
        schemaCategory: "Adhesivos sensibles a la presión (PSA) para calzado y marroquinería",
        sections: [
          {
            heading: "Qué es K System",
            blocks: [
              "K System es una de las cuatro unidades de negocio de Kyotex, la marca de ALC para calzado y marroquinería. Reúne adhesivos sensibles a la presión —conocidos como PSA, por sus siglas en inglés— que llegan a la planta en estado sólido, normalmente en cinta, y forman la unión cuando se aplica presión.",
              "Como la capa adhesiva ya está lista para usarse, el emplantillado se vuelve limpio e instantáneo: **sin hornos, sin llama abierta y sin evaporación de solventes** en la línea. Es una de las formas más directas de tener un adhesivo sin solventes para calzado.",
            ],
          },
          {
            heading: "Cómo funciona la unión por presión",
            blocks: [
              "Con un pegamento base solvente, el adhesivo se aplica líquido y hay que esperar a que el solvente se evapore antes de unir las piezas. Con un adhesivo PSA ese paso no existe: la película adhesiva ya está formada y basta con la presión para que las superficies queden unidas.",
              "Por eso ALC describe la unión con cintas adhesivas como una forma de introducir en el calzado y la marroquinería nuevos conceptos de producción basados en la eficiencia, la sostenibilidad ambiental y el respeto por la salud de los trabajadores.",
              "Si quieres entender el principio a detalle, lee la guía [qué es un adhesivo PSA y cómo se usa en calzado](/guias/que-es-un-adhesivo-psa-y-como-se-usa-en-calzado).",
            ],
          },
          {
            heading: "Dónde se usa",
            blocks: [
              {
                list: [
                  "**Emplantillado sin solventes:** cinta autoadhesiva para plantillas que sustituye al pegamento líquido. Más información en [emplantillado sin solventes](/aplicaciones/emplantillado-sin-solventes).",
                  "**Marroquinería:** adhesivos PSA Kyotex para artículos de piel, incluidas piezas de tamaño mediano y grande. Más información en [adhesivos para marroquinería](/aplicaciones/marroquineria).",
                  "**Procesos en frío:** cuando el material no debe calentarse. Más información en la guía de [emplantillado en frío](/guias/emplantillado-en-frio-que-es-y-cuando-conviene).",
                ],
              },
            ],
          },
          {
            heading: "Maquinaria para aplicar K System",
            blocks: [
              "Los adhesivos PSA se aplican con equipos Kyo diseñados junto con ellos:",
              {
                list: [
                  "**KYO100S:** máquina neumática para la aplicación autoalineada de adhesivos PSA Kyotex de hasta 145 mm de ancho.",
                  "**KYO500:** máquina para aplicar, en marroquinería, adhesivos PSA Kyotex de tamaño mediano y grande.",
                ],
              },
              "Conoce todos los equipos en [maquinaria para calzado](/maquinaria).",
            ],
          },
          {
            heading: "Qué necesitamos para recomendarte una cinta",
            blocks: [
              "Cada línea es distinta. Para sugerirte el adhesivo y el equipo adecuados nos ayuda saber:",
              {
                list: [
                  "Qué materiales vas a unir y en qué parte del calzado o del artículo.",
                  "Tu volumen de producción.",
                  "Cómo emplantillas hoy y qué te gustaría mejorar.",
                  "Si tu proceso admite calor o debe hacerse en frío.",
                ],
              },
            ],
          },
        ],
      },
      en: {
        title: "K System Insole Adhesive Tape (PSA) | Kyotex North America",
        description:
          "K System by Kyotex: solid, pressure-activated cold adhesives supplied as insole adhesive tape for solvent-free bonding, with no ovens and no open flames.",
        eyebrow: "K System · Pressure-sensitive adhesives",
        h1: "K System: pressure-sensitive insole adhesive tape",
        lead: "K System is ALC's family of pressure-sensitive adhesive (PSA) solutions: solid cold adhesives that activate under pressure, built for footwear and leather goods manufacturers that want to take solvents out of the bonding step.",
        cardTitle: "Pressure-sensitive tapes",
        cardText:
          "PSA tape systems for clean, immediate insole bonding — no ovens, no open flames and no solvent flash-off.",
        cardCta: "Explore K System",
        imageCaption:
          "Kyotex System machine running PSA tape; the printed outlines show where each insole goes.",
        schemaCategory: "Pressure-sensitive adhesives (PSA) for footwear and leather goods",
        sections: [
          {
            heading: "What K System is",
            blocks: [
              "K System is one of the four Kyotex business units — Kyotex being ALC's brand for footwear and leather goods. Its pressure-sensitive adhesives arrive at the plant as a solid, usually on tape, and create the bond when pressure is applied.",
              "Because the adhesive layer is ready to use, insole bonding becomes clean and immediate: **no ovens, no open flames and no solvent flash-off** on the line. For many plants it is the most direct route to a solvent-free shoe adhesive.",
            ],
          },
          {
            heading: "How pressure-sensitive bonding works",
            blocks: [
              "With a solvent-based shoe cement, the adhesive goes on wet and the solvent has to flash off before the parts can be joined. A PSA skips that step entirely: the adhesive film is already formed, and pressure alone joins the surfaces.",
              "ALC describes tape-based bonding as a way to bring production concepts built on efficiency, environmental sustainability and respect for workers' health into footwear and leather goods manufacturing.",
              "For the full background, read [what a PSA adhesive is and how it is used in footwear](/en/guides/what-is-a-psa-adhesive-in-footwear).",
            ],
          },
          {
            heading: "Where it fits",
            blocks: [
              {
                list: [
                  "**Solvent-free insole bonding:** insole adhesive tape that replaces wet cement. See [solvent-free insole bonding](/en/applications/solvent-free-insole-bonding).",
                  "**Leather goods:** Kyotex PSA adhesives for leather goods, including medium and large parts. See [leather goods adhesives](/en/applications/leather-goods).",
                  "**Cold processes:** when the material shouldn't be heated. See the guide to [cold insole bonding](/en/guides/cold-insole-bonding-what-it-is-and-when-to-use-it).",
                ],
              },
            ],
          },
          {
            heading: "Machinery for K System",
            blocks: [
              "Kyotex PSA adhesives are applied with Kyo equipment designed alongside them:",
              {
                list: [
                  "**KYO100S:** a pneumatic machine for the self-aligning application of Kyotex PSA adhesives up to 145 mm wide.",
                  "**KYO500:** a machine for applying medium and large Kyotex PSA adhesives in leather goods.",
                ],
              },
              "See the full lineup on our [shoe machinery](/en/machinery) page.",
            ],
          },
          {
            heading: "What we need to recommend a tape",
            blocks: [
              "Every line is different. To suggest the right adhesive and equipment, it helps to know:",
              {
                list: [
                  "Which materials you are bonding, and where in the shoe or product.",
                  "Your production volume.",
                  "How you bond insoles today and what you want to improve.",
                  "Whether your process can use heat or has to stay cold.",
                ],
              },
            ],
          },
        ],
      },
    },
  },

  "k-thermo": {
    code: "K Thermo",
    ogImage: "heroPoster",
    related: {
      applications: ["insole", "lamination", "leather"],
      guides: ["hotmeltTypes", "hotmelt", "voc"],
      systems: ["k-next", "k-system"],
    },
    copy: {
      es: {
        title: "K Thermo: termoadhesivos y hot melt para calzado | Kyotex",
        description:
          "Termoadhesivos ecológicos K Thermo en granulado, polvo, película, velo y red: unen superficies con calor y presión en calzado, marroquinería y laminado.",
        eyebrow: "K Thermo · Termoadhesivos",
        h1: "K Thermo: termoadhesivos ecológicos para calzado",
        lead: "K Thermo es la unidad de Kyotex dedicada a los adhesivos que se activan con calor: una gama de termoadhesivos —también llamados hot melt— ecológicos y tecnológicamente avanzados, en distintas presentaciones para cada proceso.",
        cardTitle: "Termoadhesivos ecológicos",
        cardText:
          "Películas adhesivas activadas por calor, diseñadas para reducir las emisiones de COV en línea sin sacrificar la fuerza de unión.",
        cardCta: "Conocer K Thermo",
        schemaCategory: "Termoadhesivos (hot melt) para calzado y marroquinería",
        sections: [
          {
            heading: "Qué es un termoadhesivo",
            blocks: [
              "Un termoadhesivo es un polímero termoplástico que se funde con calor, se prensa sobre las piezas y, al enfriarse, deja la unión formada. Kyotex lo resume en tres pasos: fundir, prensar y enfriar.",
              "A diferencia de un pegamento base solvente, no depende de que un solvente se evapore para trabajar. Por eso los termoadhesivos para calzado son una de las vías para reducir las emisiones de compuestos orgánicos volátiles (COV) en línea sin sacrificar la fuerza de unión.",
              "Compara ambos métodos en la guía [termoadhesivo vs pegamento base solvente](/guias/termoadhesivo-vs-pegamento-base-solvente-en-calzado).",
            ],
          },
          {
            heading: "Presentaciones de K Thermo",
            blocks: [
              "Los termoadhesivos K Thermo se ofrecen en cinco formas. Todas unen superficies mediante calor y presión:",
              {
                list: [
                  "**Granulado.**",
                  "**Polvo.**",
                  "**Película.**",
                  "**Velo**, una malla fina de fibras adhesivas.",
                  "**Red**, una malla abierta.",
                ],
              },
              "La presentación correcta depende de tu equipo, de los materiales y de cómo debe repartirse el adhesivo sobre la pieza.",
            ],
          },
          {
            heading: "Polvos termoadhesivos",
            blocks: [
              "Dentro de la gama de polvos, Kyotex trabaja con distintos polímeros: **TPU, PES, PBS** —una opción biodegradable— y **EVA**.",
              "Según Kyotex, el emplantillado es donde el polvo termoadhesivo alcanza su máxima expresión. El EVA en polvo, además, se usa en grandes volúmenes en piel, calzado, filtración, artículos de viaje y alfombras.",
            ],
          },
          {
            heading: "Aplicaciones del hot melt para calzado",
            blocks: [
              {
                list: [
                  "[Emplantillado sin solventes](/aplicaciones/emplantillado-sin-solventes), con polvo o película termoadhesiva.",
                  "[Laminado](/aplicaciones/laminado) de materiales con película, velo, red o polvo.",
                  "[Marroquinería](/aplicaciones/marroquineria), para unir piel y otros materiales.",
                ],
              },
            ],
          },
          {
            heading: "Cómo elegir la presentación",
            blocks: [
              "Para recomendarte una presentación necesitamos conocer tus materiales, la temperatura que toleran, el equipo de prensado que usas y tu volumen de producción.",
              "Si tu material no puede calentarse, revisa [K Next](/sistemas/k-next) o [K System](/sistemas/k-system).",
            ],
          },
        ],
      },
      en: {
        title: "K Thermo Hot Melt Adhesive for Footwear | Kyotex",
        description:
          "Eco-friendly K Thermo hot melt adhesives in granule, powder, film, web and net form that bond with heat and pressure in footwear, leather goods and lamination.",
        eyebrow: "K Thermo · Hot melt adhesives",
        h1: "K Thermo: hot melt adhesive for footwear",
        lead: "K Thermo is the Kyotex unit for heat-activated adhesives: a range of eco-friendly, technologically advanced hot melt adhesives in several formats, so each process gets the form that suits it.",
        cardTitle: "Eco-friendly hot melts",
        cardText:
          "Heat-activated adhesive films designed to cut VOC emissions on the line without giving up bond strength.",
        cardCta: "Explore K Thermo",
        schemaCategory: "Hot melt adhesives for footwear and leather goods",
        sections: [
          {
            heading: "What a hot melt adhesive is",
            blocks: [
              "A hot melt adhesive is a thermoplastic polymer that melts with heat, is pressed onto the parts and forms the bond as it cools. Kyotex sums it up in three steps: melt, press, cool.",
              "Unlike a solvent-based shoe cement, it doesn't rely on a solvent flashing off. That makes hot melt adhesive for footwear one of the main ways to cut volatile organic compound (VOC) emissions on the line while keeping bond strength.",
              "See the side-by-side comparison in [hot melt vs. solvent-based shoe adhesive](/en/guides/hot-melt-vs-solvent-based-shoe-adhesive).",
            ],
          },
          {
            heading: "K Thermo formats",
            blocks: [
              "K Thermo hot melts come in five forms, all of which bond surfaces with heat and pressure:",
              {
                list: [
                  "**Granules.**",
                  "**Powder.**",
                  "**Film.**",
                  "**Web**, a fine mesh of adhesive fibers.",
                  "**Net**, an open mesh.",
                ],
              },
              "The right format depends on your equipment, your materials and how the adhesive needs to be spread across the part.",
            ],
          },
          {
            heading: "Hot melt powders",
            blocks: [
              "Within the powder range, Kyotex works with several polymers: **TPU, PES, PBS** — a biodegradable option — and **EVA**.",
              "According to Kyotex, insole bonding is where powder hot melts show what they can do best. EVA powder is also used in large volumes in leather, footwear, filtration, luggage and carpet manufacturing.",
            ],
          },
          {
            heading: "Where hot melts fit",
            blocks: [
              {
                list: [
                  "[Solvent-free insole bonding](/en/applications/solvent-free-insole-bonding) with powder or film.",
                  "[Lamination](/en/applications/lamination) with film, web, net or powder.",
                  "[Leather goods](/en/applications/leather-goods), bonding leather and other materials.",
                ],
              },
            ],
          },
          {
            heading: "Choosing a format",
            blocks: [
              "To recommend a format, we need to know your materials, the temperature they can take, the press you run and your production volume.",
              "If your material can't be heated, look at [K Next](/en/systems/k-next) or [K System](/en/systems/k-system).",
            ],
          },
        ],
      },
    },
  },

  "k-next": {
    code: "K Next",
    ogImage: "heroPoster",
    related: {
      applications: ["insole", "leather"],
      guides: ["cold", "materials", "solvents"],
      systems: ["k-thermo", "k-system"],
    },
    copy: {
      es: {
        title: "K Next: unión en frío con fuerza de termoadhesivo | Kyotex",
        description:
          "K Next, de Kyotex: unión estructural con la fuerza de un hot melt para productos que no pueden calentarse. Emplantillado en frío y sin solventes.",
        eyebrow: "K Next · Unión en frío",
        h1: "K Next: emplantillado en frío con fuerza de termoadhesivo",
        lead: "K Next nació para todos los productos que necesitan la fuerza de un termoadhesivo pero que no se pueden calentar. ALC comenzó a producirlo en 2024 y es la unidad más reciente de Kyotex.",
        cardTitle: "Tecnología de emplantillado en frío",
        cardText:
          "La fuerza de adhesión de un termoadhesivo, aplicada sin calor directo — pensada para células de alto rendimiento.",
        cardCta: "Conocer K Next",
        schemaCategory: "Adhesivos estructurales en frío para calzado",
        sections: [
          {
            heading: "Para qué sirve K Next",
            blocks: [
              "Hay piezas que necesitan una unión estructural, como la que da un adhesivo hot melt, pero que no deben someterse a fuentes de calor. K Next cubre ese hueco: ofrece la fuerza de adhesión de un termoadhesivo aplicada sin calor directo.",
              "Es una tecnología de emplantillado en frío pensada para células de producción de alto rendimiento, que además mantiene el proceso libre de solventes. En la feria Simac 2025, ALC la presentó como una cinta adhesiva a base de poliuretano para uniones estructurales.",
            ],
          },
          {
            heading: "En qué se diferencia de K Thermo y K System",
            blocks: [
              {
                list: [
                  "**[K Thermo](/sistemas/k-thermo)** usa calor y presión para fundir el adhesivo y unir; es la opción cuando el material tolera la temperatura.",
                  "**[K System](/sistemas/k-system)** usa adhesivos PSA que unen solo con presión, normalmente en cinta.",
                  "**K Next** busca la fuerza de un termoadhesivo sin el paso de calentamiento.",
                ],
              },
              "Los tres evitan los solventes en la unión; la diferencia está en cómo se activa el adhesivo y en qué tolera tu material.",
            ],
          },
          {
            heading: "Cuándo conviene",
            blocks: [
              {
                list: [
                  "Cuando el material es sensible al calor.",
                  "Cuando quieres un proceso sin prensas térmicas.",
                  "Cuando buscas una unión estructural sin solventes.",
                ],
              },
              "Lo explicamos con más calma en la guía [emplantillado en frío: qué es y cuándo conviene](/guias/emplantillado-en-frio-que-es-y-cuando-conviene).",
            ],
          },
          {
            heading: "Cómo empezar con K Next",
            blocks: [
              "K Next es una línea nueva. Escríbenos con tus materiales y tu proceso actual para revisar si se ajusta a tu producción y qué presentaciones están disponibles.",
            ],
          },
        ],
      },
      en: {
        title: "K Next: Cold Bonding with Hot Melt Strength | Kyotex",
        description:
          "K Next is the Kyotex line for products that need the structural bond of a hot melt adhesive but can't be exposed to heat. Solvent-free cold insole bonding.",
        eyebrow: "K Next · Cold bonding",
        h1: "K Next: cold insole bonding with hot melt strength",
        lead: "K Next was created for every product that needs the strength of a hot melt adhesive but can't be heated. ALC started producing it in 2024, making it the newest Kyotex unit.",
        cardTitle: "Cold bonding technology",
        cardText:
          "The bond strength of a hot melt, applied without direct heat — built for high-output production cells.",
        cardCta: "Explore K Next",
        schemaCategory: "Cold structural adhesives for footwear",
        sections: [
          {
            heading: "What K Next is for",
            blocks: [
              "Some parts need a structural bond, like the one a hot melt adhesive gives, but shouldn't be exposed to heat sources. K Next fills that gap: the bond strength of a hot melt, applied without direct heat.",
              "It is a cold insole bonding technology built for high-output production cells, and it keeps the process solvent-free. At the Simac 2025 trade show, ALC presented it as a polyurethane-based adhesive tape for structural bonding.",
            ],
          },
          {
            heading: "How it compares with K Thermo and K System",
            blocks: [
              {
                list: [
                  "**[K Thermo](/en/systems/k-thermo)** uses heat and pressure to melt the adhesive and bond; it's the choice when the material can take the temperature.",
                  "**[K System](/en/systems/k-system)** uses pressure-sensitive adhesives that bond with pressure alone, usually on tape.",
                  "**K Next** aims for hot melt strength without the heating step.",
                ],
              },
              "All three keep solvents out of the bond; what changes is how the adhesive is activated and what your material can tolerate.",
            ],
          },
          {
            heading: "When it makes sense",
            blocks: [
              {
                list: [
                  "When the material is heat-sensitive.",
                  "When you want a process without heated presses.",
                  "When you need a structural bond without solvents.",
                ],
              },
              "We go deeper in [cold insole bonding: what it is and when to use it](/en/guides/cold-insole-bonding-what-it-is-and-when-to-use-it).",
            ],
          },
          {
            heading: "Getting started with K Next",
            blocks: [
              "K Next is a new line. Send us your materials and current process, and we'll check whether it fits your production and which formats are available.",
            ],
          },
        ],
      },
    },
  },

  "k-pads": {
    code: "K Pads",
    ogImage: "heroPoster",
    related: {
      applications: ["leather", "insole"],
      guides: ["reinforcements", "voc", "solvents"],
      systems: ["k-thermo", "k-system"],
    },
    copy: {
      es: {
        title: "K Pads: punteras y contrafuertes para calzado | Kyotex",
        description:
          "K Pads desarrolla refuerzos para calzado y marroquinería —punteras, contrafuertes de fibra de cuero y microfibras— con adhesivos Kyotex sin solventes ni COV.",
        eyebrow: "K Pads · Refuerzos",
        h1: "K Pads: refuerzos para calzado y marroquinería",
        lead: "K Pads es la unidad de Kyotex que desarrolla soportes de refuerzo para el calzado y la marroquinería: punteras, contrafuertes de fibra de cuero, microfibras y más.",
        cardTitle: "Almohadillas de refuerzo",
        cardText:
          "Insertos de soporte estructural para marroquinería y componentes de calzado que necesitan mantener su forma con el tiempo.",
        cardCta: "Conocer K Pads",
        schemaCategory: "Refuerzos para calzado: punteras y contrafuertes",
        sections: [
          {
            heading: "Qué son los refuerzos K Pads",
            blocks: [
              "Son insertos de soporte estructural para componentes de calzado y artículos de marroquinería que necesitan mantener su forma con el tiempo. En el calzado, por ejemplo, la puntera da forma a la punta y el contrafuerte sostiene el talón.",
            ],
          },
          {
            heading: "Materiales sin solventes",
            blocks: [
              "Los refuerzos K Pads se hacen con materiales naturales y reciclados tratados con los termoadhesivos (hot melt) o los adhesivos en frío de Kyotex. Según Kyotex, este tratamiento garantiza la ausencia de solventes y de compuestos orgánicos volátiles (COV).",
            ],
          },
          {
            heading: "Tipos de refuerzo",
            blocks: [
              {
                list: [
                  "**Punteras.**",
                  "**Contrafuertes de fibra de cuero.**",
                  "**Microfibras.**",
                ],
              },
              "La gama incluye otros soportes; pregúntanos por el que necesitas.",
            ],
          },
          {
            heading: "Cómo encajan con el resto del sistema",
            blocks: [
              "Como vienen tratados con adhesivos Kyotex, los refuerzos K Pads se suman a un proceso sin solventes junto con [K Thermo](/sistemas/k-thermo) y [K System](/sistemas/k-system).",
              "Si estás revisando todo tu proceso, empieza por la guía [cómo reducir emisiones de COV en una fábrica de calzado](/guias/como-reducir-emisiones-de-cov-en-una-fabrica-de-calzado).",
            ],
          },
        ],
      },
      en: {
        title: "K Pads Toe Puffs & Counters for Footwear | Kyotex",
        description:
          "K Pads makes reinforcements for footwear and leather goods — toe puffs, leather fiber counters and microfibers — treated with solvent-free Kyotex adhesives.",
        eyebrow: "K Pads · Reinforcements",
        h1: "K Pads: toe puffs, counters and reinforcements",
        lead: "K Pads is the Kyotex unit that develops reinforcement supports for footwear and leather goods: toe puffs, leather fiber counters, microfibers and more.",
        cardTitle: "Reinforcement pads",
        cardText:
          "Structural support inserts for leather goods and footwear components that need to hold their shape over time.",
        cardCta: "Explore K Pads",
        schemaCategory: "Footwear reinforcements: toe puffs and counters",
        sections: [
          {
            heading: "What K Pads reinforcements are",
            blocks: [
              "They are structural support inserts for footwear components and leather goods that need to hold their shape over time. In a shoe, for example, the toe puff shapes the toe box and the counter supports the heel.",
            ],
          },
          {
            heading: "Solvent-free materials",
            blocks: [
              "K Pads reinforcements use natural and recycled materials treated with Kyotex hot melt or cold adhesives. According to Kyotex, that treatment ensures they contain no solvents and no volatile organic compounds (VOCs).",
            ],
          },
          {
            heading: "Types of reinforcement",
            blocks: [
              {
                list: ["**Toe puffs.**", "**Leather fiber counters.**", "**Microfibers.**"],
              },
              "The range includes other supports too — ask us about the one you need.",
            ],
          },
          {
            heading: "How they fit the rest of the system",
            blocks: [
              "Because they come pre-treated with Kyotex adhesives, K Pads reinforcements slot into a solvent-free process alongside [K Thermo](/en/systems/k-thermo) and [K System](/en/systems/k-system).",
              "If you're reviewing your whole process, start with [how to reduce VOC emissions in a shoe factory](/en/guides/how-to-reduce-voc-emissions-in-a-shoe-factory).",
            ],
          },
        ],
      },
    },
  },
};
