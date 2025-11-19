'use client'
import React from 'react'
import TokenColumn from '../../components/organisms/TokenColumn'
import useWebsocket from '../../hooks/useWebsocket'

export default function TradePage() {
  useWebsocket()

  return (
    <main className="p-6 max-w-[1400px] mx-auto">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Pulse</h1>
        <div className="text-sm text-[#9aa3ad]">Replica demo · /trade</div>
      </header>

      <section className="grid grid-cols-3 gap-4">
        <TokenColumn title="New Pairs" columnKey="new" />
        <TokenColumn title="Final Stretch" columnKey="final" />
        <TokenColumn title="Migrated" columnKey="migrated" />
      </section>
    </main>
  )
}
