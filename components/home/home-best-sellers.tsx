import Link from "next/link";
import { HomeProductCard } from "@/components/home/home-product-card";
import { homeRedesign } from "@/data/home-redesign";

export function HomeBestSellers() {
  const { bestSellers } = homeRedesign;

  return (
    <section className="home-bestsellers" aria-labelledby="home-bestsellers-heading">
      <div className="home-container">
        <header className="home-bestsellers__head">
          <h2 id="home-bestsellers-heading" className="home-bestsellers__heading">
            {bestSellers.heading}
          </h2>
          <Link href={bestSellers.viewAllHref} className="home-bestsellers__view-all">
            {bestSellers.viewAllLabel} →
          </Link>
        </header>
        <ul className="home-bestsellers__grid">
          {bestSellers.products.map((item) => (
            <li key={item.slug} className="home-bestsellers__cell">
              <HomeProductCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
