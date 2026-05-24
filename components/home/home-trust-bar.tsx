import {
  ClockCheck,
  HandHeart,
  Sprout,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { homeRedesign, type HomeTrustItem } from "@/data/home-redesign";

/** INS mockup — line icons, 24px, stroke ~1.25 */
const TRUST_ICON_PROPS = {
  size: 24,
  strokeWidth: 1.25,
  absoluteStrokeWidth: true,
  "aria-hidden": true as const,
};

const TRUST_ICONS: Record<HomeTrustItem["icon"], LucideIcon> = {
  hand: HandHeart,
  leaf: Sprout,
  returns: ClockCheck,
  shipping: Truck,
};

function TrustIcon({ icon }: { icon: HomeTrustItem["icon"] }) {
  const Icon = TRUST_ICONS[icon];
  return <Icon className="home-trust__svg" {...TRUST_ICON_PROPS} />;
}

export function HomeTrustBar() {
  return (
    <section className="home-trust" aria-label="Store promises">
      <div className="home-container home-trust__shell">
        <ul className="home-trust__list">
          {homeRedesign.trust.map((item) => (
            <li key={item.id} className="home-trust__item">
              <span className="home-trust__icon" aria-hidden>
                <TrustIcon icon={item.icon} />
              </span>
              <span className="home-trust__copy">
                <span className="home-trust__title">{item.title}</span>
                <span className="home-trust__desc">{item.description}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
