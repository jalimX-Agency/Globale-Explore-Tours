import { existsSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { uploadToR2 } from "../../src/lib/r2";

const execFileAsync = promisify(execFile);

// The entry-point script that imports this file is responsible for calling
// process.loadEnvFile(".env") and using a dynamic import() *before* importing this module —
// ESM hoists static imports above other top-level code, so src/lib/r2.ts's module-level
// `process.env.R2_*` reads would otherwise run before env is loaded, regardless of where in
// the entry file the env-loading call appears.

export type ImageSpec = { key: string; url: string };
type ManifestEntry = { key: string; publicUrl: string; status: "uploaded" | "failed"; error?: string };
type Manifest = Record<string, ManifestEntry>;

function loadManifest(manifestPath: string): Manifest {
  if (!existsSync(manifestPath)) return {};
  return JSON.parse(readFileSync(manifestPath, "utf8"));
}

function saveManifest(manifestPath: string, manifest: Manifest) {
  mkdirSync(dirname(manifestPath), { recursive: true });
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
}

// Node's own fetch (undici) was empirically unreliable for this: run back-to-back against the
// exact same URL in this environment, a *fresh* `curl` process succeeded consistently while
// Node's fetch failed the large majority of the time inside this script's long-running
// process (60+ sequential requests) — pointing at undici's connection-pool/keep-alive state
// degrading over the life of the process, not the network path itself, which curl proved was
// fine call after call. Shelling out to curl (one fresh process per request) sidesteps
// whatever that degradation is. -sS: silent but still show errors; -L: follow redirects;
// --max-time: hard per-attempt cap; --fail: non-2xx exits non-zero instead of writing the
// error body as if it were the image.
async function downloadBuffer(url: string, attempts = 6): Promise<{ buffer: Buffer; contentType: string }> {
  let lastErr: unknown;
  for (let i = 0; i < attempts; i++) {
    try {
      const { stdout } = await execFileAsync(
        "curl",
        ["-sS", "-L", "--fail", "--max-time", "90", "-A", "curl/8.0", url],
        { encoding: "buffer", maxBuffer: 50 * 1024 * 1024 }
      );
      const contentType = url.endsWith(".svg")
        ? "image/svg+xml"
        : url.match(/\.png($|\?)/i)
          ? "image/png"
          : "image/jpeg";
      return { buffer: stdout, contentType };
    } catch (err) {
      lastErr = err;
      // Observed failures are bursty/correlated (a stretch of bad connections), not
      // independent per-request — exponential backoff up to ~16s gives a burst time to pass
      // instead of just re-hitting it a fraction of a second later.
      if (i < attempts - 1) await new Promise((r) => setTimeout(r, Math.min(1000 * 2 ** i, 16_000)));
    }
  }
  throw lastErr;
}

// Downloads each {url} and uploads it to R2 at {key}, skipping keys the manifest already
// marks "uploaded" (a resumability optimization, not a correctness requirement — R2 PUT is
// idempotent by key, so a full rerun with no manifest at all would also be safe, just
// slower). The manifest is saved after every image, not just at the end, so a crash mid-batch
// still leaves a usable record of what's done.
export async function uploadImageBatch(images: ImageSpec[], manifestPath: string): Promise<Manifest> {
  const manifest = loadManifest(manifestPath);
  let done = 0;
  let failed = 0;
  let skipped = 0;

  for (const img of images) {
    if (manifest[img.key]?.status === "uploaded") {
      skipped++;
      continue;
    }
    try {
      const { buffer, contentType } = await downloadBuffer(img.url);
      await uploadToR2(img.key, buffer, contentType);
      const publicUrl = `${process.env.NEXT_PUBLIC_R2_URL}/${img.key}`;
      manifest[img.key] = { key: img.key, publicUrl, status: "uploaded" };
      console.log(`OK   ${img.key} -> ${publicUrl}`);
      done++;
    } catch (err) {
      manifest[img.key] = { key: img.key, publicUrl: "", status: "failed", error: String(err) };
      console.error(`FAIL ${img.key} (${img.url}):`, err);
      failed++;
    }
    saveManifest(manifestPath, manifest);
  }

  console.log(`\nDone: ${done} uploaded, ${skipped} already-uploaded (skipped), ${failed} failed.`);
  if (failed > 0) {
    console.log("Re-run the same script to retry failed keys — succeeded keys are skipped automatically.");
  }
  return manifest;
}
