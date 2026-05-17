import Image from "next/image";
import Link from "next/link";
import type { CatalogProduct } from "@/lib/catalog";
import type { EssayMeta } from "@/lib/essays";
import type { Ritual } from "@/lib/rituals";
import { getEssayBySlug, getEssaysByRecentDate } from "@/lib/essays";
import { getPairedProductsFor, pairOverrideFor } from "@/lib/catalog";
import {
  getRitualsBySlugs,
  getRitualsUsingProduct,
} from "@/lib/rituals";
import { EditorialBackLink } from "@/components/editorial/editorial-back-link";
import { PageShell } from "@/components/layout/page-shell";
import { ObjectHeroGallery } from "@/components/objects/object-hero-gallery";
import {
  ObjectMobilePurchaseDock,
  ObjectPurchaseActionsInline,
} from "@/components/objects/object-purchase-actions-client";
import { ObjectCatalogLinkColumns } from "@/components/objects/object-catalog-link-columns";
import {
  OBJECT_COL_LABEL,
  OBJECT_COL_LIST,
  OBJECT_DETAILS_LABEL,
  OBJECT_DETAILS_NOTE,
  OBJECT_DETAILS_ROW,
  OBJECT_DETAILS_TERM,
  OBJECT_DETAILS_VALUE,
  OBJECT_ROW_ARROW,
  OBJECT_ROW_BLURB,
  OBJECT_ROW_LINK,
  OBJECT_ROW_META,
  OBJECT_ROW_PRICE,
  OBJECT_ROW_THUMB,
  OBJECT_ROW_THUMB_SIZE,
  OBJECT_ROW_TITLE,
  OBJECT_ESSAY_BODY,
  OBJECT_ESSAY_CARD,
  OBJECT_ESSAY_LIST,
  OBJECT_ESSAY_LIST_WRAP,
  OBJECT_ESSAY_CTA,
  OBJECT_ESSAY_EXCERPT,
  OBJECT_ESSAY_THUMB,
  OBJECT_ESSAY_THUMB_SIZE,
  OBJECT_ESSAY_TITLE,
} from "@/components/objects/object-detail-section-styles";

const DEFAULT_FEATURES = [
  "Ships worldwide",
  "Wrapped in linen cloth",
  "Hand-finished variations may occur",
  "Easy returns",
] as const;

function featureBulletKind(text: string): "globe" | "gift" | "sparkles" | "clock" | "dot" {
  const t = text.toLowerCase();
  if (t.includes("ship")) return "globe";
  if (t.includes("wrap") || t.includes("linen")) return "gift";
  if (t.includes("hand") || t.includes("variation")) return "sparkles";
  if (t.includes("return")) return "clock";
  return "dot";
}

function FeatureBulletIcon({
  kind,
  className,
}: {
  kind: ReturnType<typeof featureBulletKind>;
  className?: string;
}) {
  const cn = className ?? "mt-0.5 h-[15px] w-[15px] shrink-0 text-[#6f6a63]";
  if (kind === "globe") {
    return (
      <svg aria-hidden viewBox="0 0 24 24" fill="none" className={cn}>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.25" />
        <path
          d="M3.5 12h17M12 3.5c2.8 4 2.8 14 0 18M12 3.5c-2.8 4-2.8 14 0 18"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (kind === "gift") {
    return (
      <svg aria-hidden viewBox="0 0 24 24" fill="none" className={cn}>
        <rect x="5.5" y="10" width="13" height="11" rx="1" stroke="currentColor" strokeWidth="1.25" />
        <path
          d="M12 5v16M7.5 10h9"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <path
          d="M9 10c0-2.2 1.35-3.75 3-3.75S15 7.8 15 10"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (kind === "sparkles") {
    return (
      <svg aria-hidden viewBox="0 0 24 24" fill="none" className={cn}>
        <path
          d="M12 5v2.5M12 16.5V19M7 12h2.5M14.5 12H17M9.3 9.3l1.8 1.8M12.9 12.9l1.8 1.8M14.7 9.3l-1.8 1.8M9.3 14.7l1.8-1.8"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (kind === "clock") {
    return (
      <svg aria-hidden viewBox="0 0 24 24" fill="none" className={cn}>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.25" />
        <path
          d="M12 7.5V12l3.5 2"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <span
      aria-hidden
      className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#6f6a63]"
    />
  );
}

function ritualBlurb(r: Ritual): string {
  const first = r.excerpt
    .split(/\n/)
    .map((l) => l.trim())
    .find(Boolean);
  return (first ?? r.title).slice(0, 96);
}

function resolveRitualsForProduct(product: CatalogProduct): {
  ritual: Ritual;
  title: string;
  blurb: string;
}[] {
  if (product.usedInRituals?.length) {
    const rows = getRitualsBySlugs(product.usedInRituals.map((x) => x.slug));
    return rows.map((r) => {
      const entry = product.usedInRituals!.find((u) => u.slug === r.slug);
      return {
        ritual: r,
        title: entry?.title ?? r.title,
        blurb: entry?.blurb ?? ritualBlurb(r),
      };
    });
  }
  return getRitualsUsingProduct(product.slug).map((r) => ({
    ritual: r,
    title: r.title,
    blurb: ritualBlurb(r),
  }));
}

function detailSizeValue(p: CatalogProduct): string | undefined {
  if (!p.dimensions) return undefined;
  const [size] = p.dimensions.split(" · ");
  return size?.trim() || p.dimensions;
}

function buildDetailRows(p: CatalogProduct): { label: string; value: string }[] {
  const rows: { label: string; value: string }[] = [];
  if (p.material) rows.push({ label: "Material", value: p.material });
  if (p.origin) rows.push({ label: "Origin", value: p.origin });
  const size = detailSizeValue(p);
  if (size) rows.push({ label: "Size", value: size });
  if (p.capacity) rows.push({ label: "Capacity", value: p.capacity });
  if (p.finish) rows.push({ label: "Finish", value: p.finish });
  if (p.care) rows.push({ label: "Care", value: p.care });
  return rows;
}

/** Hero strip: exactly five thumbnails; cycles distinct URLs if fewer than five exist. */
function resolveHeroGallery(product: CatalogProduct): string[] {
  const base = product.image;
  const raw = product.gallery?.filter(Boolean) ?? [];
  const order: string[] = [];
  const push = (u: string) => {
    if (u && !order.includes(u)) order.push(u);
  };
  push(base);
  for (const u of raw) push(u);
  if (order.length === 0) order.push(base);
  const out: string[] = [];
  for (let i = 0; i < 5; i++) {
    out.push(order[i % order.length]!);
  }
  return out;
}

function resolveRelatedEssays(product: CatalogProduct): EssayMeta[] {
  const out: EssayMeta[] = [];
  const preferred = product.relatedEssaySlugs ?? [];
  for (const slug of preferred) {
    const full = getEssayBySlug(slug);
    if (full && !out.some((x) => x.slug === full.slug)) {
      out.push({
        slug: full.slug,
        title: full.title,
        date: full.date,
        excerpt: full.excerpt,
        series: full.series,
        order: full.order,
        language: full.language,
        readingMinutes: full.readingMinutes,
        ...(full.threads ? { threads: full.threads } : {}),
        ...(full.strandNote ? { strandNote: full.strandNote } : {}),
        ...(full.coverImage ? { coverImage: full.coverImage } : {}),
      });
    }
    if (out.length >= 3) return out;
  }
  for (const e of getEssaysByRecentDate(24)) {
    if (out.some((x) => x.slug === e.slug)) continue;
    out.push(e);
    if (out.length >= 3) break;
  }
  return out.slice(0, 3);
}

type Props = { product: CatalogProduct };

const OBJECT_HERO_PRICE =
  "m-0 text-left font-[family-name:var(--font-serif)] text-[32px] font-medium not-italic leading-none tracking-[-0.052em] text-[#0f0e0d] [font-variant-numeric:lining-nums]";

export function ObjectDetailLayout({ product }: Props) {
  const ritualsRows = resolveRitualsForProduct(product);
  const ritualHref = ritualsRows[0]
    ? `/rituals/${ritualsRows[0].ritual.slug}`
    : "/rituals";
  const paired = getPairedProductsFor(product, 3);
  const relatedEssays = resolveRelatedEssays(product);
  const heroGallery = resolveHeroGallery(product);
  const narrativeTitle =
    product.narrativeTitle ?? "Made for quiet moments. Held by hand. Used without hurry.";
  const narrativeBody =
    product.narrativeBody ??
    "Each piece carries small variations from material and hand — not flaws, but evidence of process.";
  const narrativeImage = product.narrativeImage ?? product.image;
  const detailRows = buildDetailRows(product);
  const disclaimer =
    product.detailsDisclaimer ??
    "Due to the nature of hand-finished pieces, size and color may vary slightly.";
  const features = product.featureBullets?.length
    ? product.featureBullets
    : [...DEFAULT_FEATURES];
  const price = product.priceDisplay ?? "—";
  const catalogLinkRowCount = Math.max(
    ritualsRows.length,
    paired.length,
    1,
  );

  return (
    <PageShell className="!pt-0 !pb-0">
      <article className="qa-object-editorial w-full bg-[var(--qa-bg)] pb-[calc(5.25rem+env(safe-area-inset-bottom))] text-[var(--qa-text)] lg:pb-0">
        {/* Hero — text rail / main image + gallery */}
        <section className="overflow-x-clip border-b border-[#ddd7cf] bg-[var(--qa-bg)]">
          <ObjectHeroGallery
            images={heroGallery}
            productTitle={product.title}
            infoMain={
              <>
              <EditorialBackLink fallbackHref="/objects" />
              <p className={`${OBJECT_HERO_PRICE} mt-0 lg:hidden`}>
                <span className="underline decoration-[rgba(15,14,13,0.35)] decoration-1 underline-offset-[5px]">
                  {price}
                </span>
              </p>
              <h1 className="mt-4 max-w-full font-[family-name:var(--font-serif)] text-[clamp(2rem,4vw,2.85rem)] font-light leading-[1.06] tracking-[-0.04em] text-[#1a1816] lg:mt-8">
                {product.title}
              </h1>
              <p className="mt-4 max-w-[36ch] font-[family-name:var(--font-serif)] text-[clamp(1.05rem,1.8vw,1.2rem)] font-light italic leading-[1.55] tracking-[-0.02em] text-[#342e29]">
                {product.line}
              </p>
              <ul className="mt-8 flex list-none flex-col gap-3.5 p-0">
                {features.map((text) => (
                  <li
                    key={text}
                    className="flex items-start gap-3 font-[family-name:var(--font-sans)] text-[13px] font-normal leading-[1.45] text-[#342e29]"
                  >
                    <FeatureBulletIcon kind={featureBulletKind(text)} />
                    {text}
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-1.5 font-[family-name:var(--font-sans)] text-[12px] font-normal uppercase tracking-[0.14em] text-[#6f6a63]">
                {product.material ? (
                  <p className="m-0">
                    {product.material}
                    {product.finish ? ` · ${product.finish}` : ""}
                  </p>
                ) : null}
                {product.origin ? <p className="m-0">{product.origin}</p> : null}
                {product.dimensions ? (
                  <p className="m-0 normal-case tracking-normal text-[#342e29]">
                    {product.dimensions}
                  </p>
                ) : null}
              </div>
              <p className={`${OBJECT_HERO_PRICE} mt-10 hidden lg:block`}>
                {price}
              </p>
              <ObjectPurchaseActionsInline product={product} />
              </>
            }
          />
        </section>

        <div className="qa-container px-[var(--qa-container-px)]">
          {/* Narrative band — ~1/3 serif headline + ~2/3 landscape image, vertically centered */}
          <div className="mx-auto max-w-[min(100%,var(--qa-container-width))] border-t border-[#ddd7cf] bg-[var(--qa-bg)] py-[14px]">
            <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:items-center lg:gap-x-7 lg:gap-y-0">
              <div className="min-w-0 lg:max-w-[min(100%,34rem)] lg:pr-1">
                <h2 className="m-0 max-w-[min(100%,28rem)] text-pretty font-[family-name:var(--font-serif)] text-[clamp(calc(1.2rem+1px),calc(2vw+1px),calc(1.75rem+1px))] font-normal leading-[1.12] tracking-[-0.038em] text-[#1a1816]">
                  {narrativeTitle}
                </h2>
                <p className="mt-2.5 max-w-[min(100%,30rem)] font-[family-name:var(--font-serif)] text-[calc(0.875rem+3px)] font-medium leading-[1.55] tracking-[-0.012em] text-[#5c554d]">
                  {narrativeBody}
                </p>
              </div>
              <figure className="relative aspect-[16/10] min-h-[67px] w-full min-w-0 overflow-hidden bg-[#161210] sm:min-h-[80px] lg:col-start-2 lg:aspect-[16/9] lg:min-h-0">
                <Image
                  src={narrativeImage}
                  alt=""
                  fill
                  className="object-cover object-center brightness-[0.88] contrast-[1.03] saturate-[0.82]"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  unoptimized
                />
              </figure>
            </div>
          </div>

          {/* Three columns */}
          <div className="mx-auto max-w-[min(100%,var(--qa-container-width))] border-t border-[#ddd7cf] py-4 lg:py-5">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-x-7 lg:gap-y-0">
              <div className="min-w-0 lg:hidden">
                <p className={OBJECT_COL_LABEL}>Used in these rituals</p>
                <ul className={OBJECT_COL_LIST}>
                  {ritualsRows.length ? (
                    ritualsRows.map(({ ritual, title, blurb }) => (
                      <li key={ritual.slug} className="m-0 p-0">
                        <Link
                          href={`/rituals/${ritual.slug}`}
                          className={OBJECT_ROW_LINK}
                        >
                          <figure className={OBJECT_ROW_THUMB}>
                            <Image
                              src={
                                ritual.coverImage ??
                                ritual.steps?.[0]?.image ??
                                product.image
                              }
                              alt=""
                              fill
                              className="object-cover object-center brightness-[0.88] contrast-[1.02] saturate-[0.8] transition-transform duration-[500ms] ease-out group-hover:scale-[1.03]"
                              sizes={OBJECT_ROW_THUMB_SIZE}
                              unoptimized
                            />
                          </figure>
                          <div className="min-w-0 flex-1 pr-1">
                            <p className={OBJECT_ROW_TITLE}>{title}</p>
                            <p className={OBJECT_ROW_BLURB}>{blurb}</p>
                          </div>
                          <span className={OBJECT_ROW_ARROW} aria-hidden>
                            →
                          </span>
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className="py-2 font-[family-name:var(--font-serif)] text-[12px] font-light text-[#6b645d]">
                      Ritual pairings will appear as the archive grows.
                    </li>
                  )}
                </ul>
              </div>

              <div className="min-w-0 lg:hidden">
                <p className={OBJECT_COL_LABEL}>Pairs quietly with</p>
                <ul className={OBJECT_COL_LIST}>
                  {paired.map((p) => {
                    const override = pairOverrideFor(product, p.slug);
                    const pairTitle = override?.title ?? p.title;
                    const materialLine =
                      override?.materialLine ??
                      [p.material, p.origin].filter(Boolean).join(" · ");
                    const pairPrice = override?.priceDisplay ?? p.priceDisplay;
                    return (
                      <li key={p.slug} className="m-0 p-0">
                        <Link
                          href={`/objects/${p.slug}`}
                          className={OBJECT_ROW_LINK}
                        >
                          <figure className={OBJECT_ROW_THUMB}>
                            <Image
                              src={p.image}
                              alt=""
                              fill
                              className="object-cover object-center brightness-[0.9] contrast-[1.02] saturate-[0.85] transition-transform duration-[500ms] ease-out group-hover:scale-[1.03]"
                              sizes={OBJECT_ROW_THUMB_SIZE}
                              unoptimized
                            />
                          </figure>
                          <div className="min-w-0 flex-1 pr-1">
                            <p className={OBJECT_ROW_TITLE}>{pairTitle}</p>
                            {materialLine ? (
                              <p className={OBJECT_ROW_META}>{materialLine}</p>
                            ) : null}
                            {pairPrice ? (
                              <p className={OBJECT_ROW_PRICE}>{pairPrice}</p>
                            ) : null}
                          </div>
                          <span className={OBJECT_ROW_ARROW} aria-hidden>
                            →
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <ObjectCatalogLinkColumns
                product={product}
                ritualsRows={ritualsRows}
                paired={paired}
                rowCount={catalogLinkRowCount}
                className="hidden min-w-0 lg:col-span-2 lg:grid"
              />

              <div className="min-w-0 text-left lg:col-start-3 lg:row-start-1">
                <p className={OBJECT_DETAILS_LABEL}>Details</p>
                <dl className="mt-4 m-0 border-t border-[color-mix(in_srgb,#ddd7cf_80%,transparent)] p-0">
                  {detailRows.map((row) => (
                    <div key={row.label} className={OBJECT_DETAILS_ROW}>
                      <dt className={OBJECT_DETAILS_TERM}>{row.label}</dt>
                      <dd className={OBJECT_DETAILS_VALUE}>{row.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className={OBJECT_DETAILS_NOTE}>{disclaimer}</p>
              </div>
            </div>
          </div>

          {/* Related essays */}
          <div className="mx-auto max-w-[min(100%,var(--qa-container-width))] border-t border-[#ddd7cf] pb-5 pt-[clamp(0.825rem,2vw,1.175rem)]">
            <p className={OBJECT_COL_LABEL}>Related essays</p>
            <div className={OBJECT_ESSAY_LIST_WRAP}>
              <div className={OBJECT_ESSAY_LIST}>
                {relatedEssays.map((e) => (
                  <Link
                    key={e.slug}
                    href={`/essays/${e.slug}`}
                    className={OBJECT_ESSAY_CARD}
                  >
                    <figure className={OBJECT_ESSAY_THUMB}>
                      <Image
                        src={
                          e.coverImage ??
                          "/images/generated/essay-night-incense-ritual.png"
                        }
                        alt=""
                        fill
                        className="object-cover object-center brightness-[0.88] contrast-[1.02] saturate-[0.8] transition-transform duration-[600ms] ease-out group-hover:scale-[1.02]"
                        sizes={OBJECT_ESSAY_THUMB_SIZE}
                        unoptimized
                      />
                    </figure>
                    <div className={OBJECT_ESSAY_BODY}>
                      <h3 className={OBJECT_ESSAY_TITLE}>{e.title}</h3>
                      <p className={OBJECT_ESSAY_EXCERPT}>{e.excerpt}</p>
                      <span className={OBJECT_ESSAY_CTA}>Read essay →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <ObjectMobilePurchaseDock product={product} />
      </article>
    </PageShell>
  );
}
