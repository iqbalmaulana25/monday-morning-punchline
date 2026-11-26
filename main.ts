// Monday Morning Punchlines
// One joke about Monday mornings, at most 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line =
  "Monday didn't sneak up on me — it booked a meeting with me, arrived early, and brought a PowerPoint called 'This Week.'";

if (line.length > 200) {
  throw new Error(`entry is ${line.length} chars, over the 200 limit`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
