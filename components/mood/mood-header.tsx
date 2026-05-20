"use client";

import Link from "next/link";
import { CartLink } from "@/components/cart/cart-link";
import { brandHome } from "@/data/brand-home";
import { MOOD_PRIMARY_NAV } from "@/data/mood-nav";
import { MoodMobileMenu } from "@/components/mood/mood-mobile-menu";

const navLinkClass =
  "text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--mood-ink)] no-underline transition-opacity duration-300 hover:opacity-55";

export function MoodHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.04] bg-[var(--mood-bg)]/90 backdrop-blur-md">
      <p className="py-2.5 text-center text-[10px] font-normal tracking-[0.18em] text-[var(--mood-ink-muted)]">
        {brandHome.promo}
      </p>
      <div className="relative mx-auto flex max-w-[min(100%,1680px)] items-center justify-between gap-4 px-[var(--mood-px)] py-5">
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
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

        <div className="hidden items-center gap-6 md:flex">
          <span className={`${navLinkClass} cursor-default`}>Search</span>
          <Link href="/about" className={navLinkClass}>
            Account
          </Link>
          <CartLink className={navLinkClass} />
        </div>

        <MoodMobileMenu />
      </div>
    </header>
  );
}
