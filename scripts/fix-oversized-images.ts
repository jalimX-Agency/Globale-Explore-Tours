export {};

// Phase 2 of the image-size fix: downloads every image over SIZE_THRESHOLD_MB from R2,
// compresses/resizes it with sharp, and re-uploads it to the exact same key (overwriting the
// original in place — no DB changes needed, since every Tour/TourSection/TourHotel/
// JourneyChapter/ItineraryDay record already points at these same URLs).
//
// Source of truth for "which images are oversized": an ahrefs image-file-size export
// (docs/globaleexploretours_01-sep-2026_image-file-si_2026-09-01_18-12-25.csv), UTF-16
// encoded, tab-separated, columns include URL and "Size (bytes)".
//
// IMPORTANT: r2.ts uploads with `Cache-Control: immutable, max-age=31536000`. Overwriting a
// key does not itself invalidate Cloudflare's edge cache of the old (giant) file — the
// R2_BUCKET's Cloudflare zone cache must be purged manually after this script finishes, or
// visitors may keep getting served the old cached bytes for up to a year. This script prints
// the full list of affected URLs at the end for that purge.
//
//   npx tsx scripts/fix-oversized-images.ts

process.loadEnvFile(".env");

import { existsSync, readFileSync, writeFileSync, mkdirSync, writeFile as writeFileCb, unlink as unlinkCb } from "node:fs";
import { dirname, join } from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { tmpdir } from "node:os";
import { randomBytes } from "node:crypto";

const execFileAsync = promisify(execFile);
const writeFile = promisify(writeFileCb);
const unlink = promisify(unlinkCb);

const CSV_PATH =
  "C:\\Users\\pc\\Documents\\JalimX\\clients\\Globale explore tours\\docs\\globaleexploretours_01-sep-2026_image-file-si_2026-09-01_18-12-25.csv";
const SIZE_THRESHOLD_BYTES = 3 * 1024 * 1024; // Phase 2, pass 1: the 1179 images > 3MB (6GB of the 10GB total).
const MANIFEST_PATH = "scripts/.manifests/fix-oversized-images.json";

type CsvRow = { url: string; sizeBytes: number };
type ManifestEntry = {
  key: string;
  status: "done" | "failed" | "skipped-not-larger";
  beforeBytes?: number;
  afterBytes?: number;
  error?: string;
};
type Manifest = Record<string, ManifestEntry>;

function parseCsv(path: string): CsvRow[] {
  // Node reads UTF-16LE natively; ahrefs exports this file with a BOM + UTF-16LE encoding.
  const raw = readFileSync(path, "utf16le");
  const lines = raw.split(/\r?\n/).filter((l) => l.trim().length > 0);
  const rows: CsvRow[] = [];
  for (const line of lines.slice(1)) {
    const cols = line.split("\t").map((c) => c.trim().replace(/^"|"$/g, ""));
    // Columns: PR, URL, Title, Content type, Is rendered page, HTTP status code, Size (bytes), Loading time (ms), No. of IMG inlinks
    const url = cols[1];
    const sizeBytes = Number(cols[6]);
    if (url && Number.isFinite(sizeBytes)) rows.push({ url, sizeBytes });
  }
  return rows;
}

function loadManifest(): Manifest {
  if (!existsSync(MANIFEST_PATH)) return {};
  return JSON.parse(readFileSync(MANIFEST_PATH, "utf8"));
}
function saveManifest(manifest: Manifest) {
  mkdirSync(dirname(MANIFEST_PATH), { recursive: true });
  writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
}

async function downloadBuffer(url: string, attempts = 6): Promise<Buffer> {
  let lastErr: unknown;
  for (let i = 0; i < attempts; i++) {
    try {
      const { stdout } = await execFileAsync(
        "curl",
        ["-sS", "-L", "--fail", "--max-time", "120", "-A", "curl/8.0", url],
        { encoding: "buffer", maxBuffer: 200 * 1024 * 1024 }
      );
      return stdout as unknown as Buffer;
    } catch (err) {
      lastErr = err;
      if (i < attempts - 1) await new Promise((r) => setTimeout(r, Math.min(1000 * 2 ** i, 16_000)));
    }
  }
  throw lastErr;
}

// Node's fetch (undici) proved unreliable for many-request, long-running batches earlier in
// this project (see scripts/lib/uploadImages.ts) — the same degradation showed up here on the
// upload side (uploadToR2 uses fetch), so PUTs are shelled out to curl instead, using the same
// SigV4-signed URL/headers uploadToR2 itself would use.
async function uploadViaCurl(
  getSignedR2PutRequest: (key: string, body: Buffer, contentType: string, cacheControl: string) => {
    url: string;
    headers: Record<string, string>;
  },
  key: string,
  body: Buffer,
  attempts = 6
): Promise<void> {
  const { url, headers } = getSignedR2PutRequest(key, body, "image/jpeg", "public, max-age=31536000, immutable");
  const tmpFile = join(tmpdir(), `r2-upload-${randomBytes(8).toString("hex")}.jpg`);
  await writeFile(tmpFile, body);
  try {
    const headerArgs = Object.entries(headers).flatMap(([k, v]) => ["-H", `${k}: ${v}`]);
    let lastErr: unknown;
    for (let i = 0; i < attempts; i++) {
      try {
        await execFileAsync("curl", [
          "-sS",
          "--fail",
          "--max-time",
          "60",
          "-X",
          "PUT",
          ...headerArgs,
          "--data-binary",
          `@${tmpFile}`,
          url,
        ]);
        return;
      } catch (err) {
        lastErr = err;
        if (i < attempts - 1) await new Promise((r) => setTimeout(r, Math.min(1000 * 2 ** i, 16_000)));
      }
    }
    throw lastErr;
  } finally {
    await unlink(tmpFile).catch(() => {});
  }
}

async function main() {
  const { compressImage, pickCompressOptions } = await import("./lib/compressImage");
  const { getSignedR2PutRequest } = await import("../src/lib/r2");

  const R2 = process.env.NEXT_PUBLIC_R2_URL!;
  const rows = parseCsv(CSV_PATH);
  const oversized = rows.filter((r) => r.sizeBytes > SIZE_THRESHOLD_BYTES && r.url.startsWith(R2));

  console.log(`Found ${oversized.length} images > ${SIZE_THRESHOLD_BYTES / 1024 / 1024}MB in the CSV.\n`);

  const manifest = loadManifest();
  let done = 0;
  let failed = 0;
  let skipped = 0;
  let totalBefore = 0;
  let totalAfter = 0;

  const pending = oversized.filter((row) => manifest[row.url.slice(R2.length + 1)]?.status !== "done");
  skipped = oversized.length - pending.length;
  for (const row of oversized) {
    const key = row.url.slice(R2.length + 1);
    if (manifest[key]?.status === "done") {
      totalBefore += manifest[key].beforeBytes ?? 0;
      totalAfter += manifest[key].afterBytes ?? 0;
    }
  }

  // Downloading + decoding these (many 20-70MB originals) is slow one at a time — pure-JS
  // jimp has no SIMD/native fast path, so a worker pool overlaps network + CPU time across
  // several images instead of paying for both serially per image.
  // Kept modest: only ~5.7GB free RAM on this machine, and pure-JS JPEG decoding of huge
  // originals is memory-hungry — too much concurrency risks a real OOM rather than just the
  // decoder's own (harmless, per-image) safety-limit errors.
  const CONCURRENCY = 4;
  let cursor = 0;
  async function worker() {
    while (cursor < pending.length) {
      const row = pending[cursor++];
      const key = row.url.slice(R2.length + 1);
      try {
        const original = await downloadBuffer(row.url);
        const opts = pickCompressOptions(key);
        const compressed = await compressImage(original, opts);
        await uploadViaCurl(getSignedR2PutRequest, key, compressed);
        manifest[key] = {
          key,
          status: "done",
          beforeBytes: original.length,
          afterBytes: compressed.length,
        };
        totalBefore += original.length;
        totalAfter += compressed.length;
        done++;
        console.log(
          `OK   ${key}  ${(original.length / 1024 / 1024).toFixed(2)}MB -> ${(compressed.length / 1024).toFixed(0)}KB`
        );
      } catch (err) {
        manifest[key] = { key, status: "failed", error: String(err) };
        failed++;
        console.error(`FAIL ${key} (${row.url}):`, err);
      }
      saveManifest(manifest);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));

  console.log(`\nDone: ${done} compressed, ${skipped} already-done (skipped), ${failed} failed.`);
  console.log(
    `Total: ${(totalBefore / 1024 / 1024 / 1024).toFixed(2)}GB -> ${(totalAfter / 1024 / 1024).toFixed(0)}MB (${(
      (1 - totalAfter / Math.max(totalBefore, 1)) *
      100
    ).toFixed(1)}% saved)`
  );
  if (failed > 0) {
    console.log("Re-run the same script to retry failed keys — succeeded keys are skipped automatically.");
  }

  console.log("\n--- URLs to purge from Cloudflare cache ---");
  for (const row of oversized) console.log(row.url);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
