import { QaImage as Image } from "@/components/ui/qa-image";
import { Sparkles } from "lucide-react";
import { EVERGREEN_GUIDE_QUICK_ICON } from "@/components/guides/evergreen-guide-icons";

type Props = {
  title?: string;
  paragraphs: readonly string[];
  imageSrc: string;
  imageAlt: string;
};

export function EvergreenGuideQuickAnswer({
  title = "Quick Answer",
  paragraphs,
  imageSrc,
  imageAlt,
}: Props) {
  return (
    <section className="evergreen-guide__quick" aria-label="Quick answer">
      <div className="evergreen-guide__quick-card">
        <div className="evergreen-guide__quick-copy">
          <div className="evergreen-guide__quick-heading">
            <span className="evergreen-guide__quick-icon" aria-hidden>
              <Sparkles {...EVERGREEN_GUIDE_QUICK_ICON} />
            </span>
            <h2 className="evergreen-guide__quick-title">{title}</h2>
          </div>
          <div className="evergreen-guide__quick-body">
            {paragraphs.map((text, index) => (
              <p key={index} className="evergreen-guide__quick-text">
                {text}
              </p>
            ))}
          </div>
        </div>
        <figure className="evergreen-guide__quick-media">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 639px) 120px, 220px"
            className="evergreen-guide__quick-img object-cover"
          />
        </figure>
      </div>
    </section>
  );
}
