"use client";

import Image from "next/image";

export default function ProjectVideo({ src }: { src: string }) {
  const isVideo = /\.(mp4|webm|ogv)$/i.test(src);

  return (
    <div className="relative w-full aspect-video bg-black border border-border overflow-hidden">
      {isVideo ? (
        <video
          src={src}
          loop
          muted
          playsInline
          controls
          preload="metadata"
          className="w-full h-full object-contain"
        />
      ) : (
        <Image
          src={src}
          alt="Project Preview"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      )}
    </div>
  );
}
