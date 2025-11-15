import path from "node:path";
import { fileURLToPath } from "node:url";
import { createEslintConfig } from "@config/eslint-config";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default createEslintConfig({
  pathToTsConfigDir: __dirname,
  ignores: [
    "dist",
    "node_modules",
    "**/*.config.js",
    "**/*.config.ts",
  ],
  typescriptOverrides: {
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-return": "off",
  },
});

