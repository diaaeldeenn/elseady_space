export function getCvDownloadUrl(url: string) {
  if (url.includes("res.cloudinary.com") && !url.includes("fl_attachment")) {
    return url.replace("/upload/", "/upload/fl_attachment/");
  }

  return url;
}