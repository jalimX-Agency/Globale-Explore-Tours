import { existsSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { uploadToR2 } from "../../src/lib/r2";

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

async function downloadBuffer(url: string): Promise<{ buffer: Buffer; contentType: string }> {
  const res = await fetch(url, { headers: { "User-Agent": "curl/8.0" } });
  if (!res.ok) throw new Error(`download failed ${res.status} for ${url}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  const contentType = res.headers.get("content-type") || "image/jpeg";
  return { buffer, contentType };
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
