import Image from "next/image";
import Link from "next/link";
import { MoodHeader } from "@/components/mood/mood-header";
import { brandHome } from "@/data/brand-home";
import { brandMoods } from "@/data/brand-moods";
import { getFeaturedForHome } from "@/lib/catalog";
import { siteContact } from "@/data/site";

const moodCardIcon: Record<string, string> = {
  calm: "o",
  energy: "*",
  sleep: "c",
  focus: ".",
  "rainy-day": "~",
};

export function MoodHome() {
  const products = getFeaturedForHome(3);
  const { hero } = brandHome;

  return (
    <div className="min-h-screen bg-[var(--mood-bg)] text-[var(--mood-ink)]">
      <MoodHeader />

      <section className="relative overflow-hidden px-[var(--mood-px)] pb-[var(--mood-section-y)] pt-6 md:pt-10">
        <div className="mx-auto grid max-w-[min(100%,1200px)] items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <h1 className="text-balance font-[family-name:var(--font-sans)] text-[clamp(2.25rem,6vw,3.75rem)] font-medium leading-[1.08] tracking-[-0.03em] text-[var(--mood-ink)]">
              {hero.title}
            </h1>
            <Link
              href={hero.cta.href}
              className="mt-8 inline-flex items-center justify-center rounded-[var(--mood-radius-btn)] bg-[var(--mood-ink)] px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--mood-bg)] no-underline transition-transform duration-500 hover:scale-[1.02]"
            >
              {hero.cta.label}
            </Link>
          </div>
          <div className="order-1 relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[var(--mood-radius-lg)] shadow-[var(--mood-shadow-card)] lg:order-2 lg:max-w-none">
            <Image
              src={hero.imageSrc}
              alt={hero.imageAlt}
              fill
              priority
              className="object-cover object-center transition-transform duration-[800ms] ease-out hover:scale-[1.03]"
              sizes="(max-width: 1024px) 90vw, 50vw"
              unoptimized
            />
          </div>
        </div>
      </section>

      <MoodSectionsPlaceholder products={products} />
    </div>
  );
}

function MoodSectionsPlaceholder({
  products,
}: {
  products: ReturnType<typeof getFeaturedForHome>;
}) {
  const { moods, bestSellers, moments, philosophy, social } = brandHome;
  return (
    <>
      <section
        id="moods"
        className="scroll-mt-24 px-[var(--mood-px)] pb-[var(--mood-section-y)]"
      >
        <div className="mx-auto max-w-[min(100%,1200px)]">
          <p className="text-center text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--mood-ink-muted)]">
            {moods.eyebrow}
          </p>
          <h2 className="mt-3 text-center text-[clamp(1.5rem,4vw,2.25rem)] font-medium tracking-[-0.02em]">
            {moods.title}
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
            {brandMoods.map((mood) => (
              <Link
                key={mood.slug}
                href={mood.href}
                className="group flex min-h-[200px] flex-col justify-between rounded-[var(--mood-radius-md)] p-5 no-underline transition-[transform,box-shadow] duration-500 hover:scale-[var(--mood-hover-scale)] hover:shadow-[var(--mood-shadow-hover)]"
                style={{ backgroundColor: mood.color }}
              >
                <span className="text-2xl opacity-70" aria-hidden>
                  {moodCardIcon[mood.slug] ?? "?"}
                </span>
                <div>
                  <p className="text-[15px] font-semibold tracking-[-0.01em] text-[var(--mood-ink)]">
                    {mood.label}
                  </p>
                  <p className="mt-1 text-[12px] leading-snug text-[var(--mood-ink-soft)]">
                    {mood.tagline}
                  </p>
                  <span className="mt-4 inline-block text-[18px] leading-none opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--mood-cream)] px-[var(--mood-px)] py-[var(--mood-section-y)]">
        <div className="mx-auto max-w-[min(100%,1200px)]">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--mood-ink-muted)]">
            {bestSellers.eyebrow}
          </p>
          <h2 className="mt-3 text-[clamp(1.5rem,4vw,2rem)] font-medium tracking-[-0.02em]">
            {bestSellers.title}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/objects/${p.slug}`}
                className="group block no-underline"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--mood-radius-md)] bg-[var(--mood-beige)] shadow-[var(--mood-shadow-soft)] transition-[transform,box-shadow] duration-500 group-hover:scale-[var(--mood-hover-scale)] group-hover:shadow-[var(--mood-shadow-hover)]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                </div>
                <p className="mt-4 text-[15px] font-medium text-[var(--mood-ink)]">
                  {p.title}
                </p>
                {p.line ? (
                  <p className="mt-1 text-[13px] text-[var(--mood-ink-soft)]">
                    {p.line}
                  </p>
                ) : null}
                {p.priceDisplay ? (
                  <p className="mt-2 text-[13px] text-[var(--mood-ink)]">
                    {p.priceDisplay}
                  </p>
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-[var(--mood-px)] py-[var(--mood-section-y)]">
        <div className="mx-auto max-w-[min(100%,1200px)]">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--mood-ink-muted)]">
            {moments.eyebrow}
          </p>
          <h2 className="mt-3 text-[clamp(1.5rem,4vw,2rem)] font-medium tracking-[-0.02em]">
            {moments.title}
          </h2>
          <div className="mt-12 flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-5 md:gap-4 md:overflow-visible [&::-webkit-scrollbar]:hidden">
            {moments.items.map((item) => (
              <figure
                key={item.label}
                className="relative min-w-[42%] shrink-0 sm:min-w-[28%] md:min-w-0"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--mood-radius-md)] shadow-[var(--mood-shadow-soft)]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 45vw, 20vw"
                    unoptimized
                  />
                </div>
                <figcaption className="mt-3 text-center text-[12px] text-[var(--mood-ink-soft)]">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-black/[0.06] bg-[var(--mood-cream)] px-[var(--mood-px)] py-[var(--mood-section-y-lg)]">
        <div className="mx-auto grid max-w-[min(100%,1200px)] gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em]">
              {brandHome.siteTitle}
            </p>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[var(--mood-ink-soft)]">
              {philosophy.title} {philosophy.body}
            </p>
            <Link
              href={philosophy.cta.href}
              className="mt-8 inline-flex rounded-[var(--mood-radius-btn)] border border-[var(--mood-ink)]/20 px-6 py-2.5 text-[11px] uppercase tracking-[0.16em] text-[var(--mood-ink)] no-underline transition-colors hover:bg-[var(--mood-ink)] hover:text-[var(--mood-bg)]"
            >
              {philosophy.cta.label}
            </Link>
          </div>
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--mood-ink-muted)]">
              {social.eyebrow}
            </p>
            <a
              href={siteContact.instagram}
              className="mt-3 inline-block text-[14px] text-[var(--mood-ink)] no-underline hover:opacity-60"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.handle}
            </a>
            <div className="mt-8 grid grid-cols-3 gap-2 sm:grid-cols-5">
              {moments.items.map((item, i) => (
                <div
                  key={`${item.label}-${i}`}
                  className="relative aspect-square overflow-hidden rounded-[var(--mood-radius-sm)] bg-[var(--mood-beige)]"
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="120px"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="mx-auto mt-16 max-w-[min(100%,1200px)] text-center text-[11px] text-[var(--mood-ink-muted)]">
          <a href={`mailto:${siteContact.email}`} className="text-inherit">
            {siteContact.email}
          </a>
          {" ? "}? {new Date().getFullYear()} {brandHome.siteTitle}
        </p>
      </footer>
    </>
  );
}

