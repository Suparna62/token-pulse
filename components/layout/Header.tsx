"use client";

import React from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function Header() {
  return (
    <header className="w-full bg-[#0b0e11] border-b border-[#15181b] sticky top-0 z-40">
      {/* TOP ROW */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-14 flex items-center justify-between">
          {/* LEFT: Logo + Nav */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer">
              <div
                aria-hidden
                className="w-7 h-7 rounded-sm bg-white flex items-center justify-center text-black font-bold"
              >
                ▲
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-white font-bold text-lg leading-none">AXIOM</span>
                <span className="text-neutral-400 text-sm leading-none">Pro</span>
              </div>
            </div>

            {/* Primary nav (hidden on small screens) */}
            <nav className="hidden lg:flex items-center gap-5 text-sm">
              {["Discover", "Pulse", "Trackers", "Perpetuals", "Yield", "Vision", "Portfolio"].map((item) => (
                <button
                  key={item}
                  className={`px-0 py-0 transition ${
                    item === "Pulse" ? "text-[#60a5fa] font-semibold" : "text-neutral-400 hover:text-white"
                  }`}
                  aria-current={item === "Pulse" ? "page" : undefined}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* RIGHT: Search, chain, deposit, icons */}
          <div className="flex items-center gap-3">
            {/* Search - hidden on very small screens */}
            <div className="relative hidden md:block w-[380px] max-w-[38ch]">
              <label htmlFor="site-search" className="sr-only">
                Search tokens
              </label>
              <input
                id="site-search"
                type="text"
                placeholder="Search by token or contract address..."
                className="w-full bg-[#0f1315] border border-[#1f2329] rounded-full px-10 py-2 text-sm text-neutral-300 placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-[#60a5fa]"
                aria-label="Search tokens"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-2.5 text-neutral-500" />
            </div>

            {/* Chain selector */}
            <button
              type="button"
              className="hidden sm:inline-flex items-center gap-2 bg-[#0f1315] border border-[#1f2329] text-neutral-300 px-3 py-1.5 rounded-md text-sm hover:border-neutral-600 transition"
              aria-haspopup="listbox"
            >
              <span className="font-medium text-xs">SOL</span>
              <span className="text-xs">▾</span>
            </button>

            {/* Deposit */}
            <button
              type="button"
              className="px-4 py-1.5 bg-[#4f46e5] text-white rounded-full text-sm font-semibold hover:brightness-105 transition"
            >
              Deposit
            </button>

            {/* Icon buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="w-9 h-9 bg-[#0f1315] border border-[#1f2329] rounded-md flex items-center justify-center text-neutral-400 hover:border-neutral-600 transition"
                aria-label="Shortcuts"
                title="Shortcuts"
              >
                ★
              </button>

              <button
                type="button"
                className="w-9 h-9 bg-[#0f1315] border border-[#1f2329] rounded-md flex items-center justify-center text-neutral-400 hover:border-neutral-600 transition"
                aria-label="Notifications"
                title="Notifications"
              >
                🔔
              </button>

              <button
                type="button"
                className="w-9 h-9 bg-[#0f1315] border border-[#1f2329] rounded-md flex items-center justify-center text-neutral-400 hover:border-neutral-600 transition"
                aria-label="Profile"
                title="Profile"
              >
                👤
              </button>
            </div>
          </div>
        </div>

        {/* SECOND ROW: Page context / title */}
        <div className="h-14 flex items-center gap-4 border-t border-[#15181b] mt-2">
          <h1 className="text-2xl font-semibold">Pulse</h1>
          <div className="flex items-center gap-2 text-neutral-400">
            <span className="text-sm">A live token discovery feed</span>
          </div>
        </div>
      </div>
    </header>
  );
}
