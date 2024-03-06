import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { build_options } from "../types/types";

export const build_loaders = ({ isDev }: build_options): RuleSetRule[] => {
  const ts_loader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const css_loader = {
    test: /\.s?[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".mod.")),
            localIdentName: isDev
              ? "[path][name]-[contenthash:4]"
              : "[contenthash:16]",
          },
        },
      },
      "sass-loader",
    ],
  };

  return [ts_loader, css_loader];
};
