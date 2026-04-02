import { NextResponse } from 'next/server'
import { fetchBooks } from '@/lib/api/books'

export const revalidate = 86400

export async function GET() {
  try {
    const data = await fetchBooks()
    return NextResponse.json(data)
  } catch (error) {
    console.error('[books route]', error)
    return NextResponse.json({ error: 'Failed to fetch books' }, { status: 500 })
  }
}
