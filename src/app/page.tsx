"use client";
import ScratchCard from "@/ScratchCard";
import { useEffect } from "react";

export default function Home() {
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
    <div className="App">
      <h1>React 刮刮乐</h1>
      <ScratchCard />
    </div>
  );
}
