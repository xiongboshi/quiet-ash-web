import { createJournalTopicPageHandlers } from "@/lib/journal-topic-page-route";

const handlers = createJournalTopicPageHandlers("calm-evenings");

export const generateMetadata = handlers.generateMetadata;
export default handlers.Page;
