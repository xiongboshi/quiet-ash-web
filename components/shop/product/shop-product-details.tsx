import Image from "next/image";
import { candlestickBigLit } from "@lucide/lab";
import { Flame, Icon, Sparkles } from "lucide-react";
import type { ShopProductPdp } from "@/data/shop-product-pdp";

type Props = Pick<ShopProductPdp, "aboutScent" | "howToUse" | "safetyTips" | "packaging">;

const STEP_ICON_PROPS = {
  size: 18,
  strokeWidth: 1.15,
  absoluteStrokeWidth: true,
  "aria-hidden": true as const,
};

function StepIcon({ index }: { index: number }) {
  if (index === 0) return <Sparkles {...STEP_ICON_PROPS} />;
  if (index === 1) return <Flame {...STEP_ICON_PROPS} />;
  return <Icon iconNode={candlestickBigLit} {...STEP_ICON_PROPS} />;
}

export function ShopProductDetails({
  aboutScent,
  howToUse,
  safetyTips,
  packaging,
}: Props) {
  return (
    <section className="shop-product-details" aria-label="Product details">
      <div className="shop-product-details__inner">
        <div className="shop-product-details__col shop-product-details__col--about">
          <div className="shop-product-details__stack">
            <h2 className="shop-product-details__heading">ABOUT THIS SCENT</h2>
            <div className="shop-product-details__content">
              <p className="shop-product-details__about">{aboutScent.body}</p>
            </div>
            <figure className="shop-product-details__media">
              <Image
                src={aboutScent.imageSrc}
                alt=""
                fill
                sizes="(max-width: 1023px) 100vw, 28vw"
                className="shop-product-details__media-img object-cover"
              />
            </figure>
          </div>
        </div>

        <div className="shop-product-details__col shop-product-details__col--use">
          <div className="shop-product-details__stack">
            <h2 className="shop-product-details__heading">HOW TO USE</h2>
            <div className="shop-product-details__content">
              <ol className="shop-product-details__steps">
                {howToUse.map((step, index) => (
                    <li key={step.title} className="shop-product-details__step">
                      <span className="shop-product-details__step-icon" aria-hidden>
                        <StepIcon index={index} />
                      </span>
                      <span className="shop-product-details__step-copy">
                        <span className="shop-product-details__step-title">
                          <span className="shop-product-details__step-title-num">
                            {index + 1}
                          </span>{" "}
                          {step.title}
                        </span>
                        <span className="shop-product-details__step-body">{step.body}</span>
                      </span>
                    </li>
                ))}
              </ol>

              <h2 className="shop-product-details__heading shop-product-details__heading--safety">
                SAFETY TIPS
              </h2>
              <ul className="shop-product-details__safety">
                {safetyTips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>

            <div className="shop-product-details__illustration" aria-hidden>
              <Icon
                iconNode={candlestickBigLit}
                className="shop-product-details__illustration-icon"
                size={88}
                strokeWidth={1.25}
                absoluteStrokeWidth
              />
            </div>
          </div>
        </div>

        <div className="shop-product-details__col shop-product-details__col--packaging">
          <div className="shop-product-details__stack">
            <h2 className="shop-product-details__heading">PACKAGING</h2>
            <div className="shop-product-details__content">
              <p className="shop-product-details__packaging-copy">{packaging.body}</p>
              {packaging.details?.length ? (
                <ul className="shop-product-details__packaging-list">
                  {packaging.details.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
            <figure className="shop-product-details__media">
              <Image
                src={packaging.imageSrc}
                alt=""
                fill
                sizes="(max-width: 1023px) 100vw, 28vw"
                className="shop-product-details__media-img object-cover"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
