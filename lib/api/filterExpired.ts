import type { Resource } from '@/types/resource'

/**
 * Filters out resources whose date has already passed.
 * Resources with no date are kept (e.g. orgs, mentors).
 */
export function filterExpired(resources: Resource[]): Resource[] {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return resources.filter((r) => {
    if (!r.date) return true
    const d = new Date(r.date)
    return !isNaN(d.getTime()) && d >= today
  })
}
