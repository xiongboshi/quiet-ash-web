import { getSiteUrl } from "@/lib/site-url";

/** IndexNow key — must match public/{key}.txt contents and filename. */
export const INDEXNOW_KEY = "c59c507359e4459d9ab5bdf1e651e459";

const INDEXNOW_API = "https://api.indexnow.org/indexnow";

export function getIndexNowHost(): string {
  return new URL(getSiteUrl()).host;
}

export function getIndexNowKeyLocation(): string {
  const base = getSiteUrl();
  return `${base}/${INDEXNOW_KEY}.txt`;
}

export type IndexNowSubmitResult = {
  ok: boolean;
  status: number;
  statusText: string;
};

/** POST urlList to IndexNow (Bing, Yandex, etc.). Max 10,000 URLs per request. */
export async function submitIndexNowUrls(
  urlList: string[],
): Promise<IndexNowSubmitResult> {
  if (urlList.length === 0) {
    return { ok: false, status: 0, statusText: "empty urlList" };
  }

  const host = getIndexNowHost();
  for (const url of urlList) {
    const u = new URL(url);
    if (u.host !== host) {
      throw new Error(`URL host mismatch: ${url} (expected ${host})`);
    }
  }

  const res = await fetch(INDEXNOW_API, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host,
      key: INDEXNOW_KEY,
      keyLocation: getIndexNowKeyLocation(),
      urlList,
    }),
  });

  return {
    ok: res.ok,
    status: res.status,
    statusText: res.statusText,
  };
}
