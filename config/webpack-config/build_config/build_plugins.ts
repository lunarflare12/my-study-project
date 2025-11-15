import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { type WebpackPluginInstance, ProgressPlugin } from "webpack";
import { type IBuildOptions } from "../types/types";

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
];

export { build_plugins };
