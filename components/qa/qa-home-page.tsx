import { Footer } from "@/components/sections/Footer";
import { HomeBestSellers } from "@/components/home/home-best-sellers";
import { HomeExploreScents } from "@/components/home/home-explore-scents";
import { HomeHero } from "@/components/home/home-hero";
import { HomeOurStory } from "@/components/home/home-our-story";
import { HomeShopByNeed } from "@/components/home/home-shop-by-need";
import { HomeTestimonials } from "@/components/home/home-testimonials";
import { HomeTrustBar } from "@/components/home/home-trust-bar";

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
