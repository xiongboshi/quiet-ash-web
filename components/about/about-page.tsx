import Link from "next/link";
import {
  CircleCheck,
  CircleX,
  Home,
  Leaf,
  RotateCcw,
  Star,
  User,
  Waves,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { AboutMediaFrame } from "@/components/about/about-media-frame";
import { ScentFamilyStrip } from "@/components/shared/scent-family-strip";
import { aboutPage } from "@/data/about-page";
import { siteRailExemptClass } from "@/lib/site-rail";

const ICON_PROPS = {
  size: 20,
  strokeWidth: 1.25,
  absoluteStrokeWidth: true,
  "aria-hidden": true as const,
};

const HERO_ICONS: Record<
  (typeof aboutPage.hero.features)[number]["icon"],
  LucideIcon
> = {
  leaf: Leaf,
  smoke: Waves,
  star: Star,
  returns: RotateCcw,
};

const COMPARE_ICONS: Record<
  (typeof aboutPage.compare.rows)[number]["icon"],
  LucideIcon
> = {
  smoke: Waves,
  leaf: Leaf,
  home: Home,
  user: User,
};

function AboutHero() {
  const { hero } = aboutPage;

  return (
    <section
      className={`about-hero ${siteRailExemptClass}`}
      aria-labelledby="about-hero-heading"
    >
      <div className="about-hero__inner">
        <figure className="about-hero__media">
          <Image
            src={hero.imageSrc}
            alt={hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="about-hero__img object-cover"
          />
        </figure>
        <div className="about-hero__scrim" aria-hidden />
        <div className="about-hero__copy">
          <div className="about-hero__copy-inner">
            <p className="about-hero__eyebrow">{hero.eyebrow}</p>
            <h1 id="about-hero-heading" className="about-hero__title">
              {hero.title}
            </h1>
            <p className="about-hero__desc">
              {hero.descriptionLines.map((line) => (
                <span key={line} className="about-hero__desc-line">
                  {line}
                </span>
              ))}
            </p>
            <ul className="about-hero__features">
              {hero.features.map((item) => {
                const Icon = HERO_ICONS[item.icon];
                return (
                  <li key={item.id} className="about-hero__feature">
                    <span className="about-hero__feature-icon" aria-hidden>
                      <Icon {...ICON_PROPS} />
                    </span>
                    <span className="about-hero__feature-copy">
                      <span className="about-hero__feature-title">
                        {item.title}
                      </span>
                      <span className="about-hero__feature-desc">
                        {item.description}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
            <Link href={hero.cta.href} className="about-btn about-btn--solid">
              {hero.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutScentFamilies() {
  const { scentFamilies } = aboutPage;

  return (
    <ScentFamilyStrip
      headingId="about-scents-heading"
      heading={scentFamilies.heading}
      subheading={scentFamilies.subheading}
      cards={scentFamilies.families.map((family) => ({
        id: family.id,
        title: family.title,
        description: family.description,
        imageSrc: family.imageSrc,
        imageAlt: family.imageAlt,
        href: family.href,
        cta: family.cta,
      }))}
      exploreAll={scentFamilies.exploreAll}
    />
  );
}

function CompareCell({
  positive,
  text,
}: {
  positive: boolean;
  text: string;
}) {
  const Icon = positive ? CircleCheck : CircleX;
  return (
    <div className="about-compare__cell">
      <Icon
        className={
          positive
            ? "about-compare__mark about-compare__mark--yes"
            : "about-compare__mark about-compare__mark--no"
        }
        size={18}
        strokeWidth={1.5}
        aria-hidden
      />
      <p className="about-compare__cell-text">{text}</p>
    </div>
  );
}

function AboutCompare() {
  const { compare } = aboutPage;

  return (
    <section className="about-compare" aria-labelledby="about-compare-heading">
      <div className="qa-container about-compare__container">
        <div className="about-compare__layout">
          <div className="about-compare__intro">
            <h2 id="about-compare-heading" className="about-compare__heading">
              {compare.heading}
            </h2>
            <p className="about-compare__sub">{compare.subheading}</p>
            <Link
              href={compare.cta.href}
              className="about-btn about-btn--outline"
            >
              {compare.cta.label}
            </Link>
          </div>
          <div
            className="about-compare__table"
            role="table"
            aria-label="Quiet Ash compared with traditional incense"
            style={
              {
                "--compare-us-label": `"${compare.columns.us}"`,
                "--compare-them-label": `"${compare.columns.them}"`,
              } as React.CSSProperties
            }
          >
            <div className="about-compare__col-highlight" aria-hidden />
            <div className="about-compare__table-head" role="row">
              <span className="about-compare__th about-compare__th--feature" />
              <span className="about-compare__th about-compare__th--us">
                {compare.columns.us}
              </span>
              <span className="about-compare__th">{compare.columns.them}</span>
            </div>
            {compare.rows.map((row) => {
              const FeatureIcon = COMPARE_ICONS[row.icon];
              return (
                <div key={row.id} className="about-compare__row" role="row">
                  <div className="about-compare__feature" role="rowheader">
                    <FeatureIcon
                      className="about-compare__feature-icon"
                      {...ICON_PROPS}
                    />
                    <span className="about-compare__feature-label">
                      {row.feature}
                    </span>
                  </div>
                  <div className="about-compare__us" role="cell">
                    <CompareCell
                      positive={row.us.positive}
                      text={row.us.text}
                    />
                  </div>
                  <div className="about-compare__them" role="cell">
                    <CompareCell
                      positive={row.them.positive}
                      text={row.them.text}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutStory() {
  const { story } = aboutPage;

  return (
    <section className="about-story" aria-labelledby="about-story-heading">
      <div className="qa-container about-story__container">
        <div className="about-story__grid">
          <AboutMediaFrame
            src={story.imageSrc}
            alt={story.imageAlt}
            aspectRatio="15 / 8"
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="about-story__media"
            objectPosition="50% 42%"
          />
          <div className="about-story__copy">
            <p className="about-story__eyebrow">{story.eyebrow}</p>
            <h2 id="about-story-heading" className="about-story__title">
              {story.title}
            </h2>
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph} className="about-story__p">
                {paragraph}
              </p>
            ))}
            <p className="about-story__signature">{story.signature}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutCta() {
  const { cta } = aboutPage;

  return (
    <section className="about-cta" aria-labelledby="about-cta-heading">
      <div className="about-cta__inner">
          <div className="about-cta__copy">
            <h2 id="about-cta-heading" className="about-cta__title">
              {cta.title}
            </h2>
            <p className="about-cta__desc">{cta.description}</p>
          </div>
          <div className="about-cta__actions">
            <Link
              href={cta.primary.href}
              className="about-btn about-btn--solid"
            >
              {cta.primary.label}
            </Link>
            <Link
              href={cta.secondary.href}
              className="about-btn about-btn--outline"
            >
              {cta.secondary.label}
            </Link>
          </div>
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <div className="about-page">
      <AboutHero />
      <AboutScentFamilies />
      <AboutCompare />
      <AboutStory />
      <AboutCta />
    </div>
  );
}
