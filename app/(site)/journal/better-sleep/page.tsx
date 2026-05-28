import { createJournalTopicPageHandlers } from "@/lib/journal-topic-page-route";

const handlers = createJournalTopicPageHandlers("better-sleep");

export const generateMetadata = handlers.generateMetadata;
export default handlers.Page;
