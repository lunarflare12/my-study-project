import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { type RuleSetRule } from "webpack";
import { type IBuildOptions } from "../types/types";

const build_loaders = ({ isDev, paths }: IBuildOptions): RuleSetRule[] => {
  const ts_loader = {
    test: /\.tsx?$/,
    use: {
      loader: "ts-loader",
      options: {
        transpileOnly: true,
        configFile: paths.src + "/../tsconfig.json",
      },
    },
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
      {
        loader: "sass-loader",
        options: {
          api: "modern-compiler",
          sassOptions: {
            silenceDeprecations: ["legacy-js-api"],
          },
        },
      },
    ],
  };

  return [ts_loader, css_loader];
};

export { build_loaders };
