"use client";

import Popup from "@/components/ui/popup";
import { useEffect, useState } from "react";

export default function WelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = sessionStorage.getItem("welcome-popup");

    if (hasSeenWelcome) return;

    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("welcome-popup", "true");
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Popup
      open={open}
      onClose={() => setOpen(false)}
      eyebrow="WELCOME"
      title="Thanks for stopping by."
      description="Take a look around and explore my projects, experience, and technical references."
    />
  );
}
