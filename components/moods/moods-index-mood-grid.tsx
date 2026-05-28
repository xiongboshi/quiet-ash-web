import { QaImage as Image } from "@/components/ui/qa-image";
import Link from "next/link";
import { MoodsIndexCardIcon } from "@/components/moods/moods-index-card-icon";
import type { MoodsIndexCard } from "@/data/moods-index";

type Props = {
  cards: MoodsIndexCard[];
};

export function MoodsIndexMoodGrid({ cards }: Props) {
  return (
    <div className="mood-shop-grid">
      {cards.map((card) => (
        <Link key={card.title} href={card.href} className="mood-shop-card">
          <div className="mood-shop-visual">
            <span className="mood-shop-card-icon">
              <MoodsIndexCardIcon id={card.icon} />
            </span>
            <Image
              src={card.imageSrc}
              alt={card.imageAlt}
              width={480}
              height={640}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 16vw"
              className="mood-shop-photo"
            />
          </div>
          <div className="mood-shop-body">
            <h3 className="mood-shop-title">{card.title}</h3>
            <p className="mood-shop-desc">{card.description}</p>
            <div className="mood-shop-tags">
              {card.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <span className="mood-shop-explore">
              Explore
              <span aria-hidden>→</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
