import { fetchEvents } from '@/lib/api/events'

jest.mock('@/lib/api/pipeline', () => ({
  aggregateSources: jest.fn().mockResolvedValue({
    data: [{
      id: '1', name: 'Grace Hopper Celebration', category: 'events',
      lat: 37.77, lng: -122.42, location: 'San Francisco, USA',
      url: 'https://ghc.anitab.org', date: '2026-10-01',
      sourceName: 'GHC',
    }],
    sourceNames: ['fetchGHC'],
    sourcesAttempted: 18,
    sourcesSucceeded: 12,
  }),
  deduplicateResources: jest.fn((r) => r),
}))

jest.mock('@/lib/geocoding', () => ({ geocodeAll: jest.fn((r) => Promise.resolve(r)) }))
jest.mock('@/lib/api/filterExpired', () => ({ filterExpired: jest.fn((r) => r) }))

describe('fetchEvents', () => {
  test('returns ResourcesResponse shape', async () => {
    const result = await fetchEvents()
    expect(result.category).toBe('events')
    expect(result.revalidateSeconds).toBe(300)
    expect(Array.isArray(result.data)).toBe(true)
  })
})
