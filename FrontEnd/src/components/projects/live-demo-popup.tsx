"use client";

import { useEffect, useState } from "react";
import Popup from "@/components/ui/popup";

export default function LiveDemoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Popup
      open={open}
      onClose={() => setOpen(false)}
      eyebrow="LIVE DEMO"
      title="Want to see it in action?"
      description="You can play the video above if you'd like to see a live demo."
    />
  );
}
