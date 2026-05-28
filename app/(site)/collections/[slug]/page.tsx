import Link from "next/link";
import { QaImage as Image } from "@/components/ui/qa-image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { RelatedObjectsStrip } from "@/components/commerce/related-objects-strip";
import { RitualBody } from "@/components/mdx/ritual-body";
import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";
import { editorialCollections } from "@/data/collections";
import { getEditorialCollectionWithProducts } from "@/lib/collections";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return editorialCollections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getEditorialCollectionWithProducts(slug);
  if (!c) return {};
  return {
    title: `${c.title} · Collections`,
    description: c.tagline,
    alternates: { canonical: `/collections/${slug}` },
  };
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const c = getEditorialCollectionWithProducts(slug);
  if (!c) notFound();

  const src = c.coverImage ?? "/images/hero-objects.svg";

  return (
    <PageShell>
      <article className="w-full">
        <div className="relative left-1/2 -ml-[50vw] w-screen max-w-[100vw] lg:mx-auto lg:ml-0 lg:w-full">
          <figure className="relative aspect-[16/11] w-full overflow-hidden bg-[#0c0a09] sm:aspect-[2/1]">
            <Image
              src={src}
              alt=""
              fill
              priority
              className="object-cover object-center opacity-[0.9]"
              sizes="100vw"
              unoptimized
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[color-mix(in_srgb,#0c0a09_32%,transparent)]"
              aria-hidden
            />
          </figure>
        </div>
        <Container variant="wide" className="pb-[var(--space-section)] pt-10">
          <Link
            href="/collections"
            className="qa-meta text-[var(--wood)] underline decoration-[color-mix(in_srgb,var(--wood)_30%,transparent)] underline-offset-[0.3em]"
          >
            ← Collections
          </Link>
          <p className="qa-eyebrow-brand mt-8 text-[var(--wood)]">{c.mood}</p>
          <h1 className="mt-3 max-w-[18ch] font-[family-name:var(--font-serif)] text-[clamp(2rem,5vw,2.85rem)] font-medium leading-[1.06] tracking-[-0.04em] text-[var(--charcoal)]">
            {c.title}
          </h1>
          <p className="mt-6 max-w-[40ch] font-[family-name:var(--font-serif)] text-[1.15rem] font-normal italic leading-[1.5] text-[color-mix(in_srgb,var(--wood)_85%,var(--ash))]">
            {c.tagline}
          </p>
          {c.statementMd ? (
            <div className="mt-10 max-w-[56ch]">
              <div className="markdown markdown--article">
                <RitualBody source={c.statementMd} />
              </div>
            </div>
          ) : null}
          <RelatedObjectsStrip
            products={c.products}
            heading="Objects in this atmosphere"
            intro="If the mood is true, you will feel what belongs — weight, glaze, grain — without a pitch."
          />
          <p className="mt-14">
            <Link
              href="/journal"
              className="qa-meta text-[var(--wood)] underline decoration-[color-mix(in_srgb,var(--wood)_30%,transparent)] underline-offset-[0.3em]"
            >
              Read related essays
            </Link>
          </p>
        </Container>
      </article>
    </PageShell>
  );
}
