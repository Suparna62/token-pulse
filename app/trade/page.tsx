"use client";

import React from "react";
import TokenColumn from "../../components/organisms/TokenColumn";
import useWebsocket from "../../hooks/useWebsocket";

export default function TradePage() {
  // start mock websocket updates
  useWebsocket();

  return (
    <main className="p-6 max-w-[1500px] mx-auto">
      {/* Header */}
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Pulse</h1>
        <p className="text-sm text-neutral-400">Replica Demo · /trade</p>
      </header>

      {/* 3-Column Token Table */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TokenColumn title="New Pairs" columnKey="new" />
        <TokenColumn title="Final Stretch" columnKey="final" />
        <TokenColumn title="Migrated" columnKey="migrated" />
      </section>
    </main>
  );
}
