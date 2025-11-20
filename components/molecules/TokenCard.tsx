'use client';

import React, { useEffect, useRef, useState } from 'react';

export type Token = {
  id: string;
  name: string;
  symbol?: string;
  image?: string;
  price?: number;        
  changePct?: number;  
  liquidity?: string;
  volume?: string;
  buysSells?: string;
  
};

type Props = {
  token: Token;
};

function formatPrice(v?: number) {
  if (v == null || Number.isNaN(v)) return '$0.00';
  return v >= 1000 ? `$${v.toLocaleString(undefined, { maximumFractionDigits: 2 })}` : `$${v.toFixed(4)}`;
}

const TokenCardInner: React.FC<Props> = ({ token }) => {
  const { name, symbol, image, price, changePct, liquidity, volume, buysSells } = token;
  const changeIsPos = (changePct ?? 0) >= 0;

  // small highlight animation when price changes
  const priceRef = useRef<HTMLDivElement | null>(null);
  const lastPriceRef = useRef<number | undefined>(price);
  useEffect(() => {
    if (lastPriceRef.current === undefined) { lastPriceRef.current = price; return; }
    if (price === lastPriceRef.current) return;

    const el = priceRef.current;
    if (!el) { lastPriceRef.current = price; return; }

    // flash background briefly
    el.animate(
      [
        { background: 'rgba(255,255,255,0.02)' },
        { background: changeIsPos ? 'rgba(16,185,129,0.12)' : 'rgba(239,68,68,0.12)' },
        { background: 'rgba(255,255,255,0.02)' }
      ],
      { duration: 700, easing: 'ease-out' }
    );
    lastPriceRef.current = price;
  }, [price, changeIsPos]);

  return (
    <article className="w-full bg-[#0d0f11] border border-[#2a2e33] rounded-md p-4 mb-3">
      {/* top row: image + name / symbol + right price */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-14 w-14 rounded-md bg-[#0b0d0f] border border-[#222528] flex items-center justify-center overflow-hidden">
            {image ? (
              // image may be remote - keep <img> simple
              <img src={image} alt={symbol ?? name} className="object-cover w-full h-full" />
            ) : (
              <div className="text-xs text-neutral-400">{(symbol ?? name ?? 'TOK').slice(0,2)}</div>
            )}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold tracking-tight">{name}</h3>
              {symbol && <span className="text-xs text-neutral-400">{symbol}</span>}
            </div>
            <div className="text-xs text-neutral-500 mt-0.5">Live · <span className="text-neutral-400">#{token.id?.slice?.(0,6)}</span></div>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <div ref={priceRef} className="flex items-center gap-3">
            <div className="text-lg font-extrabold">{formatPrice(price)}</div>
            <div className={`text-xs font-semibold px-2 py-1 rounded-md ${changeIsPos ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}>
              {changePct == null ? '0%' : `${changePct > 0 ? '+' : ''}${changePct}%`}
            </div>
          </div>
          <div className="text-xs text-neutral-500 mt-1">MC {liquidity ?? '$0'}</div>
        </div>
      </div>

      {/* divider */}
      <div className="border-t border-[#222528] my-3" />

      {/* metrics row */}
      <div className="grid grid-cols-3 gap-4 text-xs text-neutral-400">
        <div>
          <div className="text-[11px] text-neutral-500">Liquidity</div>
          <div className="mt-1 text-sm text-neutral-100">{liquidity ?? '$ —'}</div>
        </div>

        <div>
          <div className="text-[11px] text-neutral-500">Volume</div>
          <div className="mt-1 text-sm text-neutral-100">{volume ?? '$ —'}</div>
        </div>

        <div>
          <div className="text-[11px] text-neutral-500">Buys / Sells</div>
          <div className="mt-1 text-sm text-neutral-100">{buysSells ?? '/'}</div>
        </div>
      </div>

      {/* bottom micro row with small icons */}
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-neutral-400">
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-green-400 inline-block" /> <span>Live</span>
          </div>
          <div>🔍</div>
        </div>

        <div>
          <button className="bg-[#183bff] text-white px-3 py-1 rounded-md text-xs">0 SOL</button>
        </div>
      </div>
    </article>
  );
};

export default React.memo(TokenCardInner);
