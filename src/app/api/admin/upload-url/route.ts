import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { getPresignedUploadUrl, R2_PUBLIC_URL } from "@/lib/r2";

const VALID_FOLDERS = [
  "tours",
  "gallery",
  "blog",
  "guides",
  "logo",
  "destinations",
  "regions",
  "team",
  "content-blocks",
  "testimonials",
];

const VALID_VIDEO_TYPES: Record<string, string> = {
  "video/mp4": "mp4",
  "video/webm": "webm",
  "video/quicktime": "mov",
};

// Large files (video hero backgrounds) get a presigned PUT URL and upload directly
// from the browser to R2 — bypassing our server entirely, so Next.js body-size and
// duration limits never come into play. See /api/admin/upload for small image files.
export async function POST(request: NextRequest) {
  const deny = await requireAdmin();
  if (deny) return deny;

  const { fileName, contentType, folder } = (await request.json()) as {
    fileName: string;
    contentType: string;
    folder: string;
  };

  if (!fileName || !contentType) {
    return NextResponse.json({ error: "Missing fileName or contentType" }, { status: 400 });
  }
  const ext = VALID_VIDEO_TYPES[contentType];
  if (!ext) {
    return NextResponse.json({ error: "Type non supporté" }, { status: 400 });
  }
  const resolvedFolder = VALID_FOLDERS.includes(folder) ? folder : "gallery";
  const key = `${resolvedFolder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  const uploadUrl = await getPresignedUploadUrl(key, contentType);
  return NextResponse.json({ uploadUrl, publicUrl: `${R2_PUBLIC_URL}/${key}` });
}
