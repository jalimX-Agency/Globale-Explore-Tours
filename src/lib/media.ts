const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov"];

export function isVideoUrl(url: string) {
  return VIDEO_EXTENSIONS.some((ext) => url.toLowerCase().endsWith(ext));
}
