"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { QaHomeCartLink } from "@/components/qa/qa-home-cart-link";
import { QaMobileBackButton } from "@/components/qa/qa-mobile-back-button";
import { brandHome } from "@/data/brand-home";
import { PRIMARY_NAV } from "@/lib/site-nav";
import {
  isMobileNavBackLeadingPath,
  isMobileNavCartHiddenPath,
  mobileNavBackFallbackHref,
} from "@/lib/site-nav-layout";

function normalizePath(pathname: string | null): string {
  if (!pathname) return "";
  const base = pathname.split("?")[0]?.split("#")[0] ?? "";
  if (base.length > 1 && base.endsWith("/")) return base.slice(0, -1);
  return base;
}

function isNavActive(path: string, href: string): boolean {
  if (href === "/") return path === "/";

  const hashAt = href.indexOf("#");
  const pathnamePart = hashAt >= 0 ? href.slice(0, hashAt) : href;
  const hasHash = hashAt >= 0;

  /* /#best-sellers etc. — same document as /; do not mark active on homepage load */
  if (hasHash && (pathnamePart === "/" || pathnamePart === "")) {
    return false;
  }

  const base = pathnamePart || href;
  if (!base || base === "/") {
    return path === "/" || path === "";
  }
  return path === base || path.startsWith(`${base}/`);
}

export function QaHomeHeader() {
  const pathname = usePathname();
  const path = normalizePath(pathname);
  const mobileNavBack = isMobileNavBackLeadingPath(pathname);
  const mobileNavBackFallback = mobileNavBackFallbackHref(pathname);
  const hideMobileNavCart = isMobileNavCartHiddenPath(pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const panelId = useId();
  const { siteTitle } = brandHome;

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    const chrome = document.querySelector(".site-nav-chrome");
    if (!chrome) return;
    chrome.classList.toggle("site-nav-chrome--menu-open", menuOpen);
    return () => chrome.classList.remove("site-nav-chrome--menu-open");
  }, [menuOpen]);

  return (
    <>
      <nav className="navbar" aria-label="Site">
        <div className="container nav-inner">
          {mobileNavBack ? (
            <QaMobileBackButton fallbackHref={mobileNavBackFallback} />
          ) : (
            <button
              type="button"
              className="nav-mobile-toggle"
              aria-expanded={menuOpen}
              aria-controls={panelId}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className="sr-only">Menu</span>
              <span aria-hidden>{menuOpen ? "×" : "☰"}</span>
            </button>
          )}

          <Link href="/" className="nav-brand logo">
            <span className="nav-brand__text">{siteTitle}</span>
          </Link>

          <div className="nav-center" aria-label="Primary">
            {PRIMARY_NAV.map(({ href, label }) => {
              const active = isNavActive(path, href);
              return (
                <Link
                  key={label}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={active ? "is-active" : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <div className="nav-actions">
            <QaHomeCartLink
              className={hideMobileNavCart ? "nav-icon-btn--cart-on-detail" : undefined}
            />
          </div>
        </div>
      </nav>

      {menuOpen ? (
        <div
          className="qa-mobile-panel qa-mobile-panel--open"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <button
            type="button"
            className="qa-mobile-panel__backdrop"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div id={panelId} className="qa-mobile-panel-inner">
            {PRIMARY_NAV.map(({ href, label }) => {
              const active = isNavActive(path, href);
              return (
                <Link
                  key={label}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={active ? "is-active" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
            <QaHomeCartLink variant="menu" onNavigate={() => setMenuOpen(false)} />
          </div>
        </div>
      ) : null}
    </>
  );
}
