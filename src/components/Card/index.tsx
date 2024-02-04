"use client";
import React, { useRef, useEffect, useState } from "react";
import "./style.css";

interface Props {
  number: number;
  item: any;
}

const Card: React.FC<Props> = ({ number, item }) => {
  return (
    <div className={`card ${item.active ? "active" : ""}`}>
      <h2>
        {number} 號 {item.name}
      </h2>
    </div>
  );
};

export default Card;
