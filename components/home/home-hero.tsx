import Image from "next/image";
import Link from "next/link";
import { HomeStarRating } from "@/components/home/home-icons";
import { homeRedesign } from "@/data/home-redesign";

export function HomeHero() {
  const { hero } = homeRedesign;
  return (
    <section className="home-hero" aria-label="Hero">
      <div className="home-hero__stage">
        <Image
          src={hero.imageSrc}
          alt={hero.imageAlt}
          fill
          priority
          quality={75}
          sizes="100vw"
          className="home-hero__bg"
        />
        <div className="home-hero__scrim" aria-hidden />
        <div className="home-container home-hero__content">
          <div className="home-hero__copy">
            <h1 className="home-hero__title">
              {hero.titleLines.map((line) => (
                <span key={line} className="home-hero__title-line">
                  {line}
                </span>
              ))}
            </h1>
            <p className="home-hero__desc">
              {hero.descriptionLines.map((line) => (
                <span key={line} className="home-hero__desc-line">
                  {line}
                </span>
              ))}
            </p>
            <Link href={hero.cta.href} className="home-btn home-btn--primary">
              {hero.cta.label}
            </Link>
            <div
              className="home-hero__rating"
              aria-label={`Rated ${hero.rating.value} out of 5 stars`}
            >
              <HomeStarRating variant="hero" value={hero.rating.value} />
              <span className="home-hero__rating-text">
                <strong>{hero.rating.score}</strong> {hero.rating.label}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
