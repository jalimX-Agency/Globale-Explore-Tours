import https from "node:https";
import { createHmac, createHash } from "node:crypto";

const ACCOUNT_ID = process.env.R2_ACCOUNT_ID!;
const ACCESS_KEY = process.env.R2_ACCESS_KEY_ID!;
const SECRET_KEY = process.env.R2_SECRET_ACCESS_KEY!;
const BUCKET = process.env.R2_BUCKET_NAME!;
const R2_PUBLIC_URL = process.env.NEXT_PUBLIC_R2_URL!;

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

function uploadToR2Https(key: string, body: Buffer, contentType: string): Promise<void> {
  return new Promise((resolve, reject) => {
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

    const req = https.request(
      {
        hostname: host,
        path: `/${BUCKET}/${key}`,
        method: "PUT",
        headers: {
          "Content-Type": contentType,
          "Cache-Control": "public, max-age=31536000, immutable",
          "Content-Length": body.length,
          "x-amz-content-sha256": payloadHash,
          "x-amz-date": amzDate,
          Authorization: authorization,
        },
      },
      (res) => {
        if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
          res.on("data", () => {});
          res.on("end", () => resolve());
        } else {
          let body2 = "";
          res.on("data", (c) => (body2 += c));
          res.on("end", () => reject(new Error(`R2 upload failed ${res.statusCode}: ${body2}`)));
        }
      }
    );
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

function fetchBuffer(url: string): Promise<{ buffer: Buffer; contentType: string }> {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "curl/8.0" } }, (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          resolve(fetchBuffer(res.headers.location));
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`fetch failed ${res.statusCode}`));
          return;
        }
        const chunks: Buffer[] = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () =>
          resolve({ buffer: Buffer.concat(chunks), contentType: res.headers["content-type"] || "image/jpeg" })
        );
        res.on("error", reject);
      })
      .on("error", reject);
  });
}

type ImageSpec = { key: string; url: string };

const images: ImageSpec[] = [
  // Athens day carousel extras
  { key: "journeys/grece-athens-day1-b.jpg", url: "https://images.pexels.com/photos/34564609/pexels-photo-34564609.jpeg" },
  { key: "journeys/grece-athens-day1-c.jpg", url: "https://images.pexels.com/photos/28300843/pexels-photo-28300843.jpeg" },
  { key: "journeys/grece-athens-day2-b.jpg", url: "https://images.pexels.com/photos/28243336/pexels-photo-28243336.jpeg" },
  { key: "journeys/grece-athens-day2-c.jpg", url: "https://images.pexels.com/photos/38806582/pexels-photo-38806582.jpeg" },

  // Sifnos day carousel extras
  { key: "journeys/grece-sifnos-day1-b.jpg", url: "https://images.pexels.com/photos/1453754/pexels-photo-1453754.jpeg" },
  { key: "journeys/grece-sifnos-day1-c.jpg", url: "https://images.pexels.com/photos/30585508/pexels-photo-30585508.jpeg" },
  { key: "journeys/grece-sifnos-day2-b.jpg", url: "https://images.pexels.com/photos/2273664/pexels-photo-2273664.jpeg" },
  { key: "journeys/grece-sifnos-day2-c.jpg", url: "https://images.pexels.com/photos/6693557/pexels-photo-6693557.jpeg" },

  // Paros day carousel extras
  { key: "journeys/grece-paros-day1-b.jpg", url: "https://images.pexels.com/photos/27203451/pexels-photo-27203451.jpeg" },
  { key: "journeys/grece-paros-day1-c.jpg", url: "https://images.pexels.com/photos/37957499/pexels-photo-37957499.jpeg" },
  { key: "journeys/grece-paros-day2-b.jpg", url: "https://images.pexels.com/photos/7893146/pexels-photo-7893146.jpeg" },
  { key: "journeys/grece-paros-day2-c.jpg", url: "https://images.pexels.com/photos/30216793/pexels-photo-30216793.jpeg" },

  // Santorini day carousel extras
  { key: "journeys/grece-santorini-day1-b.jpg", url: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg" },
  { key: "journeys/grece-santorini-day1-c.jpg", url: "https://images.pexels.com/photos/6604546/pexels-photo-6604546.jpeg" },
  { key: "journeys/grece-santorini-day2-b.jpg", url: "https://images.pexels.com/photos/33486707/pexels-photo-33486707.jpeg" },
  { key: "journeys/grece-santorini-day2-c.jpg", url: "https://images.pexels.com/photos/37844502/pexels-photo-37844502.jpeg" },
  { key: "journeys/grece-santorini-day3-b.jpg", url: "https://images.pexels.com/photos/16934599/pexels-photo-16934599.jpeg" },
  { key: "journeys/grece-santorini-day3-c.jpg", url: "https://images.pexels.com/photos/12513235/pexels-photo-12513235.jpeg" },

  // Gallery strip extras
  { key: "journeys/grece-athens-gallery3.jpg", url: "https://images.pexels.com/photos/11985451/pexels-photo-11985451.jpeg" },
  { key: "journeys/grece-athens-gallery4.jpg", url: "https://images.pexels.com/photos/37844153/pexels-photo-37844153.jpeg" },
  { key: "journeys/grece-athens-gallery5.jpg", url: "https://images.pexels.com/photos/37415534/pexels-photo-37415534.jpeg" },

  { key: "journeys/grece-sifnos-gallery3.jpg", url: "https://images.pexels.com/photos/28000954/pexels-photo-28000954.jpeg" },
  { key: "journeys/grece-sifnos-gallery4.jpg", url: "https://images.pexels.com/photos/28143534/pexels-photo-28143534.jpeg" },
  { key: "journeys/grece-sifnos-gallery5.jpg", url: "https://images.pexels.com/photos/38909043/pexels-photo-38909043.jpeg" },

  { key: "journeys/grece-paros-gallery3.jpg", url: "https://images.pexels.com/photos/37282945/pexels-photo-37282945.png" },
  { key: "journeys/grece-paros-gallery4.jpg", url: "https://images.pexels.com/photos/18774927/pexels-photo-18774927.jpeg" },
  { key: "journeys/grece-paros-gallery5.jpg", url: "https://images.pexels.com/photos/16885022/pexels-photo-16885022.jpeg" },

  { key: "journeys/grece-santorini-gallery3.jpg", url: "https://images.pexels.com/photos/32511035/pexels-photo-32511035.jpeg" },
  { key: "journeys/grece-santorini-gallery4.jpg", url: "https://images.pexels.com/photos/10268572/pexels-photo-10268572.jpeg" },
  { key: "journeys/grece-santorini-gallery5.jpg", url: "https://images.pexels.com/photos/8078087/pexels-photo-8078087.jpeg" },
];

async function main() {
  const results: Record<string, string> = {};
  for (const img of images) {
    try {
      const { buffer, contentType } = await fetchBuffer(img.url);
      await uploadToR2Https(img.key, buffer, contentType);
      const publicUrl = `${R2_PUBLIC_URL}/${img.key}`;
      results[img.key] = publicUrl;
      console.log(`OK  ${img.key} -> ${publicUrl}`);
    } catch (err) {
      console.error(`FAIL ${img.key} (${img.url}):`, err);
    }
  }
  console.log("\n--- JSON ---");
  console.log(JSON.stringify(results, null, 2));
}

main();
