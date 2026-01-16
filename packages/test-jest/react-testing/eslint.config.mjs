import { createEslintConfig } from "@config/eslint-config";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  ...createEslintConfig({
    pathToTsConfigDir: __dirname,
    ignores: [
      "build/**",
      "node_modules/**",
      "public/**",
      "*.config.js",
      "*.config.ts",
      "dist/**",
    ],
    commonOverrides: {},
    typescriptOverrides: {},
  }),
  {
    files: ["**/*.tsx", "**/*.ts"],
    languageOptions: {
      globals: {
        React: "readonly",
        JSX: "readonly",
      },
    },
  },
  {
    files: ["**/*.test.tsx", "**/*.test.ts", "**/*.spec.tsx", "**/*.spec.ts"],
    rules: {
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
    },
  },
];
