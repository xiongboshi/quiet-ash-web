/**
 * Export Google Search Console performance data to CSV under exports/gsc/.
 *
 * Setup (one-time):
 * 1. Google Cloud �?enable "Google Search Console API"
 * 2. Create OAuth client OR service account
 * 3. OAuth quick test: https://developers.google.com/oauthplayground/
 *    Scope: https://www.googleapis.com/auth/webmasters.readonly
 * 4. Set env (do not commit):
 *      GSC_ACCESS_TOKEN=<access_token>
 *      GSC_SITE_URL=https://www.quietash.life/
 *
 *   npm run gsc:export
 *   npm run gsc:export -- --days 7 --type image
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

type SearchType = "web" | "image" | "video" | "news" | "googleNews" | "discover";

type Row = {
  keys: string[];
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
};

type QueryBody = {
  startDate: string;
  endDate: string;
  dimensions: string[];
  searchType?: SearchType;
  rowLimit: number;
};

function parseArgs(argv: string[]) {
  let days = 28;
  let type: SearchType = "image";
  const dimensions: string[][] = [
    ["page"],
    ["query"],
    ["country"],
  ];

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--days" && argv[i + 1]) {
      days = Math.max(1, Number.parseInt(argv[++i], 10) || 28);
    } else if (arg === "--type" && argv[i + 1]) {
      type = argv[++i] as SearchType;
    } else if (arg === "--web") {
      type = "web";
    }
  }

  return { days, type, dimensions };
}

function formatDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function escapeCsvCell(value: string): string {
  if (/[",\n\r]/.test(value)) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

function rowsToCsv(dimensionNames: string[], rows: Row[]): string {
  const header = [...dimensionNames, "clicks", "impressions", "ctr", "position"];
  const lines = [header.join(",")];
  for (const row of rows) {
    const cells = [
      ...row.keys.map(escapeCsvCell),
      String(row.clicks),
      String(row.impressions),
      row.ctr.toFixed(4),
      row.position.toFixed(2),
    ];
    lines.push(cells.join(","));
  }
  return `${lines.join("\n")}\n`;
}

async function fetchSearchAnalytics(
  siteUrl: string,
  token: string,
  body: QueryBody,
): Promise<Row[]> {
  const encodedSite = encodeURIComponent(siteUrl);
  const res = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodedSite}/searchAnalytics/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GSC API ${res.status}: ${text}`);
  }

  const data = (await res.json()) as { rows?: Row[] };
  return data.rows ?? [];
}

async function main() {
  const token = process.env.GSC_ACCESS_TOKEN?.trim();
  const siteUrl =
    process.env.GSC_SITE_URL?.trim() ?? "https://www.quietash.life/";

  if (!token) {
    console.error(`
Missing GSC_ACCESS_TOKEN.

Manual export in Search Console (no API):
  效果 �?搜索类型「图片」→ 选日�?�?右上角「导出�?
API export:
  1. OAuth Playground �?scope webmasters.readonly �?get access token
  2. set GSC_ACCESS_TOKEN=...  (and optionally GSC_SITE_URL=${siteUrl})
  3. npm run gsc:export
`);
    process.exit(1);
  }

  const { days, type, dimensions } = parseArgs(process.argv.slice(2));
  const end = new Date();
  end.setUTCDate(end.getUTCDate() - 1);
  const start = new Date(end);
  start.setUTCDate(start.getUTCDate() - (days - 1));

  const startDate = formatDate(start);
  const endDate = formatDate(end);
  const outDir = path.join(process.cwd(), "exports", "gsc");
  await mkdir(outDir, { recursive: true });

  console.log(`Property: ${siteUrl}`);
  console.log(`Range: ${startDate} �?${endDate} (${days} days)`);
  console.log(`Search type: ${type}`);
  console.log(`Output: ${outDir}\n`);

  for (const dims of dimensions) {
    const rows = await fetchSearchAnalytics(siteUrl, token, {
      startDate,
      endDate,
      dimensions: dims,
      searchType: type,
      rowLimit: 25_000,
    });

    const fileName = `performance-${type}-${dims.join("-")}-${startDate}_${endDate}.csv`;
    const filePath = path.join(outDir, fileName);
    await writeFile(filePath, rowsToCsv(dims, rows), "utf8");
    console.log(`Wrote ${fileName} (${rows.length} rows)`);
  }

  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
