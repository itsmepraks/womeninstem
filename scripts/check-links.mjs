#!/usr/bin/env node

// Checks all external URLs in data files for broken links.
// Run: node scripts/check-links.mjs

import { readFileSync } from 'fs';
import { join } from 'path';

const files = [
  'data/resources.ts',
  'data/pioneers.ts',
  'data/communities.ts',
  'data/courses.ts',
];

const urlRegex = /https?:\/\/[^\s'"`,)]+/g;
const urls = new Set();

for (const file of files) {
  const content = readFileSync(join(process.cwd(), file), 'utf-8');
  const matches = content.match(urlRegex) || [];
  for (const url of matches) {
    // Clean trailing punctuation
    const cleaned = url.replace(/[.,;:)}\]]+$/, '');
    urls.add(cleaned);
  }
}

console.log(`Checking ${urls.size} URLs...\n`);

let broken = 0;
let ok = 0;
let slow = 0;

for (const url of urls) {
  try {
    const start = Date.now();
    const res = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      signal: AbortSignal.timeout(10000),
      headers: { 'User-Agent': 'stemspark-link-checker/1.0' },
    });
    const elapsed = Date.now() - start;

    if (res.ok) {
      ok++;
      if (elapsed > 5000) {
        slow++;
        console.log(`SLOW (${elapsed}ms): ${url}`);
      }
    } else {
      broken++;
      console.log(`BROKEN ${res.status}: ${url}`);
    }
  } catch (err) {
    broken++;
    console.log(`FAILED: ${url} (${err.message})`);
  }
}

console.log(`\n--- Results ---`);
console.log(`OK: ${ok}`);
console.log(`Slow: ${slow}`);
console.log(`Broken: ${broken}`);
console.log(`Total: ${urls.size}`);

if (broken > 0) process.exit(1);
