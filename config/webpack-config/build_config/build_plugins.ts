import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { type WebpackPluginInstance, ProgressPlugin, CopyPlugin } from "webpack";
import { type IBuildOptions } from "../types/types";
import path from "path";

const build_plugins = ({
  paths,
  isDev,
}: IBuildOptions): WebpackPluginInstance[] => [
  new MiniCssExtractPlugin({
    chunkFilename: "css/[name].[contenthash:8].css",
    filename: isDev
      ? "css/[name].[contenthash:4].css"
      : "css/[contenthash:8].css",
  }),
  new ProgressPlugin(),
  new HtmlWebpackPlugin({ template: paths.html }),
  new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev)
  }),
  new CopyPlugin({
    patterns: [
      {
        from: path.resolve(paths.public, "locales"),
        to: path.resolve(paths.build, "locales"),
        noErrorOnMissing: true,
      },
    ],
  }),
];

export { build_plugins };
