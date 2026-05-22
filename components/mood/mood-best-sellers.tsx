import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { shopPath } from "@/lib/site-paths";
import { homeBestSellers } from "@/data/best-sellers-home";
import { brandHome } from "@/data/brand-home";

export function MoodBestSellers() {
  const { bestSellers } = brandHome;

  return (
    <section className="qa-mood-best-sellers bg-white px-[var(--mood-px)] py-[28px]">
      <div className="mx-auto max-w-[min(100%,1680px)]">
        <header className="relative mb-10 flex items-center justify-center sm:mb-12">
          <h2 className="qa-mood-section-heading">
            {bestSellers.heading}
          </h2>
          <Link
            href={bestSellers.viewAllHref}
            className="absolute right-0 top-1/2 inline-flex -translate-y-1/2 items-center gap-1.5 text-[10px] font-normal uppercase tracking-[0.18em] text-[var(--mood-ink)] no-underline transition-opacity duration-300 hover:opacity-55"
          >
            {bestSellers.viewAllLabel}
            <span aria-hidden>→</span>
          </Link>
        </header>

        <div className="grid gap-[30px] md:gap-[34px] lg:grid-cols-3">
          {homeBestSellers.map((item) => {
            const href = shopPath(item.slug);

            return (
              <article
                key={item.slug}
                className="qa-mood-best-card group overflow-hidden rounded-[4px] bg-[#f7f4ef] shadow-[0_18px_48px_-28px_rgba(28,24,20,0.1)]"
                style={{ "--mood-poster-ink": "#1c1c1c" } as CSSProperties}
              >
                <div className="flex min-h-[248px] sm:min-h-[264px]">
                  <div
                    className="qa-mood-best-visual relative w-[calc(50%-20px)] shrink-0 overflow-hidden"
                    style={{ background: "#f7f4ef" }}
                  >
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      className="qa-mood-best-photo object-cover"
                      style={{ objectPosition: item.imageObjectPosition }}
                      sizes="(max-width: 1024px) 50vw, 200px"
                      unoptimized
                    />
                  </div>

                  <div className="relative flex min-w-0 flex-1 flex-col bg-[#f7f4ef] px-5 py-5 sm:px-6 sm:py-6">
                    <Link
                      href={href}
                      className="flex flex-1 flex-col no-underline"
                    >
                      <h3 className="qa-mood-poster-label">
                        {item.title}
                      </h3>
                      <div className="qa-mood-best-details mt-[30px]">
                        <p className="qa-mood-poster-tagline">{item.scentNotes}</p>
                        <p className="qa-mood-best-specs mt-1 text-[var(--mood-ink-muted)]">
                          10.5cm · 30 Sticks
                        </p>
                      </div>
                      <p className="mt-3 font-[family-name:var(--font-sans)] text-[15px] font-normal text-[var(--mood-ink)] sm:text-[16px]">
                        {item.priceDisplay}
                      </p>
                    </Link>

                    <Link
                      href={href}
                      className="qa-mood-best-add absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-full text-[18px] font-light leading-none text-[var(--mood-ink)] no-underline transition-transform duration-400 group-hover:scale-105 sm:bottom-6 sm:right-6"
                      style={{ background: "#f3f3f3" }}
                      aria-label={`View ${item.title}`}
                    >
                      +
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
