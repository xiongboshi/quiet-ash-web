import type { Metadata } from "next";
import { EditorialFinale } from "@/components/editorial/editorial-finale";
import { FeaturedRitual } from "@/components/editorial/featured-ritual";
import { RitualCarousel } from "@/components/editorial/ritual-carousel";
import { EssayGrid } from "@/components/sections/EssayGrid";
import { FeaturedObjects } from "@/components/sections/FeaturedObjects";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import {
  defaultFeaturedRitual,
  defaultPhilosophyQuote,
  defaultRitualCarouselIntro,
  homeFeaturedRitualSlug,
} from "@/data/home";
import { homeRitualSlugs } from "@/data/rituals";
import { getRitualBySlug, getRitualsBySlugs } from "@/lib/rituals";

/**
 * Homepage — Hero → Featured ritual → Objects → Rituals rail → Quote (mobile) → Journal → Quote (desktop) → Footer.
 * Content from MDX-backed rituals/essays and catalog JSON for objects.
 */

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "Quiet Ash — Incense ritual, agarwood & essays",
  description:
    "Incense ritual, agarwood, and editorial essays on Eastern slow living — scholar incense, evening smoke, and quiet objects for the room.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Quiet Ash",
    description:
      "Incense ritual, agarwood, and essays on smoke, silence, and Eastern slow living.",
    url: siteUrl,
  };

  const featuredRitual = getRitualBySlug(homeFeaturedRitualSlug);
  const rituals = getRitualsBySlugs(homeRitualSlugs)
    .filter((r) => r.slug !== homeFeaturedRitualSlug)
    .slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <FeaturedRitual ritual={featuredRitual} {...defaultFeaturedRitual} />
      <FeaturedObjects limit={4} />
      <RitualCarousel
        rituals={rituals}
        {...defaultRitualCarouselIntro}
        visualMode="cinema"
      />
      <EditorialFinale
        {...defaultPhilosophyQuote}
        tone="spec-quote"
        showSeal
        renderDesktop={false}
      />
      <EssayGrid limit={3} layout="journal" />
      <EditorialFinale
        {...defaultPhilosophyQuote}
        tone="spec-quote"
        showSeal
        renderMobile={false}
      />
      <Footer />
    </>
  );
}
