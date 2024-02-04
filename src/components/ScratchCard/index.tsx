"use client";
import React, { useRef, useEffect } from "react";
import "./style.css";

interface Props {
  clienY: number;
  item: any;
}

const ScratchCard: React.FC<Props> = ({ clienY, item }) => {
  const bgCanvasRef = useRef(null);
  const fgCanvasRef = useRef(null);

  useEffect(() => {
    initialBgCanvas();
    initialFgCanvas();
  }, []);

  useEffect(() => {
    const canvas = fgCanvasRef.current as any;

    // Check if canvas is available
    if (canvas) {
      // Add touchmove event listener to the canvas
      const handleTouchMove = (e: any) => {
        e.preventDefault();
        // Add your touchmove logic here if needed
      };

      canvas.addEventListener("touchmove", handleTouchMove, { passive: false });

      // Cleanup the event listener when the component is unmounted
      return () => {
        canvas.removeEventListener("touchmove", handleTouchMove);
      };
    }
  }, []);

  const initialBgCanvas = () => {
    const canvas = bgCanvasRef.current as any;
    const ctx = canvas.getContext("2d");
    ctx.font = "30px Microsoft JhengHei, PMingLiU, sans-serif";
    ctx.fillText(item.name, 20, 90);
  };

  const initialFgCanvas = () => {
    const canvas = fgCanvasRef.current as any;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "silver";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const handleMousemove = (event: any) => {
    console.log(event);
    const touch = event.touches[0];
    const canvas = fgCanvasRef.current as any;
    const ctx = canvas.getContext("2d");
    // const x = event.nativeEvent.offsetX;
    // const y = event.nativeEvent.offsetY;
    const x = touch.pageX - 20;
    const y = touch.pageY - 150 - clienY;
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
