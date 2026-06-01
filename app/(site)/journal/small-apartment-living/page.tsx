import { createJournalTopicPageHandlers } from "@/lib/journal-topic-page-route";

const handlers = createJournalTopicPageHandlers("small-apartment-living");

export const generateMetadata = handlers.generateMetadata;
export default handlers.Page;
