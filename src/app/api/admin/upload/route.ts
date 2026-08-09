import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { uploadToR2, deleteFromR2, R2_PUBLIC_URL } from "@/lib/r2";

const VALID_FOLDERS = ["tours", "gallery", "blog", "guides", "logo"];

export async function POST(request: NextRequest) {
  const deny = await requireAdmin();
  if (deny) return deny;

  const formData = await request.formData();
  const file = formData.get("file") as File | null;
  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });
  if (!["image/jpeg", "image/png", "image/webp", "image/gif"].includes(file.type))
    return NextResponse.json({ error: "Type non supporté" }, { status: 400 });
  if (file.size > 3 * 1024 * 1024)
    return NextResponse.json({ error: "Max 3MB" }, { status: 400 });

  const folderParam = formData.get("folder") as string | null;
  const folder = VALID_FOLDERS.includes(folderParam ?? "") ? folderParam! : "gallery";
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "jpg";
  const key = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  await uploadToR2(key, buffer, file.type);
  return NextResponse.json({ url: `${R2_PUBLIC_URL}/${key}` });
}

export async function DELETE(request: NextRequest) {
  const deny = await requireAdmin();
  if (deny) return deny;
  const { url } = (await request.json()) as { url: string };
  if (!url?.startsWith(R2_PUBLIC_URL + "/")) return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  await deleteFromR2(url.slice((R2_PUBLIC_URL + "/").length));
  return NextResponse.json({ ok: true });
}
