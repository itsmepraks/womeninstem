import { fetchGrants } from '@/lib/api/grants'

jest.mock('@/lib/api/pipeline', () => ({
  aggregateSources: jest.fn().mockResolvedValue({
    data: [{
      id: '1', name: 'NSF Fellowship', category: 'grants',
      lat: 38.9, lng: -77.0, location: 'Washington DC, USA',
      url: 'https://api.nsf.gov/award/1', date: '2026-10-16',
      sourceName: 'NSF',
    }],
    sourceNames: ['fetchNSF'],
    sourcesAttempted: 16,
    sourcesSucceeded: 9,
  }),
  deduplicateResources: jest.fn((r) => r),
}))

jest.mock('@/lib/geocoding', () => ({ geocodeAll: jest.fn((r) => Promise.resolve(r)) }))
jest.mock('@/lib/api/filterExpired', () => ({ filterExpired: jest.fn((r) => r) }))

describe('fetchGrants', () => {
  test('returns ResourcesResponse shape', async () => {
    const result = await fetchGrants()
    expect(result.category).toBe('grants')
    expect(result.revalidateSeconds).toBe(1800)
    expect(Array.isArray(result.data)).toBe(true)
  })
})
