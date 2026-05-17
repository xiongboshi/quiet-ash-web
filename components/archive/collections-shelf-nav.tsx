import Link from "next/link";
import { essaysCollectionHref } from "@/lib/essays-collection";
import type { SeriesMeta } from "@/lib/series";

type Props = {
  seriesList: SeriesMeta[];
  activeSlug: string;
};

const linkClass = (active: boolean) =>
  `grid w-full grid-cols-[1.75rem_minmax(0,1fr)] items-baseline gap-x-3 py-1.5 font-[family-name:var(--font-serif)] text-[15px] font-normal leading-normal tracking-[0.01em] no-underline transition-none ${
    active
      ? "text-[#1A1A1A]"
      : "text-[color-mix(in_srgb,#6F6A63_92%,#1A1A1A)] hover:text-[#1A1A1A]"
  }`;

const titleClass = (active: boolean) =>
  active
    ? "min-w-0 underline decoration-[#1A1A1A] decoration-1 underline-offset-[5px]"
    : "min-w-0";

/** Desktop archive index — number + title; active row underlined. */
export function CollectionsShelfNav({ seriesList, activeSlug }: Props) {
  return (
    <nav aria-label="Archive index" className="sticky top-[120px] self-start">
      <p className="mb-6 font-[family-name:var(--font-sans)] text-[11px] font-medium uppercase tracking-[0.12em] text-[#6F6A63]">
        Archive index
      </p>
      <ul className="m-0 list-none space-y-0 p-0">
        {seriesList.map((s, index) => {
          const href = essaysCollectionHref(s.slug);
          const active = s.slug === activeSlug;
          const num = String(index + 1).padStart(2, "0");
          return (
            <li key={s.slug}>
              <Link
                href={href}
                scroll={false}
                aria-current={active ? "page" : undefined}
                className={linkClass(active)}
              >
                <span className="shrink-0 tabular-nums">{num}</span>
                <span className={titleClass(active)}>{s.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
