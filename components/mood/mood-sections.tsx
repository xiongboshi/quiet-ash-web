import { MoodBestSellers } from "@/components/mood/mood-best-sellers";
import { MoodHomeFooter } from "@/components/mood/mood-home-footer";
import { MoodMomentsGrid } from "@/components/mood/mood-moments-grid";
import { MoodPosterGrid } from "@/components/mood/mood-poster-grid";

export function MoodSections() {
  return (
    <>
      <MoodPosterGrid />

      <MoodBestSellers />

      <MoodMomentsGrid />

      <MoodHomeFooter />
    </>
  );
}
