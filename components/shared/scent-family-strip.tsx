import Link from "next/link";
import { AboutMediaFrame } from "@/components/about/about-media-frame";

export type ScentFamilyStripCard = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  cta: string;
};

type ScentFamilyStripProps = {
  headingId: string;
  heading: string;
  subheading: string;
  cards: readonly ScentFamilyStripCard[];
  exploreAll?: { label: string; href: string };
  /** Extra section class (e.g. homepage mood strip with 5 cards). */
  sectionClassName?: string;
};

/** Horizontal image + copy cards — same markup as About “Explore scent families”. */
export function ScentFamilyStrip({
  headingId,
  heading,
  subheading,
  cards,
  exploreAll,
  sectionClassName = "",
}: ScentFamilyStripProps) {
  const sectionClass = [
    "about-scents",
    cards.length > 4 ? "about-scents--multi" : "",
    sectionClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClass} aria-labelledby={headingId}>
      <div className="qa-container about-scents__container">
        <header className="about-scents__head">
          <h2 id={headingId} className="about-scents__heading">
            {heading}
          </h2>
          <p className="about-scents__sub">{subheading}</p>
        </header>
        <ul className="about-scents__grid">
          {cards.map((card) => (
            <li key={card.id}>
              <article className="about-scent-card">
                <AboutMediaFrame
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  sizes="(max-width: 767px) 40vw, 12vw"
                  className="about-scent-card__media"
                />
                <div className="about-scent-card__body">
                  <h3 className="about-scent-card__title">{card.title}</h3>
                  <p className="about-scent-card__desc">{card.description}</p>
                  <Link href={card.href} className="about-scent-card__cta">
                    {card.cta}
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
        {exploreAll ? (
          <p className="about-scents__explore-wrap">
            <Link href={exploreAll.href} className="about-scents__explore">
              {exploreAll.label}
            </Link>
          </p>
        ) : null}
      </div>
    </section>
  );
}
