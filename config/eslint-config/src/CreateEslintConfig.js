import rulesdirPlugin from "eslint-plugin-rulesdir";
import { createCommonConfig } from "./Presets/Common/CreateConfig.js";
import { createTypescriptConfig } from "./Presets/Typescript/CreateConfig.js";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

rulesdirPlugin.RULES_DIR = path.resolve(__dirname, "Rules");

/**
 *
 * @param {Object} params
 * @param {string} [params.pathToTsConfigDir]
 * @param {string[]|undefined} [params.ignores]
 * @param {Record<string, any>|undefined} [params.commonOverrides]
 * @param {Record<string, any>|undefined} [params.typescriptOverrides]
 *
 * @returns {Array}
 */
const createEslintConfig = (params) => {
  const pathToTsConfigDir = params.pathToTsConfigDir ?? null;
  const ignores = params.ignores ?? [];
  const commonOverrides = params.commonOverrides ?? {};
  const typescriptOverrides = params.typescriptOverrides ?? {};

  if (pathToTsConfigDir === null) {
    throw new Error("pathToTsConfigDir not provided");
  }

  const config = [
    createCommonConfig(commonOverrides),
    createTypescriptConfig(pathToTsConfigDir, typescriptOverrides),
  ];

  if (ignores.length > 0) {
    config.push({ ignores });
  }

  return config;
}

export { createEslintConfig };
