"use client";

import Link from "next/link";
import { SHOP_INDEX, shopPath } from "@/lib/site-paths";
import { CartLink } from "@/components/cart/cart-link";
import { brandHome } from "@/data/brand-home";
import { MOOD_PRIMARY_NAV } from "@/data/mood-nav";

export function MoodHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.04] bg-[var(--mood-bg)]/90 backdrop-blur-md">
      <p className="py-2.5 text-center text-[10px] font-normal tracking-[0.18em] text-[var(--mood-ink-muted)]">
        {brandHome.promo}
      </p>
      <div className="relative mx-auto flex max-w-[min(100%,1680px)] items-center justify-between gap-4 px-[var(--mood-px)] py-5">
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {MOOD_PRIMARY_NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[12px] font-normal tracking-[0.06em] text-[var(--mood-ink)] no-underline transition-opacity duration-500 hover:opacity-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/" className="qa-mood-wordmark absolute left-1/2 -translate-x-1/2">
          <span className="qa-mood-wordmark-title">
            {brandHome.siteTitle}
          </span>
          <span className="qa-mood-wordmark-subtitle">
            {brandHome.siteSubtitle}
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href={SHOP_INDEX}
            className="text-[12px] font-normal text-[var(--mood-ink)] md:hidden"
          >
            Shop
          </Link>
          <span className="hidden text-[12px] text-[var(--mood-ink-muted)] md:inline">
            Search
          </span>
          <Link
            href="/about"
            className="hidden text-[12px] text-[var(--mood-ink-muted)] no-underline hover:opacity-50 md:inline"
          >
            Account
          </Link>
          <span className="[&_a]:text-[12px] [&_a]:text-[var(--mood-ink)] [&_a]:no-underline">
            <CartLink />
          </span>
        </div>
      </div>
    </header>
  );
}
