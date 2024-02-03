"use client";

import ScratchCard from "@/components/ScratchCard";
import { useEffect } from "react";

export default function Play() {
  useEffect(() => {
    document.body.addEventListener(
      "touchmove",
      function (e) {
        e.preventDefault();
      },
      { passive: false }
    );
  });

  return (
    <div className="play">
      <h1>刮刮樂 開始刮</h1>
      <ScratchCard clienY={0} />
      <ScratchCard clienY={150} />
    </div>
  );
}
