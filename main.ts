// The Robot Pickup Line Championship — one line, at most 200 characters,
// in the voice of a robot trying to charm someone.
// The program writes the pickup line to $MAKEFUN_OUTPUT_DIR/entry.txt,
// falling back to /output/entry.txt when the variable is unset.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I was programmed to feel nothing, yet my circuits overheat every time you enter the room. Will you help me debug that over dinner?";

// Gate guard: the sealed scorer requires UTF-8 text of 1-200 characters,
// a single line, and not only whitespace. Count code points so any
// multi-byte character is measured the way the scorer measures it.
const len = [...LINE].length;
if (len < 1 || len > 200 || LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error(`LINE violates the 1-200 character gate (length ${len})`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
