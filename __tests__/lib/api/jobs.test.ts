import { fetchJobs } from '@/lib/api/jobs'

jest.mock('@/lib/api/pipeline', () => ({
  aggregateSources: jest.fn().mockResolvedValue({
    data: [{
      id: '1', name: 'Software Engineer', category: 'jobs',
      lat: 37.77, lng: -122.42, location: 'San Francisco, USA',
      url: 'https://arbeitnow.com/jobs/1', date: '2026-04-01',
      sourceName: 'Arbeitnow',
    }],
    sourceNames: ['fetchArbeitnow'],
    sourcesAttempted: 5,
    sourcesSucceeded: 4,
  }),
  deduplicateResources: jest.fn((r) => r),
}))

jest.mock('@/lib/geocoding', () => ({ geocodeAll: jest.fn((r) => Promise.resolve(r)) }))
jest.mock('@/lib/api/filterExpired', () => ({ filterExpired: jest.fn((r) => r) }))

describe('fetchJobs', () => {
  test('returns ResourcesResponse shape', async () => {
    const result = await fetchJobs()
    expect(result.category).toBe('jobs')
    expect(result.revalidateSeconds).toBe(300)
    expect(Array.isArray(result.data)).toBe(true)
  })
})
