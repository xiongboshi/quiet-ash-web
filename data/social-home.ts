/** Homepage footer — brand background + Instagram rail. */

export const FOOTER_LEAF_SHADOW =
  "/images/generated/footer-leaf-shadow.png" as const;

export type HomeSocialTile = {
  imageSrc: string;
  imageAlt: string;
};

export const homeSocialTiles: HomeSocialTile[] = [
  {
    imageSrc: "/images/generated/products/small-agarwood-box/gallery-01.png",
    imageAlt: "Incense still life on stone with green packaging",
  },
  {
    imageSrc: "/images/generated/products/brass-incense-stand/atmosphere.png",
    imageAlt: "Glass incense holder with smoke on wooden surface",
  },
  {
    imageSrc: "/images/generated/products/paper-incense-sleeve/hero.png",
    imageAlt: "Green mood incense box with brass holder",
  },
  {
    imageSrc: "/images/generated/products/ceramic-tea-cup/gallery-02.png",
    imageAlt: "Incense stick in crystal holder with strawberry accent",
  },
  {
    imageSrc: "/images/generated/products/wood-tray/atmosphere.png",
    imageAlt: "Minimal incense ritual on warm wood",
  },
];
