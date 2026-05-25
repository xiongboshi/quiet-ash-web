"use client";

import Link from "next/link";
import { CartLink } from "@/components/cart/cart-link";
import { brandHome } from "@/data/brand-home";
import { MOOD_PRIMARY_NAV } from "@/data/mood-nav";
import { MoodMobileMenu } from "@/components/mood/mood-mobile-menu";

const navLinkClass =
  "text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--mood-ink)] no-underline transition-opacity duration-300 hover:opacity-55";

type Props = { promo: string };

export function MoodHeroNav({ promo }: Props) {
  return (
    <header className="relative z-30 w-full">
      <p className="bg-[rgba(245,242,236,0.72)] py-2 text-center text-[10px] font-normal uppercase tracking-[0.2em] text-[var(--mood-ink-soft)] backdrop-blur-[2px]">
        {promo}
      </p>
      <div className="qa-mood-hero-nav mx-auto flex w-full max-w-[1680px] items-center justify-between px-[var(--mood-px)] py-5 md:px-0">
        <nav
          className="hidden min-w-[280px] items-center gap-7 md:flex"
          aria-label="Primary"
        >
          {MOOD_PRIMARY_NAV.map((item) => (
            <Link key={item.label} href={item.href} className={navLinkClass}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="qa-mood-wordmark qa-mood-wordmark--left-mobile relative z-10 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2"
        >
          <span className="qa-mood-wordmark-title">{brandHome.siteTitle}</span>
          <span className="qa-mood-wordmark-subtitle">
            {brandHome.siteSubtitle}
          </span>
        </Link>

        <div className="hidden min-w-[280px] items-center justify-end gap-7 md:flex">
          <CartLink className={navLinkClass} />
        </div>

        <MoodMobileMenu />
      </div>
    </header>
  );
}
