# config-as-code

One Config Format to Power All Tools

## Problem
Too many config files: `.eslintrc`, `.prettierrc`, `vite.config.js`, etc.

## Solution
Define your project configuration in a single `dev.config.ts` file. Automatically generate all other config formats for your tools.

- Supports: ESLint, Prettier, Babel, Vite, Webpack, Husky, and more
- Unified developer experience
- Consistent, version-controlled configuration

## Installation
```sh
npm install --save-dev config-as-code
```

## Usage
1. Create a `dev.config.ts` in your project root:

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

2. Run the CLI to generate all config files:

```sh
npx config-as-code
```

This will generate `.eslintrc.json`, `.prettierrc`, `babel.config.js`, `vite.config.js`, `webpack.config.js`, and Husky hooks in your project root. 