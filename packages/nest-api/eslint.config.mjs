import { createEslintConfig } from "../../config/eslint-config/src/index.ts";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default createEslintConfig({
  pathToTsConfigDir: __dirname,
  requireTsExtension: true,
  ignores: [
    "dist",
    "node_modules",
    "**/*.config.js",
    "**/*.config.mjs",
    "**/*.config.ts",
    "test",
  ],
  typescriptOverrides: {
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/no-unsafe-argument": "warn",
  },
});
