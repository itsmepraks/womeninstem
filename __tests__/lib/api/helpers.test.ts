import { buildResponse, fetchWithTimeout } from '@/lib/api/helpers'
import type { Resource } from '@/types/resource'

// Mock global fetch
global.fetch = jest.fn()

describe('API Helpers', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('buildResponse', () => {
    test('buildResponse returns correct shape', () => {
      const result = buildResponse([], 'events')
      expect(result.data).toEqual([])
      expect(result.category).toBe('events')
      expect(new Date(result.updatedAt).toISOString()).toBe(result.updatedAt)
    })

    test('buildResponse includes data items', () => {
      const testResource: Resource = {
        id: '1',
        name: 'Test',
        category: 'events',
        lat: 0,
        lng: 0,
        location: 'NYC',
        url: 'https://example.com',
      }
      const result = buildResponse([testResource], 'events')
      expect(result.data).toHaveLength(1)
      expect(result.data[0]).toEqual(testResource)
    })
  })

  describe('fetchWithTimeout', () => {
    test('fetchWithTimeout resolves with response on success', async () => {
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        status: 200,
      })

      const result = await fetchWithTimeout('https://example.com')
      expect(result.status).toBe(200)
    })

    test('fetchWithTimeout rejects with timeout error', async () => {
      jest.useFakeTimers()
      ;(global.fetch as jest.Mock).mockImplementationOnce(
        (_url: string, options: RequestInit = {}) => {
          return new Promise((_, reject) => {
            if (options.signal) {
              options.signal.addEventListener('abort', () => {
                reject(new DOMException('The operation was aborted', 'AbortError'))
              })
            }
          })
        }
      )

      const promise = fetchWithTimeout('https://example.com', {}, 50)
      jest.advanceTimersByTime(100)

      await expect(promise).rejects.toThrow('Request timed out')

      jest.useRealTimers()
    })
  })
})
