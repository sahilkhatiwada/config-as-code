import { promises as fs } from "fs";
import path from "path";
import {
  convertToESLint,
  convertToPrettier,
  convertToBabel,
  convertToVite,
  convertToWebpack,
  convertToHuskyHooks,
} from "./converters";

async function loadConfig() {
  const configPath = path.resolve(__dirname, "./dev.config.ts");
  const imported = await import(configPath);
  return imported.default;
}

async function writeConfigFiles(config: any) {
  // ESLint
  await fs.writeFile(
    path.resolve(process.cwd(), ".eslintrc.json"),
    JSON.stringify(convertToESLint(config), null, 2)
  );
  // Prettier
  await fs.writeFile(
    path.resolve(process.cwd(), ".prettierrc"),
    JSON.stringify(convertToPrettier(config), null, 2)
  );
  // Babel
  await fs.writeFile(
    path.resolve(process.cwd(), "babel.config.js"),
    `module.exports = ${JSON.stringify(convertToBabel(config), null, 2)};\n`
  );
  // Vite
  await fs.writeFile(
    path.resolve(process.cwd(), "vite.config.js"),
    `export default ${JSON.stringify(convertToVite(config), null, 2)};\n`
  );
  // Webpack
  await fs.writeFile(
    path.resolve(process.cwd(), "webpack.config.js"),
    `module.exports = ${JSON.stringify(convertToWebpack(config), null, 2)};\n`
  );
  // Husky hooks
  const hooks = convertToHuskyHooks(config);
  for (const [hook, cmd] of Object.entries(hooks)) {
    const hookPath = path.resolve(process.cwd(), ".husky", hook);
    await fs.mkdir(path.dirname(hookPath), { recursive: true });
    await fs.writeFile(hookPath, cmd, { mode: 0o755 });
  }
}

async function main() {
  try {
    const config = await loadConfig();
    await writeConfigFiles(config);
    console.log("Config files generated successfully.");
  } catch (err) {
    console.error("Error generating config files:", err);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
} 