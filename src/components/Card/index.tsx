"use client";
import React, { useRef, useEffect } from "react";
import "./style.css";

interface Props {
  // clienY: number;
}

const Card: React.FC<Props> = () => {

  return (
    <div className="card">
        <h2>Hello, World!</h2>
        <p>This is a pretty card designed using CSS.</p>
    </div>
  );
};

export default Card;
