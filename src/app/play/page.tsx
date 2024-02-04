"use client";

import ScratchCard from "@/components/ScratchCard";
import { useEffect, useState } from "react";

export default function Play() {
  const [selectedArray, setSelectedArray] = useState([]);

  useEffect(() => {
    // document.body.addEventListener(
    //   "touchmove",
    //   function (e) {
    //     e.preventDefault();
    //   },
    //   { passive: false }
    // );

    const storageArray = JSON.parse(sessionStorage.getItem("select") as string);
    setSelectedArray(storageArray);
  }, []);

  return (
    <div className="play">
      <h1>刮刮樂 開始刮</h1>
      {selectedArray.map((item, index: number) => (
        <ScratchCard key={index} clienY={index * 180} item={item} />
      ))}
    </div>
  );
}
