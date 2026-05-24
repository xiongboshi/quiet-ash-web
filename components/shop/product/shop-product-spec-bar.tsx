import { BarChart3, Clock3, Heart, Home } from "lucide-react";
import type { ShopProductPdp } from "@/data/shop-product-pdp";

type Props = { specs: ShopProductPdp["specs"] };

export function ShopProductSpecBar({ specs }: Props) {
  return (
    <section className="shop-product-spec" aria-label="Product attributes">
      <div className="shop-product-spec__inner">
        <div className="shop-product-spec__item">
          <Clock3 className="shop-product-spec__icon" size={22} strokeWidth={1.15} aria-hidden />
          <div className="shop-product-spec__copy">
            <span className="shop-product-spec__label">BURN TIME</span>
            <span className="shop-product-spec__value">{specs.burnTime}</span>
          </div>
        </div>

        <div className="shop-product-spec__item">
          <BarChart3 className="shop-product-spec__icon" size={22} strokeWidth={1.15} aria-hidden />
          <div className="shop-product-spec__copy">
            <span className="shop-product-spec__label">SCENT STRENGTH</span>
            <span className="shop-product-spec__value">{specs.scentStrength.label}</span>
            <span className="shop-product-spec__meter" aria-hidden>
              {Array.from({ length: specs.scentStrength.total }, (_, i) => (
                <span
                  key={i}
                  className={
                    i < specs.scentStrength.filled
                      ? "shop-product-spec__meter-seg shop-product-spec__meter-seg--on"
                      : "shop-product-spec__meter-seg"
                  }
                />
              ))}
            </span>
          </div>
        </div>

        <div className="shop-product-spec__item">
          <Heart className="shop-product-spec__icon" size={22} strokeWidth={1.15} aria-hidden />
          <div className="shop-product-spec__copy">
            <span className="shop-product-spec__label">BEST FOR</span>
            <span className="shop-product-spec__value">{specs.bestFor}</span>
          </div>
        </div>

        <div className="shop-product-spec__item">
          <Home className="shop-product-spec__icon" size={22} strokeWidth={1.15} aria-hidden />
          <div className="shop-product-spec__copy">
            <span className="shop-product-spec__label">PERFECT FOR</span>
            <span className="shop-product-spec__value">{specs.perfectFor}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
