// Preguntas frecuentes. Las respuestas visibles pueden llevar enlaces [texto](/ruta);
// el FAQPage del schema usa el mismo texto sin las marcas (plainText).
import type { Localized } from "@/lib/i18n";
import { BUSINESS } from "@/lib/site";

export type FaqItem = { q: string; a: string };

export const FAQ_PAGE: Localized<{
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  items: FaqItem[];
}> = {
  es: {
    title: "Preguntas frecuentes sobre adhesivos para calzado | Kyotex",
    description:
      "Respuestas sobre adhesivos sin solventes, termoadhesivos, cinta PSA para plantillas, emplantillado en frío, maquinaria Kyo y cómo cotizar con Kyotex.",
    eyebrow: "Preguntas frecuentes",
    h1: "Preguntas frecuentes sobre adhesivos para calzado",
    lead: "Lo que más nos preguntan los fabricantes de calzado y marroquinería sobre los sistemas Kyotex, la maquinaria y cómo empezar.",
    items: [
      {
        q: "¿Qué es Kyotex?",
        a: "Kyotex es la marca de ALC (Adhesives Leading Company) para calzado y marroquinería. Nació en 2006 y su nombre es un homenaje al Protocolo de Kioto. Hoy reúne cuatro unidades —[K System](/sistemas/k-system), [K Thermo](/sistemas/k-thermo), [K Next](/sistemas/k-next) y [K Pads](/sistemas/k-pads)— además de la [maquinaria Kyo](/maquinaria) que las aplica.",
      },
      {
        q: "¿Dónde están y a quién atienden?",
        a: `Kyotex-Terlan Norteamérica está en ${BUSINESS.addressLine} (Tel. ${BUSINESS.phone}). Atendemos a fabricantes de calzado y marroquinería de todo México —incluido León, Guanajuato—, de Estados Unidos y de Canadá.`,
      },
      {
        q: "¿Qué es un adhesivo sin solventes para calzado?",
        a: "Es un adhesivo que forma la unión sin que un solvente tenga que evaporarse. Kyotex lo resuelve de tres formas: cintas PSA que unen con presión ([K System](/sistemas/k-system)), termoadhesivos que unen con calor y presión ([K Thermo](/sistemas/k-thermo)) y una línea en frío con fuerza estructural ([K Next](/sistemas/k-next)).",
      },
      {
        q: "¿Qué diferencia hay entre un termoadhesivo y un pegamento base solvente?",
        a: "El pegamento base solvente se aplica líquido y hay que esperar a que el solvente se evapore antes de unir. El termoadhesivo, o hot melt, es un sólido que se funde con calor, se prensa y une al enfriarse, sin evaporar solventes. Lo comparamos a detalle en [termoadhesivo vs pegamento base solvente](/guias/termoadhesivo-vs-pegamento-base-solvente-en-calzado).",
      },
      {
        q: "¿Qué es una cinta autoadhesiva para plantillas?",
        a: "Es una cinta con adhesivo sensible a la presión (PSA): un adhesivo sólido, en frío, que une al presionar. Se aplica sobre el material y, al emplantillar, solo hay que colocar la plantilla y presionar, sin hornos, sin llama abierta y sin evaporación de solventes. Más información en [K System](/sistemas/k-system).",
      },
      {
        q: "¿Qué es el emplantillado en frío?",
        a: "Es unir la plantilla sin calentar el adhesivo ni el material. Conviene cuando los materiales no toleran el calor o cuando no quieres depender de prensas térmicas. Kyotex lo resuelve con cintas PSA y con [K Next](/sistemas/k-next), que busca la fuerza de un termoadhesivo sin calor. Lee la guía de [emplantillado en frío](/guias/emplantillado-en-frio-que-es-y-cuando-conviene).",
      },
      {
        q: "¿En qué presentaciones vienen los termoadhesivos K Thermo?",
        a: "En granulado, polvo, película, velo y red; todas unen con calor y presión. En polvo hay TPU, PES, PBS —una opción biodegradable— y EVA. Ver [K Thermo](/sistemas/k-thermo).",
      },
      {
        q: "¿Qué maquinaria para calzado ofrecen?",
        a: "Equipos Kyo diseñados junto con los adhesivos: KYO100S (neumática) y KYO101 (con control electrónico) para aplicar adhesivo PSA autoalineado de hasta 145 mm de ancho, KYO500 para piezas medianas y grandes de marroquinería y un equipo nuevo para aplicar adhesivo en cierres. Ver [maquinaria](/maquinaria).",
      },
      {
        q: "¿Tienen adhesivos para marroquinería?",
        a: "Sí: cintas PSA con equipos como la KYO500, termoadhesivos K Thermo para unir piel y otros materiales, y refuerzos K Pads. Ver [adhesivos para marroquinería](/aplicaciones/marroquineria).",
      },
      {
        q: "¿Los adhesivos Kyotex ayudan a reducir las emisiones de COV?",
        a: "Están diseñados para unir sin solventes, que son una de las principales fuentes de COV en el pegado de calzado. Además, según Kyotex, los refuerzos K Pads no contienen solventes ni COV. Cuánto baja cada planta depende de su proceso y hay que medirlo; te explicamos cómo en [cómo reducir emisiones de COV](/guias/como-reducir-emisiones-de-cov-en-una-fabrica-de-calzado).",
      },
      {
        q: "¿Cómo solicito una cotización?",
        a: `Llena el [formulario de cotización](/contacto#cotizar) o llámanos al ${BUSINESS.phone}. Nos ayuda saber qué materiales unes, tu volumen de producción y cómo lo haces hoy. Un especialista de Kyotex se pondrá en contacto.`,
      },
    ],
  },
  en: {
    title: "Footwear Adhesive FAQ | Kyotex North America",
    description:
      "Answers on solvent-free shoe adhesives, hot melt for footwear, insole adhesive tape, cold insole bonding, Kyo shoe machinery and how to request a quote.",
    eyebrow: "FAQ",
    h1: "Footwear adhesive FAQ",
    lead: "The questions footwear and leather goods manufacturers ask us most about Kyotex systems, machinery and getting started.",
    items: [
      {
        q: "What is Kyotex?",
        a: "Kyotex is the footwear and leather goods brand of ALC (Adhesives Leading Company), an Italian adhesives company founded in 1922. Kyotex launched in 2006 and is named in honor of the Kyoto Protocol. It's organized into four units — [K System](/en/systems/k-system), [K Thermo](/en/systems/k-thermo), [K Next](/en/systems/k-next) and [K Pads](/en/systems/k-pads) — plus the [Kyo machinery](/en/machinery) that applies them.",
      },
      {
        q: "Do you serve manufacturers in the US and Canada?",
        a: `Yes. Kyotex-Terlan Norteamérica is based at ${BUSINESS.addressLine} (${BUSINESS.phone}) and works with footwear and leather goods manufacturers in the United States, Canada and Mexico.`,
      },
      {
        q: "What is a solvent-free shoe adhesive?",
        a: "It's an adhesive that forms the bond without waiting for a solvent to evaporate. Kyotex offers three routes: pressure-sensitive tapes that bond with pressure ([K System](/en/systems/k-system)), hot melts that bond with heat and pressure ([K Thermo](/en/systems/k-thermo)) and a cold line with structural strength ([K Next](/en/systems/k-next)).",
      },
      {
        q: "How does hot melt compare with solvent-based shoe cement?",
        a: "Solvent-based cement goes on wet, and the solvent has to flash off before the parts are joined. A hot melt adhesive is a solid that melts with heat, is pressed and bonds as it cools — no solvent flash-off. See the full comparison in [hot melt vs. solvent-based shoe adhesive](/en/guides/hot-melt-vs-solvent-based-shoe-adhesive).",
      },
      {
        q: "What is insole adhesive tape?",
        a: "It's tape carrying a pressure-sensitive adhesive (PSA): a solid, cold adhesive that bonds when pressed. It's applied to the material ahead of time; at the bonding station, operators place the insole and press — no ovens, no open flames and no solvent flash-off. Learn more about [K System](/en/systems/k-system).",
      },
      {
        q: "What is cold insole bonding?",
        a: "It's bonding the insole without heating the adhesive or the material. It makes sense when materials can't take heat or when you'd rather not depend on heated presses. Kyotex covers it with PSA tape and with [K Next](/en/systems/k-next), which aims for hot melt strength without heat. Read our guide to [cold insole bonding](/en/guides/cold-insole-bonding-what-it-is-and-when-to-use-it).",
      },
      {
        q: "What formats do K Thermo hot melts come in?",
        a: "Granules, powder, film, web and net; all of them bond with heat and pressure. Powders are available in TPU, PES, PBS — a biodegradable option — and EVA. See [K Thermo](/en/systems/k-thermo).",
      },
      {
        q: "What shoe machinery do you offer?",
        a: "Kyo equipment engineered together with the adhesives: the KYO100S (pneumatic) and KYO101 (electronically controlled) for self-aligning application of PSA adhesives up to 145 mm (about 5.7 in) wide, the KYO500 for medium and large leather goods parts, and new equipment for applying adhesive to zippers. See [shoe machinery](/en/machinery).",
      },
      {
        q: "Do you supply leather goods adhesives?",
        a: "Yes: PSA tapes with equipment such as the KYO500, K Thermo hot melts for bonding leather and other materials, and K Pads reinforcements. See [leather goods adhesives](/en/applications/leather-goods).",
      },
      {
        q: "Can Kyotex adhesives help lower VOC emissions?",
        a: "They're designed to bond without solvents, one of the main sources of VOCs in footwear bonding, and according to Kyotex, K Pads reinforcements contain no solvents and no VOCs. How much a plant can cut depends on its process and should be measured; VOC rules also vary by state, province and local air district. We explain how to approach it in [how to reduce VOC emissions in a shoe factory](/en/guides/how-to-reduce-voc-emissions-in-a-shoe-factory).",
      },
      {
        q: "How do I request a quote?",
        a: `Fill out the [quote form](/en/contact#quote) or call us at ${BUSINESS.phone}. It helps to know the materials you bond, your production volume and how you bond today. A Kyotex specialist will get in touch.`,
      },
    ],
  },
};

/** Quita las marcas de enlace y negrita para el texto del schema. */
export function plainText(text: string) {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "");
}
