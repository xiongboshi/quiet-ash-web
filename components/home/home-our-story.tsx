import Image from "next/image";
import Link from "next/link";
import { HomeStoryIcon } from "@/components/home/home-icons";
import { homeRedesign } from "@/data/home-redesign";

export function HomeOurStory() {
  const { ourStory } = homeRedesign;

  return (
    <section className="home-story" aria-labelledby="home-story-heading">
      <div className="home-story__inner">
        <div className="home-story__media">
          <Image
            src={ourStory.imageSrc}
            alt={ourStory.imageAlt}
            fill
            sizes="(max-width: 1023px) 100vw, 41vw"
            className="home-story__img object-cover"
          />
        </div>
        <div className="home-story__content">
          <div className="home-story__main">
            <p className="home-story__eyebrow">{ourStory.eyebrow}</p>
            <h2 id="home-story-heading" className="home-story__title">
              {ourStory.title}
            </h2>
            <p className="home-story__body">
              {ourStory.bodyLines.map((line) => (
                <span key={line} className="home-story__body-line">
                  {line}
                </span>
              ))}
            </p>
            <Link href={ourStory.cta.href} className="home-story__cta">
              {ourStory.cta.label}
            </Link>
          </div>

          <div className="home-story__highlights" aria-label="Brand highlights">
            <p className="home-story__highlights-label">Why Quiet Ash</p>
            <ul className="home-story__features">
              {ourStory.features.map((feature) => (
                <li key={feature.title} className="home-story__feature">
                  <span className="home-story__feature-icon">
                    <HomeStoryIcon id={feature.icon} />
                  </span>
                  <span className="home-story__feature-text">
                    <span className="home-story__feature-title">{feature.title}</span>
                    <span className="home-story__feature-desc">{feature.description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
