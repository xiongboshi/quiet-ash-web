import type { JournalArticleTemplate } from "@/types/journal-article";
import { betterSleepRelatedBlock } from "@/data/journal-sleep-hub";
import { JOURNAL_INDEX, journalPath } from "@/lib/site-paths";

const CATEGORY_HREF = `${JOURNAL_INDEX}/better-sleep`;

/** Guide — `/journal/sleep-meditation` */
export const journalArticleSleepMeditation: JournalArticleTemplate = {
  slug: "sleep-meditation",
  bodyFormat: "guide",
  documentTitle: "Sleep Meditation | Quiet Ash",
  seoTitle: "Sleep Meditation",
  seoDescription:
    "How sleep meditation, breath, and quiet evening rituals can support relaxation before bed — atmosphere and lifestyle, not clinical treatment.",
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Journal", href: JOURNAL_INDEX },
      { label: "Better Sleep", href: CATEGORY_HREF },
      {
        label: "Sleep Meditation",
        href: journalPath("sleep-meditation"),
      },
    ],
    categoryLabel: "BETTER SLEEP",
    title: "Sleep Meditation",
    subtitle:
      "Quiet attention, slower breath, and a bedroom that feels safe enough to let go of the day.",
    readMinutes: 8,
    updatedLabel: "Updated June 3, 2026",
    imageSrc: "/images/generated/essay-night-incense-ritual.webp",
    imageAlt: "Calm bedroom with soft evening light and a restful atmosphere",
  },
  quickAnswer: {
    paragraphs: [
      "Sleep meditation is a gentle practice of directing attention toward breath, body, or a simple phrase before bed.",
      "Many people use it as part of a wind-down ritual — alongside dim light, calm sound, and a room that feels unhurried — rather than as a standalone cure for sleep problems.",
    ],
  },
  keyTakeaways: [
    { icon: "brain", text: "Meditation before sleep is about easing attention, not forcing sleep" },
    { icon: "leaf", text: "Short sessions often work better than long, rigid programs" },
    { icon: "shield", text: "A calm environment makes practice easier" },
    { icon: "scent", text: "Soft scent can anchor a repeatable evening ritual" },
    { icon: "brain", text: "Guided audio or silent breath both have a place" },
    { icon: "leaf", text: "Consistency matters more than technique perfection" },
  ],
  sections: [
    {
      id: "what-it-is",
      heading: "What Is Sleep Meditation?",
      paragraphs: [
        "Sleep meditation usually means quiet, intentional rest before bed — noticing breath, relaxing muscle tension, or listening to a gentle guided track.",
        "It is not about achieving a special state. It is about giving the mind a narrow, calm focus so the day can feel finished.",
      ],
    },
    {
      id: "why-people-try",
      number: 1,
      heading: "Why People Try It Before Bed",
      paragraphs: [
        "Evenings are often when unfinished thoughts surface.",
        "A few minutes of meditation may help some people feel less pulled by mental lists, especially when paired with lower light and less screen stimulation.",
      ],
    },
    {
      id: "simple-practice",
      number: 2,
      heading: "A Simple Practice to Start",
      paragraphs: [
        "Sit or lie comfortably. Dim the room. Breathe slowly through the nose for a count that feels easy — for example, in for four and out for six.",
        "When attention wanders, return to breath without judgment. Five to ten minutes is enough for many beginners.",
      ],
    },
    {
      id: "guided-or-silent",
      number: 3,
      heading: "Guided Audio or Silent Practice",
      paragraphs: [
        "Guided sleep meditations can provide structure; silent practice can feel lighter if voices distract you.",
        "Some people combine either approach with soft background sound, such as green noise, so the room stays steady while attention rests on breath.",
      ],
    },
    {
      id: "atmosphere",
      number: 4,
      heading: "Build Atmosphere Around the Practice",
      paragraphs: [
        "Meditation works best in a space that already feels safe: warm light, comfortable temperature, minimal clutter.",
        "A single stick of low-smoke incense burned earlier in the evening — sandalwood or soft woods — can mark the transition into quiet time.",
      ],
    },
    {
      id: "final-thoughts",
      number: 5,
      heading: "Final Thoughts",
      paragraphs: [
        "Sleep meditation is one piece of a calmer evening, not a replacement for healthy sleep habits or professional care when needed.",
        "Pair it with the guides in our Better Sleep hub for hygiene, environment, and natural routines that support rest over time.",
      ],
    },
  ],
  faq: {
    heading: "FAQ",
    items: [
      {
        id: "fall-asleep-during",
        question: "Is it okay to fall asleep during meditation?",
        answer: [
          {
            type: "paragraph",
            text: "Yes. Many people use meditation specifically to drift toward sleep. If you often fall asleep immediately, you may already be tired enough — keep sessions short and comfortable.",
          },
        ],
      },
      {
        id: "how-long",
        question: "How long should sleep meditation last?",
        answer: [
          {
            type: "paragraph",
            text: "Five to fifteen minutes is enough for most people. Longer is not always better if it feels like another task on your list.",
          },
        ],
      },
    ],
  },
  products: {
    heading: "Recommended for Calmer Evenings",
    items: [
      { slug: "brass-incense-stand" },
      { slug: "paper-incense-sleeve" },
      { slug: "wood-tray" },
      { slug: "small-agarwood-box" },
    ],
  },
  related: betterSleepRelatedBlock("sleep-meditation"),
  articleNote:
    "This article is for general lifestyle and wellness information — not medical advice.",
};
