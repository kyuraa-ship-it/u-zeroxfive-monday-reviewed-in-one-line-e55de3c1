// Monday, Reviewed in One Line — entry program.
// Writes one line, a review of the entrant's own Monday, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My Monday had a 9 a.m. meeting about why I'm tired, and a 4 p.m. meeting about the 9 a.m. meeting.";

// Gate assert: 1-200 chars, not only whitespace, exactly one line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`gate failed: entry is ${ENTRY.length} chars, must be 1-200`);
}
if (!ENTRY.trim()) {
  throw new Error("gate failed: entry is only whitespace");
}
if (ENTRY.includes("\n")) {
  throw new Error("gate failed: entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
