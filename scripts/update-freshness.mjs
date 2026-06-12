#!/usr/bin/env node

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const root = process.cwd();
const outputPath = join(root, 'data/generated/freshness.json');
const checkedAt = new Date().toISOString();
const concurrency = Number(process.env.FRESHNESS_CONCURRENCY ?? 8);

const sources = [
  { file: 'data/resources.ts', exportName: 'scholarships', category: 'scholarship' },
  { file: 'data/resources.ts', exportName: 'organizations', category: 'organization' },
  { file: 'data/resources.ts', exportName: 'programs', category: 'program' },
  { file: 'data/resources.ts', exportName: 'conferences', category: 'conference' },
  { file: 'data/resources.ts', exportName: 'mentorshipPlatforms', category: 'mentorship' },
  { file: 'data/resources.ts', exportName: 'jobBoards', category: 'job-board' },
  { file: 'data/courses.ts', exportName: 'courses', category: 'course' },
  { file: 'data/communities.ts', exportName: 'communities', category: 'community' },
];

const previous = readPreviousFreshness(outputPath);
const resources = dedupeById(collectResources());
console.log(`Checking ${resources.length} resources with concurrency ${concurrency}...`);

const records = await mapWithConcurrency(resources, concurrency, async (resource) => {
  const prior = previous.get(resource.id);
  const result = await checkUrl(resource.url);
  const healthy = result.status === 'active' || result.status === 'redirected';

  return {
    id: resource.id,
    label: resource.label,
    category: resource.category,
    url: resource.url,
    status: result.status,
    statusCode: result.statusCode,
    checkedAt,
    lastActiveAt: healthy ? checkedAt : prior?.lastActiveAt,
    finalUrl: result.finalUrl,
    consecutiveFailures: healthy ? 0 : (prior?.consecutiveFailures ?? 0) + 1,
    message: result.message,
  };
});

records.sort((a, b) => a.id.localeCompare(b.id));
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, `${JSON.stringify(records, null, 2)}\n`);
console.log(`Wrote ${records.length} freshness records to ${outputPath}`);

function readPreviousFreshness(path) {
  if (!existsSync(path)) return new Map();

  try {
    const parsed = JSON.parse(readFileSync(path, 'utf8'));
    if (!Array.isArray(parsed)) return new Map();
    return new Map(parsed.map((record) => [record.id, record]));
  } catch {
    return new Map();
  }
}

function collectResources() {
  const resources = [];

  for (const source of sources) {
    const text = readFileSync(join(root, source.file), 'utf8');
    const arrayBody = extractExportedArray(text, source.exportName);
    if (!arrayBody) continue;

    for (const objectText of extractObjectBlocks(arrayBody)) {
      const url = readStringProperty(objectText, 'url');
      if (!url) continue;

      const label =
        readStringProperty(objectText, 'name') ??
        readStringProperty(objectText, 'title') ??
        readStringProperty(objectText, 'description') ??
        url;
      const rawId = readStringProperty(objectText, 'id') ?? slugify(label);

      resources.push({
        id: `${source.category}:${rawId}`,
        label,
        category: source.category,
        url,
      });
    }
  }

  return resources;
}

function extractExportedArray(text, exportName) {
  const marker = `export const ${exportName}`;
  const markerIndex = text.indexOf(marker);
  if (markerIndex === -1) return null;

  const assignmentIndex = text.indexOf('=', markerIndex);
  if (assignmentIndex === -1) return null;

  const arrayStart = text.indexOf('[', assignmentIndex);
  if (arrayStart === -1) return null;

  let depth = 0;
  let quote = null;
  let escaped = false;

  for (let i = arrayStart; i < text.length; i += 1) {
    const char = text[i];

    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }
      continue;
    }

    if (char === '"' || char === "'" || char === '`') {
      quote = char;
      continue;
    }

    if (char === '[') depth += 1;
    if (char === ']') depth -= 1;

    if (depth === 0) {
      return text.slice(arrayStart + 1, i);
    }
  }

  return null;
}

function extractObjectBlocks(text) {
  const blocks = [];
  let start = -1;
  let depth = 0;
  let quote = null;
  let escaped = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];

    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }
      continue;
    }

    if (char === '"' || char === "'" || char === '`') {
      quote = char;
      continue;
    }

    if (char === '{') {
      if (depth === 0) start = i;
      depth += 1;
    } else if (char === '}') {
      depth -= 1;
      if (depth === 0 && start !== -1) {
        blocks.push(text.slice(start, i + 1));
        start = -1;
      }
    }
  }

  return blocks;
}

function readStringProperty(objectText, property) {
  const pattern = new RegExp(`${property}:\\s*(['"\`])([\\s\\S]*?)\\1`);
  const match = objectText.match(pattern);
  return match?.[2]?.replace(/\\'/g, "'").replace(/\\"/g, '"').trim();
}

function dedupeById(resources) {
  const map = new Map();
  for (const resource of resources) {
    map.set(resource.id, resource);
  }
  return [...map.values()];
}

async function mapWithConcurrency(items, limit, mapper) {
  const results = new Array(items.length);
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      results[currentIndex] = await mapper(items[currentIndex], currentIndex);
    }
  }

  const workerCount = Math.min(Math.max(1, limit), items.length);
  await Promise.all(Array.from({ length: workerCount }, () => worker()));
  return results;
}

async function checkUrl(url) {
  const head = await request(url, 'HEAD');
  if (head.status !== 'error' && head.statusCode !== 403 && head.statusCode !== 405) {
    return head;
  }
  return request(url, 'GET');
}

async function request(url, method) {
  try {
    const response = await fetch(url, {
      method,
      redirect: 'follow',
      signal: AbortSignal.timeout(12_000),
      headers: {
        'User-Agent': 'stemspark-freshness-checker/1.0 (+https://wis.praks.me)',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
    });

    const finalUrl = response.url || url;
    if (response.ok) {
      return {
        status: finalUrl === url ? 'active' : 'redirected',
        statusCode: response.status,
        finalUrl,
        message: finalUrl === url ? undefined : `Redirected to ${finalUrl}`,
      };
    }

    return {
      status: response.status >= 500 ? 'error' : 'stale',
      statusCode: response.status,
      finalUrl,
      message: `${method} returned ${response.status}`,
    };
  } catch (error) {
    return {
      status: 'error',
      message: error instanceof Error ? error.message : String(error),
    };
  }
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
