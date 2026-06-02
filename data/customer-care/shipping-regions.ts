export type ShippingRegion = {
  id: string;
  name: string;
  bullets: readonly string[];
};

const processingFootnote =
  "Items from limited editions or made-to-order pieces may require additional lead time. Our team may contact you by email after your purchase.";

const expressNotes = [
  "Delivery time: 3–5 business days*",
  "Customs & taxes: Import duties and local taxes, where applicable, are not included in product prices or delivery fees.",
  "Courier partners: FedEx, DHL, or regional partners as shown at checkout.",
  `* ${processingFootnote}`,
] as const;

/** Shipping & delivery rates — adapted from reference merchant structure; confirm rates at checkout. */
export const customerCareShippingRegions: readonly ShippingRegion[] = [
  {
    id: "singapore",
    name: "Singapore",
    bullets: [
      `Complimentary shipping on orders over ${"SGD 50"} (where offered at checkout)`,
      "Delivery time: 1–2 business days*",
      "Delivery fee: SGD 2 for orders below SGD 50",
      "Additional fee: SGD 2 for orders below SGD 10",
      "Courier partner: Speedpost",
      "* Excluding 1-day order processing time.",
    ],
  },
  {
    id: "au-nz",
    name: "Australia and New Zealand",
    bullets: [
      "Australia — orders under AUD 100: AUD 35; AUD 100+: AUD 25; AUD 300+: complimentary",
      "New Zealand — orders under NZD 130: NZD 40; NZD 130+: NZD 27; NZD 300+: complimentary",
      ...expressNotes,
    ],
  },
  {
    id: "canada",
    name: "Canada",
    bullets: [
      "Orders under CAD 110: CAD 45",
      "Orders CAD 110+: CAD 30",
      "Orders CAD 325+: complimentary",
      ...expressNotes,
    ],
  },
  {
    id: "europe",
    name: "Europe",
    bullets: [
      "Orders under €70: €26",
      "Orders €70+: €18",
      "Orders €200+: complimentary",
      ...expressNotes,
    ],
  },
  {
    id: "hk-tw-jp-kr",
    name: "Hong Kong, Taiwan, Japan, South Korea",
    bullets: [
      "Orders under SGD 100: SGD 30",
      "Orders SGD 100+: SGD 15",
      "Orders SGD 250+: complimentary",
      "Delivery time: 3–5 business days*",
      "Customs & taxes: Not included where applicable.",
      "Courier partners: SF Express, FedEx",
      `* ${processingFootnote}`,
    ],
  },
  {
    id: "indonesia",
    name: "Indonesia",
    bullets: [
      "Orders under Rp 1,500,000: Rp 450,000",
      "Orders Rp 1,500,000+: Rp 320,000",
      "Orders Rp 4,000,000+: complimentary",
      ...expressNotes,
    ],
  },
  {
    id: "malaysia",
    name: "Malaysia",
    bullets: [
      "Orders under RM 300: RM 50",
      "Orders RM 300+: RM 35",
      "Orders RM 650+: complimentary",
      "Delivery time: 3–5 business days*",
      "Customs & taxes: Not included where applicable.",
      "Courier partners: SF Express, FedEx",
      `* ${processingFootnote}`,
    ],
  },
  {
    id: "philippines",
    name: "Philippines",
    bullets: [
      "Orders under ₱5,000: ₱1,350",
      "Orders ₱5,000+: ₱900",
      "Orders ₱10,000+: complimentary",
      ...expressNotes,
    ],
  },
  {
    id: "south-america",
    name: "South America",
    bullets: [
      "Orders under SGD 200: SGD 70",
      "Orders SGD 200+: SGD 50",
      "Orders SGD 450+: complimentary",
      ...expressNotes,
    ],
  },
  {
    id: "thailand",
    name: "Thailand",
    bullets: [
      "Orders under ฿2,500: ฿750",
      "Orders ฿2,500+: ฿500",
      "Orders ฿6,250+: complimentary",
      ...expressNotes,
    ],
  },
  {
    id: "united-states",
    name: "United States",
    bullets: [
      "Orders under USD 150: USD 35",
      "Orders USD 150+: USD 20",
      "Orders USD 300+: complimentary",
      "Delivery time: 3–5 business days*",
      "Customs & taxes: Not included where applicable.",
      "Recent tariff changes may lengthen customs clearance.",
      `* ${processingFootnote}`,
    ],
  },
  {
    id: "united-kingdom",
    name: "United Kingdom",
    bullets: [
      "Orders under £90: £21",
      "Orders £90+: £15",
      "Orders £175+: complimentary",
      ...expressNotes,
    ],
  },
  {
    id: "vietnam",
    name: "Vietnam",
    bullets: [
      "Orders under ₫2,000,000: ₫500,000",
      "Orders ₫2,000,000+: ₫300,000",
      "Orders ₫5,000,000+: complimentary",
      ...expressNotes,
    ],
  },
  {
    id: "rest-of-world",
    name: "Rest of World",
    bullets: [
      "Orders under SGD 100: SGD 35",
      "Orders SGD 100+: SGD 25",
      "Orders SGD 300+: complimentary",
      "Courier partners: FedEx, DHL, SF Express",
      ...expressNotes,
    ],
  },
];

export const customerCareShippingRestrictions = [
  "Due to courier limitations and customs restrictions, we may be unable to ship to certain locations.",
  "Restricted areas can include: Central African Republic, Comoros, Cuba, Equatorial Guinea, Falkland Islands, Guinea-Bissau, India, Iran, Johnston Island, Kiribati, Myanmar, Nauru, Niue, North Korea, Russia, Saint Helena, Saint Pierre and Miquelon, São Tomé and Príncipe, Sierra Leone, Solomon Islands, Somalia, Sudan, Syria, Tajikistan, Tokelau, Turkmenistan, Tuvalu, Wake Island, and Yemen.",
  "If your country is not listed at checkout, contact us before ordering.",
] as const;
