import type { NextApiRequest, NextApiResponse } from 'next'

const MOCK = Array.from({ length: 30 }).map((_, i) => {
  const base = 100 + i * 5
  return {
    id: 't' + (i+1),
    name: ['ZIGGY','KUMMA','OTC','art','MAYE','TSOL','ATHR','DOGE','SMURFCAT','divine'][i % 10] + ' ' + (i+1),
    symbol: ['ZIG','KUM','OT','ART','MAY','TSOL','AETH','DOGE','SMF','DIV'][i % 10],
    price: Math.round((base + Math.random()*1000) * 100) / 100,
    mc: Math.round((base*100) + Math.random()*10000),
    age: `${(i%60)}s`,
    img: '/placeholder.png',
    f: Math.floor(Math.random()*500),
    v: Math.floor(Math.random()*10000)
  }
})

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const tokens = Array.from({ length: 50 }).map((_, i) => ({
    id: String(i),
    name: `Token ${i}`,
    symbol: `TOK${i}`,
    price: +(Math.random() * 10 + 1).toFixed(4),
    change24h: +(Math.random() * 20 - 10).toFixed(2),
    volume: Math.floor(Math.random() * 100000),
    liquidity: Math.floor(Math.random() * 80000),
    buys: Math.floor(Math.random() * 20),
    sells: Math.floor(Math.random() * 8),
    img: "/placeholder.png"
  }));
  res.status(200).json(MOCK)
}
