/** Homepage "Made for your moments" — lifestyle cards. */

export type HomeMoment = {
  label: string;
  imageSrc: string;
  imageAlt: string;
};

export const homeMomentsKicker = "Soft rituals" as const;

export const homeMoments: HomeMoment[] = [
  {
    label: "Slow mornings",
    imageSrc: "/images/generated/products/linen-cloth/hero.webp",
    imageAlt: "Slow morning bedroom with incense and soft daylight",
  },
  {
    label: "Focus time",
    imageSrc: "/images/generated/ritual-incense-writing.webp",
    imageAlt: "Focus time desk with laptop, coffee and incense",
  },
  {
    label: "Bath & unwind",
    imageSrc: "/images/generated/products/ceramic-tea-cup/atmosphere.webp",
    imageAlt: "Bath ritual with candles and incense by the tub",
  },
  {
    label: "Rainy days",
    imageSrc: "/images/generated/ritual-tea-rain.webp",
    imageAlt: "Rainy window with book, coffee and incense on the sill",
  },
  {
    label: "Before bed",
    imageSrc: "/images/generated/products/small-agarwood-box/atmosphere.webp",
    imageAlt: "Bedside reading lamp, book and incense before sleep",
  },
];
