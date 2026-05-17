/**
 * Curated editorial collections — commerce as atmosphere, not category aisles.
 * Product slugs must exist as JSON files under each `data/products/<category>/` folder.
 */
export type EditorialCollection = {
  slug: string;
  title: string;
  tagline: string;
  mood: string;
  relatedProductSlugs: string[];
  coverImage?: string;
  /** Short editorial block (markdown), optional. */
  statementMd?: string;
};

export const editorialCollections: EditorialCollection[] = [
  {
    slug: "evening-ritual",
    title: "Evening Ritual",
    tagline: "When the room dims and the first thread of smoke rises.",
    mood: "dusk · smoke · linen",
    relatedProductSlugs: ["brass-incense-stand", "linen-cloth", "wood-tray"],
    coverImage: "/images/hero-objects.svg",
    statementMd:
      "Evening is not an hour on the clock — it is a quality of attention. These objects hold heat, ash, and the small dignity of closing the day without noise.",
  },
  {
    slug: "quiet-desk",
    title: "Quiet Desk",
    tagline: "Scholar pace — paper, breath, one flame.",
    mood: "ink · oak · still air",
    relatedProductSlugs: ["wood-tray", "paper-incense-sleeve", "ceramic-tea-cup"],
    coverImage: "/images/hero-objects.svg",
    statementMd:
      "A desk that slows you down is not empty — it is edited. What remains should earn its place through touch and repetition.",
  },
  {
    slug: "rain-room",
    title: "Rain Room",
    tagline: "After rain: glaze, steam, and a longer exhale.",
    mood: "petrichor · glaze · warmth",
    relatedProductSlugs: ["ceramic-tea-cup", "linen-cloth", "small-agarwood-box"],
    coverImage: "/images/hero-objects.svg",
    statementMd:
      "Rain asks the room to soften. Tea steadies the hands; wood and linen remember the weather without narrating it.",
  },
  {
    slug: "smoke-silence",
    title: "Smoke & Silence",
    tagline: "Where fragrance is a form of listening.",
    mood: "low light · resin · interval",
    relatedProductSlugs: ["small-agarwood-box", "brass-incense-stand", "paper-incense-sleeve"],
    coverImage: "/images/hero-objects.svg",
    statementMd:
      "Smoke teaches interval — between notes, between thoughts. Silence here is not absence; it is room for the nose and the mind to agree.",
  },
  {
    slug: "slow-tea",
    title: "Slow Tea",
    tagline: "Bowl, steam, and the unhurried middle of the day.",
    mood: "steam · stone glaze · pause",
    relatedProductSlugs: ["ceramic-tea-cup", "wood-tray", "linen-cloth"],
    coverImage: "/images/hero-objects.svg",
    statementMd:
      "Tea in this house is not performance. It is a small architecture for waiting — for water, for cooling, for the next sentence.",
  },
  {
    slug: "objects-dusk",
    title: "Objects for Dusk",
    tagline: "What stays when the overhead light goes off.",
    mood: "ember · shadow · tactility",
    relatedProductSlugs: ["brass-incense-stand", "wood-tray", "small-agarwood-box"],
    coverImage: "/images/hero-objects.svg",
    statementMd:
      "Dusk rewards objects that do not shout — weight in the palm, grain you feel in the dark, lids that close with patience.",
  },
];
