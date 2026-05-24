import Image from "next/image";
import Link from "next/link";
import { HomeNeedIcon } from "@/components/home/home-icons";
import { homeRedesign } from "@/data/home-redesign";

export function HomeShopByNeed() {
  const { shopByNeed } = homeRedesign;

  return (
    <section className="home-need" aria-labelledby="home-need-heading">
      <div className="home-container">
        <header className="home-need__head">
          <h2 id="home-need-heading" className="home-need__heading">
            {shopByNeed.heading}
          </h2>
          <p className="home-need__sub">{shopByNeed.subheading}</p>
        </header>
        <ul className="home-need__grid">
          {shopByNeed.cards.map((card) => (
            <li key={card.title} className="home-need__cell">
              <Link href={card.href} className="home-need-card">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 767px) 100vw, 20vw"
                  className="home-need-card__img object-cover"
                />
                <span className="home-need-card__scrim" aria-hidden />
                <span className="home-need-card__content">
                  <span className="home-need-card__icon">
                    <HomeNeedIcon id={card.icon} />
                  </span>
                  <span className="home-need-card__title">{card.title}</span>
                  <span className="home-need-card__desc">
                    {card.descriptionLines.map((line) => (
                      <span key={line} className="home-need-card__desc-line">
                        {line}
                      </span>
                    ))}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
