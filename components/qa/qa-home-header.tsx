"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { QaHomeCartLink } from "@/components/qa/qa-home-cart-link";
import { QaMobileBackButton } from "@/components/qa/qa-mobile-back-button";
import { SiteNavSearchPanel } from "@/components/site/site-nav-search-panel";
import { NavMenuIcon, NavSearchIcon } from "@/components/site/site-nav-icons";
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
  const [searchOpen, setSearchOpen] = useState(false);
  const panelId = useId();
  const { navBrandTitle } = brandHome;

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
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
    if (!searchOpen) return;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [searchOpen]);

  useEffect(() => {
    const chrome = document.querySelector(".site-nav-chrome");
    if (!chrome) return;
    chrome.classList.toggle("site-nav-chrome--menu-open", menuOpen);
    chrome.classList.toggle("site-nav-chrome--search-open", searchOpen);
    return () => {
      chrome.classList.remove("site-nav-chrome--menu-open");
      chrome.classList.remove("site-nav-chrome--search-open");
    };
  }, [menuOpen, searchOpen]);

  const closeSearch = () => {
    setSearchOpen(false);
    setMenuOpen(false);
  };

  const openSearch = () => {
    setMenuOpen(false);
    setSearchOpen(true);
  };

  const openMenu = () => {
    if (searchOpen) {
      closeSearch();
      return;
    }
    setMenuOpen((o) => !o);
  };

  const searchToggle = (
    <button
      type="button"
      className="nav-icon-btn nav-icon-btn--search"
      aria-expanded={searchOpen}
      aria-label={searchOpen ? "Close search" : "Open search"}
      onClick={() => (searchOpen ? closeSearch() : openSearch())}
    >
      <NavSearchIcon />
    </button>
  );

  const menuToggle = (
    <button
      type="button"
      className="nav-mobile-toggle"
      aria-expanded={menuOpen}
      aria-controls={panelId}
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      onClick={openMenu}
    >
      <NavMenuIcon open={menuOpen} />
    </button>
  );

  return (
    <>
      <nav className="navbar" aria-label="Site">
        <div className="container nav-inner">
          <Link href="/" className="nav-brand logo">
            <span className="nav-brand__text">{navBrandTitle}</span>
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
            {searchToggle}
            {hideMobileNavCart ? (
              <span className="nav-actions__balance nav-actions__balance--cart" aria-hidden />
            ) : (
              <QaHomeCartLink />
            )}
            {menuToggle}
          </div>
        </div>
      </nav>

      {searchOpen ? (
        <SiteNavSearchPanel onClose={closeSearch} />
      ) : null}

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
            {mobileNavBack ? (
              <QaMobileBackButton
                variant="drawer"
                fallbackHref={mobileNavBackFallback}
                onNavigate={() => setMenuOpen(false)}
              />
            ) : null}
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
