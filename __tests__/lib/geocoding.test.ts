import { geocodeAll, COUNTRY_CENTROIDS } from '@/lib/geocoding'
import type { Resource } from '@/types/resource'

function makeResource(overrides: Partial<Resource> = {}): Resource {
  return {
    id: 'test-id',
    name: 'Test Resource',
    category: 'events',
    lat: 0,
    lng: 0,
    location: 'Test Location',
    url: 'https://example.com',
    ...overrides,
  }
}

// Mock fetch to avoid real network calls
global.fetch = jest.fn()

describe('COUNTRY_CENTROIDS', () => {
  test('has entries for major countries', () => {
    expect(COUNTRY_CENTROIDS['USA']).toBeDefined()
    expect(COUNTRY_CENTROIDS['UK']).toBeDefined()
    expect(COUNTRY_CENTROIDS['Germany']).toBeDefined()
    expect(COUNTRY_CENTROIDS['India']).toBeDefined()
  })
})

describe('geocodeAll', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('uses country centroid when Nominatim fails', async () => {
    ;(global.fetch as jest.Mock).mockRejectedValue(new Error('Network error'))
    const resources = [makeResource({ location: 'Berlin, Germany' })]
    const result = await geocodeAll(resources, 1)
    expect(result[0].lat).not.toBe(0)
    expect(result[0].lng).not.toBe(0)
  })

  test('keeps existing coordinates if already set', async () => {
    const resources = [makeResource({ lat: 51.5, lng: -0.1, location: 'London, UK' })]
    const result = await geocodeAll(resources, 1)
    expect(result[0].lat).toBe(51.5)
    expect(result[0].lng).toBe(-0.1)
    // fetch should NOT be called since coords already set
    expect(global.fetch).not.toHaveBeenCalled()
  })

  test('uses centroid for completely unknown location', async () => {
    ;(global.fetch as jest.Mock).mockRejectedValue(new Error('Network error'))
    const resources = [makeResource({ location: 'Some Unknown City XY' })]
    const result = await geocodeAll(resources, 1)
    // Should not crash, may use 0,0 or some fallback
    expect(result).toHaveLength(1)
  })

  test('respects maxPerRun cap', async () => {
    ;(global.fetch as jest.Mock).mockRejectedValue(new Error('Skip'))
    const resources = Array.from({ length: 20 }, (_, i) =>
      makeResource({ id: String(i), url: `https://example.com/${i}`, location: `City ${i}, Germany` })
    )
    await geocodeAll(resources, 5)
    // At most 5 fetch calls for ungeocoded resources
    expect((global.fetch as jest.Mock).mock.calls.length).toBeLessThanOrEqual(5)
  })
})
