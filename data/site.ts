/** Public contact + social (override via env in production). */
export const siteContact = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@quietash.life",
  instagram:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
    "https://www.instagram.com/quietash.incense/",
  pinterest:
    process.env.NEXT_PUBLIC_PINTEREST_URL ?? "https://www.pinterest.com/",
} as const;
