import {
  ClockCheck,
  HandHeart,
  Sprout,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { shopCategory } from "@/data/shop-category";

const ICONS: Record<
  (typeof shopCategory.valueBar)[number]["icon"],
  LucideIcon
> = {
  hand: HandHeart,
  leaf: Sprout,
  returns: ClockCheck,
  shipping: Truck,
};

const iconProps = {
  size: 28,
  strokeWidth: 1.15,
  "aria-hidden": true as const,
};

export function ShopCategoryValueBar() {
  return (
    <section className="shop-category-value" aria-label="Store promises">
      <div className="shop-category-value__inner">
        <ul className="shop-category-value__list">
          {shopCategory.valueBar.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <li key={item.id} className="shop-category-value__item">
                <span className="shop-category-value__icon">
                  <Icon {...iconProps} />
                </span>
                <span className="shop-category-value__copy">
                  <span className="shop-category-value__title">{item.title}</span>
                  <span className="shop-category-value__desc">{item.description}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
