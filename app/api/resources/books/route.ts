import { NextResponse } from 'next/server'
import { fetchBooks } from '@/lib/api/books'

export const revalidate = 86400

export async function GET() {
  try {
    const data = await fetchBooks()
    if (data.data.length === 0 && data.sourcesSucceeded === 0) {
      return NextResponse.json(
        { ...data, error: 'All sources failed' },
        { status: 503 }
      )
    }
    return NextResponse.json(data)
  } catch (error) {
    console.error('[books route]', error)
    return NextResponse.json({ error: 'Failed to fetch books' }, { status: 500 })
  }
}
