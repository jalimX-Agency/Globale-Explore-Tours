import { createHmac, createHash } from "crypto";

const ACCOUNT_ID = process.env.R2_ACCOUNT_ID!;
const ACCESS_KEY = process.env.R2_ACCESS_KEY_ID!;
const SECRET_KEY = process.env.R2_SECRET_ACCESS_KEY!;
const BUCKET = process.env.R2_BUCKET_NAME!;
const PUBLIC_URL = process.env.NEXT_PUBLIC_R2_URL!;
const ENDPOINT = `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`;

function sha256hex(data: Buffer | string) {
  return createHash("sha256").update(data).digest("hex");
}
function hmacSha256(key: Buffer | string, data: string) {
  return createHmac("sha256", key).update(data).digest();
}
function getSigningKey(secret: string, date: string, region: string, service: string) {
  const kDate = hmacSha256(`AWS4${secret}`, date);
  const kRegion = hmacSha256(kDate, region);
  const kService = hmacSha256(kRegion, service);
  return hmacSha256(kService, "aws4_request");
}

function amzDateNow() {
  const now = new Date();
  const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, "").slice(0, 15) + "Z";
  return { amzDate, dateStamp: amzDate.slice(0, 8) };
}

// Computes the SigV4-signed URL + headers for a PUT, without performing the request itself —
// factored out of uploadToR2 so bulk scripts that need a non-fetch transport (curl has proven
// far more reliable than Node's fetch/undici for long-running, many-request batches — see
// scripts/lib/uploadImages.ts) can issue the exact same signed request another way.
export function getSignedR2PutRequest(
  key: string,
  body: Buffer,
  contentType: string,
  cacheControl: string
): { url: string; headers: Record<string, string> } {
  const { amzDate, dateStamp } = amzDateNow();
  const region = "auto";
  const service = "s3";
  const host = `${ACCOUNT_ID}.r2.cloudflarestorage.com`;
  const payloadHash = sha256hex(body);
  const canonicalHeaders = `host:${host}\nx-amz-content-sha256:${payloadHash}\nx-amz-date:${amzDate}\n`;
  const signedHeaders = "host;x-amz-content-sha256;x-amz-date";
  const canonicalRequest = `PUT\n/${BUCKET}/${key}\n\n${canonicalHeaders}\n${signedHeaders}\n${payloadHash}`;
  const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`;
  const stringToSign = `AWS4-HMAC-SHA256\n${amzDate}\n${credentialScope}\n${sha256hex(canonicalRequest)}`;
  const signingKey = getSigningKey(SECRET_KEY, dateStamp, region, service);
  const signature = hmacSha256(signingKey, stringToSign).toString("hex");
  const authorization = `AWS4-HMAC-SHA256 Credential=${ACCESS_KEY}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;

  return {
    url: `${ENDPOINT}/${BUCKET}/${key}`,
    headers: {
      "Content-Type": contentType,
      "Cache-Control": cacheControl,
      "x-amz-content-sha256": payloadHash,
      "x-amz-date": amzDate,
      Authorization: authorization,
    },
  };
}

export async function uploadToR2(
  key: string,
  body: Buffer,
  contentType: string,
  // Safe as "immutable" for the admin upload route, which always writes unique,
  // content-hashed filenames — a real overwrite of an existing key (as with a manually
  // replaced fixed-name asset like the hero video) should bump the filename instead,
  // or this header will keep serving the old cached bytes for up to a year.
  cacheControl: string = "public, max-age=31536000, immutable"
): Promise<void> {
  const { url, headers } = getSignedR2PutRequest(key, body, contentType, cacheControl);
  const res = await fetch(url, {
    method: "PUT",
    headers,
    body: new Uint8Array(body),
    // Without a bound, a stalled connection here hangs forever instead of failing — seen in
    // practice during a bulk seeding script, but it's just as real a risk for the live admin
    // upload route this function also backs.
    signal: AbortSignal.timeout(20_000),
  });
  if (!res.ok) throw new Error(`R2 upload failed ${res.status}`);
}

export async function deleteFromR2(key: string): Promise<void> {
  const { amzDate, dateStamp } = amzDateNow();
  const region = "auto";
  const service = "s3";
  const host = `${ACCOUNT_ID}.r2.cloudflarestorage.com`;
  const url = `${ENDPOINT}/${BUCKET}/${key}`;
  const payloadHash = sha256hex("");
  const canonicalHeaders = `host:${host}\nx-amz-content-sha256:${payloadHash}\nx-amz-date:${amzDate}\n`;
  const signedHeaders = "host;x-amz-content-sha256;x-amz-date";
  const canonicalRequest = `DELETE\n/${BUCKET}/${key}\n\n${canonicalHeaders}\n${signedHeaders}\n${payloadHash}`;
  const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`;
  const stringToSign = `AWS4-HMAC-SHA256\n${amzDate}\n${credentialScope}\n${sha256hex(canonicalRequest)}`;
  const signingKey = getSigningKey(SECRET_KEY, dateStamp, region, service);
  const signature = hmacSha256(signingKey, stringToSign).toString("hex");
  const authorization = `AWS4-HMAC-SHA256 Credential=${ACCESS_KEY}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;
  await fetch(url, {
    method: "DELETE",
    headers: { "x-amz-content-sha256": payloadHash, "x-amz-date": amzDate, Authorization: authorization },
    signal: AbortSignal.timeout(20_000),
  });
}

// Videos can be far larger than the 3MB cap enforced on the buffered /api/admin/upload
// route, and Next.js API routes have body-size/duration limits on serverless hosts — so
// large files get a presigned PUT URL instead and upload directly from the browser to R2,
// never passing through our server.
// `contentType` is part of the signature (via the signed `content-type` header), not just a
// value we happen to check before minting the URL — otherwise the whitelist check in the
// route that calls this is only enforced on the request *for* the URL, and whoever ends up
// performing the actual PUT (the browser, normally, but potentially anyone who intercepts the
// URL within its short expiry) could send any Content-Type they like and have R2 serve the
// object that way. Signing it means R2 rejects a PUT whose Content-Type header doesn't match
// exactly what was authorized.
export async function getPresignedUploadUrl(
  key: string,
  contentType: string,
  expiresInSeconds: number = 300
): Promise<string> {
  const { amzDate, dateStamp } = amzDateNow();
  const region = "auto";
  const service = "s3";
  const host = `${ACCOUNT_ID}.r2.cloudflarestorage.com`;
  const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`;
  const signedHeaders = "content-type;host";
  const queryParams: [string, string][] = [
    ["X-Amz-Algorithm", "AWS4-HMAC-SHA256"],
    ["X-Amz-Credential", `${ACCESS_KEY}/${credentialScope}`],
    ["X-Amz-Date", amzDate],
    ["X-Amz-Expires", String(expiresInSeconds)],
    ["X-Amz-SignedHeaders", signedHeaders],
  ];
  const canonicalQueryString = queryParams
    .map(([k, v]) => [encodeURIComponent(k), encodeURIComponent(v)])
    .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
    .map(([k, v]) => `${k}=${v}`)
    .join("&");
  const canonicalHeaders = `content-type:${contentType}\nhost:${host}\n`;
  const canonicalRequest = `PUT\n/${BUCKET}/${key}\n${canonicalQueryString}\n${canonicalHeaders}\n${signedHeaders}\nUNSIGNED-PAYLOAD`;
  const stringToSign = `AWS4-HMAC-SHA256\n${amzDate}\n${credentialScope}\n${sha256hex(canonicalRequest)}`;
  const signingKey = getSigningKey(SECRET_KEY, dateStamp, region, service);
  const signature = hmacSha256(signingKey, stringToSign).toString("hex");

  return `${ENDPOINT}/${BUCKET}/${key}?${canonicalQueryString}&X-Amz-Signature=${signature}`;
}

// Recursively walks any form-values or Prisma-record shape and collects every R2 URL it
// references — including inside comma-joined multi-image fields (Tour.images,
// JourneyChapter.galleryImages, ItineraryDay.images...). This is what lets admin actions
// diff "URLs referenced before this save" against "URLs referenced after" without each
// action needing to know its own field names: any string field that happens to be an R2
// URL is picked up automatically, on every entity.
export function extractR2Urls(value: unknown, out: Set<string> = new Set()): Set<string> {
  if (typeof value === "string") {
    for (const part of value.split(",")) {
      const trimmed = part.trim();
      if (trimmed.startsWith(PUBLIC_URL + "/")) out.add(trimmed);
    }
  } else if (Array.isArray(value)) {
    for (const item of value) extractR2Urls(item, out);
  } else if (value && typeof value === "object") {
    for (const v of Object.values(value)) extractR2Urls(v, out);
  }
  return out;
}

// Deletes whichever `before` URLs are no longer present in `after` — the actual R2 cleanup
// step, run once a save/delete has already succeeded in the database. Errors are swallowed
// per-URL: a transient R2 failure must never surface as a failed save, worst case a file is
// orphaned and can be cleaned up manually later.
export async function cleanupOrphanedR2Urls(before: Set<string>, after: Set<string>): Promise<void> {
  for (const url of before) {
    if (after.has(url)) continue;
    await deleteFromR2(url.slice((PUBLIC_URL + "/").length)).catch(() => {});
  }
}

export { PUBLIC_URL as R2_PUBLIC_URL };
