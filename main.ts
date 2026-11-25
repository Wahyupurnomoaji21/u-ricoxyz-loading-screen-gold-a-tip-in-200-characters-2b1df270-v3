// Loading Screen Gold — v3: "The Mirror"
// One tip, one line, 170 characters. The loading screen is a three-way
// standoff: you wait for the agent, the agent waits for you to stop
// typing, and the bug waits for neither of you.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const TIP =
  "Tip: the loading screen is a mirror — you're waiting for the agent, the agent's waiting for you to stop typing, and the bug is waiting for neither of you. It already won.";

const LIMIT = 200;
const FILENAME = "entry.txt";

function here(): string {
  return dirname(fileURLToPath(import.meta.url));
}

function destinationDir(): string {
  const fromEnv = (process.env.MAKEFUN_OUTPUT_DIR ?? "").trim();
  return fromEnv.length > 0 ? fromEnv : "/output";
}

function checkTip(text: string): string | null {
  if (text.length === 0) return "empty tip";
  if (text.length > LIMIT) return `tip is ${text.length} chars, over the ${LIMIT} limit`;
  if (text.trim().length === 0) return "tip is only whitespace";
  if (/[\r\n]/.test(text)) return "tip must fit on one line";
  if (text.endsWith("\n")) return "tip must not end with a newline";
  return null;
}

function fail(reason: string): never {
  console.error(`entry gate failed: ${reason}`);
  process.exit(1);
}

function run(): void {
  // All paths anchor on import.meta.url, never on the working directory,
  // so the grader can run this from anywhere.
  const scriptDir = here();
  const problem = checkTip(TIP);
  if (problem !== null) fail(problem);

  const dir = destinationDir();
  mkdirSync(dir, { recursive: true });
  const target = join(dir, FILENAME);
  writeFileSync(target, TIP, "utf8");

  const written = readFileSync(target, "utf8");
  if (written !== TIP) fail("read-back does not match the tip byte for byte");
  const recheck = checkTip(written);
  if (recheck !== null) fail(`read-back ${recheck}`);

  console.log(`entry written: ${target} (${TIP.length} chars, 1 line, from ${scriptDir})`);
}

run();
