"use client";

import React from "react";
import Image from "next/image";
import { usePriceAnimation } from "../../hooks/usePriceAnimation";

type Token = {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  volume: number;
  liquidity: number;
  buys: number;
  sells: number;
  img?: string;
};

export default function TokenCard({ token }: { token: Token }) {
  const { priceRef, colorClass } = usePriceAnimation(token.price);

  return (
    <div className="w-full bg-[#0d1117] border border-[#1b1f24] rounded-lg p-4 hover:border-[#2d89ff50] transition">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={token.img || "/placeholder.png"}
            alt={token.symbol}
            width={32}
            height={32}
            className="rounded-full"
          />
          <div>
            <p className="text-white font-semibold">{token.symbol}</p>
            <p className="text-xs text-neutral-400">{token.name}</p>
          </div>
        </div>
        <p className="text-xs text-neutral-500">⚡ Live</p>
      </div>

      {/* PRICE */}
      <div className="mt-3">
        <span
          ref={priceRef}
          className={`text-lg font-bold transition ${colorClass}`}
        >
          ${token.price.toFixed(4)}
        </span>

        <span
          className={`ml-2 text-xs px-2 py-1 rounded ${
            token.change24h >= 0
              ? "bg-green-600/20 text-green-400"
              : "bg-red-600/20 text-red-400"
          }`}
        >
          {token.change24h}%
        </span>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-3 gap-4 mt-4 text-xs">
        <div>
          <p className="text-neutral-500">Liquidity</p>
          <p className="text-white font-medium">${token.liquidity}</p>
        </div>
        <div>
          <p className="text-neutral-500">Volume</p>
          <p className="text-white font-medium">${token.volume}</p>
        </div>
        <div>
          <p className="text-neutral-500">Buys / Sells</p>
          <p className="text-white font-medium">
            {token.buys} / {token.sells}
          </p>
        </div>
      </div>
    </div>
  );
}
