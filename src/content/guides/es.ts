// Guías en español. Los datos de Kyotex vienen de lo que ya decía el sitio y de lo
// que publican ALC y Kyotex; el resto es conocimiento general del sector, sin cifras.
import type { GuideId } from "@/content/routes";
import type { GuideCopy } from "@/content/guides/types";

export const GUIDES_ES: Record<GuideId, GuideCopy> = {
  solvents: {
    title: "Cómo eliminar solventes en el emplantillado de calzado",
    description:
      "Guía paso a paso para dejar el pegamento base solvente en el emplantillado: cinta PSA, termoadhesivo o unión en frío, cómo elegir, cómo probar y qué medir.",
    h1: "Cómo eliminar solventes en el emplantillado de calzado",
    lead: "El emplantillado es una de las operaciones más repetidas de una fábrica de calzado y, cuando se hace con pegamento base solvente, una de las que más vapores deja en la planta. Esta guía explica qué alternativas existen, cómo elegir entre ellas y cómo hacer el cambio sin frenar la producción.",
    cardText:
      "Las tres alternativas al pegamento base solvente, cómo elegir entre ellas y cómo hacer el cambio paso a paso.",
    sections: [
      {
        heading: "Qué pasa cuando emplantillas con solvente",
        blocks: [
          "En el método tradicional, el operador aplica un pegamento líquido —con brocha, rodillo o pistola— sobre la plantilla, dentro del zapato o en ambos. Ese pegamento es un polímero disuelto en solventes orgánicos. Antes de unir las piezas hay que esperar a que buena parte del solvente se evapore; solo entonces se coloca la plantilla y se presiona.",
          "Ese proceso tiene costos que no siempre se ven en la hoja de producción:",
          {
            list: [
              "**Vapores en la planta.** Lo que se evapora son compuestos orgánicos volátiles (COV) que respiran los operadores y que terminan en el ambiente.",
              "**Riesgo de incendio.** La mayoría de los solventes de estos pegamentos son inflamables, así que el almacén y el área de aplicación necesitan cuidados especiales.",
              "**Tiempo de espera.** Cada par espera a que el pegamento esté listo para unir.",
              "**Limpieza y merma.** Brochas, recipientes y equipos se limpian con más solvente, y el pegamento que se seca en el envase se desperdicia.",
            ],
          },
          "Quitar el solvente del emplantillado ataca esos cuatro puntos a la vez. Y como es una operación que se repite en cada par, el cambio se nota en toda la línea.",
        ],
      },
      {
        heading: "Las tres alternativas sin solventes",
        blocks: [
          "Hoy hay tres formas de emplantillar sin evaporar solventes, y Kyotex trabaja con las tres.",
          { h3: "Cinta autoadhesiva PSA" },
          "Un adhesivo sensible a la presión (PSA) llega sólido, normalmente en cinta, y une al presionar. La línea [K System](/sistemas/k-system) está formada por adhesivos sólidos en frío que se activan por presión. La cinta se aplica al material con máquinas como la KYO100S o la KYO101, que trabajan anchos de hasta 145 mm, y al emplantillar basta con colocar la pieza y presionar. Es un emplantillado limpio e instantáneo: sin hornos, sin llama abierta y sin evaporación de solventes.",
          { h3: "Termoadhesivo" },
          "Un termoadhesivo, o hot melt, es un polímero termoplástico que se funde con calor, se prensa y forma la unión al enfriarse. Los termoadhesivos [K Thermo](/sistemas/k-thermo) se ofrecen en granulado, polvo, película, velo y red. Según Kyotex, el emplantillado es donde el termoadhesivo en polvo alcanza su máxima expresión. Necesitas una fuente de calor y presión, pero no hay solvente que evaporar.",
          { h3: "Unión en frío con fuerza estructural" },
          "Algunos materiales necesitan una unión fuerte pero no toleran el calor. Para ellos existe [K Next](/sistemas/k-next), la línea de Kyotex que ofrece la fuerza de un termoadhesivo sin calentar la pieza. ALC la presentó como una cinta adhesiva a base de poliuretano para uniones estructurales.",
        ],
      },
      {
        heading: "Cómo elegir entre las tres",
        blocks: [
          "Antes de pedir muestras, responde estas preguntas con tu equipo de producción:",
          {
            ordered: true,
            list: [
              "**¿Qué materiales unes?** Anota el material de la plantilla y el de la superficie donde va: textil, cartón, espumas, piel o sintéticos.",
              "**¿Toleran el calor?** Si alguno puede deformarse, encogerse o marcarse con la temperatura, descarta el termoadhesivo y compara la cinta PSA con K Next.",
              "**¿Qué tan fuerte debe ser la unión?** Una plantilla de confort no exige lo mismo que una unión que debe resistir el uso diario del calzado.",
              "**¿Qué equipo tienes?** Si ya cuentas con prensas térmicas, un termoadhesivo puede aprovecharlas. Si no, una cinta PSA evita sumar equipos de calor.",
              "**¿Cuál es tu volumen?** De él depende la máquina de aplicación y la forma de surtir el adhesivo a la línea.",
            ],
          },
          "Con esas respuestas, un especialista puede proponerte una o dos opciones para probar. Si quieres comparar a fondo dos de ellas, lee [termoadhesivo vs pegamento base solvente](/guias/termoadhesivo-vs-pegamento-base-solvente-en-calzado).",
        ],
      },
      {
        heading: "Cómo hacer el cambio paso a paso",
        blocks: [
          {
            ordered: true,
            list: [
              "**Elige un modelo piloto.** Empieza con un estilo de alto volumen y materiales conocidos, no con el más complicado.",
              "**Define cómo vas a evaluar.** Acuerda con tu área de calidad qué pruebas de adherencia y qué revisión de apariencia usarás para comparar contra el proceso actual.",
              "**Prueba en línea, no solo en el laboratorio.** Corre una producción corta con los operadores de siempre y registra tiempos, rechazos y comentarios.",
              "**Ajusta el equipo.** La presión, la alineación de la cinta o la temperatura —según la tecnología— se calibran con tu línea. En Kyotex, la máquina y el adhesivo se diseñan juntos para facilitar ese ajuste.",
              "**Capacita y documenta.** Escribe el nuevo método de trabajo, incluye cómo almacenar el adhesivo y entrena a todos los turnos.",
              "**Escala por etapas.** Pasa el resto de los modelos cuando el piloto esté estable.",
            ],
          },
        ],
      },
      {
        heading: "Qué medir para saber si funcionó",
        blocks: [
          "El indicador más simple ya lo tienes en compras: **los litros o kilos de pegamento base solvente que compras cada mes**. Si el emplantillado deja de usarlo, ese número baja. Otros indicadores útiles:",
          {
            list: [
              "Tiempo por par en la estación de emplantillado.",
              "Rechazos por despegue o por manchas de pegamento.",
              "Consumo de solvente de limpieza.",
              "Comentarios de los operadores sobre el olor y el ambiente de trabajo.",
            ],
          },
          "Si tu planta mide sus emisiones o la exposición de los trabajadores a sustancias químicas, compara esas mediciones antes y después del cambio. Para un plan más amplio, revisa [cómo reducir emisiones de COV en una fábrica de calzado](/guias/como-reducir-emisiones-de-cov-en-una-fabrica-de-calzado).",
        ],
      },
      {
        heading: "Errores comunes",
        blocks: [
          {
            list: [
              "**Cambiar todo de golpe.** Un piloto bien hecho te ahorra problemas en toda la línea.",
              "**Probar con superficies sucias.** El polvo, la grasa o la humedad afectan a cualquier adhesivo; revisa la limpieza de las piezas antes de juzgar el resultado.",
              "**Olvidar el almacenamiento.** Cada adhesivo tiene sus propias condiciones de almacenamiento; respeta las indicaciones del fabricante.",
              "**Juzgar solo por la primera hora.** Algunas uniones siguen ganando fuerza con el tiempo; evalúa también después del reposo que defina tu control de calidad.",
              "**Dejar fuera a los operadores.** Son quienes mejor detectan si una estación es más cómoda o más lenta; escúchalos desde el piloto.",
            ],
          },
        ],
      },
      {
        heading: "Siguiente paso",
        blocks: [
          "Revisa la página de [emplantillado sin solventes](/aplicaciones/emplantillado-sin-solventes), conoce la [maquinaria Kyo](/maquinaria) o [solicita una cotización](/contacto#cotizar). Kyotex-Terlan Norteamérica atiende desde Guadalajara, Jalisco, a fabricantes de calzado de León, Guanajuato, y de todo México.",
        ],
      },
    ],
  },

  hotmelt: {
    title: "Termoadhesivo vs pegamento base solvente en calzado | Kyotex",
    description:
      "Termoadhesivo (hot melt) contra pegamento base solvente en calzado: cómo funciona cada uno, emisiones, tiempos, equipo, materiales y cuándo conviene cada uno.",
    h1: "Termoadhesivo vs pegamento base solvente en calzado",
    lead: "Los dos unen piezas de calzado, pero funcionan de manera opuesta: uno necesita que un solvente se evapore y el otro necesita calor. Entender esa diferencia ayuda a decidir dónde conviene cada uno en tu fábrica y por dónde empezar a cambiar.",
    cardText:
      "Cómo funciona cada uno y cómo se comparan en emisiones, tiempos, equipo, materiales y seguridad.",
    sections: [
      {
        heading: "Cómo funciona el pegamento base solvente",
        blocks: [
          "Un pegamento base solvente es un polímero —por ejemplo, policloropreno o poliuretano— disuelto en solventes orgánicos. Se aplica líquido con brocha, rodillo, pistola o máquina, y la unión solo es posible cuando buena parte del solvente se ha evaporado. En muchos procesos se aplica en las dos superficies, se deja orear y después se unen y se prensan; en otros, la película seca se reactiva con calor antes de unir.",
          "Es una tecnología conocida y versátil, por eso sigue presente en muchas fábricas. Su costo oculto es el solvente: se compra, se evapora y hay que controlarlo.",
        ],
      },
      {
        heading: "Cómo funciona un termoadhesivo",
        blocks: [
          "Un termoadhesivo, también llamado hot melt, es un polímero termoplástico que no lleva solvente. Kyotex resume su funcionamiento en tres pasos: **fundir, prensar y enfriar**. El calor lo vuelve fluido, la presión lo pone en contacto con las dos superficies y, al enfriarse, la unión queda formada.",
          "Los termoadhesivos [K Thermo](/sistemas/k-thermo) se ofrecen en granulado, polvo, película, velo y red. En polvo, la gama incluye TPU, PES, PBS —una opción biodegradable— y EVA, y Kyotex destaca el emplantillado como la aplicación donde el polvo termoadhesivo alcanza su máxima expresión.",
        ],
      },
      {
        heading: "Las presentaciones de un termoadhesivo",
        blocks: [
          "Un mismo tipo de adhesivo puede llegar en formas muy distintas, y cada una se adapta a un proceso. Las cinco presentaciones de K Thermo son:",
          {
            list: [
              "**Granulado:** el adhesivo se funde en un equipo antes de aplicarse.",
              "**Polvo:** se esparce sobre el material y se activa al prensar; es la presentación que Kyotex destaca para el emplantillado.",
              "**Película:** una capa continua de adhesivo que se coloca entre las piezas.",
              "**Velo:** una malla fina de fibras adhesivas.",
              "**Red:** una malla abierta de adhesivo.",
            ],
          },
          "La presentación correcta depende de tus materiales, de tu equipo y de cómo debe repartirse el adhesivo sobre la pieza.",
        ],
      },
      {
        heading: "Comparación punto por punto",
        blocks: [
          { h3: "Emisiones y ambiente de trabajo" },
          "Con solvente, lo que se evapora son compuestos orgánicos volátiles (COV) que quedan en el aire de la planta o salen por la extracción. Un termoadhesivo no tiene solvente que evaporar; el cuidado está en trabajar a la temperatura que indique el fabricante.",
          { h3: "Tiempos de proceso" },
          "El pegamento base solvente necesita tiempo de oreo antes de unir y, según la fórmula, tiempo adicional para alcanzar su fuerza final. Con un termoadhesivo, el ciclo depende de calentar, prensar y dejar enfriar: no hay espera por evaporación.",
          { h3: "Equipo" },
          "El solvente requiere aplicadores, extracción de vapores y, a veces, túneles de secado o de reactivación. El termoadhesivo requiere una fuente de calor y presión adecuada a la presentación: una prensa, una laminadora o un aplicador.",
          { h3: "Materiales" },
          "Aquí está la principal limitación del termoadhesivo: los materiales deben tolerar la temperatura de activación. Si no la toleran, hay alternativas en frío, como la cinta PSA de [K System](/sistemas/k-system) o [K Next](/sistemas/k-next).",
          { h3: "Almacenamiento y seguridad" },
          "Los pegamentos base solvente suelen ser líquidos inflamables y piden almacenamiento y manejo especiales. Los termoadhesivos son sólidos a temperatura ambiente; el riesgo principal está en las superficies calientes del equipo.",
          { h3: "Limpieza y desperdicio" },
          "El solvente obliga a limpiar herramientas con más solvente y a desechar el pegamento que se seca en los envases. Con un termoadhesivo sólido no hay envases abiertos ni limpieza con solvente.",
        ],
      },
      {
        heading: "Cuándo conviene cada uno",
        blocks: [
          "Un termoadhesivo suele convenir cuando:",
          {
            list: [
              "Los materiales toleran el calor.",
              "Ya tienes prensas o laminadoras, o puedes incorporarlas.",
              "Quieres reducir los COV y los tiempos de espera.",
              "La operación es repetitiva, como el [emplantillado](/aplicaciones/emplantillado-sin-solventes) o el [laminado](/aplicaciones/laminado).",
            ],
          },
          "El pegamento base solvente se mantiene cuando:",
          {
            list: [
              "La operación todavía no tiene una alternativa probada en tu planta.",
              "Los materiales o la forma de la pieza complican aplicar calor y presión de manera uniforme.",
              "Tu cliente exige un método específico que aún no se ha validado con otra tecnología.",
            ],
          },
          "Muchas fábricas no cambian todo a la vez: empiezan por las operaciones donde la alternativa es más clara y mantienen el solvente donde todavía no hay un reemplazo validado.",
        ],
      },
      {
        heading: "¿Y si el material no tolera el calor?",
        blocks: [
          "Entonces la comparación correcta ya no es solvente contra termoadhesivo, sino solvente contra unión en frío. Hay dos caminos: la cinta autoadhesiva PSA, que une solo con presión, y K Next, que busca la fuerza de un termoadhesivo sin calor. Te lo explicamos en [qué es un adhesivo PSA](/guias/que-es-un-adhesivo-psa-y-como-se-usa-en-calzado) y en [emplantillado en frío](/guias/emplantillado-en-frio-que-es-y-cuando-conviene).",
        ],
      },
      {
        heading: "Qué preguntar antes de cambiar",
        blocks: [
          "Antes de pedir muestras de un termoadhesivo, conviene tener estas respuestas del proveedor:",
          {
            list: [
              "La temperatura, la presión y el tiempo recomendados para activarlo.",
              "Con qué materiales es compatible y con cuáles no.",
              "Qué presentación conviene para tu equipo actual.",
              "Cómo debe almacenarse y cuánto tiempo puede guardarse.",
              "Su hoja de datos de seguridad.",
            ],
          },
          "Con esa información puedes planear la prueba sin sorpresas.",
        ],
      },
      {
        heading: "Cómo hacer una prueba justa",
        blocks: [
          {
            ordered: true,
            list: [
              "Usa los mismos materiales y el mismo modelo que produces hoy.",
              "Define antes las pruebas de adherencia y de apariencia que aplicará tu control de calidad.",
              "Ajusta temperatura, presión y tiempo según las indicaciones del fabricante del adhesivo.",
              "Evalúa después del tiempo de reposo que usas normalmente, no solo al salir de la prensa.",
              "Registra el tiempo por par y los rechazos de los dos métodos.",
            ],
          },
          "Si quieres ayuda para diseñar la prueba, [escríbenos](/contacto#cotizar): un especialista de Kyotex te orienta sobre la presentación y el equipo, y la [maquinaria Kyo](/maquinaria) se diseña junto con el adhesivo para que el ajuste sea más sencillo.",
        ],
      },
    ],
  },

  psa: {
    title: "Qué es un adhesivo PSA y cómo se usa en calzado | Kyotex",
    description:
      "Qué es un adhesivo sensible a la presión (PSA), cómo une sin solventes ni calor, cómo se usa en emplantillado y marroquinería y qué revisar antes de usarlo.",
    h1: "Qué es un adhesivo PSA y cómo se usa en calzado",
    lead: "PSA son las siglas de pressure-sensitive adhesive, que en español es adhesivo sensible a la presión. Es el tipo de adhesivo de una cinta autoadhesiva: llega listo para usarse y une con solo presionar. En calzado y marroquinería permite pegar sin solventes, sin calor y sin esperas.",
    cardText:
      "Cómo une un adhesivo sensible a la presión, en qué se usa en calzado y marroquinería y cuáles son sus límites.",
    sections: [
      {
        heading: "Qué es un adhesivo sensible a la presión",
        blocks: [
          "Un adhesivo sensible a la presión se mantiene pegajoso en estado seco y forma la unión cuando se presiona contra una superficie. No necesita agua, solvente ni calor para activarse. Kyotex describe su línea [K System](/sistemas/k-system) justamente así: adhesivos sólidos en frío que se activan por presión.",
          "La diferencia con un pegamento líquido es de fondo. Con un pegamento base solvente, la capa adhesiva se forma en la planta, mientras el solvente se evapora. Con un PSA, la película adhesiva ya viene formada; en la planta solo se coloca y se presiona.",
        ],
      },
      {
        heading: "Cómo funciona la unión",
        blocks: [
          "Al presionar, el adhesivo fluye y se adapta a las irregularidades de la superficie hasta lograr un contacto estrecho con ella. Por eso importan tres cosas:",
          {
            list: [
              "**La presión:** una presión firme y pareja mejora el contacto.",
              "**La superficie:** debe estar limpia y seca; el polvo, la grasa o la humedad reducen la adherencia.",
              "**El tiempo:** en muchos PSA la unión sigue ganando fuerza durante un tiempo después de aplicarla.",
            ],
          },
        ],
      },
      {
        heading: "En qué presentaciones llega",
        blocks: [
          "En la industria, los PSA suelen venir en cinta, protegidos por un papel o una película antiadherente que se retira justo antes de unir. Kyotex trabaja sus adhesivos PSA en cinta y los aplica con su propia maquinaria; en sus equipos se ven los rollos montados y, en el emplantillado, cintas con las siluetas de las plantillas impresas.",
        ],
      },
      {
        heading: "Cómo se usa en calzado y marroquinería",
        blocks: [
          { h3: "Emplantillado" },
          "Es el uso más conocido. La cinta autoadhesiva se aplica sobre el material de la plantilla y, al emplantillar, el operador coloca la plantilla y presiona. Kyotex lo describe como un emplantillado limpio e instantáneo: sin hornos, sin llama abierta y sin evaporación de solventes. Más detalles en [emplantillado sin solventes](/aplicaciones/emplantillado-sin-solventes).",
          { h3: "Marroquinería" },
          "En artículos de piel, los PSA permiten unir piezas sin aplicar pegamento líquido. Kyotex tiene una máquina específica, la KYO500, para aplicar adhesivos PSA de tamaño mediano y grande en marroquinería, y ALC presentó en 2025 un equipo nuevo para aplicar adhesivo en cierres. Ver [adhesivos para marroquinería](/aplicaciones/marroquineria).",
          { h3: "Preparación fuera de la línea" },
          "Como el adhesivo ya está formado, la cinta puede aplicarse en una etapa y la unión hacerse después. Eso permite preparar piezas fuera de la línea de producción y dejar en la línea solo el paso de colocar y presionar.",
        ],
      },
      {
        heading: "La maquinaria para aplicar PSA",
        blocks: [
          "Para aplicar la cinta de forma pareja y a velocidad de producción, Kyotex usa equipos Kyo diseñados junto con el adhesivo:",
          {
            list: [
              "**KYO100S:** neumática, para la aplicación autoalineada de adhesivos PSA de hasta 145 mm de ancho.",
              "**KYO101:** con control electrónico, para la aplicación autoalineada de adhesivos PSA de hasta 145 mm de ancho.",
              "**KYO500:** para adhesivos PSA de tamaño mediano y grande en marroquinería.",
            ],
          },
          "Conoce todos los equipos en [maquinaria para calzado](/maquinaria).",
        ],
      },
      {
        heading: "Cómo integrar la cinta PSA en tu línea",
        blocks: [
          {
            ordered: true,
            list: [
              "**Decide en qué etapa se aplica la cinta.** Puede ser en el área de preparación o directamente en la línea; lo importante es que sea una etapa fija del proceso.",
              "**Aplica la cinta con máquina.** Un equipo como la KYO100S o la KYO101 la coloca alineada y con presión pareja.",
              "**Protege las piezas preparadas.** Mientras esperan, mantenlas limpias y con el protector puesto.",
              "**En la estación, retira el protector, coloca y presiona.** Ese es todo el paso de unión.",
              "**Revisa la adherencia.** Aplica las pruebas habituales de tu control de calidad.",
            ],
          },
        ],
      },
      {
        heading: "Ventajas y límites",
        blocks: [
          "ALC describe la unión con cintas adhesivas como una forma de introducir en el calzado y la marroquinería conceptos de producción basados en la eficiencia, la sostenibilidad ambiental y el respeto por la salud de los trabajadores. En la práctica, las ventajas más claras son:",
          {
            list: [
              "Sin solventes que evaporar ni tiempos de oreo.",
              "Sin calor: sirve para materiales sensibles a la temperatura.",
              "Unión inmediata al presionar.",
              "Menos limpieza: no hay brochas ni recipientes con pegamento.",
            ],
          },
          "También tiene límites que conviene revisar con pruebas:",
          {
            list: [
              "Algunas superficies, como ciertos plásticos o materiales con acabados especiales, son más difíciles de pegar.",
              "La unión depende de aplicar suficiente presión de manera uniforme.",
              "Cada adhesivo tiene un rango de temperatura de uso y condiciones de almacenamiento que hay que respetar.",
            ],
          },
          "Cuando se necesita una unión estructural sin calor, Kyotex ofrece además [K Next](/sistemas/k-next).",
        ],
      },
      {
        heading: "Dudas frecuentes sobre los PSA",
        blocks: [
          { h3: "¿La unión es permanente?" },
          "Depende de la fórmula: hay adhesivos sensibles a la presión permanentes y otros pensados para despegarse. En calzado, la fórmula se elige según lo que debe resistir la pieza, y se confirma con pruebas.",
          { h3: "¿Sirve para piel?" },
          "Sí. Kyotex usa adhesivos PSA en marroquinería, incluidas piezas medianas y grandes con la KYO500.",
          { h3: "¿Necesito comprar maquinaria?" },
          "Para producir a volumen, una máquina de aplicación ayuda a que la cinta quede pareja y alineada en cada pieza. Un especialista puede recomendarte el equipo según tu volumen.",
        ],
      },
      {
        heading: "PSA, termoadhesivo o solvente: resumen",
        blocks: [
          {
            list: [
              "**PSA:** sólido, en frío, une con presión.",
              "**Termoadhesivo:** sólido, une con calor y presión ([K Thermo](/sistemas/k-thermo)).",
              "**Base solvente:** líquido, une cuando el solvente se evapora.",
            ],
          },
          "Para decidir cuál te conviene, revisa [cómo eliminar solventes en el emplantillado](/guias/como-eliminar-solventes-en-el-emplantillado-de-calzado) o [solicita una cotización](/contacto#cotizar): un especialista de Kyotex te ayuda a elegir la cinta y el equipo.",
        ],
      },
    ],
  },

  voc: {
    title: "Cómo reducir emisiones de COV en una fábrica de calzado",
    description:
      "Plan práctico para reducir los COV en una fábrica de calzado: inventario de solventes, cambio a adhesivos sin solventes, controles y medición del avance.",
    h1: "Cómo reducir emisiones de COV en una fábrica de calzado",
    lead: "En una fábrica de calzado, buena parte de los compuestos orgánicos volátiles sale de los pegamentos, limpiadores y acabados base solvente. Esta guía propone un plan en cinco pasos para reducirlos, empezando por donde más impacto suele tener: sustituir el solvente en las operaciones de pegado.",
    cardText:
      "De dónde salen los COV en una fábrica de calzado y un plan en cinco pasos para reducirlos.",
    sections: [
      {
        heading: "Qué son los COV y de dónde salen",
        blocks: [
          "Los compuestos orgánicos volátiles (COV) son sustancias que se evaporan con facilidad a temperatura ambiente. En la manufactura de calzado provienen sobre todo de productos base solvente:",
          {
            list: [
              "Pegamentos para emplantillado, montado, pegado de suela y armado.",
              "Primers y halogenantes que preparan las superficies.",
              "Limpiadores y solventes para lavar herramientas y equipos.",
              "Tintas, pinturas y acabados.",
            ],
          },
          "Cada vez que un envase queda abierto o se aplica una capa de pegamento, parte de ese solvente pasa al aire de la planta.",
        ],
      },
      {
        heading: "Por qué conviene reducirlos",
        blocks: [
          {
            list: [
              "**Salud de los trabajadores.** Respirar vapores de solventes de forma continua es un riesgo para quienes trabajan en la línea. En México, la exposición a sustancias químicas en el ambiente laboral está regulada por la NOM-010-STPS-2014.",
              "**Seguridad.** La mayoría de estos solventes son inflamables: menos solvente en la planta significa menos riesgo de incendio.",
              "**Ambiente.** Los COV contribuyen a la formación de ozono a nivel del suelo y de esmog.",
              "**Clientes.** Algunas marcas piden a sus proveedores información sobre las sustancias químicas que usan y cómo las controlan.",
              "**Cumplimiento.** Las emisiones a la atmósfera están reguladas por las autoridades ambientales; consulta qué aplica a tu planta según su ubicación y su actividad.",
            ],
          },
        ],
      },
      {
        heading: "Paso 1: haz un inventario de solventes",
        blocks: [
          "No puedes reducir lo que no mides. Haz una lista de todos los productos con solvente que entran a la planta y, para cada uno, anota:",
          {
            list: [
              "En qué operación se usa.",
              "Cuánto se compra al mes, en litros o kilos.",
              "Qué dice su hoja de datos de seguridad sobre su contenido de solventes y sus riesgos.",
            ],
          },
          "Un registro sencillo basta: una fila por producto, con la operación, el consumo mensual y el contenido de solventes según su hoja de datos.",
          "Ordena la lista de mayor a menor consumo. Es común que unas pocas operaciones concentren la mayor parte del solvente: ahí está tu prioridad.",
        ],
      },
      {
        heading: "Paso 2: sustituye el solvente donde haya alternativa",
        blocks: [
          "De todas las medidas posibles, eliminar el solvente de una operación es la más efectiva, porque el COV que no entra a la planta ya no hay que controlarlo después. Estas son las sustituciones que ofrece Kyotex:",
          {
            list: [
              "**Emplantillado:** cinta autoadhesiva PSA ([K System](/sistemas/k-system)), termoadhesivo en polvo o película ([K Thermo](/sistemas/k-thermo)) o unión en frío ([K Next](/sistemas/k-next)). Ver [emplantillado sin solventes](/aplicaciones/emplantillado-sin-solventes).",
              "**Refuerzos:** punteras, contrafuertes y microfibras [K Pads](/sistemas/k-pads), hechos con materiales tratados con adhesivos Kyotex que, según la marca, garantizan la ausencia de solventes y COV.",
              "**Laminado:** termoadhesivos en película, velo, red o polvo. Ver [laminado](/aplicaciones/laminado).",
              "**Marroquinería:** cintas PSA y termoadhesivos. Ver [adhesivos para marroquinería](/aplicaciones/marroquineria).",
            ],
          },
          "Empieza por la operación de mayor consumo que tenga una alternativa clara y haz una prueba piloto antes de cambiar toda la línea. La guía [cómo eliminar solventes en el emplantillado de calzado](/guias/como-eliminar-solventes-en-el-emplantillado-de-calzado) explica cómo hacerlo.",
        ],
      },
      {
        heading: "Paso 3: reduce y controla lo que quede",
        blocks: [
          "Habrá operaciones donde el solvente siga siendo necesario por un tiempo. En ellas, las buenas prácticas ayudan:",
          {
            list: [
              "Mantén los envases cerrados cuando no se usan.",
              "Surte solo la cantidad de pegamento que se va a usar en el turno.",
              "Usa aplicadores que depositen la cantidad justa.",
              "Asegura una ventilación y una extracción adecuadas en las estaciones de pegado.",
              "Capacita a los operadores en el manejo seguro de solventes.",
              "Guarda los productos inflamables en un área designada.",
            ],
          },
        ],
      },
      {
        heading: "Paso 4: mide el avance",
        blocks: [
          "El indicador más sencillo son las compras: si el consumo mensual de productos con solvente baja, también bajan los COV que entran a la planta. Complementa con:",
          {
            list: [
              "Los litros de solvente de limpieza que usas al mes.",
              "Las mediciones de exposición de los trabajadores, si tu planta las realiza.",
              "Las mediciones de emisiones hechas por un laboratorio, cuando la autoridad o tu cliente lo pidan.",
            ],
          },
        ],
      },
      {
        heading: "Paso 5: hazlo parte del proceso",
        blocks: [
          "Una reducción de COV se sostiene cuando forma parte de cómo se trabaja: inclúyela en los procedimientos, en la capacitación de los operadores nuevos y en la selección de materiales. Cada modelo nuevo es una oportunidad para diseñarlo desde el inicio con adhesivos ecológicos.",
          "Revisa el inventario al menos una vez al año, o cada vez que entre un producto nuevo a la planta, para que el avance no se pierda con el tiempo.",
        ],
      },
      {
        heading: "Errores comunes al reducir COV",
        blocks: [
          {
            list: [
              "**Confiar solo en la ventilación.** Extraer los vapores mejora el aire de la estación, pero el solvente sigue saliendo de la planta; sustituirlo resuelve el problema de raíz.",
              "**Cambiar de producto sin probar.** Un adhesivo nuevo debe validarse con tus materiales antes de pasar a toda la línea.",
              "**Olvidar los limpiadores.** El solvente de limpieza también cuenta y a veces es una parte importante del consumo.",
              "**Dejar fuera a compras y a calidad.** Compras controla lo que entra a la planta y calidad valida los cambios; sin ellos, el plan no avanza.",
              "**No registrar el punto de partida.** Sin una medición inicial no podrás demostrar cuánto bajó el consumo.",
            ],
          },
        ],
      },
      {
        heading: "Por dónde empezar con Kyotex",
        blocks: [
          "Si quieres comparar tecnologías, revisa [termoadhesivo vs pegamento base solvente](/guias/termoadhesivo-vs-pegamento-base-solvente-en-calzado). Y cuando quieras una recomendación para tu planta, [solicita una cotización](/contacto#cotizar): un especialista de Kyotex revisa tus operaciones y te propone por dónde empezar.",
        ],
      },
    ],
  },

  cold: {
    title: "Emplantillado en frío: qué es y cuándo conviene | Kyotex",
    description:
      "Qué es el emplantillado en frío, cómo funciona con cinta PSA o con K Next, cuándo conviene frente al termoadhesivo y cómo evaluarlo en tu línea de calzado.",
    h1: "Emplantillado en frío: qué es y cuándo conviene",
    lead: "El emplantillado en frío es unir la plantilla sin calentar el adhesivo ni el material. Es la respuesta para materiales sensibles a la temperatura y para líneas que no quieren depender de prensas térmicas, y además es una forma de trabajar sin solventes.",
    cardText:
      "Cómo se emplantilla sin calor, con cinta PSA o con K Next, y en qué casos conviene frente al termoadhesivo.",
    sections: [
      {
        heading: "Qué es el emplantillado en frío",
        blocks: [
          "En la mayoría de los procesos, el adhesivo necesita algo para activarse: que se evapore un solvente, como en los pegamentos tradicionales, o que se funda con calor, como en los termoadhesivos. En el emplantillado en frío, el adhesivo trabaja sin calor: une con presión o con un sistema diseñado para dar una unión estructural sin temperatura.",
          "El término sirve para distinguirlo del emplantillado con termoadhesivo, en el que el adhesivo se funde con calor, y del tradicional con pegamento base solvente.",
          "Kyotex trabaja el emplantillado en frío con dos tecnologías, y las dos son sin solventes.",
        ],
      },
      {
        heading: "Dos tecnologías para emplantillar en frío",
        blocks: [
          { h3: "Cinta autoadhesiva PSA (K System)" },
          "Los adhesivos sensibles a la presión de [K System](/sistemas/k-system) son sólidos, trabajan en frío y unen al presionar. La cinta se aplica sobre el material con máquinas como la KYO100S o la KYO101 y, al emplantillar, solo hay que colocar y presionar. Es la opción más directa cuando la plantilla necesita una unión limpia e inmediata.",
          { h3: "Unión estructural en frío (K Next)" },
          "[K Next](/sistemas/k-next) nació para los productos que necesitan la fuerza de un termoadhesivo pero no pueden calentarse. ALC empezó a producirlo en 2024 y lo presentó como una cinta adhesiva a base de poliuretano para uniones estructurales, pensada para células de producción de alto rendimiento. Es la línea más reciente de Kyotex: la opción cuando la pieza necesita la fuerza de un termoadhesivo y no admite calor.",
        ],
      },
      {
        heading: "Cómo se ve una estación de emplantillado en frío",
        blocks: [
          "En una línea con cinta PSA, el trabajo se divide en dos momentos. Primero, la cinta se aplica sobre el material con una máquina de aplicación, de forma pareja y alineada. Después, en la estación de emplantillado, el operador retira el protector, coloca la plantilla y presiona.",
          "No hay que esperar a que algo se seque ni a que una prensa se caliente, y la estación queda libre de brochas, recipientes y vapores. Por eso el emplantillado en frío suele ser también un emplantillado más limpio.",
        ],
      },
      {
        heading: "Por qué evitar el calor",
        blocks: [
          "El calor no siempre es un problema, pero hay casos en los que conviene evitarlo:",
          {
            list: [
              "**Materiales sensibles a la temperatura.** Algunas espumas, sintéticos y acabados pueden deformarse, encogerse, cambiar de brillo o marcarse con el calor.",
              "**Piezas con componentes ya pegados.** Volver a calentar puede afectar uniones o materiales que ya están en la pieza.",
              "**Líneas sin prensas térmicas.** Trabajar en frío evita comprar, calentar y mantener ese equipo.",
              "**Seguridad.** No hay superficies calientes en la estación de emplantillado.",
              "**Estandarización.** Con cinta PSA, la variable principal en la estación es la presión, lo que simplifica estandarizar el trabajo entre turnos.",
            ],
          },
        ],
      },
      {
        heading: "Cuándo conviene el emplantillado en frío",
        blocks: [
          "Suele ser la mejor opción cuando:",
          {
            list: [
              "Tus materiales no toleran la temperatura de activación de un termoadhesivo.",
              "Quieres eliminar el solvente sin agregar equipos de calor.",
              "Necesitas preparar piezas fuera de la línea y unirlas después.",
              "Buscas una estación de emplantillado simple: colocar y presionar.",
            ],
          },
          "En cambio, un [termoadhesivo K Thermo](/sistemas/k-thermo) suele convenir más cuando:",
          {
            list: [
              "Los materiales toleran bien el calor.",
              "Ya tienes prensas o laminadoras que puedes aprovechar.",
              "Trabajas con presentaciones como polvo, velo o red, que se activan con calor.",
            ],
          },
          "Si estás comparando las dos familias, lee [termoadhesivo vs pegamento base solvente](/guias/termoadhesivo-vs-pegamento-base-solvente-en-calzado).",
        ],
      },
      {
        heading: "Cómo evaluarlo en tu línea",
        blocks: [
          {
            ordered: true,
            list: [
              "**Revisa tus materiales.** Anota el material de la plantilla y el de la superficie donde va, y pregunta a tu proveedor qué temperatura toleran.",
              "**Define el tipo de unión.** ¿Es una plantilla de confort o una unión estructural? De eso depende elegir entre la cinta PSA y K Next.",
              "**Pide muestras y haz un piloto.** Prueba con un modelo de alto volumen y con los operadores de siempre.",
              "**Evalúa con tu control de calidad.** Usa tus pruebas habituales de adherencia y revisa la apariencia de la pieza terminada.",
              "**Revisa el equipo de aplicación.** La [maquinaria Kyo](/maquinaria) se diseña junto con el adhesivo para aplicar la cinta de forma pareja.",
            ],
          },
        ],
      },
      {
        heading: "Preguntas que suelen surgir",
        blocks: [
          { h3: "¿En frío significa menos fuerza?" },
          "No necesariamente. Por eso existe K Next: para ofrecer la fuerza de un termoadhesivo sin calor. La fuerza que necesitas depende de la pieza y se confirma con pruebas.",
          { h3: "¿El emplantillado en frío usa solventes?" },
          "No. Tanto la cinta PSA como K Next trabajan sin solventes, igual que los termoadhesivos.",
          { h3: "¿Puedo combinar tecnologías?" },
          "Sí. Puedes usar una tecnología distinta según el modelo o la operación; lo importante es validar cada combinación con tus materiales.",
          { h3: "¿Qué pasa con las piezas de marroquinería?" },
          "El mismo principio aplica: las cintas PSA unen piezas de piel sin calor ni solventes, y para piezas medianas y grandes existe la KYO500. Ver [adhesivos para marroquinería](/aplicaciones/marroquineria).",
        ],
      },
      {
        heading: "Qué preguntar antes de elegir",
        blocks: [
          {
            list: [
              "¿Qué temperatura máxima toleran mis materiales?",
              "¿La pieza necesita una unión estructural o una de confort?",
              "¿En qué etapa del proceso conviene aplicar el adhesivo?",
              "¿Qué equipo de aplicación necesito para mi volumen?",
              "¿Cómo se almacena el adhesivo y cuánto tiempo puede guardarse?",
            ],
          },
          "Lleva estas preguntas a tu primera conversación con un especialista: con las respuestas se puede armar una prueba piloto.",
        ],
      },
      {
        heading: "Siguiente paso",
        blocks: [
          "Revisa las opciones de [emplantillado sin solventes](/aplicaciones/emplantillado-sin-solventes), lee [qué es un adhesivo PSA](/guias/que-es-un-adhesivo-psa-y-como-se-usa-en-calzado) o [solicita una cotización](/contacto#cotizar). Atendemos desde Guadalajara, Jalisco, a fábricas de León, Guanajuato, y de todo México.",
        ],
      },
    ],
  },

  insoling: {
    title: "Qué es el emplantillado y cómo se hace en calzado | Kyotex",
    description:
      "Qué es el emplantillado, en qué etapa de la fabricación de calzado se hace y cómo se une la plantilla: con solvente, cinta PSA, termoadhesivo o en frío.",
    h1: "Qué es el emplantillado y cómo se hace en la fabricación de calzado",
    lead: "El emplantillado es el paso en el que la plantilla queda unida al zapato. Parece una operación sencilla, pero de ella dependen la comodidad, la apariencia interior del calzado y buena parte de los vapores que hay en la planta. Aquí explicamos en qué consiste, en qué momento de la fabricación se hace y qué métodos existen para hacerlo bien.",
    cardText:
      "En qué consiste el emplantillado, en qué etapa de la línea se hace y qué métodos existen para unir la plantilla.",
    sections: [
      {
        heading: "Qué es la plantilla",
        blocks: [
          "En un zapato hay, por lo general, dos piezas a las que se les llama plantilla:",
          {
            list: [
              "**La plantilla de armado o de montado:** la base firme sobre la que se monta el corte. Se fija a la horma antes del montado y queda oculta dentro del zapato.",
              "**La plantilla interior o de confort:** la pieza que toca el pie. Puede llevar espuma, textil o piel, y se coloca cuando el zapato ya está armado.",
            ],
          },
          "En el piso de producción, la palabra emplantillado se usa sobre todo para el segundo caso: colocar y pegar la plantilla interior dentro del zapato. Pero el principio es el mismo en los dos: unir la plantilla de forma firme, pareja y limpia, sin que se mueva, se arrugue o se despegue con el uso.",
        ],
      },
      {
        heading: "En qué etapa de la fabricación se hace",
        blocks: [
          "En la fabricación de calzado pegado, el orden más común es este:",
          {
            ordered: true,
            list: [
              "**Corte:** se cortan las piezas del corte, los forros y las plantillas.",
              "**Pespunte:** se cosen las piezas del corte.",
              "**Montado:** el corte se monta sobre la horma y se une a la plantilla de armado.",
              "**Pegado de suela:** se une la suela al zapato montado.",
              "**Deshormado:** se retira la horma.",
              "**Emplantillado y acabado:** se coloca la plantilla interior, se limpia el zapato y se prepara para el empaque.",
            ],
          },
          "Cada fábrica tiene sus variantes, pero el emplantillado casi siempre está cerca del final de la línea, cuando el zapato ya se ve terminado. Por eso un error en este paso se nota tanto: una plantilla mal pegada, arrugada o manchada llega directo a las manos del cliente.",
        ],
      },
      {
        heading: "Cómo se hace el emplantillado tradicional",
        blocks: [
          "El método tradicional usa pegamento líquido base solvente y sigue, más o menos, estos pasos:",
          {
            ordered: true,
            list: [
              "Se aplica el pegamento con brocha, rodillo o pistola en la plantilla, dentro del zapato o en ambos.",
              "Se espera a que el solvente se evapore lo suficiente para que el pegamento esté listo.",
              "Se coloca la plantilla, alineada con la forma del zapato.",
              "Se presiona para asentarla, a mano o con una prensa.",
            ],
          },
          "Funciona, pero tiene costos que se repiten en cada par: vapores de solventes en la línea, tiempo de espera, limpieza de brochas y recipientes y riesgo de manchas dentro del zapato. Lo explicamos a fondo en [cómo eliminar solventes en el emplantillado de calzado](/guias/como-eliminar-solventes-en-el-emplantillado-de-calzado).",
        ],
      },
      {
        heading: "Tres formas de emplantillar sin solventes",
        blocks: [
          "Kyotex trabaja tres tecnologías que unen la plantilla sin evaporar solventes:",
          { h3: "Con cinta autoadhesiva PSA" },
          "La cinta de [K System](/sistemas/k-system) lleva un adhesivo sólido que trabaja en frío y une con presión. Se aplica sobre el material con máquinas como la KYO100S o la KYO101, que trabajan anchos de hasta 145 mm. En la estación de emplantillado solo se retira el protector, se coloca la plantilla y se presiona: sin hornos, sin llama abierta y sin evaporación de solventes.",
          { h3: "Con termoadhesivo" },
          "Los termoadhesivos de [K Thermo](/sistemas/k-thermo) se funden con calor, se prensan y forman la unión al enfriarse. Según Kyotex, el emplantillado es donde el termoadhesivo en polvo alcanza su máxima expresión. Hace falta una fuente de calor y presión, y que los materiales toleren la temperatura de activación.",
          { h3: "En frío, con fuerza estructural" },
          "[K Next](/sistemas/k-next) ofrece la fuerza de un termoadhesivo sin calentar la pieza. ALC lo presentó como una cinta adhesiva a base de poliuretano para uniones estructurales, pensada para células de producción de alto rendimiento.",
          "Para comparar estas opciones con calma, revisa la página de [emplantillado sin solventes](/aplicaciones/emplantillado-sin-solventes).",
        ],
      },
      {
        heading: "Preparar la plantilla fuera de la línea",
        blocks: [
          "Una ventaja de la cinta autoadhesiva es que separa el emplantillado en dos momentos. Primero, en el área de preparación, la cinta se aplica sobre el material de la plantilla con una máquina, de forma pareja y alineada. Después, en la línea, el operador solo retira el protector, coloca la plantilla y presiona.",
          "Como el adhesivo ya viene formado, se puede aplicar hoy y usar después. Eso permite adelantar trabajo cuando hay capacidad y dejar en la línea únicamente el paso de colocar y presionar, que es rápido y no deja vapores.",
        ],
      },
      {
        heading: "Cómo lograr un emplantillado bien hecho",
        blocks: [
          "Sin importar el método, hay puntos que marcan la diferencia:",
          {
            list: [
              "**Plantilla bien cortada.** Si no corresponde con la forma del zapato, se arruga o se levanta en las orillas.",
              "**Interior limpio y seco.** El polvo, los restos de pegamento o la humedad reducen la adherencia de cualquier adhesivo.",
              "**Buena alineación.** La plantilla debe quedar centrada, sin cubrir de más ni dejar huecos en el talón o en la punta.",
              "**Presión pareja.** La presión tiene que llegar a toda la superficie, sobre todo a la punta y al talón, donde la plantilla suele despegarse primero.",
              "**Tiempo de reposo.** Algunas uniones siguen ganando fuerza después de presionarlas; respeta el tiempo que indique el fabricante del adhesivo antes de empacar.",
            ],
          },
        ],
      },
      {
        heading: "Problemas comunes y cómo detectarlos",
        blocks: [
          {
            list: [
              "**Despegue en las orillas o en el talón:** suele venir de poca presión, poco adhesivo en esa zona o superficies sucias.",
              "**Arrugas o burbujas:** la plantilla no asentó bien o no corresponde con la forma del zapato.",
              "**Manchas de pegamento:** casi siempre son exceso de pegamento líquido que se sale por las orillas. Con cinta o con termoadhesivo, la cantidad de adhesivo ya viene definida.",
              "**Olor a solvente en el zapato terminado:** puede indicar que el solvente no terminó de evaporarse antes de empacar.",
            ],
          },
          "Revisar algunos pares al azar en cada turno ayuda a detectar estos problemas antes de que lleguen al cliente, y a saber si el ajuste está en el adhesivo, en el equipo o en el método de trabajo.",
        ],
      },
      {
        heading: "Cómo elegir el método para tu línea",
        blocks: [
          "La elección depende de tus materiales, de si toleran el calor, del equipo que ya tienes y de tu volumen de producción. Si quieres profundizar, lee [emplantillado en frío: qué es y cuándo conviene](/guias/emplantillado-en-frio-que-es-y-cuando-conviene) y [cómo elegir el adhesivo según el material del calzado](/guias/como-elegir-el-adhesivo-segun-el-material-del-calzado).",
          "Cuando quieras una recomendación para tu línea, [solicita una cotización](/contacto#cotizar). Kyotex-Terlan Norteamérica atiende desde Guadalajara, Jalisco, a fábricas de León, Guanajuato, y de todo México.",
        ],
      },
    ],
  },

  reinforcements: {
    title: "Punteras y contrafuertes para calzado: qué son y cómo se fijan",
    description:
      "Qué son las punteras y los contrafuertes, de qué se hacen, cómo se fijan con calor o con adhesivo en frío sin solventes y qué revisar para que no se marquen.",
    h1: "Punteras y contrafuertes para calzado: qué son y cómo se fijan",
    lead: "La puntera y el contrafuerte son refuerzos que casi nadie ve, pero que definen la forma del zapato: la puntera sostiene la punta y el contrafuerte, el talón. Esta guía explica qué son, de qué materiales se hacen y cómo se fijan, incluida la opción de hacerlo sin solventes.",
    cardText:
      "Qué son estos refuerzos, de qué materiales se hacen y cómo se fijan, incluida la opción sin solventes.",
    sections: [
      {
        heading: "Qué es una puntera",
        blocks: [
          "La puntera es el refuerzo que va en la punta del zapato, entre el corte y el forro. Su trabajo es darle forma a la punta y ayudar a que la conserve con el uso, sin que se hunda ni se deforme cada vez que el pie empuja hacia adelante.",
          "No hay que confundirla con el casquillo del calzado de seguridad. El casquillo es una pieza de protección; la puntera, en cambio, es un refuerzo de forma que se usa en todo tipo de calzado.",
        ],
      },
      {
        heading: "Qué es un contrafuerte",
        blocks: [
          "El contrafuerte va en la parte trasera del zapato, también entre el corte y el forro, rodeando el talón. Sostiene la forma de esa zona y ayuda a que el pie quede firme dentro del calzado.",
          "Es una de las piezas que más trabajo recibe: cada vez que alguien se pone o se quita el zapato, el talón se dobla. Un contrafuerte bien elegido y bien fijado evita que esa zona se colapse con el tiempo.",
        ],
      },
      {
        heading: "De qué materiales se hacen",
        blocks: [
          "Hay refuerzos de muchos materiales. La unidad [K Pads](/sistemas/k-pads) de Kyotex desarrolla soportes de refuerzo para calzado y marroquinería, entre ellos:",
          {
            list: ["**Punteras.**", "**Contrafuertes de fibra de cuero.**", "**Microfibras.**"],
          },
          "Kyotex los hace con materiales naturales y reciclados tratados con sus termoadhesivos (hot melt) o con sus adhesivos en frío. Según la marca, ese tratamiento garantiza la ausencia de solventes y de compuestos orgánicos volátiles (COV).",
          "La elección del material depende de qué tan firme debe quedar la pieza, del tipo de corte y de la comodidad que se busca: un refuerzo demasiado rígido sostiene bien la forma, pero puede incomodar; uno demasiado blando no la sostiene.",
        ],
      },
      {
        heading: "Cómo se fijan",
        blocks: [
          "Hay tres formas principales de fijar un refuerzo, según cómo se active su adhesivo:",
          { h3: "Activados con solvente" },
          "Es el método tradicional en algunos refuerzos: la pieza se humedece o se sumerge en solvente para ablandarla y activarla, se coloca y se monta. Como cualquier proceso con solvente, deja vapores en la planta y obliga a manejar tiempos de espera.",
          { h3: "Con termoadhesivo" },
          "El refuerzo ya trae el adhesivo aplicado. Se activa con calor, se coloca entre el corte y el forro y, al montarse y enfriarse, queda unido y con la forma de la horma. No hay solvente que evaporar.",
          "Aquí importa respetar la temperatura y el tiempo de activación que indique el fabricante: si el adhesivo no se activa por completo, la unión queda débil; si se calienta de más, el material del corte o del forro puede dañarse.",
          { h3: "Con adhesivo en frío" },
          "El refuerzo trae un adhesivo que trabaja sin calor. Es útil cuando los materiales del corte o del forro no deben calentarse.",
          "Los refuerzos K Pads vienen tratados con adhesivos Kyotex, en caliente o en frío, para que se integren a un proceso sin solventes.",
        ],
      },
      {
        heading: "El refuerzo empieza en el diseño del modelo",
        blocks: [
          "La forma y el tamaño de la puntera y del contrafuerte se definen junto con el patrón del modelo. Por eso, cuando cambia la horma o el patrón, conviene revisar también el refuerzo: una pieza que funcionaba bien en un modelo puede quedarse corta, sobrar o marcarse en otro.",
          "También influye el corte: un material delgado deja ver más fácilmente las orillas del refuerzo que uno grueso, y un corte muy flexible necesita un refuerzo que sostenga la forma sin endurecer de más la pieza.",
        ],
      },
      {
        heading: "Paso a paso en la línea",
        blocks: [
          "El orden exacto depende de cada fábrica, pero el proceso suele seguir estos pasos:",
          {
            ordered: true,
            list: [
              "**Corte del refuerzo** con la forma del modelo.",
              "**Rebajado de orillas,** para que el borde del refuerzo no se marque a través del corte.",
              "**Activación del adhesivo,** con calor o en frío, según el tipo de refuerzo.",
              "**Colocación** entre el corte y el forro, bien centrado en la punta o en el talón.",
              "**Montado** sobre la horma, que le da la forma final.",
              "**Reposo o enfriamiento,** para que el refuerzo conserve la forma que tomó en la horma.",
            ],
          },
        ],
      },
      {
        heading: "Qué revisar para que el refuerzo funcione",
        blocks: [
          {
            list: [
              "**Que no se marque.** Si la orilla del refuerzo se nota por fuera, revisa el rebajado y la posición de la pieza.",
              "**Que no se despegue.** Una activación incompleta o una presión dispareja dejan zonas sin unir.",
              "**Que conserve la forma.** Después del uso, la punta y el talón deben recuperar su forma; si se hunden, el refuerzo puede ser demasiado delgado o no quedó bien unido.",
              "**Que sea cómodo.** Un refuerzo demasiado rígido o mal colocado puede lastimar el pie.",
            ],
          },
          "Igual que con cualquier adhesivo, la prueba final está en tu línea: fija los refuerzos con tus materiales y tu horma, y revísalos con tus pruebas de control de calidad.",
        ],
      },
      {
        heading: "Cuándo conviene revisar tus refuerzos",
        blocks: [
          {
            list: [
              "Cuando la orilla del refuerzo empieza a notarse por fuera del corte.",
              "Cuando la punta o el talón pierden la forma antes de lo esperado.",
              "Cuando todavía activas los refuerzos con solvente y quieres quitar esos vapores de la planta.",
              "Cuando cambias de horma, de patrón o de material del corte.",
              "Cuando buscas refuerzos hechos con materiales naturales y reciclados.",
            ],
          },
          "En cualquiera de esos casos, la prueba se hace igual: con tus materiales, tu horma y tus pruebas de control de calidad.",
        ],
      },
      {
        heading: "Refuerzos para marroquinería",
        blocks: [
          "Los mismos principios aplican en bolsos, carteras y otros artículos de piel: los refuerzos dan cuerpo a la pieza y ayudan a que conserve su forma con el tiempo. K Pads desarrolla soportes de refuerzo también para el mercado de la marroquinería. Ver [adhesivos para marroquinería](/aplicaciones/marroquineria).",
        ],
      },
      {
        heading: "Siguiente paso",
        blocks: [
          "Si estás revisando cómo fijas tus refuerzos o quieres dejar los procesos con solvente, conoce [K Pads](/sistemas/k-pads), lee [cómo reducir emisiones de COV en una fábrica de calzado](/guias/como-reducir-emisiones-de-cov-en-una-fabrica-de-calzado) o [solicita una cotización](/contacto#cotizar): un especialista de Kyotex te ayuda a elegir el refuerzo para tu modelo.",
        ],
      },
    ],
  },

  hotmeltTypes: {
    title: "Tipos de hot melt para calzado: TPU, PES, EVA y PBS | Kyotex",
    description:
      "Qué distingue a los hot melt de TPU, PES, EVA y PBS para calzado, en qué presentaciones vienen y cómo elegir el adecuado para tus materiales y tu proceso.",
    h1: "Tipos de hot melt para calzado: TPU, PES, EVA y PBS",
    lead: "Todos los hot melt —o termoadhesivos— trabajan igual: se funden con calor, se prensan y unen al enfriarse. Lo que cambia es el polímero del que están hechos, y eso influye en qué tan flexible queda la unión, a qué temperatura se activa y con qué materiales funciona mejor. Kyotex trabaja en polvo cuatro polímeros: TPU, PES, PBS y EVA.",
    cardText:
      "Qué distingue a cada polímero, en qué presentaciones vienen y cómo elegir según tus materiales.",
    sections: [
      {
        heading: "Lo que tienen en común",
        blocks: [
          "Un hot melt es un polímero termoplástico sin solvente. Kyotex resume su funcionamiento en tres pasos: **fundir, prensar y enfriar**. Como no lleva solvente, no hay que esperar a que nada se evapore; y como es termoplástico, el adhesivo se puede volver a ablandar con calor.",
          "Esa última característica tiene dos caras: permite reactivar una unión, pero también significa que la unión terminada no debe exponerse a temperaturas cercanas a las de activación. Por eso conviene elegir el polímero pensando también en el uso final del calzado.",
          "Además, todo lo que se aplica es adhesivo: no hay una parte que se evapore, así que en la estación no hay vapores de solvente. Lo que sí hay que cuidar es trabajar a la temperatura que indique el fabricante.",
        ],
      },
      {
        heading: "TPU: poliuretano termoplástico",
        blocks: [
          "El TPU es un poliuretano termoplástico. En general se elige cuando la unión debe quedar flexible y acompañar el movimiento del material, algo muy común en el calzado y en los textiles. En la industria del calzado, el TPU está entre las bases más usadas para las películas termoadhesivas.",
          "Por esa flexibilidad, también es una opción a considerar cuando la unión debe resistir flexión repetida. Kyotex incluye el TPU en su gama de polvos termoadhesivos [K Thermo](/sistemas/k-thermo).",
        ],
      },
      {
        heading: "PES: copoliéster",
        blocks: [
          "El PES es un copoliéster termoplástico. Es una base versátil que se usa mucho para unir y laminar textiles y otros materiales.",
          "En el calzado, es una opción a considerar para laminar forros y textiles. Kyotex también lo ofrece en polvo, dentro de K Thermo.",
        ],
      },
      {
        heading: "EVA: etileno-acetato de vinilo",
        blocks: [
          "El EVA es una de las bases más comunes para termoadhesivos. En general se activa a temperaturas más bajas que otras bases, lo que ayuda con materiales sensibles; a cambio, su unión suele resistir menos el calor una vez terminada.",
          "Según Kyotex, el EVA en polvo se usa en grandes volúmenes en piel, calzado, filtración, artículos de viaje y alfombras.",
        ],
      },
      {
        heading: "PBS: polibutileno succinato",
        blocks: [
          "El PBS es un poliéster que Kyotex ofrece como la opción biodegradable de su gama de polvos. Es una alternativa para las marcas que buscan reducir el impacto ambiental de sus materiales, siempre que cumpla con lo que exige la pieza. Como con cualquier adhesivo, confirma con el proveedor cómo se comporta en tu proceso y cómo debe almacenarse.",
        ],
      },
      {
        heading: "Cómo elegir entre ellos",
        blocks: [
          "No hay un polímero mejor que los demás; hay uno más adecuado para cada caso. Antes de pedir muestras, revisa:",
          {
            list: [
              "**Los materiales que vas a unir** y la temperatura que toleran.",
              "**Qué tan flexible debe quedar la unión:** no es lo mismo una plantilla que un refuerzo.",
              "**El uso final del calzado:** si estará expuesto al calor, a la humedad o a lavados.",
              "**Tu equipo:** la prensa o la laminadora debe alcanzar la temperatura y la presión que pide el adhesivo.",
              "**Tus metas ambientales:** si buscas una opción biodegradable, considera el PBS.",
            ],
          },
          "Con esas respuestas, el proveedor puede recomendarte un polímero y una presentación. Después, confírmalo con una prueba en tu línea y con tus pruebas de control de calidad.",
        ],
      },
      {
        heading: "Presentaciones: polvo, película, velo, red y granulado",
        blocks: [
          "El polímero es solo la mitad de la elección; la otra mitad es la forma en que llega el adhesivo. K Thermo se ofrece en cinco presentaciones:",
          {
            list: [
              "**Polvo:** se esparce sobre el material y se activa al prensar. Según Kyotex, el emplantillado es donde alcanza su máxima expresión.",
              "**Película:** una capa continua de adhesivo.",
              "**Velo:** una malla fina de fibras adhesivas.",
              "**Red:** una malla abierta de adhesivo.",
              "**Granulado:** se funde en un equipo antes de aplicarse.",
            ],
          },
          "La película, el velo y la red son comunes en el [laminado](/aplicaciones/laminado); el polvo, en el [emplantillado sin solventes](/aplicaciones/emplantillado-sin-solventes).",
        ],
      },
      {
        heading: "Dónde se usan en el calzado",
        blocks: [
          {
            list: [
              "**Emplantillado:** polvo o película para unir la plantilla.",
              "**Laminado:** para unir forros, textiles y sintéticos antes del corte.",
              "**Refuerzos:** los refuerzos [K Pads](/sistemas/k-pads) vienen tratados con termoadhesivos o con adhesivos en frío Kyotex.",
              "**Marroquinería:** Kyotex publica la unión de PVC y piel entre los usos de su gama de polvos.",
            ],
          },
          "Kyotex también publica usos fuera del calzado, como la lencería y las telas elásticas, la industria automotriz y las alfombras.",
        ],
      },
      {
        heading: "Errores comunes al elegir un hot melt",
        blocks: [
          {
            list: [
              "**Elegir por costumbre.** El polímero que funcionó en un modelo no siempre sirve para otro con materiales distintos.",
              "**Pensar solo en la prensa.** La unión también debe resistir lo que vivirá el calzado: flexión, calor, humedad o lavados.",
              "**No ajustar el proceso.** Cada polímero pide su propia combinación de temperatura, presión y tiempo; usar la de otro adhesivo da uniones débiles.",
              "**Probar solo recién prensado.** Evalúa también después de que la pieza se enfríe y repose.",
              "**Revisar un solo lado.** El adhesivo tiene que funcionar con los dos materiales que une, no solo con uno.",
            ],
          },
        ],
      },
      {
        heading: "Cómo hacer la prueba",
        blocks: [
          {
            ordered: true,
            list: [
              "Usa los mismos materiales y el mismo modelo que produces hoy.",
              "Ajusta temperatura, presión y tiempo según las indicaciones del fabricante del adhesivo.",
              "Evalúa la unión después de enfriar y después del tiempo de reposo que uses normalmente.",
              "Si la pieza se dobla al usarse, flexiónala antes de dar el resultado por bueno.",
              "Compara contra tu método actual y anota los resultados de cada combinación.",
            ],
          },
        ],
      },
      {
        heading: "¿Y si el material no tolera el calor?",
        blocks: [
          "Entonces un hot melt no es la mejor opción. Revisa la cinta autoadhesiva de [K System](/sistemas/k-system) o la unión en frío de [K Next](/sistemas/k-next), y lee [cómo elegir el adhesivo según el material del calzado](/guias/como-elegir-el-adhesivo-segun-el-material-del-calzado).",
        ],
      },
      {
        heading: "Siguiente paso",
        blocks: [
          "Para comparar el hot melt con el pegamento tradicional, lee [termoadhesivo vs pegamento base solvente](/guias/termoadhesivo-vs-pegamento-base-solvente-en-calzado). Si ya sabes qué necesitas, [solicita una cotización](/contacto#cotizar) y un especialista de Kyotex te recomienda el polímero y la presentación para tu proceso.",
        ],
      },
    ],
  },

  materials: {
    title: "Cómo elegir el adhesivo según el material del calzado | Kyotex",
    description:
      "Cómo elegir el adhesivo para piel, sintéticos, textiles, espumas, plantillas y refuerzos: qué revisar en cada material y qué tecnología sin solventes probar.",
    h1: "Cómo elegir el adhesivo según el material del calzado",
    lead: "Un adhesivo que funciona bien en piel puede fallar en una espuma o en un sintético. Por eso, antes de elegir entre cinta PSA, termoadhesivo o unión en frío, hay que entender los materiales que se van a unir. Esta guía repasa los más comunes en el calzado, qué revisar en cada uno y qué tecnología sin solventes conviene probar.",
    cardText:
      "Qué revisar en piel, sintéticos, textiles, espumas, plantillas y refuerzos antes de elegir el adhesivo.",
    sections: [
      {
        heading: "Por qué el material importa tanto",
        blocks: [
          "La unión se forma en la superficie. Para que un adhesivo trabaje, tiene que entrar en contacto estrecho con los dos materiales que une. Si una superficie es porosa, absorbe parte del adhesivo; si es muy lisa o tiene acabados, el adhesivo tiene menos de dónde agarrarse; y si tiene polvo, grasa o restos de otros productos, el adhesivo se pega a esa capa y no al material.",
          "Por eso no existe un adhesivo universal para calzado: hay combinaciones de adhesivo y material que funcionan, y otras que conviene evitar.",
        ],
      },
      {
        heading: "Cuatro preguntas que valen para cualquier material",
        blocks: [
          {
            ordered: true,
            list: [
              "**¿Es poroso o cerrado?** La piel, los textiles y los cartones absorben parte del adhesivo; los plásticos y los acabados lisos no.",
              "**¿Tolera el calor?** Si se deforma, se encoge o se marca con la temperatura, descarta el termoadhesivo para esa unión.",
              "**¿Qué tan flexible debe quedar la unión?** Las zonas que se doblan al caminar necesitan una unión que acompañe el movimiento.",
              "**¿Tiene acabados, grasas o aditivos en la superficie?** Todo lo que quede entre el adhesivo y el material reduce la adherencia.",
            ],
          },
          "Con esas respuestas ya puedes descartar opciones. Lo que quede, se confirma con una prueba en tu línea.",
        ],
      },
      {
        heading: "Piel",
        blocks: [
          "La piel es porosa y suele llevar acabados en la superficie que pueden dificultar la adherencia; por eso, en algunos procesos se prepara la zona de unión antes de pegar. Las pieles con acabados muy cerrados o con mucho engrase se comportan distinto de las más naturales, así que, si cambias de proveedor de piel, repite la prueba.",
          "Para piel, Kyotex trabaja con las cintas PSA de [K System](/sistemas/k-system) —en marroquinería, con equipos como la KYO500 para piezas medianas y grandes— y con los termoadhesivos de [K Thermo](/sistemas/k-thermo). Entre los usos que publica Kyotex para sus polvos está la unión de PVC y piel, y el EVA en polvo se usa en grandes volúmenes en piel y calzado.",
        ],
      },
      {
        heading: "Sintéticos: PU y PVC",
        blocks: [
          "Los sintéticos tienen superficies más cerradas que la piel, y su tolerancia al calor cambia mucho de uno a otro. En algunos PVC flexibles, los plastificantes pueden migrar a la superficie con el tiempo y debilitar la unión, así que conviene probar el adhesivo y revisar la unión también después de un tiempo de reposo.",
          "Si el sintético tolera la temperatura de activación, un termoadhesivo es una opción. Si no, revisa la cinta PSA o [K Next](/sistemas/k-next), que ofrece la fuerza de un termoadhesivo sin calor.",
        ],
      },
      {
        heading: "Textiles y forros",
        blocks: [
          "Los textiles son porosos y flexibles, y muchas veces se laminan antes de cortarse. Para eso se usan termoadhesivos en película, velo, red o polvo, que se reparten sobre la tela y se activan con calor y presión. Más información en [laminado](/aplicaciones/laminado).",
          "Si la tela es elástica, la unión debe acompañar ese estiramiento. Kyotex publica la lencería y las telas elásticas entre los usos de su gama de polvos; para comparar polímeros, lee [tipos de hot melt para calzado](/guias/tipos-de-hot-melt-para-calzado-tpu-pes-eva-pbs).",
        ],
      },
      {
        heading: "Espumas",
        blocks: [
          "Las espumas de las plantillas y de los acolchados pueden aplastarse, encogerse o deformarse con el calor. Si la espuma no tolera la temperatura de activación de un termoadhesivo, conviene una unión en frío: la cinta PSA de K System o, si hace falta fuerza estructural, K Next.",
          "Lee [emplantillado en frío: qué es y cuándo conviene](/guias/emplantillado-en-frio-que-es-y-cuando-conviene) para ver cómo funciona una estación sin calor.",
        ],
      },
      {
        heading: "Plantillas de armado y fibras",
        blocks: [
          "Las plantillas de armado y los materiales de fibra son porosos y firmes. Para unirlos sin solventes se usan la cinta autoadhesiva y el termoadhesivo en polvo, que según Kyotex alcanza su máxima expresión en el emplantillado. Lee [qué es el emplantillado y cómo se hace](/guias/que-es-el-emplantillado-y-como-se-hace).",
        ],
      },
      {
        heading: "Refuerzos",
        blocks: [
          "Las punteras, los contrafuertes y las microfibras de [K Pads](/sistemas/k-pads) ya vienen tratados con adhesivos Kyotex, en caliente o en frío, así que se integran a un proceso sin solventes. Lee [punteras y contrafuertes para calzado](/guias/punteras-y-contrafuertes-para-calzado).",
        ],
      },
      {
        heading: "Combinaciones comunes en el calzado",
        blocks: [
          "En la práctica casi nunca se une un solo material: se unen dos distintos. Algunas combinaciones frecuentes y qué revisar en cada una:",
          {
            list: [
              "**Plantilla de confort sobre plantilla de armado:** la espuma o el textil de la plantilla interior manda; si no tolera calor, elige una unión en frío.",
              "**Forro textil sobre piel o sintético:** el laminado con termoadhesivo es común; revisa que la unión quede flexible.",
              "**Refuerzo entre corte y forro:** revisa que la activación no dañe ni el corte ni el forro.",
              "**Piezas de marroquinería:** la cinta PSA evita el pegamento líquido; para piezas medianas y grandes existe la KYO500.",
            ],
          },
        ],
      },
      {
        heading: "Resumen rápido",
        blocks: [
          {
            list: [
              "**Piel:** cinta PSA o termoadhesivo; revisa los acabados.",
              "**Sintéticos:** termoadhesivo si toleran el calor; si no, cinta PSA o K Next. Prueba también después del reposo.",
              "**Textiles y forros:** termoadhesivo en película, velo, red o polvo.",
              "**Espumas:** unión en frío si no toleran el calor.",
              "**Plantillas y fibras:** cinta PSA o termoadhesivo en polvo.",
              "**Refuerzos:** K Pads, ya tratados con adhesivo.",
            ],
          },
          "Cuando unes dos materiales distintos, el adhesivo tiene que funcionar con los dos: manda el más delicado.",
        ],
      },
      {
        heading: "Errores comunes",
        blocks: [
          {
            list: [
              "**Probar con un material y producir con otro.** Un cambio de proveedor o de acabado puede cambiar el resultado.",
              "**Olvidar la humedad.** Un material húmedo o recién almacenado en un lugar húmedo no se comporta igual que uno seco.",
              "**Revisar solo al momento.** Algunas uniones cambian con el reposo; evalúa también después.",
              "**Elegir el adhesivo antes que el proceso.** Primero define si tu línea puede usar calor, y luego elige la tecnología.",
            ],
          },
        ],
      },
      {
        heading: "Cómo confirmar la elección",
        blocks: [
          {
            ordered: true,
            list: [
              "Prueba con los mismos materiales y el mismo modelo que produces.",
              "Usa las pruebas de adherencia de tu control de calidad.",
              "Evalúa también después del reposo y, si aplica, después de flexionar la pieza.",
              "Registra los resultados de cada combinación de materiales para no repetir pruebas.",
            ],
          },
          "Cuando tengas tus materiales identificados, [solicita una cotización](/contacto#cotizar): un especialista de Kyotex te ayuda a elegir el sistema. También puedes revisar todos los [sistemas Kyotex](/sistemas).",
        ],
      },
    ],
  },
};
