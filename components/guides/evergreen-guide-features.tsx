import { QaImage as Image } from "@/components/ui/qa-image";
import { Check } from "lucide-react";
import type { GuidePageFeatureCard } from "@/data/evergreen-guide-page-content";
import { EVERGREEN_GUIDE_CHECK_ICON } from "@/components/guides/evergreen-guide-icons";

type Props = {
  cards: readonly [GuidePageFeatureCard, GuidePageFeatureCard];
};

export function EvergreenGuideFeatures({ cards }: Props) {
  return (
    <section className="evergreen-guide__features" aria-label="Guide highlights">
      <div className="evergreen-guide__features-grid">
        {cards.map((card) => (
          <article
            key={card.id}
            id={card.id}
            className="evergreen-guide__feature-card"
          >
            <div className="evergreen-guide__feature-body">
              <h2 className="evergreen-guide__feature-title">{card.title}</h2>
              <p className="evergreen-guide__feature-desc">{card.description}</p>
              {card.listType === "checklist" ? (
                <ul className="evergreen-guide__feature-checklist">
                  {card.items.map((item) => (
                    <li key={item}>
                      <Check {...EVERGREEN_GUIDE_CHECK_ICON} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <ol className="evergreen-guide__feature-steps">
                  {card.items.map((item, index) => (
                    <li key={item}>
                      <span className="evergreen-guide__feature-step-num">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              )}
            </div>
            <figure className="evergreen-guide__feature-media">
              <Image
                src={card.imageSrc}
                alt={card.imageAlt}
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="object-cover"
              />
            </figure>
          </article>
        ))}
      </div>
    </section>
  );
}
