"use client";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="home">
      <h1>刮刮樂 選號碼</h1>
      <button type="button" onClick={() => router.push("/play")}>
        下一步
      </button>
    </div>
  );
}
