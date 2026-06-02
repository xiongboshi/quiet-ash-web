import type { CustomerCarePageContent } from "@/types/customer-care";
import { CUSTOMER_CARE_EMAIL } from "@/data/customer-care/shared";

export const aboutProductsPage: CustomerCarePageContent = {
  slug: "products",
  title: "About the Products",
  description:
    "Incense ingredients, care, safety, stock, and authenticity — Quiet Ash product FAQs.",
  eyebrow: "Customer care",
  intro: [
    "Practical answers about how we curate incense, how to store it, and how to burn it safely at home.",
  ],
  blocks: [
    {
      type: "faq",
      heading: "Product basics",
      items: [
        {
          id: "expiration",
          question: "Does incense expire?",
          answer: [
            "Most incense does not have a fixed shelf life. Storage conditions and blend composition can change aroma over time — some wood-heavy sticks mature pleasantly.",
            "Keep incense in original packaging when possible; paulownia boxes help preserve scent.",
          ],
        },
        {
          id: "where-made",
          question: "Where is your incense made?",
          answer: [
            "Our curation focuses on exceptional makers, especially Japanese incense houses. We introduce other regions over time as we find meaningful fragrances.",
          ],
        },
        {
          id: "ingredients",
          question: "Where is the full ingredient list?",
          answer: [
            "Incense formulas are often protected trade secrets. We list key fragrance notes on each product page to help you choose.",
          ],
        },
        {
          id: "vegan",
          question: "Is your incense vegan-friendly?",
          answer: [
            "We curate products free from animal-derived ingredients and work with makers to maintain that standard. Tell us if you see anything that does not fit.",
          ],
        },
        {
          id: "animal-testing",
          question: "Do you test on animals?",
          answer: [
            "No — we do not test incense on animals and expect the same from our partners.",
          ],
        },
        {
          id: "ethical",
          question: "Is everything ethically sourced?",
          answer: [
            "We research makers and supply chains before listing them. If you have concerns about a product, contact us.",
          ],
        },
        {
          id: "english-labels",
          question: "Do products have English labels?",
          answer: [
            "Many pieces are made for domestic Japanese markets and may not include English on the box. Ask us if you need help with instructions.",
          ],
        },
      ],
    },
    {
      type: "faq",
      heading: "Choosing & using incense",
      items: [
        {
          id: "trial",
          question: "Can I try before buying a full box?",
          answer: [
            "Where available, start with smaller counts or sampler sets before committing to a large box.",
          ],
        },
        {
          id: "traditional-vs-modern",
          question: "Is traditional incense better than modern?",
          answer: [
            "Neither is universally better — choose based on how you want the room to feel and how much smoke you prefer.",
          ],
        },
        {
          id: "scent-duration",
          question: "How long does the scent last?",
          answer: [
            "Depends on blend, ventilation, and room size. In a closed living area with airflow, aroma often lingers for hours after a stick finishes.",
          ],
        },
        {
          id: "stick-cone-coil",
          question: "Sticks, cones, or coils?",
          answer: [
            "Sticks suit steady, lighter diffusion. Cones give a quicker burst. Coils burn longer in a spiral. Personal preference and room size matter most.",
          ],
        },
        {
          id: "bamboo-core",
          question: "Why do some sticks lack a bamboo core?",
          answer: [
            "Many Japanese sticks are coreless for a cleaner burn and softer smoke — that is traditional in those lines.",
          ],
        },
        {
          id: "artificial",
          question: "Are synthetic ingredients bad?",
          answer: [
            "Not necessarily. Lab-made aroma materials can be consistent and sustainable. We avoid animal-derived musks and similar ingredients.",
          ],
        },
        {
          id: "natural-100",
          question: 'Is incense "100% natural"?',
          answer: [
            'We avoid vague "100% natural" claims. Many fine incenses blend botanicals with aroma materials — both can be excellent when crafted with care.',
          ],
        },
        {
          id: "beginner",
          question: "I am new — what do you recommend?",
          answer: [
            "Start with softer woods or light florals in a ventilated room. Our journal guides on Better Sleep and calm evenings suggest good entry points.",
          ],
        },
        {
          id: "religious",
          question: "Can incense be used for spiritual practice?",
          answer: [
            "Yes — use it in any calm, safe way that matters to you. Our curation is aimed at everyday rooms, not a single tradition.",
          ],
        },
      ],
    },
    {
      type: "faq",
      heading: "Stock & authenticity",
      items: [
        {
          id: "out-of-stock",
          question: "Why are some products often out of stock?",
          answer: [
            "Small makers produce limited runs. Precious materials are regulated and harvested carefully — shortages happen.",
          ],
        },
        {
          id: "restock",
          question: "How often do you restock?",
          answer: [
            "We replenish regularly but not every item returns in every batch. Email us about a specific product if you are waiting.",
          ],
        },
        {
          id: "authentic",
          question: "How can I check authenticity?",
          answer: [
            "Buying from quietash.life is the surest path. If you bought elsewhere and have doubts, send us photos — we may help on a case-by-case basis.",
          ],
        },
        {
          id: "stick-count",
          question: "My box has fewer sticks than listed",
          answer: [
            "Many boxes state an approximate count. Hand-packing and weight-based packing can vary slightly — that is normal for artisanal incense.",
          ],
        },
      ],
    },
    {
      type: "faq",
      heading: "Safety & care",
      items: [
        {
          id: "storage",
          question: "How should I store incense?",
          answer: [
            "Cool, dry, dark places. Avoid heat, humidity, and direct sun. Original packaging or a paulownia box is ideal.",
          ],
        },
        {
          id: "gone-bad",
          question: "How do I know if incense has gone bad?",
          answer: [
            "Mould or rancid odour means dispose of it safely. Some colour change in oil-rich sticks is not always spoilage.",
          ],
        },
        {
          id: "asthma",
          question: "Is incense asthma-friendly?",
          answer: [
            "If you have asthma, ask your doctor before burning any incense. Low-smoke profiles may feel gentler but are not medically proven safe for everyone.",
          ],
        },
        {
          id: "how-many",
          question: "How many sticks can I burn per day?",
          answer: [
            "There is no fixed limit — ventilate, use stable holders, and pause if the room feels heavy. Rotate scents to avoid nose fatigue.",
          ],
        },
        {
          id: "burning-safe",
          question: "How safe is burning incense?",
          answer: [
            "Generally safe on heat-proof surfaces with ventilation. Prolonged smoke inhalation can irritate sensitive lungs — same caution as candles or fireplaces.",
          ],
        },
        {
          id: "allergy",
          question: "What if I have an allergic reaction?",
          answer: [
            "Stop using the product immediately and seek medical advice to identify the cause.",
          ],
        },
      ],
    },
    {
      type: "prose",
      heading: "More questions?",
      paragraphs: [
        `Email ${CUSTOMER_CARE_EMAIL} or visit our Care page for handling ceramic, wood, and incense tools.`,
      ],
    },
  ],
  relatedLinks: [
    { label: "Help Centre", href: "/help" },
    { label: "Care guide", href: "/care" },
    { label: "Contact us", href: "/contact" },
  ],
};
