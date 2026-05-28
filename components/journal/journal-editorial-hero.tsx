import { QaImage as Image } from "@/components/ui/qa-image";
import { siteRailExemptClass } from "@/lib/site-rail";

type Props = {
  title: string;
  tagline: string;
  lede: string;
  imageSrc: string;
  imageAlt: string;
  headingId: string;
};

/** Journal index + topic hub — shared overlay hero band. */
export function JournalEditorialHero({
  title,
  tagline,
  lede,
  imageSrc,
  imageAlt,
  headingId,
}: Props) {
  return (
    <section
      className={`journal-index-hero ${siteRailExemptClass}`}
      aria-labelledby={headingId}
    >
      <div className="journal-index-hero__inner">
        <figure className="journal-index-hero__media">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="journal-index-hero__img object-cover"
          />
        </figure>
        <div className="journal-index-hero__scrim" aria-hidden />
        <div className="journal-index-hero__copy">
          <div className="journal-index-hero__copy-inner">
            <h1 id={headingId} className="journal-index-hero__title">
              {title}
            </h1>
            <p className="journal-index-hero__tagline">{tagline}</p>
            <p className="journal-index-hero__lede">{lede}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
