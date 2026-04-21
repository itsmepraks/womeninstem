import { NextResponse } from 'next/server'
import { unstable_cache } from 'next/cache'
import { fetchBooks } from '@/lib/api/books'
import { feedTag } from '@/lib/api/feeds'

export const revalidate = 86400

const getBooks = unstable_cache(
  () => fetchBooks(),
  ['resources:books:v1'],
  { tags: [feedTag('books')], revalidate: 86400 }
)

export async function GET() {
  try {
    const data = await getBooks()
    if (data.data.length === 0 && data.sourcesSucceeded === 0) {
      return NextResponse.json({ ...data, error: 'All sources failed' }, { status: 503 })
    }
    return NextResponse.json(data)
  } catch (error) {
    console.error('[books route]', error)
    return NextResponse.json({ error: 'Failed to fetch books' }, { status: 500 })
  }
}
