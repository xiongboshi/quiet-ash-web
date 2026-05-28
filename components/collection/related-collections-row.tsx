import { QaImage as Image } from "@/components/ui/qa-image";
import Link from "next/link";
import { essaysCollectionHref } from "@/lib/archive";
import type { SeriesMeta } from "@/lib/series";

type Props = {
  seriesList: SeriesMeta[];
  excludeSlug: string;
};

export function RelatedCollectionsRow({ seriesList, excludeSlug }: Props) {
  const others = seriesList.filter((s) => s.slug !== excludeSlug);
  if (!others.length) return null;
  return (
    <section
      className="mt-16 border-t border-[color-mix(in_srgb,var(--wood)_10%,transparent)] pt-12 lg:mt-20"
      aria-label="Other collections"
    >
      <p className="qa-meta mb-6 tracking-[0.18em] text-[var(--wood)]">
        Related spaces
      </p>
      <ul className="m-0 flex list-none flex-wrap gap-8 p-0">
        {others.map((s) => (
          <li key={s.slug}>
            <Link
              href={essaysCollectionHref(s.slug)}
              className="group flex items-center gap-4 no-underline"
            >
              <div className="relative h-14 w-14 shrink-0 overflow-hidden bg-[#141110]">
                {s.cover ? (
                  <Image
                    src={s.cover}
                    alt=""
                    fill
                    className="object-cover opacity-90"
                    sizes="56px"
                    unoptimized
                  />
                ) : null}
              </div>
              <span className="font-[family-name:var(--font-serif)] text-[1rem] font-medium tracking-[-0.02em] text-[var(--charcoal)] transition-opacity duration-[var(--motion-base)] group-hover:opacity-70">
                {s.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
