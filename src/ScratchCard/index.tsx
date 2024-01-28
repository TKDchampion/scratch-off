"use client";
import React, { useRef, useEffect } from "react";
import "./style.css";

const ScratchCard: React.FC = (props) => {
  const bgCanvasRef = useRef(null);
  const fgCanvasRef = useRef(null);

  useEffect(() => {
    initialBgCanvas();
    initialFgCanvas();
  }, []);

  const initialBgCanvas = () => {
    const canvas = bgCanvasRef.current as any;
    const ctx = canvas.getContext("2d");
    ctx.font = "30px Microsoft JhengHei, PMingLiU, sans-serif";
    ctx.fillText("恭喜獲得信義區豪宅", 0, 50);
  };

  const initialFgCanvas = () => {
    const canvas = fgCanvasRef.current as any;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "silver";
    ctx.fillRect(0, 0, 450, 380);
  };

  const handleMousemove = (event: any) => {
    console.log(event);
    const touch = event.touches[0];
    const canvas = fgCanvasRef.current as any;
    const ctx = canvas.getContext("2d");
    // const x = event.nativeEvent.offsetX;
    // const y = event.nativeEvent.offsetY;
    const x = touch.pageX;
    const y = touch.pageY - 45;
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "destination-out";
  };

  return (
    <div className="scratch-main">
      <canvas ref={bgCanvasRef} className="scratch-card-0" />
      <canvas
        ref={fgCanvasRef}
        className="scratch-card-1"
        // onMouseMove={handleMousemove}
        onTouchMove={handleMousemove}
      />
    </div>
  );
};

export default ScratchCard;
