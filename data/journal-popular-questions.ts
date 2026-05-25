/** One block in an FAQ answer — add paragraphs, lists, or subheadings in order. */
export type JournalFaqBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: readonly string[] }
  | { type: "subheading"; text: string };

export type JournalPopularQuestion = {
  id: string;
  question: string;
  answer: readonly JournalFaqBlock[];
};

/**
 * Journal index — Popular Questions (FAQ).
 * Add a new entry to the array to publish another Q&A.
 */
export const journalPopularQuestions: readonly JournalPopularQuestion[] = [
  {
    id: "best-incense-for-sleep",
    question: "What is the best incense for sleep?",
    answer: [
      {
        type: "paragraph",
        text: "The best incense for sleep is usually soft, calming, and low in intensity. Lavender, sandalwood, white tea, and light floral scents are popular choices because they feel relaxing without overwhelming the room.",
      },
      {
        type: "paragraph",
        text: "For better sleep, choose incense with a gentle scent profile and avoid heavy or overly sweet fragrances before bed.",
      },
    ],
  },
  {
    id: "how-long-burn-incense",
    question: "How long should I burn incense?",
    answer: [
      {
        type: "paragraph",
        text: "Most people only need to burn incense for 15–30 minutes.",
      },
      {
        type: "paragraph",
        text: "In smaller rooms, shorter sessions are usually enough. You do not need to burn an entire stick every time. A lighter scent is often more comfortable and easier to enjoy daily.",
      },
      {
        type: "paragraph",
        text: "Always keep your space ventilated while burning incense.",
      },
    ],
  },
  {
    id: "room-smell-naturally",
    question: "How do I make my room smell good naturally?",
    answer: [
      {
        type: "paragraph",
        text: "The easiest way to make a room smell better naturally is to focus on freshness first.",
      },
      {
        type: "paragraph",
        text: "Helpful habits include:",
      },
      {
        type: "list",
        items: [
          "Opening windows regularly",
          "Keeping fabrics clean",
          "Reducing trapped moisture",
          "Using low-smoke incense or subtle home scents",
        ],
      },
      {
        type: "paragraph",
        text: "Clean air and lighter fragrances usually feel better than strong artificial scents.",
      },
    ],
  },
  {
    id: "burn-incense-daily",
    question: "Is it safe to burn incense every day?",
    answer: [
      {
        type: "paragraph",
        text: "Incense can be enjoyed daily when used in moderation and with proper ventilation.",
      },
      {
        type: "paragraph",
        text: "For a better experience:",
      },
      {
        type: "list",
        items: [
          "Burn incense in a ventilated room",
          "Avoid excessive smoke buildup",
          "Choose cleaner, low-smoke incense",
          "Limit burn time in small spaces",
        ],
      },
      {
        type: "paragraph",
        text: "If a scent feels harsh or irritating, it may be too strong for everyday use.",
      },
    ],
  },
  {
    id: "scents-for-anxiety",
    question: "Which scents help with anxiety?",
    answer: [
      {
        type: "paragraph",
        text: "Many people prefer softer scents when they want to relax or unwind. Popular calming incense scents include:",
      },
      {
        type: "list",
        items: [
          "Lavender",
          "Sandalwood",
          "White tea",
          "Soft woods",
          "Light floral blends",
        ],
      },
      {
        type: "paragraph",
        text: "Heavy or overly sweet scents can sometimes feel overwhelming, especially in smaller rooms.",
      },
    ],
  },
  {
    id: "sandalwood-vs-lavender",
    question: "Sandalwood vs. lavender: what's the difference?",
    answer: [
      {
        type: "paragraph",
        text: "Sandalwood and lavender create very different scent experiences.",
      },
      { type: "subheading", text: "Sandalwood" },
      {
        type: "list",
        items: [
          "Warm and woody",
          "Rich but calming",
          "Often used for evening relaxation",
          "Feels grounding and quiet",
        ],
      },
      { type: "subheading", text: "Lavender" },
      {
        type: "list",
        items: [
          "Light and floral",
          "Cleaner and softer",
          "Popular before sleep",
          "Feels fresh and calming",
        ],
      },
      {
        type: "paragraph",
        text: "Sandalwood is usually deeper and warmer, while lavender feels brighter and more airy.",
      },
    ],
  },
  {
    id: "incense-vs-candles",
    question: "Incense vs. candles: which is better?",
    answer: [
      {
        type: "paragraph",
        text: "Neither is objectively better — they create different experiences.",
      },
      { type: "subheading", text: "Incense" },
      {
        type: "list",
        items: [
          "Faster scent diffusion",
          "More noticeable fragrance layers",
          "Better for short sessions",
          "Often preferred in smaller spaces",
        ],
      },
      { type: "subheading", text: "Candles" },
      {
        type: "list",
        items: [
          "Softer scent throw",
          "Longer-lasting ambiance",
          "Adds warm lighting",
          "Better for extended use",
        ],
      },
      {
        type: "paragraph",
        text: "Many people choose incense when they want a cleaner, quicker scent experience without strong sweetness.",
      },
    ],
  },
  {
    id: "incense-for-studying",
    question: "What incense scent is best for studying?",
    answer: [
      {
        type: "paragraph",
        text: "For studying or focus, lighter and cleaner scents usually work best.",
      },
      {
        type: "paragraph",
        text: "Popular options include:",
      },
      {
        type: "list",
        items: ["Tea scents", "Citrus scents", "Mint blends", "Light woods"],
      },
      {
        type: "paragraph",
        text: "Heavy, smoky, or overly sweet scents may feel distracting during work or study sessions.",
      },
    ],
  },
  {
    id: "incense-meditation",
    question: "Can incense help with meditation?",
    answer: [
      {
        type: "paragraph",
        text: "Incense does not directly create meditation, but it can help build a calming environment and consistent routine.",
      },
      {
        type: "paragraph",
        text: "Many people use the same scent repeatedly during:",
      },
      {
        type: "list",
        items: ["Meditation", "Reading", "Yoga", "Evening relaxation"],
      },
      {
        type: "paragraph",
        text: "Over time, familiar scents can help the mind transition into a calmer and more focused state.",
      },
    ],
  },
];
