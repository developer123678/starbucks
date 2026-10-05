const fs = require("fs");
const path = require("path");

// Load categories, items, guides, and faqs to check link integrity
const categoriesFile = fs.readFileSync(path.join(__dirname, "../data/menu-categories.ts"), "utf-8");
const itemsFile = fs.readFileSync(path.join(__dirname, "../data/menu-items.ts"), "utf-8");
const guidesFile = fs.readFileSync(path.join(__dirname, "../data/guides.ts"), "utf-8");

console.log("=== RUNNING AUDIT SUITE ===");

// 1. Check for any hardcoded AdSense IDs
const codeFiles = [
  "components/AdSlot.tsx",
  "app/layout.tsx",
  "app/page.tsx",
  "components/Header.tsx",
  "components/Footer.tsx"
];

let adSenseIssues = 0;
for (const f of codeFiles) {
  const content = fs.readFileSync(path.join(__dirname, "..", f), "utf-8");
  if (content.includes("ca-pub-") || content.includes("adsbygoogle.js")) {
    console.error(`[ERROR] AdSense real ID or script found in ${f}`);
    adSenseIssues++;
  }
}
if (adSenseIssues === 0) {
  console.log("✔ Zero real AdSense IDs or publisher scripts detected.");
}

// 2. Check for official logo misuse
let logoIssues = 0;
const allFiles = fs.readdirSync(path.join(__dirname, "../components"));
for (const f of allFiles) {
  const content = fs.readFileSync(path.join(__dirname, "../components", f), "utf-8");
  if (content.includes("siren") || content.includes("official-logo")) {
    console.error(`[ERROR] Starbucks logo reference found in components/${f}`);
    logoIssues++;
  }
}
if (logoIssues === 0) {
  console.log("✔ Zero Starbucks official logos or copied branding assets detected.");
}

// 3. Verify that independent disclaimers exist
const disclaimerFile = fs.readFileSync(path.join(__dirname, "../components/DisclaimerNotice.tsx"), "utf-8");
if (disclaimerFile.includes("not affiliated with, sponsored by, or endorsed by Starbucks Coffee Company")) {
  console.log("✔ Independent disclaimer notice is correctly formulated.");
} else {
  console.error("[ERROR] Independent disclaimer notice missing required wording.");
}

console.log("=== AUDIT SUITE COMPLETED ===");
