import Image from "next/image";
import Link from "next/link";
import { QaHomeHeader } from "@/components/qa/qa-home-header";
import { QaHomeProductCard } from "@/components/qa/qa-home-product-card";
import { QaHomeReveal } from "@/components/qa/qa-home-reveal";
import { homeBestSellers } from "@/data/best-sellers-home";
import { brandHome } from "@/data/brand-home";
import { homeLifestyleCards } from "@/data/home-lifestyle";
import { homeMoodCards } from "@/data/home-moods";

export function QaHomePage() {
  const { hero, moods, fruity, bestSellers, footer } = brandHome;

  return (
    <div className="qa-page">
      <QaHomeHeader />

      <section className="hero">
        <div className="hero-bg">
          <Image
            src={hero.backgroundSrc}
            alt={hero.backgroundAlt}
            fill
            priority
            sizes="100vw"
            unoptimized
            style={{ objectPosition: hero.objectPosition }}
          />
        </div>
        <div className="hero-overlay" aria-hidden />

        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-label">{hero.eyebrow}</div>
            <h2 className="hero-title">
              {hero.titleLines[0]}
              <br />
              {hero.titleLines[1]}
            </h2>
            <p className="hero-desc">{hero.description}</p>
            <Link href={hero.cta.href} className="hero-btn">
              {hero.cta.label}
            </Link>
          </div>
        </div>
      </section>

      <section id="moods" className="qa-home-section">
        <div className="container">
          <div className="section-head">
            <div className="section-title">{moods.heading}</div>
            <Link href={moods.viewAllHref} className="view-link">
              {moods.viewAllLabel}
            </Link>
          </div>
          <div className="mood-grid">
            {homeMoodCards.map((mood) => (
              <Link key={mood.slug} href={mood.href} className="mood-card">
                <Image
                  src={mood.imageSrc}
                  alt={mood.imageAlt}
                  fill
                  sizes="(max-width: 767px) 100vw, 360px"
                  className="mood-card-img object-cover"
                />
                <div className="mood-scrim" aria-hidden />
                <div className="mood-content">
                  <h3>{mood.label}</h3>
                  <p>{mood.scentLine}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="qa-home-section qa-home-section--collection-bleed">
        <div className="collection">
          <div className="collection-media">
            <Image
              src={fruity.imageSrc}
              alt={fruity.imageAlt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="collection-copy">
            <span>{fruity.eyebrow}</span>
            <h2>
              {fruity.titleLines[0]}
              <br />
              {fruity.titleLines[1]}
            </h2>
            <p>{fruity.description}</p>
            <Link href={fruity.cta.href} className="collection-btn">
              {fruity.cta.label}
            </Link>
          </div>
        </div>
      </section>

      <section id="best-sellers" className="qa-home-section">
        <div className="container">
          <div className="section-head">
            <div className="section-title">{bestSellers.heading}</div>
            <Link href={bestSellers.viewAllHref} className="view-link">
              {bestSellers.viewAllLabel}
            </Link>
          </div>
          <div className="product-grid">
            {homeBestSellers.map((item) => (
              <QaHomeProductCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="qa-home-section">
        <div className="container">
          <div className="life-grid">
            {homeLifestyleCards.map((item) => (
              <figure key={item.title} className="life-card">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 767px) 100vw, 360px"
                  className="life-card-img object-cover"
                />
                <div className="life-overlay" aria-hidden />
                <figcaption className="life-content">
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <footer className="qa-home-footer">
        <div className="container">
          <p className="footer-eyebrow">{brandHome.siteTitle}</p>
          <div className="footer-grid">
            {footer.map((item) => (
              <div key={item.title} className="footer-item">
                <h5>{item.title}</h5>
                {item.body.includes("@") ? (
                  <p>
                    <a href={`mailto:${item.body}`}>{item.body}</a>
                  </p>
                ) : (
                  <p>{item.body}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </footer>

      <QaHomeReveal />
    </div>
  );
}
