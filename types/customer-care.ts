export type CustomerCareFaqItem = {
  id: string;
  question: string;
  answer: readonly string[];
};

export type CustomerCareBlock =
  | {
      type: "prose";
      heading?: string;
      paragraphs: readonly string[];
    }
  | {
      type: "list";
      heading?: string;
      items: readonly string[];
    }
  | {
      type: "faq";
      heading?: string;
      items: readonly CustomerCareFaqItem[];
    };

export type CustomerCareRelatedLink = {
  label: string;
  href: string;
};

export type CustomerCarePageContent = {
  slug: string;
  title: string;
  description: string;
  eyebrow?: string;
  intro?: readonly string[];
  blocks: readonly CustomerCareBlock[];
  relatedLinks?: readonly CustomerCareRelatedLink[];
};

export type HelpCenterCard = {
  title: string;
  description: string;
  href: string;
};

export type HelpCenterHubContent = {
  title: string;
  description: string;
  intro: readonly string[];
  cards: readonly HelpCenterCard[];
  featuredFaqs: readonly CustomerCareFaqItem[];
};

export type ContactRequestTopic =
  | "shipping"
  | "exchange-return"
  | "cancel-order"
  | "product-help"
  | "track-order"
  | "general";
