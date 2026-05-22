/**
 * Submit sitemap URLs to IndexNow (Bing / Yandex).
 * Prerequisite: deploy public/{INDEXNOW_KEY}.txt so keyLocation is live.
 *
 *   npm run indexnow:submit
 */
import sitemap from "../app/sitemap";
import {
  getIndexNowHost,
  getIndexNowKeyLocation,
  INDEXNOW_KEY,
  submitIndexNowUrls,
} from "../lib/indexnow";

const BATCH_SIZE = 10_000;

async function main() {
  const entries = sitemap();
  const urlList = entries.map((e) => e.url);

  console.log(`IndexNow key: ${INDEXNOW_KEY}`);
  console.log(`Host: ${getIndexNowHost()}`);
  console.log(`Key file: ${getIndexNowKeyLocation()}`);
  console.log(`URLs: ${urlList.length}`);

  for (let i = 0; i < urlList.length; i += BATCH_SIZE) {
    const batch = urlList.slice(i, i + BATCH_SIZE);
    const result = await submitIndexNowUrls(batch);
    console.log(
      `Batch ${i / BATCH_SIZE + 1}: HTTP ${result.status} ${result.statusText}`,
    );
    if (!result.ok) {
      process.exit(1);
    }
  }

  console.log("Done. Verify in Bing Webmaster Tools → URL Submission / IndexNow.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
