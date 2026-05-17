export type CartItem = {
  id: string;
  slug: string;
  title: string;
  priceCents: number;
  image: string;
  quantity: number;
  /** Short product line under title */
  line?: string;
  ritualSlug?: string;
  ritualTitle?: string;
};

export type CartProductSnapshot = {
  slug: string;
  title: string;
  line: string;
  priceCents: number;
  image: string;
  ritualSlug?: string;
  ritualTitle?: string;
};
