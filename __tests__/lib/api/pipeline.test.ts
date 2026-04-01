import { aggregateSources, fingerprintUrl, deduplicateResources } from '@/lib/api/pipeline'
import type { Resource } from '@/types/resource'

function makeResource(overrides: Partial<Resource> = {}): Resource {
  return {
    id: 'test-id',
    name: 'Test Resource',
    category: 'events',
    lat: 0,
    lng: 0,
    location: 'Test Location',
    url: 'https://example.com/event',
    ...overrides,
  }
}

describe('fingerprintUrl', () => {
  test('strips www', () => {
    const { fingerprintUrl } = require('@/lib/api/pipeline')
    expect(fingerprintUrl('https://www.example.com/path')).toBe('example.com/path')
  })

  test('strips trailing slash', () => {
    expect(fingerprintUrl('https://example.com/path/')).toBe('example.com/path')
  })

  test('strips utm tracking params', () => {
    expect(fingerprintUrl('https://example.com/path?utm_source=test')).toBe('example.com/path')
  })
})

describe('deduplicateResources', () => {
  test('removes duplicate URLs', () => {
    const resources = [
      makeResource({ id: '1', url: 'https://example.com/event' }),
      makeResource({ id: '2', url: 'https://www.example.com/event/' }),
    ]
    const result = deduplicateResources(resources)
    expect(result).toHaveLength(1)
  })

  test('keeps unique URLs', () => {
    const resources = [
      makeResource({ id: '1', url: 'https://example.com/event1' }),
      makeResource({ id: '2', url: 'https://example.com/event2' }),
    ]
    const result = deduplicateResources(resources)
    expect(result).toHaveLength(2)
  })
})

describe('aggregateSources', () => {
  test('returns combined data from all sources', async () => {
    const fetchers = [
      async () => [makeResource({ id: '1', url: 'https://a.com' })],
      async () => [makeResource({ id: '2', url: 'https://b.com' })],
    ]
    const result = await aggregateSources(fetchers)
    expect(result.data).toHaveLength(2)
    expect(result.sourcesAttempted).toBe(2)
    expect(result.sourcesSucceeded).toBe(2)
  })

  test('handles partial failures gracefully', async () => {
    const fetchers = [
      async () => [makeResource({ id: '1', url: 'https://a.com' })],
      async () => { throw new Error('Source down') },
    ]
    const result = await aggregateSources(fetchers)
    expect(result.data).toHaveLength(1)
    expect(result.sourcesAttempted).toBe(2)
    expect(result.sourcesSucceeded).toBe(1)
  })

  test('includes source names', async () => {
    const fetcher1 = async () => [makeResource({ id: '1', url: 'https://a.com' })]
    Object.defineProperty(fetcher1, 'name', { value: 'fetchSourceA' })
    const result = await aggregateSources([fetcher1])
    expect(result.sourceNames).toContain('fetchSourceA')
  })
})
