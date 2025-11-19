'use client'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import TokenCard from '../molecules/TokenCard'
import { FixedSizeList as List, ListChildComponentProps } from 'react-window'

type Props = { title: string; columnKey: 'new' | 'final' | 'migrated' }

export default function TokenColumn({ title, columnKey }: Props) {
  const { data = [], isLoading, isError } = useQuery({
    queryKey: ['tokens', columnKey],
    queryFn: async () => {
      const res = await axios.get('/api/tokens')
      return res.data
        .map((t: any, i: number) => ({ ...t, col: i % 3 === 0 ? 'new' : i % 3 === 1 ? 'final' : 'migrated' }))
        .filter((t: any) => t.col === columnKey)
    },
    staleTime: 5000
  })

  const Row = ({ index, style }: ListChildComponentProps) => {
    const token = data[index]
    if (!token) return null
    return (
      <div style={style}>
        <TokenCard token={token} />
      </div>
    )
  }

  return (
    <div className="bg-[#0d0f12] border border-[#1d1f24] rounded-lg p-3">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[14px] font-semibold text-white">{title}</h2>
        <div className="flex items-center gap-2 text-[12px] text-[#7b8191]">
          <span>{data.length}</span>
          <span>•</span>
          <span className="cursor-pointer">P1</span>
          <span className="cursor-pointer">P2</span>
          <span className="cursor-pointer">P3</span>
        </div>
      </div>

      <div className="h-[720px] overflow-hidden">
        {isLoading ? (
          <div className="space-y-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-28 rounded-md shimmer" />
            ))}
          </div>
        ) : isError ? (
          <div className="text-center text-red-400 py-10">Failed to load</div>
        ) : data.length === 0 ? (
          <div className="text-center text-[#7b8191] py-10">No items</div>
        ) : (
          <List<any> height={720} itemCount={data.length} itemSize={115} width={'100%'}>
            {Row}
          </List>
        )}
      </div>
    </div>
  )
}
