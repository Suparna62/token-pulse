'use client'
import { useEffect, useRef, useState } from 'react'

export function usePriceAnimation(id: string, price: number) {
  const prevRef = useRef<number | null>(null)
  const [flashClass, setFlashClass] = useState<string>('')

  useEffect(() => {
    const prev = prevRef.current
    if (prev === null) {
      prevRef.current = price
      return
    }
    if (price > prev) setFlashClass('token-card-flash-up')
    else if (price < prev) setFlashClass('token-card-flash-down')
    prevRef.current = price
    const t = setTimeout(() => setFlashClass(''), 600)
    return () => clearTimeout(t)
  }, [price, id])

  return { flashClass }
}
