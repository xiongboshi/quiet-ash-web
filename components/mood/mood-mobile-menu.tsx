"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { SHOP_INDEX } from "@/lib/site-paths";
import { CartLink } from "@/components/cart/cart-link";

const menuLinkClass =
  "block py-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--mood-ink)] no-underline transition-opacity duration-300 hover:opacity-55";

type Props = {
  className?: string;
};

export function MoodMobileMenu({ className }: Props) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (rootRef.current?.contains(event.target as Node)) return;
      setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div ref={rootRef} className={`relative md:hidden ${className ?? ""}`}>
      <button
        type="button"
        className="qa-mood-menu-trigger flex h-10 w-10 items-center justify-center rounded-[4px] border border-[color-mix(in_srgb,var(--mood-ink)_12%,transparent)] bg-[color-mix(in_srgb,var(--mood-bg)_88%,transparent)] text-[var(--mood-ink)] backdrop-blur-[2px] transition-opacity duration-300 hover:opacity-70"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((prev) => !prev)}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.35"
          aria-hidden
        >
          <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
        </svg>
      </button>

      {open ? (
        <div
          id={panelId}
          role="menu"
          className="qa-mood-menu-panel absolute right-0 top-[calc(100%+8px)] z-50 min-w-[168px] rounded-[4px] border border-[color-mix(in_srgb,var(--mood-ink)_10%,transparent)] bg-[rgba(250,248,244,0.96)] px-5 py-4 shadow-[0_18px_48px_-20px_rgba(28,24,20,0.18)] backdrop-blur-md"
        >
          <nav className="flex flex-col gap-3" aria-label="Menu">
            <Link href={SHOP_INDEX} className={menuLinkClass} role="menuitem" onClick={close}>
              Shop
            </Link>
            <span
              className={`${menuLinkClass} cursor-default opacity-55`}
              role="menuitem"
            >
              Search
            </span>
            <Link href="/about" className={menuLinkClass} role="menuitem" onClick={close}>
              Account
            </Link>
            <CartLink
              className={menuLinkClass}
              onNavigate={close}
            />
          </nav>
        </div>
      ) : null}
    </div>
  );
}
