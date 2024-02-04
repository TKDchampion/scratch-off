"use client";

import Card from "@/components/Card";
import { useRouter } from "next/dist/client/components/navigation";
import style from "./page.module.css";
import { useEffect, useState } from "react";

const allTypeValues = [
  { type: 1, name: "+ 1000", counts: 10 },
  { type: 2, name: "+ 2000", counts: 8 },
  { type: 3, name: "+ 5000", counts: 6 },
  { type: 4, name: "x 2 倍", counts: 10 },
  { type: 5, name: "x 5 倍", counts: 8 },
  { type: 6, name: "x 10 倍", counts: 6 },
];

const generatorArrayFtn = (counts: number, name: string): any => {
  return Array.from({ length: counts }).map(() => ({ name: name }));
};

const shuffleArray = (array: any) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export default function Home() {
  const router = useRouter();
  const [renderArray, setRenderArray] = useState([]);

  useEffect(() => {
    let concatArray: any = [];
    allTypeValues.forEach((i) => {
      const generatorArray = generatorArrayFtn(i.counts, i.name);
      concatArray = concatArray.concat(generatorArray);
    });
    shuffleArray(concatArray);
    setRenderArray(concatArray);
  }, []);

  return (
    <div className={style.home}>
      <h3>刮刮樂 選號碼</h3>
      <div className={style.contain}>
        {renderArray.map((i: any, index: number) => (
          <div
            key={index}
            onClick={() => {
              const currentArray: any = JSON.parse(JSON.stringify(renderArray));
              currentArray[index].active = !currentArray[index]?.active;
              setRenderArray(() => currentArray);
            }}
          >
            <Card number={index + 1} item={i} />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="pretty-button"
        onClick={() => {
          sessionStorage.setItem(
            "select",
            JSON.stringify(renderArray.filter((i: any) => i.active))
          );
          router.push("/play");
        }}
      >
        下一步
      </button>
    </div>
  );
}
