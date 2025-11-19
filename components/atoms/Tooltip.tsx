'use client'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import React from 'react'

export default function Tooltip({ children, content }: { children: React.ReactNode; content: string }) {
  return (
    <TooltipPrimitive.Provider delayDuration={75}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content side="top" align="center" className="px-2 py-1 rounded bg-neutral-900 text-white text-xs">
          {content}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
