// Contenido de las páginas de aplicación. Fuentes: lo que ya decía el sitio y lo
// que publican ALC y Kyotex (alcgruppo.com/en/brands/kyotex, kyotex.it/en/catalogues,
// kyotexthermo.com/powder.php y la nota de ALC sobre la feria Simac 2025).
import type { Localized } from "@/lib/i18n";
import type { Section } from "@/components/RichText";
import type { ImageKey } from "@/content/images";
import type { ApplicationId, GuideId, SystemSlug } from "@/content/routes";

export type ApplicationCopy = {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  cardTitle: string;
  cardText: string;
  cardCta: string;
  imageCaption?: string;
  sections: Section[];
};

export type ApplicationEntry = {
  image: ImageKey;
  related: { systems: SystemSlug[]; guides: GuideId[] };
  copy: Localized<ApplicationCopy>;
};

export const APPLICATION_IDS: readonly ApplicationId[] = ["insole", "leather", "lamination"];

export const APPLICATIONS: Record<ApplicationId, ApplicationEntry> = {
  insole: {
    image: "insoleTape",
    related: {
      systems: ["k-system", "k-thermo", "k-next"],
      guides: ["solvents", "cold", "psa"],
    },
    copy: {
      es: {
        title: "Emplantillado sin solventes para calzado | Kyotex",
        description:
          "Emplantillado sin solventes con cinta autoadhesiva para plantillas (PSA), termoadhesivo en polvo o película y unión en frío. Kyotex en Guadalajara, Jalisco.",
        eyebrow: "Aplicación · Emplantillado",
        h1: "Emplantillado sin solventes: cinta, termoadhesivo o en frío",
        lead: "La plantilla se puede unir sin pegamento base solvente con tres tecnologías Kyotex: cinta autoadhesiva PSA, termoadhesivo en polvo o película y la línea en frío K Next. Te ayudamos a elegir la que mejor encaja en tu línea.",
        cardTitle: "Emplantillado sin solventes",
        cardText:
          "Cinta autoadhesiva para plantillas, termoadhesivo o unión en frío: tres formas de emplantillar sin evaporar solventes en la línea.",
        cardCta: "Ver opciones de emplantillado",
        imageCaption:
          "Cinta adhesiva PSA en una máquina Kyotex System; cada silueta impresa corresponde a una plantilla.",
        sections: [
          {
            heading: "Por qué quitar el solvente del emplantillado",
            blocks: [
              "En el método tradicional, el pegamento se aplica líquido sobre la plantilla o dentro del zapato y hay que esperar a que el solvente se evapore antes de presionar. Ese solvente termina en el aire de la planta en forma de compuestos orgánicos volátiles (COV), obliga a ventilar el área y alarga cada ciclo.",
              "Kyotex propone lo contrario: un emplantillado limpio e instantáneo, **sin hornos, sin llama abierta y sin evaporación de solventes**. Como el emplantillado se repite en cada par, suele ser un buen primer paso para usar adhesivos ecológicos en toda la línea.",
            ],
          },
          {
            heading: "Tres caminos para un emplantillado sin solventes",
            blocks: [
              { h3: "1. Cinta autoadhesiva para plantillas (K System)" },
              "Los adhesivos PSA de [K System](/sistemas/k-system) son sólidos, trabajan en frío y se activan por presión. La cinta se aplica sobre el material y, al emplantillar, basta con colocar la plantilla y presionar. Como el adhesivo ya está formado, se puede aplicar hoy y usar después.",
              { h3: "2. Termoadhesivo en polvo o película (K Thermo)" },
              "Los termoadhesivos de [K Thermo](/sistemas/k-thermo) se funden con calor, se prensan y forman la unión al enfriarse. Según Kyotex, el emplantillado es donde el termoadhesivo en polvo alcanza su máxima expresión; la gama de polvos incluye TPU, PES, PBS —una opción biodegradable— y EVA.",
              { h3: "3. Emplantillado en frío (K Next)" },
              "[K Next](/sistemas/k-next) está pensado para piezas que necesitan la fuerza de un termoadhesivo pero no pueden calentarse. ALC lo presentó como una cinta adhesiva a base de poliuretano para uniones estructurales.",
            ],
          },
          {
            heading: "Cómo elegir la tecnología correcta",
            blocks: [
              "No hay una opción mejor para todos. La decisión depende sobre todo de cuatro preguntas:",
              {
                list: [
                  "**¿Tu material tolera el calor?** Si no, la elección está entre K System y K Next.",
                  "**¿Ya tienes prensas térmicas?** Si las tienes, un termoadhesivo puede aprovecharlas.",
                  "**¿Qué tan fuerte debe ser la unión?** Una plantilla de confort no exige lo mismo que una unión estructural.",
                  "**¿Cuál es tu volumen?** El equipo de aplicación se elige según la cantidad de pares por turno.",
                ],
              },
              "Lo explicamos paso a paso en la guía [cómo eliminar solventes en el emplantillado de calzado](/guias/como-eliminar-solventes-en-el-emplantillado-de-calzado) y, si tu proceso debe ser sin calor, en [emplantillado en frío: qué es y cuándo conviene](/guias/emplantillado-en-frio-que-es-y-cuando-conviene).",
            ],
          },
          {
            heading: "Maquinaria para aplicar la cinta",
            blocks: [
              "Para aplicar cinta autoadhesiva Kyotex se usan dos equipos Kyo:",
              {
                list: [
                  "**KYO100S:** máquina neumática para la aplicación autoalineada de adhesivos PSA Kyotex de hasta 145 mm de ancho.",
                  "**KYO101:** máquina con control electrónico para la aplicación autoalineada de adhesivos PSA Kyotex de hasta 145 mm de ancho.",
                ],
              },
              "Ambas se diseñan junto con el adhesivo, así que el sistema se calibra como uno solo. Conoce todos los equipos en [maquinaria para calzado](/maquinaria).",
            ],
          },
          {
            heading: "Proveedor en Guadalajara, Jalisco, para todo México",
            blocks: [
              "Kyotex-Terlan Norteamérica está en Guadalajara, Jalisco, y atiende a fabricantes de calzado de León, Guanajuato, del resto de México, de Estados Unidos y de Canadá.",
              "Cuéntanos qué plantillas fabricas, con qué materiales y a qué volumen, y un especialista de Kyotex te enviará una recomendación. Puedes [solicitar una cotización](/contacto#cotizar) o revisar las [preguntas frecuentes](/preguntas-frecuentes).",
            ],
          },
        ],
      },
      en: {
        title: "Solvent-Free Insole Bonding for Footwear | Kyotex",
        description:
          "Bond insoles without solvent cement: pressure-sensitive insole adhesive tape, hot melt powder or film, and cold bonding technology from Kyotex.",
        eyebrow: "Application · Insole bonding",
        h1: "Solvent-free insole bonding: tape, hot melt or cold",
        lead: "Kyotex offers three ways to bond insoles without solvent-based shoe cement: pressure-sensitive insole adhesive tape, hot melt powder or film, and the K Next cold line. We'll help you choose the one that fits your line.",
        cardTitle: "Solvent-free insole bonding",
        cardText:
          "Insole adhesive tape, hot melt or cold bonding: three ways to bond insoles without solvent flash-off on the line.",
        cardCta: "Compare insole bonding options",
        imageCaption:
          "PSA adhesive tape on a Kyotex System machine; each printed outline is one insole.",
        sections: [
          {
            heading: "Why take solvents out of insole bonding",
            blocks: [
              "With conventional shoe cement, the adhesive is brushed or sprayed on wet, and operators wait for the solvent to flash off before pressing. That solvent ends up in the plant air as volatile organic compounds (VOCs), drives ventilation requirements and adds time to every cycle.",
              "Kyotex takes the opposite approach: clean, immediate insole bonding with **no ovens, no open flames and no solvent flash-off**. Because insole bonding happens on every pair, it's a practical first step toward eco-friendly adhesives across the whole line.",
            ],
          },
          {
            heading: "Three routes to solvent-free insole bonding",
            blocks: [
              { h3: "1. Insole adhesive tape (K System)" },
              "[K System](/en/systems/k-system) pressure-sensitive adhesives are solid, work cold and activate under pressure. The tape is applied to the material ahead of time; at the bonding station, operators place the insole and press. Because the adhesive film is already formed, it can be applied today and bonded later.",
              { h3: "2. Hot melt powder or film (K Thermo)" },
              "[K Thermo](/en/systems/k-thermo) hot melt adhesives melt with heat, are pressed and set as they cool. According to Kyotex, insole bonding is where powder hot melts perform at their best; the powder range includes TPU, PES, PBS — a biodegradable option — and EVA.",
              { h3: "3. Cold insole bonding (K Next)" },
              "[K Next](/en/systems/k-next) is designed for parts that need hot melt strength but can't be heated. ALC introduced it as a polyurethane-based adhesive tape for structural bonding.",
            ],
          },
          {
            heading: "Choosing the right technology",
            blocks: [
              "There's no single best option. The decision usually comes down to four questions:",
              {
                list: [
                  "**Can your material take heat?** If not, you're choosing between K System and K Next.",
                  "**Do you already run heated presses?** If so, a hot melt can put them to use.",
                  "**How strong does the bond need to be?** A comfort sock liner and a structural bond have different requirements.",
                  "**What's your volume?** Application equipment is sized to your pairs per shift.",
                ],
              },
              "We walk through the process in [how to remove solvents from insole bonding](/en/guides/how-to-remove-solvents-from-insole-bonding), and for heat-free processes in [cold insole bonding: what it is and when to use it](/en/guides/cold-insole-bonding-what-it-is-and-when-to-use-it).",
            ],
          },
          {
            heading: "Machinery for applying insole tape",
            blocks: [
              "Kyotex insole adhesive tape is applied with two Kyo machines:",
              {
                list: [
                  "**KYO100S:** a pneumatic machine for self-aligning application of Kyotex PSA adhesives up to 145 mm (about 5.7 in) wide.",
                  "**KYO101:** an electronically controlled machine for self-aligning application of Kyotex PSA adhesives up to 145 mm (about 5.7 in) wide.",
                ],
              },
              "Both are designed together with the adhesive, so the system is calibrated as one unit. See the full lineup on our [shoe machinery](/en/machinery) page.",
            ],
          },
          {
            heading: "Serving the US, Canada and Mexico",
            blocks: [
              "Kyotex-Terlan North America is based in Guadalajara, Mexico, and works with footwear manufacturers in the United States, Canada and Mexico.",
              "Tell us which insoles you make, the materials and your volume, and a Kyotex specialist will send you a recommendation. You can [request a quote](/en/contact#quote) or browse the [FAQ](/en/faq).",
            ],
          },
        ],
      },
    },
  },

  leather: {
    image: "kyo101",
    related: {
      systems: ["k-system", "k-thermo", "k-pads"],
      guides: ["psa", "hotmelt"],
    },
    copy: {
      es: {
        title: "Adhesivos para marroquinería sin solventes | Kyotex",
        description:
          "Adhesivos para marroquinería de Kyotex: cintas PSA, termoadhesivos y refuerzos K Pads, con máquinas como la KYO500 para piezas medianas y grandes de piel.",
        eyebrow: "Aplicación · Marroquinería",
        h1: "Adhesivos para marroquinería: cintas PSA, termoadhesivos y refuerzos",
        lead: "Bolsos, carteras, cinturones y otros artículos de piel se pueden armar con adhesivos Kyotex sin solventes: cintas autoadhesivas PSA, termoadhesivos y refuerzos listos para usar.",
        cardTitle: "Adhesivos para marroquinería",
        cardText:
          "Cintas PSA, termoadhesivos y refuerzos para artículos de piel, con maquinaria para piezas medianas y grandes.",
        cardCta: "Ver adhesivos para marroquinería",
        imageCaption: "Máquina Kyotex KYO101 con rollos de cinta adhesiva PSA.",
        sections: [
          {
            heading: "Kyotex nació para el calzado y la marroquinería",
            blocks: [
              "Desde su origen en 2006, Kyotex desarrolla soluciones, sistemas y productos para el mercado del calzado y la marroquinería. ALC, la empresa detrás de la marca, describe la unión con cintas adhesivas como una forma de llevar a estos sectores conceptos de producción basados en la eficiencia, la sostenibilidad ambiental y el respeto por la salud de los trabajadores.",
            ],
          },
          {
            heading: "Cintas PSA para piezas de piel",
            blocks: [
              "Los adhesivos sensibles a la presión de [K System](/sistemas/k-system) llegan sólidos, en cinta, y unen con presión: sin tiempo de secado y sin solventes que evaporar. Para marroquinería hay equipos específicos:",
              {
                list: [
                  "**KYO500:** máquina para aplicar adhesivos PSA Kyotex de tamaño mediano y grande en marroquinería.",
                  "**Máquina para cierres:** en la feria Simac 2025, ALC presentó un equipo nuevo para aplicar adhesivo en los cierres (zippers) de artículos de marroquinería.",
                ],
              },
              "Si quieres entender cómo funciona este tipo de adhesivo, lee [qué es un adhesivo PSA y cómo se usa en calzado](/guias/que-es-un-adhesivo-psa-y-como-se-usa-en-calzado).",
            ],
          },
          {
            heading: "Termoadhesivos para unir piel y otros materiales",
            blocks: [
              "Los termoadhesivos de [K Thermo](/sistemas/k-thermo) vienen en granulado, polvo, película, velo y red, y unen superficies con calor y presión. Entre los usos que publica Kyotex para sus polvos está la unión de PVC y piel; el EVA en polvo se usa en grandes volúmenes en piel, calzado y artículos de viaje.",
              "Para comparar este método con el pegamento tradicional, revisa [termoadhesivo vs pegamento base solvente](/guias/termoadhesivo-vs-pegamento-base-solvente-en-calzado).",
            ],
          },
          {
            heading: "Refuerzos K Pads",
            blocks: [
              "[K Pads](/sistemas/k-pads) desarrolla soportes de refuerzo para marroquinería y calzado —punteras, contrafuertes de fibra de cuero, microfibras y más— hechos con materiales naturales y reciclados tratados con adhesivos Kyotex. Según Kyotex, ese tratamiento garantiza la ausencia de solventes y de COV.",
            ],
          },
          {
            heading: "Qué necesitamos saber para recomendarte",
            blocks: [
              {
                list: [
                  "Qué artículo fabricas y qué piezas quieres unir.",
                  "Los materiales: piel, sintéticos, textiles o refuerzos.",
                  "El tamaño de las piezas y tu volumen de producción.",
                  "Cómo lo pegas hoy y qué te gustaría mejorar.",
                ],
              },
              "Con esos datos, un especialista de Kyotex te propone el adhesivo y el equipo. [Solicita tu cotización](/contacto#cotizar).",
            ],
          },
        ],
      },
      en: {
        title: "Leather Goods Adhesives, Solvent-Free | Kyotex",
        description:
          "Leather goods adhesives from Kyotex: PSA tapes, hot melts and K Pads reinforcements, plus machines like the KYO500 for medium and large leather parts.",
        eyebrow: "Application · Leather goods",
        h1: "Leather goods adhesives: PSA tapes, hot melts and reinforcements",
        lead: "Handbags, wallets, belts and other leather goods can be assembled with solvent-free Kyotex adhesives: pressure-sensitive tapes, hot melts and ready-to-use reinforcements.",
        cardTitle: "Leather goods adhesives",
        cardText:
          "PSA tapes, hot melts and reinforcements for leather goods, with machinery for medium and large parts.",
        cardCta: "See leather goods adhesives",
        imageCaption: "Kyotex KYO101 machine with rolls of PSA adhesive tape.",
        sections: [
          {
            heading: "Built for footwear and leather goods from day one",
            blocks: [
              "Since its launch in 2006, Kyotex has developed solutions, systems and products for the footwear and leather goods market. ALC, the company behind the brand, describes tape-based bonding as a way to bring production concepts built on efficiency, environmental sustainability and respect for workers' health into these industries.",
            ],
          },
          {
            heading: "PSA tapes for leather parts",
            blocks: [
              "[K System](/en/systems/k-system) pressure-sensitive adhesives arrive solid, on tape, and bond with pressure — no drying time and no solvent to flash off. Leather goods have their own equipment:",
              {
                list: [
                  "**KYO500:** a machine for applying medium and large Kyotex PSA adhesives in leather goods.",
                  "**Zipper machine:** at the Simac 2025 trade show, ALC introduced new equipment for applying adhesive to zippers in leather goods.",
                ],
              },
              "For the basics of this adhesive type, read [what a PSA adhesive is and how it's used in footwear](/en/guides/what-is-a-psa-adhesive-in-footwear).",
            ],
          },
          {
            heading: "Hot melts for leather and other materials",
            blocks: [
              "[K Thermo](/en/systems/k-thermo) hot melt adhesives come as granules, powder, film, web and net, and bond surfaces with heat and pressure. Kyotex lists bonding PVC to leather among the uses of its powders, and EVA powder is used in large volumes in leather, footwear and luggage manufacturing.",
              "To weigh this method against conventional cement, see [hot melt vs. solvent-based shoe adhesive](/en/guides/hot-melt-vs-solvent-based-shoe-adhesive).",
            ],
          },
          {
            heading: "K Pads reinforcements",
            blocks: [
              "[K Pads](/en/systems/k-pads) develops reinforcement supports for leather goods and footwear — toe puffs, leather fiber counters, microfibers and more — made from natural and recycled materials treated with Kyotex adhesives. According to Kyotex, that treatment ensures no solvents and no VOCs.",
            ],
          },
          {
            heading: "What we need to make a recommendation",
            blocks: [
              {
                list: [
                  "The product you make and the parts you need to bond.",
                  "Materials: leather, synthetics, textiles or reinforcements.",
                  "Part size and production volume.",
                  "How you bond them today and what you'd like to improve.",
                ],
              },
              "With that, a Kyotex specialist can suggest the adhesive and the equipment. [Request your quote](/en/contact#quote).",
            ],
          },
        ],
      },
    },
  },

  lamination: {
    image: "components",
    related: {
      systems: ["k-thermo", "k-system"],
      guides: ["hotmelt", "voc"],
    },
    copy: {
      es: {
        title: "Laminado con termoadhesivos: película, velo y red | Kyotex",
        description:
          "Laminado de materiales con termoadhesivos Kyotex en película, velo, red o polvo, que unen con calor y presión y sin solventes, más maquinaria de laminado Kyo.",
        eyebrow: "Aplicación · Laminado",
        h1: "Laminado con termoadhesivos sin solventes",
        lead: "Laminar es unir dos o más capas de material para que trabajen como una sola. Los termoadhesivos K Thermo en película, velo, red o polvo lo hacen con calor y presión, sin solventes que evaporar.",
        cardTitle: "Laminado",
        cardText:
          "Termoadhesivos en película, velo, red o polvo para unir capas de material con calor y presión.",
        cardCta: "Ver opciones de laminado",
        imageCaption:
          "Interior de una máquina Kyotex System: rodillos, engranes y tarjetas electrónicas.",
        sections: [
          {
            heading: "Qué es el laminado y dónde se usa",
            blocks: [
              "En calzado y marroquinería se laminan forros, refuerzos, textiles y materiales sintéticos antes de cortar o armar las piezas. Kyotex publica usos de sus termoadhesivos en polvo que van más allá del calzado: lencería y telas elásticas, automotriz, alfombras, unión de PVC y piel, filtración y artículos de viaje.",
              "Con un adhesivo base solvente, cada capa necesita tiempo de secado. Con un termoadhesivo, el adhesivo se funde, se prensa y la unión se forma al enfriarse.",
            ],
          },
          {
            heading: "Presentaciones para laminar",
            blocks: [
              "Los termoadhesivos de [K Thermo](/sistemas/k-thermo) se ofrecen en cinco formas. Para laminar, las más usadas son:",
              {
                list: [
                  "**Película:** una capa continua de adhesivo.",
                  "**Velo:** una malla fina de fibras adhesivas.",
                  "**Red:** una malla abierta de adhesivo.",
                  "**Polvo:** se esparce sobre el material antes de prensar.",
                ],
              },
              "La diferencia está en cómo se reparte el adhesivo sobre la superficie. La presentación correcta depende de tus materiales y de tu equipo. También hay granulado para otros procesos.",
            ],
          },
          {
            heading: "Polímeros disponibles en polvo",
            blocks: [
              "La gama de polvos termoadhesivos Kyotex incluye **TPU, PES, PBS** —una opción biodegradable— y **EVA**. Cada polímero se elige según los materiales, la temperatura de proceso y el uso final del producto.",
            ],
          },
          {
            heading: "Maquinaria de laminado",
            blocks: [
              "Kyotex ofrece maquinaria automatizada de dosificación y laminado, diseñada para operar sus sistemas adhesivos a velocidad de producción. El adhesivo y la máquina se diseñan en conjunto, así que dosificación, laminado y curado se calibran como un solo sistema. Más información en [maquinaria para calzado](/maquinaria).",
            ],
          },
          {
            heading: "Antes de laminar: qué revisar",
            blocks: [
              {
                list: [
                  "Los materiales de cada capa y si toleran calor.",
                  "Qué tan flexible o rígido debe quedar el laminado.",
                  "El equipo de prensado o laminado que ya tienes.",
                  "Tu volumen de producción.",
                ],
              },
              "Si tus materiales no admiten calor, revisa la [cinta autoadhesiva K System](/sistemas/k-system). Para el panorama completo, lee [cómo reducir emisiones de COV en una fábrica de calzado](/guias/como-reducir-emisiones-de-cov-en-una-fabrica-de-calzado) o [solicita una cotización](/contacto#cotizar).",
            ],
          },
        ],
      },
      en: {
        title: "Hot Melt Lamination: Film, Web & Net | Kyotex",
        description:
          "Laminate materials with Kyotex hot melt film, web, net or powder that bonds with heat and pressure and no solvents, plus Kyo laminating machinery.",
        eyebrow: "Application · Lamination",
        h1: "Solvent-free hot melt lamination",
        lead: "Lamination joins two or more layers of material so they work as one. K Thermo hot melt film, web, net and powder do it with heat and pressure — no solvent to flash off.",
        cardTitle: "Lamination",
        cardText:
          "Hot melt film, web, net or powder for bonding layers of material with heat and pressure.",
        cardCta: "See lamination options",
        imageCaption:
          "Inside a Kyotex System machine: rollers, gears and electronic boards.",
        sections: [
          {
            heading: "What lamination is and where it's used",
            blocks: [
              "Footwear and leather goods plants laminate linings, reinforcements, textiles and synthetics before cutting or assembling parts. Kyotex publishes uses for its hot melt powders well beyond footwear: lingerie and stretch fabrics, automotive, carpet, bonding PVC to leather, filtration and luggage.",
              "With a solvent-based adhesive, every layer needs drying time. With a hot melt, the adhesive melts, is pressed, and the bond forms as it cools.",
            ],
          },
          {
            heading: "Formats for lamination",
            blocks: [
              "[K Thermo](/en/systems/k-thermo) hot melts come in five forms. For lamination, the most common are:",
              {
                list: [
                  "**Film:** a continuous layer of adhesive.",
                  "**Web:** a fine mesh of adhesive fibers.",
                  "**Net:** an open adhesive mesh.",
                  "**Powder:** scattered over the material before pressing.",
                ],
              },
              "What changes is how the adhesive is distributed across the surface. The right format depends on your materials and your equipment. Granules are also available for other processes.",
            ],
          },
          {
            heading: "Powder polymers",
            blocks: [
              "The Kyotex hot melt powder range includes **TPU, PES, PBS** — a biodegradable option — and **EVA**. Each polymer is chosen for the materials, the process temperature and how the finished product will be used.",
            ],
          },
          {
            heading: "Laminating machinery",
            blocks: [
              "Kyotex offers automated dispensing and laminating machinery designed to run its adhesive systems at production speed. Adhesive and machine are engineered together, so dispensing, lamination and curing are calibrated as one system. Learn more on our [shoe machinery](/en/machinery) page.",
            ],
          },
          {
            heading: "Before you laminate: what to check",
            blocks: [
              {
                list: [
                  "The materials in each layer, and whether they can take heat.",
                  "How flexible or stiff the laminate needs to be.",
                  "The press or laminator you already run.",
                  "Your production volume.",
                ],
              },
              "If your materials can't be heated, look at [K System pressure-sensitive tape](/en/systems/k-system). For the bigger picture, read [how to reduce VOC emissions in a shoe factory](/en/guides/how-to-reduce-voc-emissions-in-a-shoe-factory) or [request a quote](/en/contact#quote).",
            ],
          },
        ],
      },
    },
  },
};
