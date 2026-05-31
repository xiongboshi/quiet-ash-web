import dynamic from "next/dynamic";
import { HomeHero } from "@/components/home/home-hero";
import { HomeShopByNeed } from "@/components/home/home-shop-by-need";
import { HomeTrustBar } from "@/components/home/home-trust-bar";

const HomeBestSellers = dynamic(
  () =>
    import("@/components/home/home-best-sellers").then((m) => ({
      default: m.HomeBestSellers,
    })),
);

const HomeExploreScents = dynamic(
  () =>
    import("@/components/home/home-explore-scents").then((m) => ({
      default: m.HomeExploreScents,
    })),
);

const HomeTestimonials = dynamic(
  () =>
    import("@/components/home/home-testimonials").then((m) => ({
      default: m.HomeTestimonials,
    })),
);

const HomeOurStory = dynamic(
  () =>
    import("@/components/home/home-our-story").then((m) => ({
      default: m.HomeOurStory,
    })),
);

const Footer = dynamic(
  () =>
    import("@/components/sections/Footer").then((m) => ({
      default: m.Footer,
    })),
);

export function QaHomePage() {
  return (
    <div className="qa-page home-page">
      <HomeHero />
      <HomeTrustBar />
      <HomeShopByNeed />
      <HomeBestSellers />
      <HomeExploreScents />
      <HomeTestimonials />
      <HomeOurStory />
      <Footer className="shrink-0" />
    </div>
  );
}
