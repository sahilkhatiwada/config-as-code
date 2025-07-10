import {
  convertToESLint,
  convertToPrettier,
  convertToBabel,
  convertToVite,
  convertToWebpack,
  convertToHuskyHooks,
} from "./converters";
import { DevConfig } from "./dev.config";

describe("config-as-code converters", () => {
  const sampleConfig: DevConfig = {
    eslint: { extends: ["eslint:recommended"], rules: { semi: ["error", "always"] } },
    prettier: { semi: false, singleQuote: true },
    babel: { presets: ["@babel/preset-env"], plugins: ["@babel/plugin-transform-runtime"] },
    vite: { plugins: ["vite-plugin-example"] },
    webpack: { entry: "src/index.ts", output: { filename: "bundle.js" } },
    husky: { hooks: { "pre-commit": "npm test" } },
  };

  it("converts to ESLint config", () => {
    expect(convertToESLint(sampleConfig)).toEqual(sampleConfig.eslint);
  });

  it("converts to Prettier config", () => {
    expect(convertToPrettier(sampleConfig)).toEqual(sampleConfig.prettier);
  });

  it("converts to Babel config", () => {
    expect(convertToBabel(sampleConfig)).toEqual(sampleConfig.babel);
  });

  it("converts to Vite config", () => {
    expect(convertToVite(sampleConfig)).toEqual(sampleConfig.vite);
  });

  it("converts to Webpack config", () => {
    expect(convertToWebpack(sampleConfig)).toEqual(sampleConfig.webpack);
  });

  it("converts to Husky hooks", () => {
    expect(convertToHuskyHooks(sampleConfig)).toEqual(sampleConfig.husky?.hooks);
  });
}); 