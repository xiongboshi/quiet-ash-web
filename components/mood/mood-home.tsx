import { MoodHero } from "@/components/mood/mood-hero";
import { MoodSections } from "@/components/mood/mood-sections";
import { brandHome } from "@/data/brand-home";

export function MoodHome() {
  return (
    <div className="qa-mood-page min-h-screen">
      <MoodHero hero={brandHome.hero} />
      <MoodSections />
    </div>
  );
}
