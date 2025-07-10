# config-as-code

[![npm version](https://img.shields.io/npm/v/config-as-code.svg)](https://www.npmjs.com/package/config-as-code)
[![Node Version](https://img.shields.io/node/v/config-as-code.svg)](https://nodejs.org)
[![Downloads](https://img.shields.io/npm/dw/config-as-code.svg)](https://www.npmjs.com/package/config-as-code)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Build Status](https://github.com/sahilkhatiwada/config-as-code/actions/workflows/ci.yml/badge.svg)](https://github.com/sahilkhatiwada/config-as-code/actions)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/sahilkhatiwada/config-as-code/pulls)

One Config Format to Power All Tools

## Overview
`config-as-code` lets you define all your project tool configurations (ESLint, Prettier, Babel, Vite, Webpack, Husky, and more) in a single `dev.config.ts` file. It generates the correct config files for each tool, ensuring a unified, version-controlled developer experience.

## Features
- Centralized config: `dev.config.ts` or `dev.config.json`
- Converts to: `.eslintrc.json`, `.prettierrc`, `babel.config.js`, `vite.config.js`, `webpack.config.js`, Husky hooks, and more
- Supports: ESLint, Prettier, Babel, Vite, Webpack, Husky
- Easy CLI: `npx config-as-code`
- TypeScript-first

## Installation
```sh
npm install --save-dev config-as-code
```

## Usage
1. **Create a unified config:**

   `dev.config.ts` example:
   ```ts
   import { DevConfig } from "config-as-code";

   const config: DevConfig = {
     eslint: {
       extends: ["eslint:recommended"],
       rules: { semi: ["error", "always"] },
     },
     prettier: {
       semi: false,
       singleQuote: true,
     },
     babel: {
       presets: ["@babel/preset-env"],
       plugins: ["@babel/plugin-transform-runtime"],
     },
     vite: {
       plugins: ["vite-plugin-example"],
     },
     webpack: {
       entry: "src/index.ts",
       output: { filename: "bundle.js" },
     },
     husky: {
       hooks: { "pre-commit": "npm test" },
     },
   };

   export default config;
   ```

2. **Generate all config files:**
   ```sh
   npx config-as-code
   ```
   This will create `.eslintrc.json`, `.prettierrc`, `babel.config.js`, `vite.config.js`, `webpack.config.js`, and Husky hooks in your project root.

## CLI
- `npx config-as-code` — Reads your `dev.config.ts` and writes all tool config files.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
MIT 