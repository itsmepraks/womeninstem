import { NextResponse } from 'next/server'
import { fetchPioneers } from '@/lib/api/pioneers'

export const revalidate = 86400 // 24 hours — pioneers don't change often

export async function GET() {
  try {
    const data = await fetchPioneers()
    return NextResponse.json(data)
  } catch (error) {
    console.error('[pioneers route]', error)
    return NextResponse.json({ error: 'Failed to fetch pioneers' }, { status: 500 })
  }
}
