"use client";

import Link from "next/link";
import { CartLink } from "@/components/cart/cart-link";
import { brandHome } from "@/data/brand-home";

const NAV = [
  { href: "/objects", label: "Shop" },
  { href: "/#moods", label: "Moods" },
  { href: "/about", label: "About" },
  { href: "/essays", label: "Journal" },
] as const;

export function MoodHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--mood-bg)]/92 backdrop-blur-md">
      <p className="border-b border-black/[0.06] py-2 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--mood-ink-soft)]">
        {brandHome.promo}
      </p>
      <div className="relative mx-auto flex max-w-[min(100%,1200px)] items-center justify-between gap-4 px-[var(--mood-px)] py-4">
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--mood-ink)] no-underline transition-opacity duration-500 hover:opacity-60"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="flex flex-col items-center text-center no-underline md:absolute md:left-1/2 md:-translate-x-1/2"
        >
          <span className="text-[13px] font-semibold uppercase tracking-[0.28em] text-[var(--mood-ink)]">
            {brandHome.siteTitle}
          </span>
          <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.32em] text-[var(--mood-ink-muted)]">
            {brandHome.siteSubtitle}
          </span>
        </Link>

        <MoodNavActions />
      </div>
    </header>
  );
}

function MoodNavActions() {
  return (
    <div className="flex items-center gap-5">
      <Link
        href="/objects"
        className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--mood-ink)] md:hidden"
      >
        Shop
      </Link>
      <span className="hidden text-[11px] uppercase tracking-[0.14em] text-[var(--mood-ink-soft)] md:inline">
        Search
      </span>
      <Link
        href="/about"
        className="hidden text-[11px] uppercase tracking-[0.14em] text-[var(--mood-ink-soft)] no-underline hover:opacity-60 md:inline"
      >
        Account
      </Link>
      <span className="[&_a]:text-[11px] [&_a]:uppercase [&_a]:tracking-[0.14em] [&_a]:text-[var(--mood-ink)] [&_a]:no-underline">
        <CartLink />
      </span>
    </div>
  );
}
