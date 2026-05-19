import Image from "next/image";
import { SHOP_INDEX, shopPath } from "@/lib/site-paths";
import Link from "next/link";
import type { CatalogProduct } from "@/lib/catalog";
import { pairOverrideFor } from "@/lib/catalog";
import type { Ritual } from "@/lib/rituals";
import {
  OBJECT_CATALOG_GAP_X,
  OBJECT_CATALOG_ROW_MIN,
  OBJECT_COL_LABEL,
  OBJECT_ROW_ARROW,
  OBJECT_ROW_BLURB,
  OBJECT_ROW_LINK,
  OBJECT_ROW_META,
  OBJECT_ROW_PRICE,
  OBJECT_ROW_THUMB,
  OBJECT_ROW_THUMB_SIZE,
  OBJECT_ROW_TITLE,
} from "@/components/objects/object-detail-section-styles";

type RitualRow = {
  ritual: Ritual;
  title: string;
  blurb: string;
};

type Props = {
  product: CatalogProduct;
  ritualsRows: RitualRow[];
  paired: CatalogProduct[];
  rowCount: number;
  className?: string;
};

export function ObjectCatalogLinkColumns({
  product,
  ritualsRows,
  paired,
  rowCount,
  className = "",
}: Props) {
  return (
    <div
      className={`grid grid-cols-[minmax(0,380px)_minmax(0,1fr)] ${OBJECT_CATALOG_GAP_X} ${className}`.trim()}
      style={{
        gridTemplateRows: `auto repeat(${rowCount}, minmax(${OBJECT_CATALOG_ROW_MIN}, auto))`,
      }}
    >
      <p className={`${OBJECT_COL_LABEL} col-start-1 row-start-1`}>
        Used in these rituals
      </p>
      <p className={`${OBJECT_COL_LABEL} col-start-2 row-start-1`}>Pairs quietly with</p>

      {Array.from({ length: rowCount }, (_, i) => {
        const gridRow = i + 2;
        const ritualEntry = ritualsRows[i];
        const pairProduct = paired[i];

        return (
          <div key={`catalog-link-row-${gridRow}`} className="contents">
            {ritualEntry ? (
              <Link
                href={`/moods/${ritualEntry.ritual.slug}`}
                className={`${OBJECT_ROW_LINK} col-start-1`}
                style={{ gridRow }}
              >
                <figure className={OBJECT_ROW_THUMB}>
                  <Image
                    src={
                      ritualEntry.ritual.coverImage ??
                      ritualEntry.ritual.steps?.[0]?.image ??
                      product.image
                    }
                    alt=""
                    fill
                    className="object-cover object-center brightness-[0.88] contrast-[1.02] saturate-[0.8] transition-transform duration-[500ms] ease-out group-hover:scale-[1.03]"
                    sizes={OBJECT_ROW_THUMB_SIZE}
                    unoptimized
                  />
                </figure>
                <div className="min-w-0 flex-1 pr-1">
                  <p className={OBJECT_ROW_TITLE}>{ritualEntry.title}</p>
                  <p className={OBJECT_ROW_BLURB}>{ritualEntry.blurb}</p>
                </div>
                <span className={OBJECT_ROW_ARROW} aria-hidden>
                  →
                </span>
              </Link>
            ) : (
              <div
                className="col-start-1 border-b border-[color-mix(in_srgb,#ddd7cf_80%,transparent)]"
                style={{ gridRow }}
                aria-hidden
              />
            )}

            {pairProduct ? (
              <PairRowLink
                product={product}
                pairProduct={pairProduct}
                gridRow={gridRow}
              />
            ) : (
              <div
                className="col-start-2 border-b border-[color-mix(in_srgb,#ddd7cf_80%,transparent)]"
                style={{ gridRow }}
                aria-hidden
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function PairRowLink({
  product,
  pairProduct,
  gridRow,
}: {
  product: CatalogProduct;
  pairProduct: CatalogProduct;
  gridRow: number;
}) {
  const override = pairOverrideFor(product, pairProduct.slug);
  const pairTitle = override?.title ?? pairProduct.title;
  const materialLine =
    override?.materialLine ??
    [pairProduct.material, pairProduct.origin].filter(Boolean).join(" · ");
  const pairPrice = override?.priceDisplay ?? pairProduct.priceDisplay;

  return (
    <Link
      href={shopPath(pairProduct.slug)}
      className={`${OBJECT_ROW_LINK} col-start-2`}
      style={{ gridRow }}
    >
      <figure className={OBJECT_ROW_THUMB}>
        <Image
          src={pairProduct.image}
          alt=""
          fill
          className="object-cover object-center brightness-[0.9] contrast-[1.02] saturate-[0.85] transition-transform duration-[500ms] ease-out group-hover:scale-[1.03]"
          sizes={OBJECT_ROW_THUMB_SIZE}
          unoptimized
        />
      </figure>
      <div className="min-w-0 flex-1 pr-1">
        <p className={OBJECT_ROW_TITLE}>{pairTitle}</p>
        {materialLine ? <p className={OBJECT_ROW_META}>{materialLine}</p> : null}
        {pairPrice ? <p className={OBJECT_ROW_PRICE}>{pairPrice}</p> : null}
      </div>
      <span className={OBJECT_ROW_ARROW} aria-hidden>
        →
      </span>
    </Link>
  );
}
