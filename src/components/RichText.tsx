import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Texto con dos marcas sencillas: [texto](/ruta) para enlaces y **texto** para
 * negritas. Así el contenido vive en archivos de datos y sigue enlazando entre páginas.
 */
export function inline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text))) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    if (match[1] !== undefined) {
      const [label, href] = [match[1], match[2]];
      parts.push(
        href.startsWith("/") ? (
          <Link key={key++} href={href}>
            {label}
          </Link>
        ) : (
          <a key={key++} href={href} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        )
      );
    } else {
      parts.push(<strong key={key++}>{match[3]}</strong>);
    }
    last = pattern.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export type Block =
  | string
  | { list: string[]; ordered?: boolean }
  | { h3: string };

export type Section = { heading: string; id?: string; blocks: Block[] };

/** Secciones con H2, párrafos, subtítulos H3 y listas. */
export function Sections({ sections }: { sections: Section[] }) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.heading} id={section.id}>
          <h2>{section.heading}</h2>
          {section.blocks.map((block, i) => {
            if (typeof block === "string") return <p key={i}>{inline(block)}</p>;
            if ("h3" in block) return <h3 key={i}>{block.h3}</h3>;
            const ListTag = block.ordered ? "ol" : "ul";
            return (
              <ListTag key={i}>
                {block.list.map((item) => (
                  <li key={item}>{inline(item)}</li>
                ))}
              </ListTag>
            );
          })}
        </section>
      ))}
    </>
  );
}

/** Cuenta palabras del contenido (sin las marcas de enlace) para verificar extensión. */
export function countWords(texts: string[]) {
  return texts
    .join(" ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*/g, "")
    .split(/\s+/)
    .filter(Boolean).length;
}
