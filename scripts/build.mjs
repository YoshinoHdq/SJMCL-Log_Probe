import { build } from "esbuild";
import { readFileSync, writeFileSync, cpSync, existsSync, mkdirSync, rmSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");

function readJson(p) { return JSON.parse(readFileSync(p, "utf8")); }

function stripBom(bytes) {
  if (bytes.length >= 3 && bytes[0] === 239 && bytes[1] === 187 && bytes[2] === 191)
    return bytes.subarray(3);
  return bytes;
}

function cleanBom(filePath) {
  const data = readFileSync(filePath);
  const cleaned = stripBom(data);
  if (cleaned !== data) { writeFileSync(filePath, cleaned); return true; }
  return false;
}

async function main() {
  const manifest = readJson(path.join(root, "sjmcl.ext.json"));
  const version = manifest.version;
  const pkgDir = path.join(distDir, manifest.identifier);
  const archivePath = path.join(distDir, manifest.identifier + "-" + version + ".sjmclx");
  const frontendPath = path.join(pkgDir, manifest.frontend.entry);

  // Clean BOM from all source files
  let bomCount = 0;
  function scanDir(dir) {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const fp = path.join(dir, e.name);
      if (e.isDirectory()) scanDir(fp);
      else if (/\.(ts|tsx)$/.test(e.name) && cleanBom(fp)) bomCount++;
    }
  }
  scanDir(path.join(root, "src"));
  if (bomCount > 0) console.log("Cleaned " + bomCount + " BOM(s)");

  rmSync(pkgDir, { recursive: true, force: true });
  mkdirSync(path.dirname(frontendPath), { recursive: true });

  // Build: bundle but NO format/IIFE wrapper (done manually below)
  await build({
    entryPoints: [path.join(root, "src", "index.ts")],
    bundle: true,
    target: "es2020",
    platform: "neutral",
    jsx: "transform",
    jsxFactory: "api.React.createElement",
    jsxFragment: "api.React.Fragment",
    outfile: frontendPath,
    legalComments: "none",
    logLevel: "warning",
  });

  // Read, fix JSX factory, wrap with regular function IIFE
  let js = readFileSync(frontendPath, "utf8");
  js = js.replace(/\bh\(/g, "api.React.createElement(");
  // Wrap with regular function IIFE (matching clock plugin pattern)
  js = "(function() {\n" + js + "\n})();";
  writeFileSync(frontendPath, js, "utf8");

  if (!js.includes("registerExtension")) {
    console.error("ERROR: Output missing registerExtension!"); process.exit(1);
  }

  // Verify structure
  const firstLine = js.split("\n")[0];
  if (firstLine !== "(function() {") {
    console.error("ERROR: Unexpected output structure: " + firstLine); process.exit(1);
  }

  // Write manifest
  writeFileSync(path.join(pkgDir, "sjmcl.ext.json"), JSON.stringify(manifest, null, 2));
  // Copy icon
  const iconSrc = path.join(root, "icon.png");
  if (existsSync(iconSrc)) cpSync(iconSrc, path.join(pkgDir, "icon.png"));
  // Copy assets/ and data/
  for (const dir of ["assets", "data"]) {
    const sDir = path.join(root, dir);
    if (existsSync(sDir)) {
      const dDir = path.join(pkgDir, dir);
      mkdirSync(dDir, { recursive: true });
      for (const e of readdirSync(sDir)) cpSync(path.join(sDir, e), path.join(dDir, e), { recursive: true });
    }
  }

  // Package
  const { zip } = await import("fflate");
  const entries = {};
  function addDir(dirPath) {
    for (const e of readdirSync(dirPath, { withFileTypes: true })) {
      const fp = path.join(dirPath, e.name), rp = path.relative(pkgDir, fp).replace(/\\/g, "/");
      if (e.isDirectory()) addDir(fp); else entries[rp] = [readFileSync(fp), { level: 9 }];
    }
  }
  addDir(pkgDir);

  const zipped = await new Promise((resolve, reject) => {
    zip(entries, { level: 9 }, (err, data) => { if (err) reject(err); else resolve(data); });
  });
  writeFileSync(archivePath, zipped);

  // Copy to output root
  const outName = "org.yoshino.Log_Probe-" + version + ".sjmclx";
  const outPath = path.join(root, "..", outName);
  cpSync(archivePath, outPath, { force: true });

  console.log("Built " + pkgDir);
  console.log("Packed " + archivePath);
  console.log("Output: " + outPath);
}

main().catch(e => { console.error("Build failed:", e.message); process.exitCode = 1; });
