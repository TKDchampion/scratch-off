"use client";

import Card from "@/components/Card";
import { useRouter } from "next/dist/client/components/navigation";
import style from "./page.module.css";

export default function Home() {
  const router = useRouter();

  return (
    <div className={style.home}>
      <h3>刮刮樂 選號碼</h3>
      <div className={style.contain}>
        <Card />
      </div>
      <button
        type="button"
        className="pretty-button"
        onClick={() => router.push("/play")}
      >
        下一步
      </button>
    </div>
  );
}
