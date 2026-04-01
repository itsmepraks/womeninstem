import { fetchOrgs } from '@/lib/api/orgs'

jest.mock('@/lib/api/pipeline', () => ({
  aggregateSources: jest.fn().mockResolvedValue({
    data: [{
      id: '1', name: 'Society of Women Engineers', category: 'orgs',
      lat: 41.88, lng: -87.63, location: 'Chicago, USA',
      url: 'https://swe.org', sourceName: 'Wikipedia',
    }],
    sourceNames: ['fetchWikipediaWomenSTEM'],
    sourcesAttempted: 5,
    sourcesSucceeded: 3,
  }),
  deduplicateResources: jest.fn((r) => r),
}))

jest.mock('@/lib/geocoding', () => ({ geocodeAll: jest.fn((r) => Promise.resolve(r)) }))
jest.mock('@/lib/api/filterExpired', () => ({ filterExpired: jest.fn((r) => r) }))

describe('fetchOrgs', () => {
  test('returns ResourcesResponse shape', async () => {
    const result = await fetchOrgs()
    expect(result.category).toBe('orgs')
    expect(result.revalidateSeconds).toBe(21600)
    expect(Array.isArray(result.data)).toBe(true)
  })
})
