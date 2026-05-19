import { MoodHeroCarousel } from "@/components/mood/mood-hero-carousel";
import { brandHome } from "@/data/brand-home";

type Props = { hero: (typeof brandHome)["hero"] };

export function MoodHero({ hero }: Props) {
  return <MoodHeroCarousel hero={hero} promo={brandHome.promo} />;
}
