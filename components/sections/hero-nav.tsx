"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { CartLink } from "@/components/cart/cart-link";
import { CONTAINER_PAD } from "@/components/ui/Container";
import { PRIMARY_NAV } from "@/lib/site-nav";

function NavItem({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className="font-[family-name:var(--font-sans)] text-[12px] font-normal uppercase tracking-[0.18em] text-[rgba(255,255,255,0.8)] no-underline transition-opacity duration-[600ms] ease-out hover:opacity-70 aria-[current=page]:opacity-100"
    >
      {label}
    </Link>
  );
}

function MenuGlyph({ open }: { open: boolean }) {
  const stroke = "stroke-white/90";
  if (open) {
    return (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          className={stroke}
          strokeWidth={1.35}
          strokeLinecap="round"
          d="M6 6l12 12M18 6L6 18"
        />
      </svg>
    );
  }
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        className={stroke}
        strokeWidth={1.35}
        strokeLinecap="round"
        d="M5 7h14M5 12h14M5 17h14"
      />
    </svg>
  );
}

/**
 * Reference navbar — 96px: logo left, nav centered in the space between wordmark and cart (no absolute centering; avoids tablet overlap). No blur / glass.
 */
export function HeroNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) document.documentElement.style.overflow = "hidden";
    else document.documentElement.style.overflow = "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div
        className={`qa-container ${CONTAINER_PAD} relative flex h-24 items-center justify-between lg:justify-start`}
      >
        <Link
          href="/"
          className="relative z-10 shrink-0 font-[family-name:var(--font-serif)] text-[28px] font-light uppercase tracking-[0.28em] text-white no-underline"
        >
          Quiet Ash
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-6 lg:flex lg:gap-14"
          aria-label="Primary"
        >
          {PRIMARY_NAV.map(({ href, label }) => (
            <NavItem key={href} href={href} label={label} />
          ))}
        </nav>

        <div className="relative z-10 flex shrink-0 items-center justify-end lg:ml-3">
          <CartLink className="hidden font-[family-name:var(--font-sans)] text-[12px] font-normal uppercase tracking-[0.18em] text-[rgba(255,255,255,0.8)] no-underline transition-opacity duration-[600ms] ease-out hover:opacity-70 lg:inline" />
          <button
            type="button"
            className="ml-3 flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <MenuGlyph open={open} />
          </button>
        </div>
      </div>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 cursor-default bg-black/50"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div
            id={panelId}
            className={`fixed left-0 right-0 top-24 z-50 border-b border-white/10 bg-[#0b0b0b] ${CONTAINER_PAD} py-6`}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <nav className="flex flex-col gap-4" aria-label="Primary">
              {PRIMARY_NAV.map(({ href, label }) => (
                <NavItem key={href} href={href} label={label} />
              ))}
              <CartLink
                className="pt-2 font-[family-name:var(--font-sans)] text-[12px] font-normal uppercase tracking-[0.18em] text-[rgba(255,255,255,0.8)] no-underline transition-opacity duration-[600ms] ease-out hover:opacity-70"
                onNavigate={() => setOpen(false)}
              />
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}
