import { fetchWithTimeout, buildResponse } from '@/lib/api/helpers'
import { aggregateSources, deduplicateResources } from '@/lib/api/pipeline'
import type { Resource, ResourcesResponse } from '@/types/resource'
import { randomUUID } from 'crypto'

const WIKIDATA_HEADERS = {
  'User-Agent': 'stemspark/1.0',
  Accept: 'application/sparql-results+json',
}

async function fetchWikidataPioneers(): Promise<Resource[]> {
  const sparql = `
SELECT ?person ?personLabel ?birthYear ?deathYear ?fieldLabel ?article ?description WHERE {
  ?person wdt:P21 wd:Q6581072 .
  ?person wdt:P106 ?occupation .
  VALUES ?occupation { wd:Q901 wd:Q593644 wd:Q82594 wd:Q170790 wd:Q169470 wd:Q81096 }
  ?person wdt:P569 ?birth .
  BIND(YEAR(?birth) AS ?birthYear)
  OPTIONAL { ?person wdt:P570 ?death . BIND(YEAR(?death) AS ?deathYear) }
  OPTIONAL { ?person wdt:P101 ?field . }
  OPTIONAL { ?person schema:description ?description . FILTER(LANG(?description) = "en") }
  ?article schema:about ?person ; schema:isPartOf <https://en.wikipedia.org/> .
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en" . }
}
LIMIT 100`

  const url = `https://query.wikidata.org/sparql?query=${encodeURIComponent(sparql)}&format=json`
  const res = await fetchWithTimeout(url, { headers: WIKIDATA_HEADERS }, 15000)
  const json = await res.json()

  const bindings: Array<Record<string, { value: string }>> = json.results?.bindings ?? []

  return bindings
    .filter((b) => b.personLabel?.value && b.article?.value)
    .map((b) => {
      const birthYear = b.birthYear?.value ?? ''
      const deathYear = b.deathYear?.value
      const fieldLabel = b.fieldLabel?.value ?? ''
      const description = b.description?.value ?? ''

      const displayDescription = description
        ? description.slice(0, 200)
        : fieldLabel
          ? fieldLabel
          : 'Notable woman in STEM'

      return {
        id: randomUUID(),
        name: b.personLabel!.value,
        category: 'mentors' as const,
        lat: 0,
        lng: 0,
        location: '',
        url: b.article!.value,
        description: displayDescription,
        field: fieldLabel,
        date: birthYear,
        tags: [
          'pioneer',
          'wikidata',
          ...(deathYear ? [`${birthYear}–${deathYear}`] : []),
        ],
        sourceName: 'Wikidata',
      }
    })
}

export async function fetchPioneers(): Promise<ResourcesResponse> {
  const agg = await aggregateSources([fetchWikidataPioneers])
  const deduped = deduplicateResources(agg.data)
  return buildResponse(deduped, 'mentors', {
    revalidateSeconds: 86400,
    sources: agg.sourceNames,
    sourcesAttempted: agg.sourcesAttempted,
    sourcesSucceeded: agg.sourcesSucceeded,
  })
}
