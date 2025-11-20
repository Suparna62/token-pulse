'use client';

import React, { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import TokenCard, { Token } from '../molecules/TokenCard';

type ColumnKey = 'new' | 'final' | 'migrated';

type Props = {
  title: string;
  columnKey: ColumnKey;
};

export default function TokenColumn({ title, columnKey }: Props) {
  const { data = [], isLoading, isError } = useQuery({
    queryKey: ['tokens', columnKey],
    queryFn: async (): Promise<Token[]> => {
      const res = await axios.get('/api/tokens');
     
      const arr = Array.isArray(res.data) ? res.data : [];
    
      const mapped = arr.map((t: any, i: number) => {
        const base: Token = {
          id: t.id ?? `t-${i}`,
          name: t.name ?? `Token ${i}`,
          symbol: t.symbol ?? `T${i}`,
          image: t.image ?? '/placeholder.png',
          price: t.price ?? Math.round((Math.random() * 200 + 1) * 100) / 100,
          changePct: t.changePct ?? Math.round((Math.random() * 20 - 10) * 100) / 100,
          liquidity: t.liquidity ?? '$0',
          volume: t.volume ?? '$0',
          buysSells: t.buysSells ?? '/'
        };
        // add a deterministic column tag for demo filter
        const col = i % 3 === 0 ? 'new' : i % 3 === 1 ? 'final' : 'migrated';
        return { ...base, col };
      });
      return mapped.filter((m: any) => m.col === columnKey);
    },
    staleTime: 10_000
  });

  const shown = useMemo(() => data, [data]);

  return (
    <div className="bg-[#0b0d0f] border border-[#272b2f] rounded-md p-4 min-h-[640px]">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold">{title}</h2>
        <div className="text-xs text-neutral-400">⚡ Live · P1 P2 P3</div>
      </div>

      <div className="overflow-auto pr-2" style={{ maxHeight: 690 }}>
        {isLoading ? (
          <div className="flex items-center justify-center h-64 text-neutral-400">Loading tokens…</div>
        ) : isError ? (
          <div className="flex items-center justify-center h-64 text-red-400">Failed to load</div>
        ) : shown.length === 0 ? (
          <div className="flex items-center justify-center h-64 text-neutral-500">No tokens</div>
        ) : (
          <div>
            {shown.map((token) => (
              <TokenCard key={token.id} token={token} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
