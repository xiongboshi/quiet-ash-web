"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { QaHomeCartLink } from "@/components/qa/qa-home-cart-link";
import { NavSearchIcon, NavUserIcon } from "@/components/site/site-nav-icons";
import { brandHome } from "@/data/brand-home";
import { PRIMARY_NAV } from "@/lib/site-nav";
import { SHOP_INDEX } from "@/lib/site-paths";

function normalizePath(pathname: string | null): string {
  if (!pathname) return "";
  const base = pathname.split("?")[0]?.split("#")[0] ?? "";
  if (base.length > 1 && base.endsWith("/")) return base.slice(0, -1);
  return base;
}

function isNavActive(path: string, href: string): boolean {
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
}

export function QaHomeHeader() {
  const pathname = usePathname();
  const path = normalizePath(pathname);
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

          <Link href="/" className="nav-brand logo">
            <span className="nav-brand__text">{siteTitle}</span>
          </Link>

          <div className="nav-center" aria-label="Primary">
            {PRIMARY_NAV.map(({ href, label }) => {
              const active = isNavActive(path, href);
              return (
                <Link
                  key={href}
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
            <Link
              href={SHOP_INDEX}
              className="nav-icon-btn nav-icon-btn--search"
              aria-label="Search"
            >
              <NavSearchIcon />
            </Link>
            <Link
              href="/account"
              className="nav-icon-btn nav-icon-btn--account"
              aria-label="Account"
            >
              <NavUserIcon />
            </Link>
            <QaHomeCartLink />
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
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={active ? "is-active" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
            <Link href={SHOP_INDEX} onClick={() => setMenuOpen(false)}>
              Search
            </Link>
            <Link href="/account" onClick={() => setMenuOpen(false)}>
              Account
            </Link>
            <QaHomeCartLink variant="menu" onNavigate={() => setMenuOpen(false)} />
          </div>
        </div>
      ) : null}
    </>
  );
}
