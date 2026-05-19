import Image from "next/image";
import Link from "next/link";
import { brandHome } from "@/data/brand-home";
import { homeSocialTiles } from "@/data/social-home";
import { siteContact } from "@/data/site";

export function MoodHomeFooter() {
  const { philosophy, social } = brandHome;

  return (
    <footer className="qa-mood-footer border-t border-black/[0.05] bg-[var(--mood-cream)] px-[var(--mood-px)] pt-[28px] pb-0 lg:pr-0">
      <div className="mx-auto grid max-w-[min(100%,1680px)] gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-0">
        <div className="qa-mood-footer-brand lg:py-2 lg:pr-16">
          <div className="w-1/2 max-w-[50%]">
            <p className="qa-mood-footer-title font-[family-name:var(--font-serif)] text-[clamp(1.35rem,3vw,1.5rem)] font-light uppercase tracking-[0.12em] text-[var(--mood-ink)]">
              {brandHome.siteTitle}
            </p>
            <p className="mt-8 text-[15px] leading-[1.7] text-[var(--mood-ink-soft)]">
              {philosophy.body}
            </p>
            <Link
              href={philosophy.cta.href}
              className="qa-mood-footer-story-btn mt-10 inline-flex rounded-[var(--mood-radius-btn)] border border-[var(--mood-ink)]/15 px-8 py-3 text-[11px] font-normal uppercase tracking-[0.14em] text-[var(--mood-ink)] no-underline transition-colors duration-500 hover:bg-[var(--mood-ink)] hover:text-[var(--mood-bg)]"
            >
              {philosophy.cta.label}
            </Link>
          </div>
        </div>

        <div className="qa-mood-footer-social -mx-[var(--mood-px)] border-t border-black/[0.05] bg-[#f7f4ef] px-[var(--mood-px)] py-10 text-center lg:mx-0 lg:border-l lg:border-t-0 lg:py-12 lg:pl-16 lg:pr-[var(--mood-px)]">
          <p className="text-[11px] font-normal uppercase tracking-[0.22em] text-[var(--mood-ink-muted)]">
            {social.eyebrow}
          </p>
          <a
            href={siteContact.instagram}
            className="mt-4 inline-block font-[family-name:var(--font-serif)] text-[18px] font-light lowercase text-[var(--mood-ink)] no-underline transition-opacity hover:opacity-55"
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.handle}
          </a>

          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-3">
            {homeSocialTiles.map((item) => (
              <div
                key={item.imageSrc}
                className="relative size-[120px] overflow-hidden rounded-[4px] bg-[var(--mood-beige)] shadow-[var(--mood-shadow-soft)]"
              >
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              </div>
            ))}
          </div>

          <a
            href={siteContact.instagram}
            className="qa-mood-footer-instagram-btn mt-8 inline-flex rounded-[var(--mood-radius-btn)] bg-[#e8e4dc] px-10 py-3.5 text-[10px] font-normal uppercase tracking-[0.18em] text-[var(--mood-ink)] no-underline transition-colors duration-500 hover:bg-[#ddd8cf]"
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.instagramCta}
          </a>
        </div>
      </div>
    </footer>
  );
}
