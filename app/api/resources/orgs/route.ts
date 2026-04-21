import { fetchOrgs } from '@/lib/api/orgs'
import { createFeedRoute } from '@/lib/api/createFeedRoute'

export const revalidate = 86400

export const { GET } = createFeedRoute('orgs', fetchOrgs, revalidate)
