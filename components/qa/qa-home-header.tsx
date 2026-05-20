"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { QaHomeCartLink } from "@/components/qa/qa-home-cart-link";
import { brandHome } from "@/data/brand-home";

export function QaHomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const panelId = useId();
  const { nav, siteTitle, siteSubtitle } = brandHome;

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

  const mobileLinks = [...nav.left, ...nav.right];

  return (
    <>
      <nav className="navbar">
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

          <div className="nav-left">
            {nav.left.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <Link href="/" className="logo">
            <h1>{siteTitle}</h1>
            <span>{siteSubtitle}</span>
          </Link>

          <div className="nav-right">
            {nav.right.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
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
            className="absolute inset-0 cursor-default"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div id={panelId} className="qa-mobile-panel-inner">
            {mobileLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <QaHomeCartLink onNavigate={() => setMenuOpen(false)} />
          </div>
        </div>
      ) : null}
    </>
  );
}
