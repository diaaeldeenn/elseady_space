"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ProjectVideo({ src }: { src: string }) {
  const isVideo = src.match(/\.(mp4|webm|ogv)$/i);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isVideo) {
      videoRef.current?.play().catch(() => {});
    }
  }, [isVideo]);

  return (
    <div className="relative w-full aspect-video bg-black border border-border overflow-hidden">
      {isVideo ? (
        <video
          ref={videoRef}
          src={src}
          loop
          muted
          playsInline
          controls
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
