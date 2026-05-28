import { QaImage as Image } from "@/components/ui/qa-image";
import Link from "next/link";
import type { EvergreenGuidePageContent } from "@/data/evergreen-guide-page-content";
import { EvergreenGuideScentIcon } from "@/components/guides/evergreen-guide-nav-icon";

type Props = {
  section: EvergreenGuidePageContent["scents"];
};

export function EvergreenGuideScents({ section }: Props) {
  return (
    <section
      id="best-scents"
      className="evergreen-guide__scents"
      aria-labelledby="evergreen-guide-scents-heading"
    >
      <header className="evergreen-guide__section-head">
        <div>
          <h2 id="evergreen-guide-scents-heading" className="evergreen-guide__section-title">
            {section.title}
          </h2>
          <p className="evergreen-guide__section-sub">{section.subtitle}</p>
        </div>
        <Link href={section.viewAllHref} className="evergreen-guide__section-link">
          {section.viewAllLabel}
        </Link>
      </header>
      <ul className="evergreen-guide__scents-grid">
        {section.cards.map((card) => (
          <li key={card.title}>
            <article className="evergreen-guide__scent-card">
              <Link href={card.href} className="evergreen-guide__scent-media-link">
              <figure className="evergreen-guide__scent-media">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                  className="object-cover"
                />
                <span className="evergreen-guide__scent-badge" aria-hidden>
                  <EvergreenGuideScentIcon icon={card.icon} />
                </span>
              </figure>
              </Link>
              <h3 className="evergreen-guide__scent-title">{card.title}</h3>
              <p className="evergreen-guide__scent-desc">{card.description}</p>
              <Link href={card.href} className="evergreen-guide__scent-cta">
                {card.ctaLabel}
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
