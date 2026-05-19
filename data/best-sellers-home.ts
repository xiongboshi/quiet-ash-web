/** Homepage Best Sellers — editorial cards. */

export type HomeBestSeller = {
  slug: string;
  title: string;
  scentNotes: string;
  specs: string;
  /** Fallback when catalog has no price */
  priceDisplay: string;
  panelBg: string;
  addBtnBg: string;
  imageSrc: string;
  imageAlt: string;
};

export const homeBestSellers: HomeBestSeller[] = [
  {
    slug: "brass-incense-stand",
    title: "Calm Rain",
    scentNotes: "White Tea · Cedar · Rain",
    specs: "10.5cm · 30 Sticks",
    priceDisplay: "$18.00",
    panelBg: "#c5d6c3",
    addBtnBg: "#dce8da",
    imageSrc: "/images/generated/product-brass-stand.png",
    imageAlt: "Calm Rain mood incense with green crystal holder",
  },
  {
    slug: "wood-tray",
    title: "Citrus Reset",
    scentNotes: "Citrus Peel · Green Tea · Sun",
    specs: "10.5cm · 30 Sticks",
    priceDisplay: "$18.00",
    panelBg: "#f2e8a8",
    addBtnBg: "#f8f0c8",
    imageSrc: "/images/generated/product-oak-tray.png",
    imageAlt: "Citrus Reset mood incense with yellow crystal holder",
  },
  {
    slug: "small-agarwood-box",
    title: "Sunday Sleep",
    scentNotes: "Lavender · Warm Wood · Dusk",
    specs: "10.5cm · 30 Sticks",
    priceDisplay: "$18.00",
    panelBg: "#d8cfe8",
    addBtnBg: "#ebe4f2",
    imageSrc: "/images/generated/product-agarwood-box.png",
    imageAlt: "Sunday Sleep mood incense with lavender crystal holder",
  },
];
