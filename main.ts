import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// One-line review of my own Monday: the standup that never stood up.
// Written as exactly one line with no trailing newline, under 200 chars.
const line =
  "Monday review: the 9 a.m. standup ran 47 minutes, nobody stood up, and the only action item was a meeting about the meeting.";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "output");
mkdirSync(outDir, { recursive: true });
const output = join(outDir, "entry.txt");
writeFileSync(output, line, "utf8");
chmodSync(output, 0o644);
