import Image from "next/image";
import Link from "next/link";
import type { EditorialCollectionWithProducts } from "@/lib/collections";
import { Container } from "@/components/ui/Container";

type Props = {
  collections: EditorialCollectionWithProducts[];
  eyebrow?: string;
  title?: string;
  description?: string;
  /** Homepage: fewer, larger, asymmetric composition */
  maxItems?: number;
  layout?: "full" | "home-feature";
};

function CollectionCard({
  c,
  imageClass,
}: {
  c: EditorialCollectionWithProducts;
  imageClass: string;
}) {
  return (
    <Link
      href={`/collections/${c.slug}`}
      className="qa-cta group block min-w-0 no-underline"
    >
      <div
        className={`qa-media-frame qa-media-frame--archival relative w-full overflow-hidden bg-[#161210] ${imageClass}`}
      >
        <Image
          src={c.coverImage ?? "/images/hero-objects.svg"}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover object-center opacity-[0.9] transition-opacity duration-[var(--motion-base)] ease-out group-hover:opacity-[0.84]"
          unoptimized
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0a09]/50 to-transparent"
          aria-hidden
        />
      </div>
      <p className="qa-meta mt-5 text-[var(--wood)]">{c.mood}</p>
      <h3 className="mt-1 font-[family-name:var(--font-serif)] text-[clamp(1.15rem,2.2vw,1.35rem)] font-medium tracking-[-0.02em] text-[var(--qa-text)] transition-opacity duration-[var(--motion-base)] group-hover:opacity-75">
        {c.title}
      </h3>
      <p className="mt-2 max-w-[40ch] font-[family-name:var(--font-serif)] text-[0.98rem] font-normal italic leading-snug text-[color-mix(in_srgb,var(--qa-muted)_18%,var(--qa-text))]">
        {c.tagline}
      </p>
    </Link>
  );
}

export function CollectionGrid({
  collections,
  eyebrow = "Curated atmospheres",
  title = "Collections",
  description = "Not aisles — rooms, intervals, and moods. Each collection gathers objects that belong to the same evening.",
  maxItems,
  layout = "full",
}: Props) {
  if (!collections.length) return null;
  const items = maxItems ? collections.slice(0, maxItems) : [...collections];

  const asymmetric =
    layout === "home-feature" && items.length >= 3 ? items.slice(0, 3) : null;

  return (
    <section
      className="qa-section--editorial border-t border-[var(--qa-border)] bg-[var(--qa-bg)]"
      aria-label={title}
    >
      <Container variant="wide">
        <p className="qa-eyebrow-brand text-[var(--wood)]">{eyebrow}</p>
        <h2 className="mt-5 max-w-[20ch] font-[family-name:var(--font-serif)] text-[clamp(1.85rem,4vw,2.5rem)] font-medium leading-[1.06] tracking-[-0.035em] text-[var(--charcoal)]">
          {title}
        </h2>
        <p className="mt-6 max-w-[min(52ch,100%)] font-[family-name:var(--font-sans)] text-[0.95rem] leading-[1.72] text-[color-mix(in_srgb,var(--ash)_92%,var(--wood))]">
          {description}
        </p>

        {asymmetric ? (
          <ul className="mt-16 list-none p-0 lg:mt-[clamp(3.5rem,8vw,5rem)] lg:grid lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0">
            <li className="min-w-0 lg:col-span-7 lg:row-span-2">
              <CollectionCard
                c={asymmetric[0]}
                imageClass="aspect-[16/11] min-h-[min(64vw,320px)] lg:min-h-[min(48vw,520px)]"
              />
            </li>
            <li className="mt-14 min-w-0 lg:col-span-5 lg:mt-0 lg:pl-2">
              <CollectionCard
                c={asymmetric[1]}
                imageClass="aspect-[5/4] min-h-[min(52vw,240px)] lg:aspect-[4/5] lg:min-h-0"
              />
            </li>
            <li className="mt-12 min-w-0 border-t border-[color-mix(in_srgb,var(--qa-muted)_12%,transparent)] pt-12 lg:col-span-5 lg:mt-10 lg:border-t-0 lg:pt-0 lg:pl-2">
              <CollectionCard
                c={asymmetric[2]}
                imageClass="aspect-[21/9] min-h-[min(40vw,200px)] lg:aspect-[3/2]"
              />
            </li>
          </ul>
        ) : (
          <ul className="mt-14 grid list-none grid-cols-1 gap-14 p-0 sm:grid-cols-2 lg:mt-20 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-20 xl:grid-cols-3">
            {items.map((c) => (
              <li key={c.slug} className="min-w-0">
                <CollectionCard
                  c={c}
                  imageClass="aspect-[4/3] min-h-[min(48vw,260px)]"
                />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
