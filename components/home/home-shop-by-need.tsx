import { ScentFamilyStrip } from "@/components/shared/scent-family-strip";
import { getShopMoodHomeSection } from "@/lib/shop-mood-home";

export function HomeShopByNeed() {
  const section = getShopMoodHomeSection();
  if (!section) return null;

  return (
    <ScentFamilyStrip
      headingId="home-need-heading"
      heading={section.heading}
      subheading={section.subheading}
      cards={section.cards}
      exploreAll={section.exploreAll}
      sectionClassName="about-scents--home"
    />
  );
}
