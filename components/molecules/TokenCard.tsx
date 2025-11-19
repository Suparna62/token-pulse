'use client'
import React from 'react'
import Image from 'next/image'
import Tooltip from '../atoms/Tooltip'
import { usePriceAnimation } from '../../hooks/usePriceAnimation'

type Token = {
  id: string
  name: string
  symbol?: string
  price: number
  mc?: number
  age?: string
  img?: string
  f?: number
  v?: number
}

export default function TokenCard({ token }: { token: Token }) {
  const { flashClass } = usePriceAnimation(token.id, token.price)

  return (
    <div className={`flex items-start gap-3 p-3 rounded-lg border border-[#1d1f24] bg-[#0d0f12] hover:bg-[#111317] transition-all duration-150 cursor-pointer ${flashClass}`} style={{ height: 105 }}>
      <div className="w-[52px] h-[52px] relative flex-shrink-0 rounded-md overflow-hidden border border-[#2a2d34]">
        <Image src={token.img || '/placeholder.png'} alt={token.name} fill className="object-cover" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <p className="text-[14px] font-semibold truncate">{token.name}</p>
              <p className="text-[12px] text-[#7b8191] truncate">{token.symbol}</p>
            </div>

            <div className="flex items-center gap-2 mt-1 text-[12px] text-[#7b8191]">
              <Tooltip content="Age on chain"><span className="flex items-center gap-1">⏱ <span>{token.age ?? '—'}</span></span></Tooltip>
              <Tooltip content="Lightning score"><span>⚡</span></Tooltip>
              <Tooltip content="Chart"><span>📈</span></Tooltip>
              <Tooltip content="Link"><span>🔗</span></Tooltip>
            </div>
          </div>

          <div className="text-right">
            <p className="text-[14px] font-medium">${token.price.toLocaleString()}</p>
            <p className="text-[12px] text-[#7b8191]">MC ${token.mc?.toLocaleString() ?? 0}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-3 flex-wrap">
          <span className="text-[11px] px-2 py-[2px] rounded bg-[#10141a] text-[--success] text-[#16c784]">+3%</span>
          <span className="text-[11px] px-2 py-[2px] rounded bg-[#10141a] text-[#ea3943]">-1%</span>
          <span className="text-[11px] px-2 py-[2px] rounded bg-[#10141a] text-[#16c784]">+10m</span>
          <span className="text-[11px] px-2 py-[2px] rounded bg-[#10141a] text-[#16c784]">0%</span>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-3 text-[12px] text-[#7b8191]">
            <Tooltip content="Followers"><span className="flex items-center gap-1">👤 <b>{token.f ?? 0}</b></span></Tooltip>
            <Tooltip content="Volume"><span className="flex items-center gap-1">💸 <b>${token.v ?? 0}</b></span></Tooltip>
          </div>

          <button className="px-3 py-[4px] rounded bg-[#1f6feb] text-white text-[12px] hover:bg-[#2a7df0] transition-colors">0 SOL</button>
        </div>
      </div>
    </div>
  )
}
