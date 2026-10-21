import type { Localized } from "@/lib/i18n";

export type SiteImage = {
  src: string;
  width: number;
  height: number;
  alt: Localized<string>;
};

// Solo fotos y fotogramas reales del proyecto (videos y fotos de Kyotex).
export const IMAGES = {
  tradeShow: {
    src: "/images/maquinas-kyotex-kyo100s-kyo101-feria.jpg",
    width: 1536,
    height: 864,
    alt: {
      es: "Máquinas Kyotex KYO100S y KYO101 en el stand de una feria industrial, con un rollo de cinta adhesiva montado",
      en: "Kyotex KYO100S and KYO101 machines on a trade show stand, with a roll of adhesive tape loaded",
    },
  },
  kyo101: {
    src: "/images/maquina-kyotex-kyo101.jpg",
    width: 1280,
    height: 720,
    alt: {
      es: "Máquina Kyotex KYO101 con rollos de cinta adhesiva montados",
      en: "Kyotex KYO101 machine with rolls of adhesive tape loaded",
    },
  },
  components: {
    src: "/images/maquina-kyotex-system-componentes.jpg",
    width: 1280,
    height: 720,
    alt: {
      es: "Vista interna de una máquina Kyotex System: rodillos, engranes y tarjetas electrónicas",
      en: "Inside a Kyotex System machine: rollers, gears and electronic boards",
    },
  },
  insoleTape: {
    src: "/images/maquina-kyotex-system-cinta-plantillas.jpg",
    width: 1280,
    height: 720,
    alt: {
      es: "Máquina Kyotex System aplicando cinta adhesiva con siluetas de plantillas",
      en: "Kyotex System machine applying adhesive tape printed with insole outlines",
    },
  },
  heroPoster: {
    src: "/video/kyotex-hero-poster.jpg",
    width: 1280,
    height: 720,
    alt: {
      es: "Máquina de aplicación de adhesivo Kyotex System",
      en: "Kyotex System adhesive application machine",
    },
  },
  machineryPoster: {
    src: "/video/kyotex-machinery-poster.jpg",
    width: 1280,
    height: 720,
    alt: {
      es: "Máquina Kyotex System en funcionamiento",
      en: "Kyotex System machine in operation",
    },
  },
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof IMAGES;

// Videos reales del sitio; las fechas son las de su publicación en el sitio.
export const VIDEOS = {
  hero: {
    webm: "/video/kyotex-hero.webm",
    mp4: "/video/kyotex-hero.mp4",
    poster: "/video/kyotex-hero-poster.webp",
    thumbnail: "/video/kyotex-hero-poster.jpg",
    uploadDate: "2026-08-25T01:45:22+00:00",
    duration: "PT10S",
    name: {
      es: "Componentes de una máquina Kyotex System",
      en: "Inside a Kyotex System machine",
    },
    description: {
      es: "Animación de una máquina de aplicación Kyotex System que se separa en sus componentes para mostrar su ensamblaje interno.",
      en: "Animation of a Kyotex System application machine separating into its components to show how it is built inside.",
    },
  },
  machinery: {
    webm: "/video/kyotex-machinery.webm",
    mp4: "/video/kyotex-machinery.mp4",
    poster: "/video/kyotex-machinery-poster.webp",
    thumbnail: "/video/kyotex-machinery-poster.jpg",
    uploadDate: "2026-08-25T02:20:48+00:00",
    duration: "PT3S",
    name: {
      es: "Máquina Kyotex System en funcionamiento",
      en: "Kyotex System machine in operation",
    },
    description: {
      es: "Máquina de aplicación Kyotex System en funcionamiento, con la cinta adhesiva y las siluetas de plantillas avanzando por la bandeja.",
      en: "Kyotex System application machine running, with adhesive tape printed with insole outlines feeding across the tray.",
    },
  },
} as const;

export type VideoKey = keyof typeof VIDEOS;
