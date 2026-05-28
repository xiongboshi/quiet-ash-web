import { journalIndexHero } from "@/data/journal-index";
import { JournalEditorialHero } from "@/components/journal/journal-editorial-hero";

export function JournalIndexHero() {
  const { title, tagline, lede, imageSrc, imageAlt } = journalIndexHero;

  return (
    <JournalEditorialHero
      title={title}
      tagline={tagline}
      lede={lede}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      headingId="journal-index-hero-heading"
    />
  );
}
