import { DevConfig } from "./dev.config";

export function convertToESLint(config: DevConfig): object {
  return config.eslint || {};
}

export function convertToPrettier(config: DevConfig): object {
  return config.prettier || {};
}

export function convertToBabel(config: DevConfig): object {
  return config.babel || {};
}

export function convertToVite(config: DevConfig): object {
  return config.vite || {};
}

export function convertToWebpack(config: DevConfig): object {
  return config.webpack || {};
}

export function convertToHuskyHooks(config: DevConfig): Record<string, string> {
  return config.husky?.hooks || {};
} 