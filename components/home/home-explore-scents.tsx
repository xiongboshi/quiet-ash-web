import Image from "next/image";
import Link from "next/link";
import { homeRedesign } from "@/data/home-redesign";

export function HomeExploreScents() {
  const { exploreScents } = homeRedesign;

  return (
    <section className="home-scents" aria-labelledby="home-scents-heading">
      <div className="home-container">
        <header className="home-scents__head">
          <h2 id="home-scents-heading" className="home-scents__heading">
            {exploreScents.heading}
          </h2>
          <p className="home-scents__sub">{exploreScents.subheading}</p>
        </header>
        <ul className="home-scents__grid">
          {exploreScents.families.map((family) => (
            <li key={family.label}>
              <Link href={family.href} className="home-scent-card">
                <Image
                  src={family.imageSrc}
                  alt={family.imageAlt}
                  fill
                  sizes="(max-width: 767px) 92vw, (max-width: 1279px) 48vw, 240px"
                  className="home-scent-card__img object-cover"
                />
                <span className="home-scent-card__scrim" aria-hidden />
                <span className="home-scent-card__label">{family.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="home-scents__cta-wrap">
          <Link href={exploreScents.cta.href} className="home-scents__cta">
            {exploreScents.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
