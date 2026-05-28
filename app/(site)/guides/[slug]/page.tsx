import { notFound } from "next/navigation";
import { EVERGREEN_GUIDE_SLUGS } from "@/data/evergreen-guides";
import {
  createEvergreenGuidePageHandlers,
} from "@/lib/evergreen-guide-page-route";
import { getEvergreenGuide } from "@/lib/evergreen-guides";
import type { EvergreenGuideSlug } from "@/data/evergreen-guides";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return EVERGREEN_GUIDE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  if (!getEvergreenGuide(slug)) return {};
  return createEvergreenGuidePageHandlers(slug as EvergreenGuideSlug).generateMetadata();
}

export default async function GuideSlugPage({ params }: Props) {
  const { slug } = await params;
  const guide = getEvergreenGuide(slug);
  if (!guide) notFound();

  const { Page } = createEvergreenGuidePageHandlers(guide.slug);
  return <Page />;
}
