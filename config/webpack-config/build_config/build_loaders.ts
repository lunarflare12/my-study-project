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

  const css_modules_loader = {
    test: /\.module\.css$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:4]"
              : "[hash:base64:16]",
            namedExport: false,
          },
        },
      },
    ],
  };

  const scss_modules_loader = {
    test: /\.module\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:4]"
              : "[hash:base64:16]",
            namedExport: false,
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

  const css_loader = {
    test: /\.s?[ac]ss$/i,
    exclude: /\.module\.s?[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: false,
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

  const svc_loader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const file_loader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  return [
    svc_loader,
    file_loader,
    ts_loader,
    scss_modules_loader,
    css_modules_loader,
    css_loader
  ];
};

export { build_loaders };
