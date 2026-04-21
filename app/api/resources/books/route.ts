import { fetchBooks } from '@/lib/api/books'
import { createFeedRoute } from '@/lib/api/createFeedRoute'

export const revalidate = 86400

export const { GET } = createFeedRoute('books', fetchBooks, revalidate)
