import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const now = Date.now()
  const candles = Array.from({ length: 120 }).map((_, i) => {
    const t = now - (119 - i) * 60 * 1000
    const o = 100 + Math.random() * 10
    const c = o + (Math.random() - 0.5) * 2
    const h = Math.max(o, c) + Math.random() * 1.5
    const l = Math.min(o, c) - Math.random() * 1.5
    return { t, o, h, l, c, v: Math.random() * 10 }
  })

  res.status(200).json({ id, candles })
}
