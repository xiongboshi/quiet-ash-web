import Link from "next/link";
import { SHOP_INDEX, shopPath } from "@/lib/site-paths";
import type { CatalogProduct } from "@/lib/catalog";
import { ProductCard } from "@/components/ui/ProductCard";
import { Container } from "@/components/ui/Container";

type Props = {
  intro: string;
  products: [CatalogProduct, CatalogProduct];
};

/** Asymmetric pair — staggered vertical rhythm */
export function EditorialProductPair({ intro, products }: Props) {
  const [a, b] = products;
  if (!a || !b) return null;
  return (
    <section
      className="qa-section--objects border-t border-[var(--qa-border)] bg-[var(--qa-bg)]"
      aria-label="Curated pair"
    >
      <Container variant="wide">
        <p className="qa-eyebrow-brand text-[var(--wood)]">Curated pair</p>
        <p className="mt-6 max-w-[min(48ch,100%)] font-[family-name:var(--font-serif)] text-[clamp(1.08rem,2.5vw,1.22rem)] font-normal italic leading-[1.58] text-[color-mix(in_srgb,var(--wood)_88%,var(--ash))]">
          {intro}
        </p>
        <div className="mt-14 grid grid-cols-1 gap-14 lg:mt-16 lg:grid-cols-[1.12fr_0.88fr] lg:items-start lg:gap-x-16 xl:gap-x-20">
          <div className="min-w-0">
            <ProductCard
              product={a}
              variant="showcase"
              showcaseHeight="tall"
              presentation="archival"
            />
          </div>
          <div className="min-w-0 lg:pt-[clamp(2.5rem,9vw,5.5rem)]">
            <ProductCard
              product={b}
              variant="showcase"
              showcaseHeight="medium"
              presentation="archival"
            />
          </div>
        </div>
        <p className="mt-14 lg:mt-16">
          <Link
            href={SHOP_INDEX}
            className="qa-meta text-[var(--wood)] underline decoration-[color-mix(in_srgb,var(--wood)_28%,transparent)] underline-offset-[0.35em] transition-opacity duration-[var(--motion-base)] hover:opacity-70"
          >
            View all objects
          </Link>
        </p>
      </Container>
    </section>
  );
}
