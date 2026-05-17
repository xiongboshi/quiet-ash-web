"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { CartLink } from "@/components/cart/cart-link";
import { Container } from "@/components/ui/Container";
import { HOME_NAV_ITEM, PRIMARY_NAV } from "@/lib/site-nav";

function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const active =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`border-b bg-transparent p-0 pb-[3px] font-[family-name:var(--font-sans)] text-[12px] font-medium uppercase tracking-[0.18em] no-underline transition-[opacity,color,border-color] duration-[600ms] ease-out ${
        active
          ? "border-[var(--qa-text)] text-[var(--qa-text)]"
          : "border-transparent text-[color-mix(in_srgb,var(--qa-text)_58%,var(--qa-muted))] hover:opacity-70"
      }`}
    >
      {children}
    </Link>
  );
}

const RITUALS_INDEX = "/rituals";
const OBJECTS_INDEX = "/objects";
const ESSAYS_INDEX = "/essays";

function normalizePathname(pathname: string | null): string {
  if (!pathname) return "";
  const base = pathname.split("?")[0]?.split("#")[0] ?? "";
  if (base.length > 1 && base.endsWith("/")) return base.slice(0, -1);
  return base;
}

/** Detail pages ? history back with section index fallback when no history */
function getMobileHistoryBackFallback(pathname: string | null): string | null {
  const path = normalizePathname(pathname);
  if (/^\/objects\/[^/]+$/.test(path)) return OBJECTS_INDEX;
  if (/^\/rituals\/[^/]+$/.test(path)) return RITUALS_INDEX;
  if (/^\/essays\/[^/]+$/.test(path)) return ESSAYS_INDEX;
  return null;
}

/** Browser history back ? cart and detail pages (fallback when no history). */
function MobileHistoryBackButton({
  fallbackHref = "/",
  className,
}: {
  fallbackHref?: string;
  className?: string;
}) {
  const router = useRouter();

  return (
    <button
      type="button"
      className={`${MOBILE_BACK_BTN} ${className ?? "justify-self-end"}`.trim()}
      aria-label="Go back"
      onClick={() => {
        if (typeof window !== "undefined" && window.history.length > 1) {
          router.back();
          return;
        }
        router.push(fallbackHref);
      }}
    >
      <BackGlyph />
    </button>
  );
}

function MobileMenuButton({
  menuOpen,
  panelId,
  onToggle,
}: {
  menuOpen: boolean;
  panelId: string;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      className={`${MOBILE_ICON_BTN} -ml-1 justify-self-start`}
      aria-expanded={menuOpen}
      aria-controls={panelId}
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      onClick={onToggle}
    >
      <MenuGlyph open={menuOpen} />
    </button>
  );
}

function BackGlyph() {
  const stroke = "stroke-[var(--qa-text)]";
  const path = "stroke-current";
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={stroke}
    >
      <path
        className={path}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 6l-6 6 6 6"
      />
    </svg>
  );
}

function MenuGlyph({ open }: { open: boolean }) {
  const stroke = "stroke-[var(--qa-text)]";
  const path = "stroke-current";
  if (open) {
    return (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        className={stroke}
      >
        <path
          className={path}
          strokeWidth={1.35}
          strokeLinecap="round"
          d="M6 6l12 12M18 6L6 18"
        />
      </svg>
    );
  }
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={stroke}
    >
      <path
        className={path}
        strokeWidth={1.35}
        strokeLinecap="round"
        d="M5 7h14M5 12h14M5 17h14"
      />
    </svg>
  );
}

const MOBILE_ICON_BTN =
  "-mr-1 flex h-11 w-11 items-center justify-center rounded-sm border border-transparent text-[var(--qa-text)] transition-opacity duration-[600ms] ease-out hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--qa-muted)]";
const MOBILE_BACK_BTN =
  "-mr-1 flex h-11 w-11 items-center justify-center rounded-none border border-transparent bg-[rgba(15,14,13,0.04)] text-[var(--qa-text)] transition-[background-color,opacity] duration-[600ms] ease-out hover:bg-[rgba(15,14,13,0.07)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--qa-muted)]";

export function SiteHeader() {
  const pathname = usePathname();
  const path = normalizePathname(pathname);
  const isCartPage = path === "/cart";
  const historyBackFallback = getMobileHistoryBackFallback(pathname);
  const mobileShowsBack = Boolean(historyBackFallback);
  const [menuOpen, setMenuOpen] = useState(false);
  const panelId = useId();
  const showMobileMenuPanel = menuOpen && (!mobileShowsBack || isCartPage);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-30 border-b border-[#DDD7CF] bg-paper">
      <Container variant="wide" className="flex h-24 items-center justify-between gap-6">
        {isCartPage ? (
          <div className="grid w-full grid-cols-[2.75rem_1fr_2.75rem] items-center gap-2 lg:hidden">
            <MobileMenuButton
              menuOpen={menuOpen}
              panelId={panelId}
              onToggle={() => setMenuOpen((o) => !o)}
            />
            <Link
              href="/"
              className="justify-self-center text-center font-[family-name:var(--font-serif)] text-[22px] font-light uppercase tracking-[0.26em] text-[var(--qa-text)] no-underline"
            >
              Quiet Ash
            </Link>
            <MobileHistoryBackButton />
          </div>
        ) : null}

        <Link
          href="/"
          className={`font-[family-name:var(--font-serif)] text-[28px] font-light uppercase tracking-[0.28em] text-[var(--qa-text)] no-underline ${
            isCartPage ? "hidden lg:inline-block" : ""
          }`}
        >
          Quiet Ash
        </Link>

        <nav
          className="hidden items-center gap-14 lg:flex"
          aria-label="Primary"
        >
          {PRIMARY_NAV.map(({ href, label }) => (
            <NavLink key={href} href={href}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CartLink className="font-[family-name:var(--font-sans)] text-[12px] font-medium uppercase tracking-[0.18em] text-[var(--qa-muted)] no-underline transition-opacity duration-[600ms] ease-out hover:opacity-70" />
        </div>

        {!isCartPage ? (
          <div className="flex items-center lg:hidden">
            {historyBackFallback ? (
              <MobileHistoryBackButton fallbackHref={historyBackFallback} />
            ) : (
              <MobileMenuButton
                menuOpen={menuOpen}
                panelId={panelId}
                onToggle={() => setMenuOpen((o) => !o)}
              />
            )}
          </div>
        ) : null}
      </Container>

      {showMobileMenuPanel ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 cursor-default bg-[rgba(11,11,11,0.45)]"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div
            id={panelId}
            className="fixed left-0 right-0 top-24 z-50 border-b border-[#DDD7CF] bg-paper shadow-[0_18px_40px_-24px_rgba(28,20,16,0.35)]"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <Container variant="wide" className="py-6">
              <nav className="flex flex-col gap-4" aria-label="Primary">
                {[HOME_NAV_ITEM, ...PRIMARY_NAV].map(({ href, label }) => {
                  const active =
                    href === "/"
                      ? path === "/"
                      : path === href || path.startsWith(`${href}/`);
                  return (
                    <Link
                      key={href}
                      href={href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                      className={`border-b py-3 font-[family-name:var(--font-sans)] text-[12px] font-medium uppercase tracking-[0.18em] no-underline last:border-b-0 ${
                        active
                          ? "border-[var(--qa-text)] text-[var(--qa-text)]"
                          : "border-[color-mix(in_srgb,#DDD7CF_70%,transparent)] text-[var(--qa-muted)]"
                      }`}
                    >
                      {label}
                    </Link>
                  );
                })}
                <CartLink
                  className="pt-2 font-[family-name:var(--font-sans)] text-[12px] font-medium uppercase tracking-[0.18em] text-[var(--qa-muted)] no-underline"
                  onNavigate={() => setMenuOpen(false)}
                />
              </nav>
            </Container>
          </div>
        </>
      ) : null}
    </header>
  );
}

