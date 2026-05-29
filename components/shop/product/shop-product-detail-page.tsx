import Link from "next/link";
import type { CatalogProduct } from "@/lib/catalog";
import { getShopProductPdp } from "@/data/shop-product-pdp";
import { ShopProductBuyBox } from "@/components/shop/product/shop-product-buy-box";
import { ShopProductDetails } from "@/components/shop/product/shop-product-details";
import { ShopProductGallery } from "@/components/shop/product/shop-product-gallery";
import { ShopProductReviews } from "@/components/shop/product/shop-product-reviews";
import { ShopProductSpecBar } from "@/components/shop/product/shop-product-spec-bar";

type Props = { product: CatalogProduct };

export function ShopProductDetailPage({ product }: Props) {
  const pdp = getShopProductPdp(product);

  return (
    <div className="shop-product-page">
      <section className="shop-product-hero" aria-label="Product">
        <div className="shop-product-hero__shell">
          <nav className="shop-product-hero__breadcrumbs" aria-label="Breadcrumb">
            {pdp.breadcrumbs.map((crumb, index) => (
              <span key={crumb.href} className="shop-product-hero__crumb">
                {index > 0 ? (
                  <span className="shop-product-hero__crumb-sep" aria-hidden>
                    {" "}
                    &gt;{" "}
                  </span>
                ) : null}
                {index < pdp.breadcrumbs.length - 1 ? (
                  <Link href={crumb.href} className="shop-product-hero__crumb-link">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="shop-product-hero__crumb-current">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>

          <div className="shop-product-hero__grid">
            <ShopProductGallery
              title={pdp.title}
              badge={pdp.badge}
              gallery={pdp.gallery}
            />
            <ShopProductBuyBox pdp={pdp} />
          </div>
        </div>
      </section>

      <ShopProductSpecBar specs={pdp.specs} />

      <ShopProductDetails
        title={pdp.title}
        aboutScent={pdp.aboutScent}
        howToUse={pdp.howToUse}
        safetyTips={pdp.safetyTips}
        packaging={pdp.packaging}
      />

      <ShopProductReviews reviews={pdp.reviews} />
    </div>
  );
}
