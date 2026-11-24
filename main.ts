import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const entry = "A great task awaits you. Unfortunately, it is the one you marked done.";
if (!entry.trim() || /[\r\n]/.test(entry) || [...entry].length > 140) {
  throw new Error('Expected one line of at most 140 characters');
}
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), entry, 'utf8');
