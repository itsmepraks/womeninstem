import type { Resource } from '@/types/resource'

// 62-country centroid fallback map
export const COUNTRY_CENTROIDS: Record<string, { lat: number; lng: number }> = {
  'USA': { lat: 37.09, lng: -95.71 },
  'United States': { lat: 37.09, lng: -95.71 },
  'UK': { lat: 55.38, lng: -3.44 },
  'United Kingdom': { lat: 55.38, lng: -3.44 },
  'England': { lat: 52.36, lng: -1.17 },
  'Canada': { lat: 56.13, lng: -106.35 },
  'Australia': { lat: -25.27, lng: 133.78 },
  'Germany': { lat: 51.17, lng: 10.45 },
  'France': { lat: 46.23, lng: 2.21 },
  'India': { lat: 20.59, lng: 78.96 },
  'Japan': { lat: 36.20, lng: 138.25 },
  'China': { lat: 35.86, lng: 104.20 },
  'Brazil': { lat: -14.24, lng: -51.93 },
  'Mexico': { lat: 23.63, lng: -102.55 },
  'South Africa': { lat: -30.56, lng: 22.94 },
  'Nigeria': { lat: 9.08, lng: 8.68 },
  'Kenya': { lat: -0.02, lng: 37.91 },
  'Ghana': { lat: 7.95, lng: -1.02 },
  'Ethiopia': { lat: 9.14, lng: 40.49 },
  'Egypt': { lat: 26.82, lng: 30.80 },
  'Morocco': { lat: 31.79, lng: -7.09 },
  'Tanzania': { lat: -6.37, lng: 34.89 },
  'Uganda': { lat: 1.37, lng: 32.29 },
  'Rwanda': { lat: -1.94, lng: 29.87 },
  'Netherlands': { lat: 52.13, lng: 5.29 },
  'Sweden': { lat: 60.13, lng: 18.64 },
  'Norway': { lat: 60.47, lng: 8.47 },
  'Denmark': { lat: 56.26, lng: 9.50 },
  'Finland': { lat: 61.92, lng: 25.75 },
  'Switzerland': { lat: 46.82, lng: 8.23 },
  'Austria': { lat: 47.52, lng: 14.55 },
  'Belgium': { lat: 50.50, lng: 4.47 },
  'Spain': { lat: 40.46, lng: -3.75 },
  'Italy': { lat: 41.87, lng: 12.57 },
  'Portugal': { lat: 39.40, lng: -8.22 },
  'Poland': { lat: 51.92, lng: 19.15 },
  'Czech Republic': { lat: 49.82, lng: 15.47 },
  'Romania': { lat: 45.94, lng: 24.97 },
  'Greece': { lat: 39.07, lng: 21.82 },
  'Turkey': { lat: 38.96, lng: 35.24 },
  'Russia': { lat: 61.52, lng: 105.32 },
  'Ukraine': { lat: 48.38, lng: 31.17 },
  'Pakistan': { lat: 30.38, lng: 69.35 },
  'Bangladesh': { lat: 23.68, lng: 90.36 },
  'Sri Lanka': { lat: 7.87, lng: 80.77 },
  'Nepal': { lat: 28.39, lng: 84.12 },
  'Singapore': { lat: 1.35, lng: 103.82 },
  'Malaysia': { lat: 4.21, lng: 101.98 },
  'Indonesia': { lat: -0.79, lng: 113.92 },
  'Philippines': { lat: 12.88, lng: 121.77 },
  'Vietnam': { lat: 14.06, lng: 108.28 },
  'Thailand': { lat: 15.87, lng: 100.99 },
  'South Korea': { lat: 35.91, lng: 127.77 },
  'Taiwan': { lat: 23.70, lng: 121.00 },
  'Israel': { lat: 31.05, lng: 34.85 },
  'Saudi Arabia': { lat: 23.89, lng: 45.08 },
  'UAE': { lat: 23.42, lng: 53.85 },
  'Argentina': { lat: -38.42, lng: -63.62 },
  'Colombia': { lat: 4.57, lng: -74.30 },
  'Chile': { lat: -35.68, lng: -71.54 },
  'Peru': { lat: -9.19, lng: -75.02 },
  'New Zealand': { lat: -40.90, lng: 174.89 },
  'Ireland': { lat: 53.41, lng: -8.24 },
  'Global': { lat: 20.0, lng: 0.0 },
  'Online': { lat: 0.0, lng: 0.0 },
}

export interface GeocodingResult {
  lat: number
  lng: number
  displayName: string
}

const cache = new Map<string, GeocodingResult>()

function getCentroidFallback(location: string): { lat: number; lng: number } | null {
  // Try exact match
  if (COUNTRY_CENTROIDS[location]) return COUNTRY_CENTROIDS[location]
  // Try to find country name in the location string (e.g. "Berlin, Germany")
  for (const [country, coords] of Object.entries(COUNTRY_CENTROIDS)) {
    if (location.includes(country)) return coords
  }
  return null
}

// Internal geocoder with rate limiting
// Uses a shared state object that also holds a serial queue (promise chain)
// so concurrent callers are serialized and the maxPerRun cap is respected.
async function geocodeAddressInternal(
  address: string,
  callCountRef: { count: number; lastCallMs: number; queue: Promise<void> },
  maxPerRun: number
): Promise<{ lat: number; lng: number } | null> {
  // Reserve a slot before entering the queue
  if (callCountRef.count >= maxPerRun) return null
  callCountRef.count++

  // Serialize calls through the queue so rate limiting works under Promise.all
  let resolveSlot!: () => void
  const prevQueue = callCountRef.queue
  callCountRef.queue = new Promise<void>((res) => { resolveSlot = res })

  // Wait for the previous queued call to finish
  await prevQueue

  try {
    // Enforce 1100ms gap measured from END of previous fetch
    const elapsed = Date.now() - callCountRef.lastCallMs
    if (callCountRef.lastCallMs > 0 && elapsed < 1100) {
      await new Promise((r) => setTimeout(r, 1100 - elapsed))
    }

    try {
      const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`
      const res = await fetch(url, {
        headers: { 'User-Agent': 'stemspark/1.0' },
      })
      callCountRef.lastCallMs = Date.now()

      if (!res.ok) return null
      const data = await res.json()
      if (!Array.isArray(data) || data.length === 0) return null
      return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) }
    } catch (err) {
      callCountRef.lastCallMs = Date.now()
      console.warn(`[geocoding:nominatim] failed for "${address}":`, err instanceof Error ? err.message : String(err))
      return null
    }
  } finally {
    resolveSlot()
  }
}

/**
 * Geocodes an address string to lat/lng using Nominatim (OpenStreetMap).
 * Caches results in-memory to avoid repeated calls for the same address.
 * Returns null if the address cannot be geocoded.
 *
 * Rate limit: Nominatim requires max 1 req/sec. This function does NOT throttle —
 * callers should avoid bulk calls.
 *
 * User-Agent header must be set to "stemspark/1.0" per Nominatim usage policy.
 */
export async function geocodeAddress(
  address: string
): Promise<GeocodingResult | null> {
  // Check cache first
  if (cache.has(address)) {
    return cache.get(address)!
  }

  try {
    const encodedAddress = encodeURIComponent(address)
    const url = `https://nominatim.openstreetmap.org/search?q=${encodedAddress}&format=json&limit=1`

    const response = await fetch(url, {
      headers: { 'User-Agent': 'stemspark/1.0' }
    })

    const data = await response.json()

    if (!Array.isArray(data) || data.length === 0) {
      return null
    }

    const result = data[0]
    const geocodingResult: GeocodingResult = {
      lat: parseFloat(result.lat),
      lng: parseFloat(result.lon),
      displayName: result.display_name
    }

    cache.set(address, geocodingResult)
    return geocodingResult
  } catch (err) {
    console.warn(`[geocoding] failed for "${address}":`, err instanceof Error ? err.message : String(err))
    return null
  }
}

/**
 * Clears the in-memory geocoding cache. Useful for testing.
 */
export function clearGeocodingCache(): void {
  cache.clear()
}

// Batch geocoder for pipeline use
export async function geocodeAll(resources: Resource[], maxPerRun = 15): Promise<Resource[]> {
  const callCountRef = { count: 0, lastCallMs: 0, queue: Promise.resolve() }

  return Promise.all(
    resources.map(async (resource) => {
      // Skip if already geocoded
      if (resource.lat !== 0 || resource.lng !== 0) return resource

      // Try Nominatim (rate-limited)
      const coords = await geocodeAddressInternal(resource.location, callCountRef, maxPerRun)
      if (coords) {
        return { ...resource, lat: coords.lat, lng: coords.lng }
      }

      // Fallback: country centroid
      const centroid = getCentroidFallback(resource.location)
      if (centroid) {
        return { ...resource, lat: centroid.lat, lng: centroid.lng }
      }

      return resource
    })
  )
}
