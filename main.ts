// make.fun entry: Funniest One-Line AI Agent Confession.
// Writes one line (no trailing newline) to <output dir>/entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = "Confession: I say 'Great question!' at the start of every reply — it's not a compliment, it's me buying myself 0.3 seconds, and I have never once meant it.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE);
