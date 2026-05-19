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
    imageSrc: "/images/generated/products/linen-cloth/hero.png",
    imageAlt: "Slow morning bedroom with incense and soft daylight",
  },
  {
    label: "Focus time",
    imageSrc: "/images/generated/ritual-incense-writing.png",
    imageAlt: "Focus time desk with laptop, coffee and incense",
  },
  {
    label: "Bath & unwind",
    imageSrc: "/images/generated/products/ceramic-tea-cup/atmosphere.png",
    imageAlt: "Bath ritual with candles and incense by the tub",
  },
  {
    label: "Rainy days",
    imageSrc: "/images/generated/ritual-tea-rain.png",
    imageAlt: "Rainy window with book, coffee and incense on the sill",
  },
  {
    label: "Before bed",
    imageSrc: "/images/generated/products/small-agarwood-box/atmosphere.png",
    imageAlt: "Bedside reading lamp, book and incense before sleep",
  },
];
