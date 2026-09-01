import { Jimp } from "jimp";

export type CompressOptions = { maxWidth: number; quality: number };

// Picks resize/quality targets by filename convention. Hero/banner images get a larger
// ceiling since they're shown full-bleed; everything else (gallery, hotel, day photos) is
// shown much smaller in the UI and can be compressed harder without a visible quality loss.
export function pickCompressOptions(key: string): CompressOptions {
  if (key.includes("hero")) return { maxWidth: 1920, quality: 78 };
  if (key.startsWith("destinations/") || key.startsWith("blocks/") || key.startsWith("regions/")) {
    return { maxWidth: 1800, quality: 78 };
  }
  return { maxWidth: 1400, quality: 75 };
}

// Re-encodes as JPEG regardless of source format (a handful of the source files are PNG
// despite being photographs, not graphics — JPEG compresses those far better and every
// consuming <img> tag already treats the file as a photo).
//
// Uses jimp's default jpeg-js decoder (pure JS, no native binary — sharp's native .node binary
// is blocked by this machine's Windows Application Control policy; @jimp/wasm-jpeg's mozjpeg
// WASM build also doesn't work here, its loader tries to fetch() the .wasm file over a file://
// URL, which Node's fetch doesn't support). jpeg-js is memory-hungry per decode — empirically
// most real ~5-20MB stock photos on this site need ~2050-2250MB of scratch memory regardless of
// file size, occasionally more for a genuine extreme outlier (100+ megapixel originals) — so
// the ceiling here is set well above that observed range rather than the library's tiny 512MB
// default.
// IMPORTANT: must be Jimp.fromBuffer, not Jimp.read — Jimp.read(buffer, options) silently
// drops the options argument for Buffer input (only its URL/fetch code path forwards options
// to fromBuffer internally); fromBuffer is the one that actually applies them.
export async function compressImage(input: Buffer, opts: CompressOptions): Promise<Buffer> {
  const image = await Jimp.fromBuffer(input, {
    "image/jpeg": { maxResolutionInMP: 300, maxMemoryUsageInMB: 3000 },
  });
  if (image.width > opts.maxWidth) {
    image.resize({ w: opts.maxWidth });
  }
  const out = await image.getBuffer("image/jpeg", { quality: opts.quality });
  return out;
}
