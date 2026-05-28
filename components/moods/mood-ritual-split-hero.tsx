import { QaImage as Image } from "@/components/ui/qa-image";
import Link from "next/link";
import type { MoodRitualHeroSpec } from "@/data/mood-ritual-heroes";
import { siteRailExemptClass } from "@/lib/site-rail";

type Props = { spec: MoodRitualHeroSpec };

export function MoodRitualSplitHero({ spec }: Props) {
  return (
    <section
      className={`mood-ritual-hero ${siteRailExemptClass}`}
      aria-labelledby="mood-ritual-hero-title"
    >
      <div className="mood-ritual-hero__grid">
        <div className="mood-ritual-hero__content">
          <p className="mood-ritual-hero__crumb">
            <Link href={spec.breadcrumbParent.href} className="mood-ritual-hero__crumb-link">
              {spec.breadcrumbParent.label}
            </Link>
            <span className="mood-ritual-hero__crumb-sep" aria-hidden>
              /
            </span>
            <span>{spec.breadcrumbCurrent}</span>
          </p>

          <h1 id="mood-ritual-hero-title" className="mood-ritual-hero__title">
            {spec.title}
          </h1>

          <p className="mood-ritual-hero__desc">{spec.description}</p>

          <ul className="mood-ritual-hero__tags" aria-label="Related moods">
            {spec.tags.map((tag) => (
              <li key={tag.label}>
                {tag.href ? (
                  <Link href={tag.href} className="mood-ritual-hero__tag">
                    {tag.label}
                  </Link>
                ) : (
                  <span className="mood-ritual-hero__tag">{tag.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <figure className="mood-ritual-hero__media">
          <Image
            src={spec.imageSrc}
            alt={spec.imageAlt}
            fill
            priority
            sizes="100vw"
            className="mood-ritual-hero__img"
            unoptimized
          />
        </figure>
      </div>
    </section>
  );
}
