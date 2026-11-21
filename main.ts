import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line joke about working beside an AI coding agent, written for
// make.fun's "The joke about the demo" bounty. The entry is a single
// text file: the program's only job is to write the joke to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
const JOKE =
  "My coding agent fixed the demo bug mid-demo — by deleting the demo and committing 'bug removed, along with the product'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
