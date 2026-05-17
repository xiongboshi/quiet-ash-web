import Image from "next/image";
import Link from "next/link";
import type { EditorialCollectionWithProducts } from "@/lib/collections";
import { Container } from "@/components/ui/Container";

type Props = {
  collection: EditorialCollectionWithProducts;
  eyebrow?: string;
  ctaLabel?: string;
};

export function EditorialCollectionHighlight({
  collection: c,
  eyebrow = "Featured atmosphere",
  ctaLabel = "Enter the collection",
}: Props) {
  const href = `/collections/${c.slug}`;
  const src = c.coverImage ?? "/images/hero-objects.svg";
  return (
    <section className="qa-section--editorial border-t border-[var(--qa-border)] bg-[color-mix(in_srgb,var(--qa-bg-soft)_38%,var(--qa-bg))]">
      <Container variant="wide">
        <p className="qa-eyebrow-brand mb-6 text-[var(--wood)] sm:mb-8">{eyebrow}</p>
        <Link
          href={href}
          className="group grid gap-12 no-underline lg:grid-cols-[1.12fr_0.88fr] lg:items-stretch lg:gap-16 xl:gap-20"
        >
          <div className="qa-media-frame qa-media-frame--archival relative min-h-[min(58vw,480px)] w-full overflow-hidden bg-[#ede6dc] lg:min-h-[min(52vw,600px)] lg:max-h-[min(85vh,760px)]">
            <Image
              src={src}
              alt=""
              fill
              className="qa-presence-img object-cover object-center !brightness-[1.06] !contrast-[1.03] transition-opacity duration-[var(--motion-slow)] ease-out group-hover:opacity-[0.94]"
              sizes="(max-width: 1024px) 100vw, min(720px, 58vw)"
              unoptimized
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[rgba(0,0,0,0.06)]"
              aria-hidden
            />
          </div>
          <div className="flex flex-col justify-center gap-6 lg:gap-8 lg:py-4">
            <p className="qa-meta text-[var(--wood)]">{c.mood}</p>
            <h2 className="max-w-[14ch] font-[family-name:var(--font-serif)] text-[clamp(1.85rem,4.5vw,2.65rem)] font-medium leading-[1.05] tracking-[-0.035em] text-[var(--qa-text)] transition-opacity duration-[var(--motion-base)] group-hover:opacity-80 sm:max-w-[18ch]">
              {c.title}
            </h2>
            <p className="max-w-[28ch] font-[family-name:var(--font-serif)] text-[clamp(1.08rem,2.5vw,1.28rem)] font-normal italic leading-[1.45] tracking-[-0.02em] text-[color-mix(in_srgb,var(--qa-muted)_22%,var(--qa-text))]">
              {c.tagline}
            </p>
            <span className="qa-eyebrow-brand inline-block pt-1 text-[var(--qa-muted)] underline decoration-[color-mix(in_srgb,var(--qa-muted)_35%,transparent)] underline-offset-[0.4em]">
              {ctaLabel}
            </span>
          </div>
        </Link>
      </Container>
    </section>
  );
}
