import type { JournalArticleTemplate } from "@/types/journal-article";
import { JOURNAL_INDEX, journalPath } from "@/lib/site-paths";

const CATEGORY_HREF = `${JOURNAL_INDEX}/better-sleep`;

/** Guide — `/journal/how-screen-time-affects-sleep` (Modern Lifestyle) */
export const journalArticleHowScreenTimeAffectsSleep: JournalArticleTemplate = {
  slug: "how-screen-time-affects-sleep",
  bodyFormat: "guide",
  documentTitle: "How Screen Time Affects Sleep | Quiet Ash",
  seoTitle: "How Screen Time Affects Sleep",
  seoDescription:
    "How evening screen use may affect sleep quality, bedtime, and rest — and habits that may reduce the impact of phones and devices at night.",
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Journal", href: JOURNAL_INDEX },
      { label: "Better Sleep", href: CATEGORY_HREF },
      {
        label: "How Screen Time Affects Sleep",
        href: journalPath("how-screen-time-affects-sleep"),
      },
    ],
    categoryLabel: "BETTER SLEEP",
    title: "How Screen Time Affects Sleep",
    subtitle:
      "Phones, tablets, and late-night scrolling — how screens can shift bedtime and sleep quality.",
    readMinutes: 10,
    updatedLabel: "Updated June 15, 2026",
    imageSrc: "/images/generated/essay-night-incense-ritual.webp",
    imageAlt: "Calm bedroom with soft evening light and a restful atmosphere",
  },
  quickAnswer: {
    paragraphs: [
      "Screen time has become a regular part of daily life. Many people use smartphones, tablets, computers, and televisions throughout the day and often continue using them before bed.",
      "While technology offers many benefits, excessive screen time may affect sleep quality, sleep duration, and overall sleep habits.",
    ],
  },
  keyTakeaways: [
    {
      icon: "brain",
      text: "Evening screen use may delay bedtime and make falling asleep harder",
    },
    {
      icon: "shield",
      text: "Bright screens and stimulating content can increase alertness at night",
    },
    {
      icon: "leaf",
      text: "Effects are often strongest when devices are used close to bedtime",
    },
    {
      icon: "scent",
      text: "Children and teens may be especially sensitive to late-night screen use",
    },
    {
      icon: "brain",
      text: "A screen-free hour before bed is a common starting point",
    },
    {
      icon: "leaf",
      text: "Small evening habit changes can support calmer, more consistent sleep",
    },
  ],
  sections: [
    {
      id: "intro",
      heading: "Screens and Evening Rest",
      paragraphs: [
        "Devices are woven into work, connection, and entertainment — often right up until lights out.",
        "Understanding how screen time interacts with sleep can help you choose evening habits that support calmer nights without abandoning technology entirely.",
      ],
    },
    {
      id: "what-is-screen-time",
      number: 1,
      heading: "What Is Screen Time?",
      paragraphs: [
        "Screen time refers to the amount of time spent using devices with digital screens.",
        "Examples include smartphones, tablets, computers, televisions, and gaming devices.",
        "Many adults spend several hours each day looking at screens.",
      ],
    },
    {
      id: "how-affects",
      number: 2,
      heading: "How Does Screen Time Affect Sleep?",
      paragraphs: [
        "Screen time may interfere with the body's natural sleep-wake cycle.",
        "Using screens late in the evening can delay bedtime, make it harder to fall asleep, reduce overall sleep quality, and disrupt healthy sleep habits.",
        "The effects often become more noticeable when screen use occurs close to bedtime.",
      ],
    },
    {
      id: "harder-fall-asleep",
      number: 3,
      heading: "Why Can Screens Make It Harder to Fall Asleep?",
      paragraphs: [
        "Digital screens emit light that may affect the body's natural sleep signals.",
        "Evening screen use may increase alertness, delay feelings of sleepiness, and encourage mental stimulation.",
        "Activities such as social media browsing, gaming, or watching videos may make it more difficult to relax before bed.",
      ],
    },
    {
      id: "sleep-quality",
      number: 4,
      heading: "Can Screen Time Affect Sleep Quality?",
      paragraphs: [
        "Yes. Some people find that excessive screen use before bed contributes to more difficulty falling asleep, more nighttime awakenings, and feeling less refreshed in the morning.",
        "Reducing screen exposure before bedtime may help support better sleep quality. Can screens affect sleep quality explores this connection in more detail.",
      ],
    },
    {
      id: "children-adults",
      number: 5,
      heading: "Does Screen Time Affect Children and Adults Differently?",
      paragraphs: [
        "Screen time can influence sleep at all ages.",
        "However, children and teenagers may be especially sensitive to late-night screen use because their sleep needs are generally higher than those of adults.",
        "Healthy screen habits may support better sleep for people of all ages.",
      ],
    },
    {
      id: "reduce-impact",
      number: 6,
      heading: "How Can You Reduce the Impact of Screen Time on Sleep?",
      paragraphs: [
        "Helpful habits may include avoiding screens during the hour before bed, establishing a relaxing bedtime routine, keeping devices out of the bedroom, setting regular sleep schedules, and prioritizing offline activities before sleep.",
        "Small changes can often make a noticeable difference. Sleep hygiene tips and how to sleep well naturally offer practical evening habits.",
      ],
    },
    {
      id: "final-thoughts",
      number: 7,
      heading: "Final Thoughts",
      paragraphs: [
        "Screen time is a normal part of modern life, but excessive evening screen use may affect sleep quality and sleep consistency.",
        "Developing healthy screen habits can help support better sleep and overall well-being.",
        "Explore the Better Sleep hub for patterns, problems, and calm solutions when evenings feel overloaded.",
      ],
    },
  ],
  faq: {
    heading: "FAQ",
    items: [
      {
        id: "cause-problems",
        question: "Can screen time cause sleep problems?",
        answer: [
          {
            type: "paragraph",
            text: "Excessive screen use before bed may contribute to difficulty falling asleep and reduced sleep quality.",
          },
        ],
      },
      {
        id: "how-long-before",
        question: "How long before bed should I stop using screens?",
        answer: [
          {
            type: "paragraph",
            text: "Many sleep experts recommend limiting screen use during the hour before bedtime.",
          },
        ],
      },
      {
        id: "phones",
        question: "Do phones affect sleep?",
        answer: [
          {
            type: "paragraph",
            text: "Using smartphones before bed may increase alertness and delay sleep.",
          },
        ],
      },
      {
        id: "reducing",
        question: "Can reducing screen time improve sleep?",
        answer: [
          {
            type: "paragraph",
            text: "Many people find that reducing evening screen exposure helps support healthier sleep habits.",
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
  related: {
    heading: "Related Reading",
    items: [
      { slug: "can-screens-affect-sleep-quality" },
      { slug: "sleep-hygiene-tips" },
      { slug: "tips-for-better-sleep-quality" },
      { slug: "how-to-sleep-well-naturally" },
    ],
  },
  articleNote:
    "This article is for general lifestyle and wellness information — not medical advice.",
};
