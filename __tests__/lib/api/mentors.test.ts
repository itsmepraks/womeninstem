import { fetchMentors } from '@/lib/api/mentors'

jest.mock('@/lib/api/pipeline', () => ({
  aggregateSources: jest.fn().mockResolvedValue({
    data: [{
      id: '1', name: 'Jane Doe', category: 'mentors',
      lat: 37.77, lng: -122.42, location: 'San Francisco, USA',
      url: 'https://github.com/janedoe', bio: 'mentor for women in STEM',
      sourceName: 'GitHub',
    }],
    sourceNames: ['fetchGitHubMentors1'],
    sourcesAttempted: 7,
    sourcesSucceeded: 4,
  }),
  deduplicateResources: jest.fn((r) => r),
}))

jest.mock('@/lib/geocoding', () => ({ geocodeAll: jest.fn((r) => Promise.resolve(r)) }))
jest.mock('@/lib/api/filterExpired', () => ({ filterExpired: jest.fn((r) => r) }))

describe('fetchMentors', () => {
  test('returns ResourcesResponse shape', async () => {
    const result = await fetchMentors()
    expect(result.category).toBe('mentors')
    expect(result.revalidateSeconds).toBe(21600)
    expect(Array.isArray(result.data)).toBe(true)
  })
})
