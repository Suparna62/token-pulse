'use client'
import { useEffect } from 'react'
import { useQueryClient } from '@tanstack/react-query'

export default function useWebsocket() {
  const qc = useQueryClient()
  useEffect(() => {
    const id = setInterval(() => {
      ['new','final','migrated'].forEach((col) => {
        qc.setQueryData(['tokens', col], (old: any) => {
          if (!old || !Array.isArray(old) || old.length === 0) return old
          const copy = [...old]
          const idx = Math.floor(Math.random() * copy.length)
          const item = { ...copy[idx] }
          const delta = (Math.random() - 0.5) * (item.price * 0.02 + 1)
          item.price = Math.max(0.01, Math.round((item.price + delta) * 100) / 100)
          copy[idx] = item
          return copy
        })
      })
    }, 1000)
    return () => clearInterval(id)
  }, [qc])
}
