"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { NavSearchIcon } from "@/components/site/site-nav-icons";
import {
  getSiteSearchArticleHints,
  getSiteSearchArticleTopics,
  getSiteSearchProductCategories,
  getSiteSearchProductHints,
} from "@/data/site-search-suggestions";
import { SHOP_INDEX } from "@/lib/site-paths";

type Props = {
  onClose: () => void;
};

function SuggestionSection({
  title,
  items,
  onNavigate,
  titleRule,
}: {
  title: string;
  items: readonly { label: string; href: string }[];
  onNavigate: () => void;
  titleRule?: boolean;
}) {
  if (!items.length) return null;

  return (
    <section className="site-nav-search__section">
      <h3
        className={
          titleRule
            ? "site-nav-search__section-title site-nav-search__section-title--rule"
            : "site-nav-search__section-title"
        }
      >
        {title}
      </h3>
      <ul className="site-nav-search__pills" role="list">
        {items.map((item) => (
          <li key={`${item.href}-${item.label}`}>
            <Link
              href={item.href}
              className="site-nav-search__pill"
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function SiteNavSearchPanel({ onClose }: Props) {
  const router = useRouter();
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  const productCategories = getSiteSearchProductCategories();
  const productHints = getSiteSearchProductHints();
  const articleTopics = getSiteSearchArticleTopics();
  const articleHints = getSiteSearchArticleHints();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const submitSearch = () => {
    const q = query.trim();
    if (!q) return;
    onClose();
    router.push(`${SHOP_INDEX}?q=${encodeURIComponent(q)}`);
  };

  return (
    <div className="site-nav-search" role="dialog" aria-label="Site search">
      <div className="site-nav-search__inner">
        <div className="site-nav-search__field-wrap">
          <label className="sr-only" htmlFor={inputId}>
            Search products and journal
          </label>
          <div className="site-nav-search__field">
            <NavSearchIcon size={18} className="site-nav-search__field-icon" />
            <input
              ref={inputRef}
              id={inputId}
              type="search"
              inputMode="search"
              enterKeyHint="search"
              className="site-nav-search__input"
              placeholder="Search shop & journal"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  submitSearch();
                }
              }}
            />
            <button
              type="button"
              className="site-nav-search__clear"
              aria-label="Close search"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClose();
              }}
            >
              ×
            </button>
          </div>
        </div>

        <div className="site-nav-search__groups">
          <div className="site-nav-search__group site-nav-search__group--shop">
            <SuggestionSection
              title="Browse categories"
              items={productCategories}
              onNavigate={onClose}
            />
            <SuggestionSection
              title="Shop suggestions"
              items={productHints}
              onNavigate={onClose}
              titleRule
            />
          </div>

          <div className="site-nav-search__group site-nav-search__group--journal">
            <SuggestionSection
              title="Journal topics"
              items={articleTopics}
              onNavigate={onClose}
            />
            <SuggestionSection
              title="Popular reads"
              items={articleHints}
              onNavigate={onClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
