import { fetchHackathons } from '@/lib/api/hackathons'

jest.mock('@/lib/api/pipeline', () => ({
  aggregateSources: jest.fn().mockResolvedValue({
    data: [{
      id: '1', name: 'Global Hackathon', category: 'hackathons',
      lat: 37.77, lng: -122.42, location: 'Online',
      url: 'https://devpost.com/hackathons/1', date: '2026-05-01',
      sourceName: 'Devpost',
    }],
    sourceNames: ['fetchDevpost'],
    sourcesAttempted: 5,
    sourcesSucceeded: 3,
  }),
  deduplicateResources: jest.fn((r) => r),
}))

jest.mock('@/lib/geocoding', () => ({ geocodeAll: jest.fn((r) => Promise.resolve(r)) }))
jest.mock('@/lib/api/filterExpired', () => ({ filterExpired: jest.fn((r) => r) }))

describe('fetchHackathons', () => {
  test('returns ResourcesResponse shape', async () => {
    const result = await fetchHackathons()
    expect(result.category).toBe('hackathons')
    expect(result.revalidateSeconds).toBe(300)
    expect(Array.isArray(result.data)).toBe(true)
  })
})
