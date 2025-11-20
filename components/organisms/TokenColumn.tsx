"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import TokenCard from "../molecules/TokenCard";
import {
  FixedSizeList as List,
  ListChildComponentProps,
} from "react-window";

type Props = {
  title: string;
  columnKey: "new" | "final" | "migrated";
};

export default function TokenColumn({ title, columnKey }: Props) {
  const { data = [], isLoading, isError } = useQuery({
    queryKey: ["tokens", columnKey],
    queryFn: async () => {
      const res = await axios.get("/api/tokens");
      return res.data
        .map((t: any, i: number) => ({
          ...t,
          col: i % 3 === 0 ? "new" : i % 3 === 1 ? "final" : "migrated",
        }))
        .filter((item: any) => item.col === columnKey);
    },
    staleTime: 5000,
  });

  const Row = ({ index, style }: ListChildComponentProps) => (
    <div style={style}>
      <TokenCard token={data[index]} />
    </div>
  );

  return (
    <div className="bg-[#0d1117] border border-[#1b1f24] rounded-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-white">{title}</h2>
        <span className="text-xs text-neutral-400">⚡ Live Feed</span>
      </div>

      {isLoading ? (
        <p className="text-neutral-400 text-center">Loading…</p>
      ) : isError ? (
        <p className="text-red-400 text-center">Error loading data</p>
      ) : (
        <List
          height={750}
          itemCount={data.length}
          itemSize={150}
          width={"100%"}
        >
          {Row}
        </List>
      )}
    </div>
  );
}
