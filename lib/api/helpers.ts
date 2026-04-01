import type { Resource, ResourceCategory, ResourcesResponse } from '@/types/resource'

interface BuildResponseMeta {
  revalidateSeconds?: number
  sources?: string[]
  sourcesAttempted?: number
  sourcesSucceeded?: number
}

/**
 * Builds a standard ResourcesResponse envelope.
 * updatedAt is an ISO 8601 timestamp string.
 * Optionally accepts pipeline meta (revalidateSeconds, sources, counts).
 */
export function buildResponse(
  data: Resource[],
  category: ResourceCategory,
  meta?: BuildResponseMeta
): ResourcesResponse {
  return {
    data,
    category,
    updatedAt: new Date().toISOString(),
    revalidateSeconds: meta?.revalidateSeconds,
    sources: meta?.sources ?? [],
    sourcesAttempted: meta?.sourcesAttempted ?? 0,
    sourcesSucceeded: meta?.sourcesSucceeded ?? 0,
  }
}

/**
 * Wraps a fetch call with a timeout.
 * Rejects with Error('Request timed out') if fetch takes longer than timeoutMs.
 * Default timeout: 8000ms.
 */
export async function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeoutMs = 8000
): Promise<Response> {
  const controller = new AbortController()
  const signal = controller.signal

  const timeoutId = setTimeout(() => {
    controller.abort()
  }, timeoutMs)

  try {
    const response = await fetch(url, {
      ...options,
      signal,
    })
    clearTimeout(timeoutId)
    return response
  } catch (error) {
    clearTimeout(timeoutId)
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('Request timed out')
    }
    throw error
  }
}
