import Link from "next/link";
import { defaultFeaturedObjectsIntro } from "@/data/home";
import { getFeaturedForHome } from "@/lib/catalog";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/ui/ProductCard";

/** Matches `FeaturedRitual` section H2 — same spec title + letterfit as ritual column. */
const objectsIntroTitleBase =
  "qa-spec-section-title qa-spec-section-title--objects mb-8 tracking-[-0.038em] text-[var(--qa-text)]";

function ObjectsIntroTitle({
  title,
  className,
}: {
  title: string;
  className: string;
}) {
  const lines = title.split(/\n/);
  const head = lines[0]?.trim() ?? title;
  const tail = lines.slice(1).join(" ").trim();
  const stacked = (
    <>
      {head}
      {tail ? (
        <>
          <br />
          <span className="whitespace-nowrap">{tail}</span>
        </>
      ) : null}
    </>
  );
  const inline = [head, tail].filter(Boolean).join(" ");

  return (
    <h2
      className={`${className} md:max-w-none md:leading-[1.08] lg:max-w-[min(22ch,100%)]`}
    >
      <span className="md:hidden">{stacked}</span>
      <span className="hidden whitespace-nowrap md:inline lg:hidden">{inline}</span>
      <span className="hidden lg:inline">{stacked}</span>
    </h2>
  );
}

export type FeaturedObjectsProps = {
  intro?: Partial<typeof defaultFeaturedObjectsIntro>;
  limit?: number;
};

/**
 * Homepage object rail — lg: mirrors `FeaturedRitual` (360px + 72px + media column) so tiles align with the ritual image above; section vertical padding 40px.
 */
export function FeaturedObjects(props: FeaturedObjectsProps = {}) {
  const { intro: introOverrides, limit = 4 } = props;
  const intro = { ...defaultFeaturedObjectsIntro, ...introOverrides };
  const products = getFeaturedForHome(limit);

  const [first, second] = products;

  if (!products.length) return null;

  const splitEditorial = products.length >= 3;

  const productRailCols =
    products.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";

  return (
    <section className="border-t border-[#DDD7CF] bg-paper py-[40px]">
      <Container variant="wide">
        {splitEditorial ? (
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[360px_1fr] lg:items-stretch lg:gap-x-[72px] lg:gap-y-0">
            <header className="flex min-h-0 w-full max-w-[320px] flex-col lg:max-w-none lg:self-stretch">
              <p className="mb-5 font-[family-name:var(--font-sans)] text-[12px] font-medium uppercase tracking-[0.22em] text-[#6F6A63]">
                {intro.eyebrow}
              </p>
              <ObjectsIntroTitle
                title={intro.title}
                className={`${objectsIntroTitleBase} max-w-[min(22ch,100%)]`}
              />
              {intro.action ? (
                <div className="mt-10 lg:mt-auto lg:pt-12">
                  <Link
                    href={intro.action.href}
                    className="qa-cta qa-cta--still inline-block pb-0.5 font-[family-name:var(--font-sans)] text-[13px] font-normal uppercase tracking-[0.18em] text-[color-mix(in_srgb,#6F6A63_88%,#1A1A1A)] underline decoration-[color-mix(in_srgb,#6F6A63_22%,transparent)] decoration-1 underline-offset-[6px] transition-opacity duration-[600ms] ease-out"
                  >
                    {intro.action.label}
                  </Link>
                </div>
              ) : null}
            </header>

            <div
              className={`grid min-w-0 grid-cols-2 gap-x-6 gap-y-12 ${productRailCols} lg:gap-x-12 lg:gap-y-0`}
            >
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
          </div>
        ) : first && second ? (
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-x-20">
            <div className="min-w-0">
              <p className="mb-5 font-[family-name:var(--font-sans)] text-[12px] font-medium uppercase tracking-[0.22em] text-[#6F6A63]">
                {intro.eyebrow}
              </p>
              <ObjectsIntroTitle
                title={intro.title}
                className={`${objectsIntroTitleBase} max-w-[min(20ch,100%)]`}
              />
              <ProductCard
                product={first}
                variant="showcase"
                showcaseHeight="tall"
                presentation="archival"
              />
            </div>
            <div className="min-w-0 lg:pt-16">
              <ProductCard
                product={second}
                variant="showcase"
                showcaseHeight="medium"
                presentation="archival"
              />
            </div>
          </div>
        ) : (
          <div className="max-w-[min(100%,520px)]">
            <p className="mb-5 font-[family-name:var(--font-sans)] text-[12px] font-medium uppercase tracking-[0.22em] text-[#6F6A63]">
              {intro.eyebrow}
            </p>
            <ObjectsIntroTitle
              title={intro.title}
              className={`${objectsIntroTitleBase} max-w-[min(20ch,100%)]`}
            />
            {first ? (
              <ProductCard
                product={first}
                variant="showcase"
                showcaseHeight="tall"
                presentation="archival"
              />
            ) : null}
          </div>
        )}
      </Container>
    </section>
  );
}
