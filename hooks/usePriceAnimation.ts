"use client";

import { useEffect, useRef, useState } from "react";

export function usePriceAnimation(price: number) {
  const priceRef = useRef<HTMLSpanElement | null>(null);
  const [colorClass, setColorClass] = useState("");

  useEffect(() => {
    if (!priceRef.current) return;

    const prev = Number(priceRef.current.dataset.prev || price);
    let newColor = "";

    if (price > prev) newColor = "text-green-400";
    if (price < prev) newColor = "text-red-400";

    priceRef.current.dataset.prev = String(price);
    setColorClass(newColor);

    const timer = setTimeout(() => setColorClass(""), 400);
    return () => clearTimeout(timer);
  }, [price]);

  return { priceRef, colorClass };
}
