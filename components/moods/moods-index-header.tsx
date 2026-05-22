"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { moodsIndexNav } from "@/data/moods-index";
import { useCartHydrated } from "@/lib/cart/use-cart-hydrated";
import { MOODS_INDEX, SHOP_INDEX } from "@/lib/site-paths";
import { selectCartCount, useCartStore } from "@/stores/cart-store";

function navActive(pathname: string, href: string): boolean {
  if (href === MOODS_INDEX) {
    return pathname === MOODS_INDEX;
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

function UserIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx={12} cy={8} r={3.5} stroke="currentColor" strokeWidth={1.25} />
      <path
        d="M5 20c1.5-3.5 4-5 7-5s5.5 1.5 7 5"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx={11} cy={11} r={6} stroke="currentColor" strokeWidth={1.25} />
      <path
        d="M16 16l4.5 4.5"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
      />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 9V7a4 4 0 118 0v2"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
      />
      <path
        d="M6 9h12l-1 11H7L6 9z"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MoodsIndexHeader() {
  const pathname = usePathname() ?? "";
  const hydrated = useCartHydrated();
  const count = useCartStore((s) => selectCartCount(s.items));
  const cartCount = hydrated ? count : 0;

  return (
    <header className="moods-index-header">
      <div className="container moods-index-header-inner">
        <Link href="/" className="moods-index-logo">
          Quiet Ash
        </Link>

        <nav className="moods-index-nav" aria-label="Primary">
          {moodsIndexNav.map((item) => {
            const active = navActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={active ? "is-active" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="moods-index-utilities">
          <button type="button" className="moods-index-lang" aria-label="Language">
            <span>EN</span>
            <svg width={10} height={10} viewBox="0 0 12 12" fill="none" aria-hidden>
              <path
                d="M3 5l3 3 3-3"
                stroke="currentColor"
                strokeWidth={1.1}
                strokeLinecap="round"
              />
            </svg>
          </button>
          <Link href="/about" className="moods-index-icon-btn" aria-label="Account">
            <UserIcon />
          </Link>
          <Link href={SHOP_INDEX} className="moods-index-icon-btn" aria-label="Search">
            <SearchIcon />
          </Link>
          <Link href="/cart" className="moods-index-cart" aria-label="Cart">
            <BagIcon />
            <span className="moods-index-cart-count">{cartCount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
