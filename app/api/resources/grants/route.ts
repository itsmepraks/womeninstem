import { NextResponse } from 'next/server'
import { fetchGrants } from '@/lib/api/grants'

export const revalidate = 21600

export async function GET() {
  try {
    const data = await fetchGrants()
    return NextResponse.json(data)
  } catch (error) {
    console.error('[grants route]', error)
    return NextResponse.json({ error: 'Failed to fetch grants' }, { status: 500 })
  }
}
