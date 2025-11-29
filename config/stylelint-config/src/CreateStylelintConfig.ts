import path from "path";
import { fileURLToPath } from "url";

interface IStylelintConfigParams {
  overrides?: Record<string, unknown>;
}

interface IStylelintConfig {
  extends: string[];
  plugins?: (string | Record<string, unknown>)[];
  rules: Record<string, unknown>;
}

const createStylelintConfig = (
  params: IStylelintConfigParams = {}
): IStylelintConfig => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const overrides = params.overrides ?? {};

  return {
    extends: [
      "stylelint-config-standard",
      "stylelint-config-standard-scss",
    ],
    plugins: [
      "@stylistic/stylelint-plugin",
      path.resolve(__dirname, "./Rules/align-colons.ts"),
    ],
    rules: {
      "selector-class-pattern": null,
      "no-empty-source": null,
      "@stylistic/indentation": 2,
      "@stylistic/declaration-colon-space-after": null,
      "@stylistic/declaration-colon-space-before": "never",
      "@stylistic/block-opening-brace-newline-after": "always",
      "@stylistic/block-closing-brace-newline-before": "always",
      "@stylistic/declaration-block-trailing-semicolon": "always",
      "declaration-block-single-line-max-declarations": 1,
      "custom/align-colons": true,
      "at-rule-no-unknown": [
        true,
        {
          ignoreAtRules: [
            "use",
            "forward",
            "include",
            "mixin",
            "function",
            "if",
            "each",
            "for",
            "while",
          ],
        },
      ],
      ...overrides,
    },
  };
};

export { createStylelintConfig };
export type { IStylelintConfig, IStylelintConfigParams };

