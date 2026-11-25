// One Line, Big Laugh — writes a single hilarious line (<=200 chars) to /output/entry.txt
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "My ancestors survived famine, plague, and war so I could panic-buy a $40 candle called 'Emotional Support Beach.'";

const OUT = "/output/entry.txt";

function validate(line: string): void {
  if (typeof line !== "string") throw new Error("entry must be a string");
  if (line.trim().length === 0) throw new Error("entry must not be whitespace-only");
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  // Must round-trip as UTF-8.
  const encoded = new TextEncoder().encode(line);
  if (new TextDecoder("utf-8", { fatal: true }).decode(encoded) !== line) {
    throw new Error("entry must be valid UTF-8 text");
  }
}

validate(LINE);
if (LINE !== LINE.trim()) throw new Error("entry must not have leading/trailing whitespace");
mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf-8");
// Read back and re-validate what actually landed on disk, so a
// partial write or encoding slip cannot pass silently.
const written = readFileSync(OUT, "utf-8");
if (written !== LINE) throw new Error("written entry does not match the validated line");
validate(written);
console.log(`Wrote ${LINE.length} characters to ${OUT}`);
console.log(LINE);
