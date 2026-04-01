// __tests__/types/resource.test.ts
import { isResource, CATEGORY_COLORS } from '@/types/resource'

test('isResource returns true for valid resource', () => {
  const r = { id: '1', name: 'Test', category: 'events' as const, lat: 0, lng: 0, location: 'NYC', url: 'https://example.com' }
  expect(isResource(r)).toBe(true)
})

test('isResource returns false for missing required field', () => {
  expect(isResource({ name: 'Test' })).toBe(false)
})

test('isResource returns false for invalid category', () => {
  expect(isResource({
    id: '1', name: 'Test', category: 'fake_category',
    lat: 0, lng: 0, location: 'NYC', url: 'https://example.com'
  })).toBe(false)
})

test('CATEGORY_COLORS has entry for every category', () => {
  const categories = ['events', 'orgs', 'jobs', 'mentors', 'grants', 'hackathons'] as const
  categories.forEach(c => expect(CATEGORY_COLORS[c]).toBeDefined())
})
