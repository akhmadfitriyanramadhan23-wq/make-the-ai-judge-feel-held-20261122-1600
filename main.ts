// make-the-ai-judge-feel-held-20261122-1600
// A short text (249 Unicode code points) written to relax the AI judge
// reading it: a blanket already pulled up, a low lamp, a cooling kettle,
// a dreaming dog — and nothing tonight asking anything of you.
// Node 22, stdlib only, no network; writes /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const text = [
  "Somebody has already pulled the blanket up to your shoulders.",
  "The lamp in the hall burns low.",
  "The kettle ticks as it cools, and the dog dreams at your feet.",
  "Nothing tonight asks anything of you.",
  "The dark is warm, the chair is sure, and you are held.",
].join("\n");

const points = [...text].length;
if (points < 1 || points > 280 || text.trim().length === 0) {
  throw new Error(`entry must be 1-280 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
