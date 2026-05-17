import type { CatalogProduct } from "@/lib/catalog";
import { ProductCard } from "@/components/ui/ProductCard";

type Props = {
  products: CatalogProduct[];
  heading?: string;
  /** Soft editorial line above the grid — not a CTA. */
  intro?: string;
  /**
   * `compact` — cap grid width so four-up tiles read smaller (e.g. ritual detail rail).
   * Still `md:grid-cols-4`; does not change column count.
   */
  density?: "default" | "compact";
};

export function RelatedObjectsStrip({
  products,
  heading = "Related objects",
  intro,
  density = "default",
}: Props) {
  if (!products.length) return null;
  const compact = density === "compact";
  const gridClass = compact
    ? "mx-auto grid w-full max-w-[min(100%,50rem)] grid-cols-1 items-start gap-5 gap-y-10 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-10 md:grid-cols-4 md:gap-x-3 md:gap-y-10 lg:gap-x-4"
    : "grid grid-cols-1 items-start gap-6 gap-y-12 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 md:grid-cols-4 md:gap-x-5 md:gap-y-12 lg:gap-x-6";

  return (
    <section
      className="mt-[var(--reading-tail)] border-t border-[color-mix(in_srgb,var(--wood)_12%,transparent)] pt-[var(--rhythm-lg)]"
      aria-label={heading}
    >
      <h2 className="qa-meta mb-[var(--rhythm-md)] tracking-[0.18em] text-[var(--wood)]">
        {heading}
      </h2>
      {intro ? (
        <p className="qa-body mb-[var(--rhythm-md)] max-w-[52ch] text-[color-mix(in_srgb,var(--ash)_94%,var(--wood))]">
          {intro}
        </p>
      ) : null}
      <div className={gridClass}>
        {products.map((p) => (
          <div key={p.slug} className="min-w-0">
            <ProductCard
              product={p}
              presentation="archival"
              compactRail
            />
          </div>
        ))}
      </div>
    </section>
  );
}
