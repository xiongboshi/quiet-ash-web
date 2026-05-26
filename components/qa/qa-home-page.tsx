import dynamic from "next/dynamic";
import { Footer } from "@/components/sections/Footer";
import { HomeBestSellers } from "@/components/home/home-best-sellers";
import { HomeHero } from "@/components/home/home-hero";
import { HomeShopByNeed } from "@/components/home/home-shop-by-need";
import { HomeTrustBar } from "@/components/home/home-trust-bar";

const HomeExploreScents = dynamic(
  () =>
    import("@/components/home/home-explore-scents").then((m) => ({
      default: m.HomeExploreScents,
    })),
  { loading: () => null },
);

const HomeTestimonials = dynamic(
  () =>
    import("@/components/home/home-testimonials").then((m) => ({
      default: m.HomeTestimonials,
    })),
  { loading: () => null },
);

const HomeOurStory = dynamic(
  () =>
    import("@/components/home/home-our-story").then((m) => ({
      default: m.HomeOurStory,
    })),
  { loading: () => null },
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
