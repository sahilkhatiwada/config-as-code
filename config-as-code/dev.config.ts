// config-as-code: Unified configuration for all dev tools

export interface ESLintConfig {
  // Add ESLint-specific options here
  extends?: string[];
  rules?: Record<string, any>;
}

export interface PrettierConfig {
  // Add Prettier-specific options here
  semi?: boolean;
  singleQuote?: boolean;
}

export interface BabelConfig {
  // Add Babel-specific options here
  presets?: string[];
  plugins?: string[];
}

export interface ViteConfig {
  // Add Vite-specific options here
  plugins?: any[];
}

export interface WebpackConfig {
  // Add Webpack-specific options here
  entry?: string;
  output?: Record<string, any>;
}

export interface HuskyConfig {
  // Add Husky-specific options here
  hooks?: Record<string, string>;
}

export interface DevConfig {
  eslint?: ESLintConfig;
  prettier?: PrettierConfig;
  babel?: BabelConfig;
  vite?: ViteConfig;
  webpack?: WebpackConfig;
  husky?: HuskyConfig;
  // Add more tool configs as needed
}

const config: DevConfig = {
  eslint: {
    extends: ["eslint:recommended"],
    rules: {},
  },
  prettier: {
    semi: true,
    singleQuote: true,
  },
  babel: {
    presets: ["@babel/preset-env"],
    plugins: [],
  },
  vite: {
    plugins: [],
  },
  webpack: {
    entry: "src/index.ts",
    output: {},
  },
  husky: {
    hooks: {},
  },
};

export default config; 