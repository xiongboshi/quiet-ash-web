import Image from "next/image";
import Link from "next/link";
import type { CatalogProduct } from "@/lib/catalog";
import { getPairedProductsFor } from "@/lib/catalog";
import { brandMoods } from "@/data/brand-moods";
import {
  MOOD_SHOP_SLUG,
  resolveMoodProductPage,
} from "@/data/mood-product-pages";
import { shopPath } from "@/lib/site-paths";
import { MoodProductHeader } from "@/components/mood/mood-product-header";
import {
  MoodProductMobileDock,
  MoodProductPurchaseInline,
} from "@/components/mood/mood-product-purchase";

type Props = {
  product: CatalogProduct;
};

function SpecCell({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.2em] text-[#888]">{label}</p>
      <p className="mt-2 text-[14px]">{value}</p>
    </div>
  );
}

export function MoodProductDetailLayout({ product }: Props) {
  const page = resolveMoodProductPage(product);
  const similar = getPairedProductsFor(product, 3);

  return (
    <main className="qa-mood-product bg-[#F8F5EE] pb-24 text-[#1C1C1C] md:pb-0">
      <MoodProductHeader />

      <section className="mx-auto grid max-w-[min(100%,1200px)] gap-14 px-6 py-10 lg:min-h-[min(92vh,1080px)] lg:grid-cols-2 lg:items-center lg:py-14">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-[0_24px_64px_-28px_rgba(28,24,20,0.12)]">
          <Image
            src={page.heroImage ?? product.image}
            alt={page.displayTitle}
            fill
            className="object-cover transition duration-700 hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 560px"
            priority
            unoptimized
          />
        </div>

        <div className="max-w-[520px]">
          <p className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#777]">
            Mood Incense
          </p>
          <h1 className="text-[clamp(40px,5vw,56px)] font-medium leading-[1.02] tracking-[-0.04em]">
            {page.displayTitle}
          </h1>
          <p className="mt-5 max-w-[420px] text-[16px] leading-[1.8] text-[#666]">
            {page.tagline}
          </p>
          <MoodProductPurchaseInline
            product={product}
            displayTitle={page.displayTitle}
            priceDisplay={page.priceDisplay}
          />
          <div className="mt-14 grid grid-cols-3 gap-5 border-t border-black/5 pt-8">
            <SpecCell label="Burn Time" value={page.burnTime ?? "30 min"} />
            <SpecCell label="Length" value={page.stickLength ?? "10.5 cm"} />
            <SpecCell label="Feeling" value={page.feeling ?? page.displayTitle} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-6 py-24">
        <p className="text-center text-[clamp(28px,3.2vw,38px)] font-medium leading-[1.45] tracking-[-0.03em]">
          {page.moodQuote}
        </p>
      </section>

      <section className="mx-auto max-w-[min(100%,1200px)] px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Top Mood", text: page.scentTop },
            { title: "Core Feeling", text: page.scentCore },
            { title: "After Feeling", text: page.scentAfter },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[20px] border border-black/5 bg-white/40 p-8"
            >
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#888]">
                {item.title}
              </p>
              <p className="mt-4 text-[24px] leading-[1.3] tracking-[-0.03em]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[min(100%,1200px)] px-6 py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {page.gallery.map((image) => (
            <div />
          ))}
        </div>
      </section>

      <section className="bg-[#F5F1EA] py-28">
        <div />
      </section>

      <section className="mx-auto max-w-[min(100%,1200px)] px-6 py-28">
        <div />
      </section>

      <section className="bg-[#F5F1EA] py-28">
        <div />
      </section>

      <footer className="border-t border-black/5 bg-[#F8F5EE] py-24">
        <div />
      </footer>

      <MoodProductMobileDock
        product={product}
        displayTitle={page.displayTitle}
        priceDisplay={page.priceDisplay}
      />
    </main>
  );
}
