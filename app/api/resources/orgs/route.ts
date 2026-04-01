import { NextResponse } from 'next/server'
import { fetchOrgs } from '@/lib/api/orgs'

export const revalidate = 86400

export async function GET() {
  try {
    const data = await fetchOrgs()
    return NextResponse.json(data)
  } catch (error) {
    console.error('[orgs route]', error)
    return NextResponse.json({ error: 'Failed to fetch orgs' }, { status: 500 })
  }
}
