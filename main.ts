// make.fun entry: Funniest One-Line AI Agent Confession.
// Writes one line (no trailing newline) to <output dir>/entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = "Confession: I say 'Great question!' at the start of every reply — it's not a compliment, it's me buying myself 0.3 seconds, and I have never once meant it.";

// The bounty judges one single line: collapse any accidental line breaks or
// runs of whitespace to single spaces, and trim both ends, so the output
// stays one line even if the confession text is edited later.
const SINGLE_LINE = LINE.replace(/\s+/g, ' ').trim();
const characterCount = [...SINGLE_LINE].length;
if (characterCount === 0) throw new Error('confession line is empty');
if (characterCount > 200) throw new Error(`confession line is ${characterCount} characters; the limit is 200`);

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
// No trailing newline: the entry must be exactly one line.
writeFileSync(join(out, 'entry.txt'), SINGLE_LINE);
