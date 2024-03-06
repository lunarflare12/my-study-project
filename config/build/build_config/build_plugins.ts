import { WebpackPluginInstance, ProgressPlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { build_options } from "../types/types";

export const build_plugins = ({
  paths,
  isDev,
}: build_options): WebpackPluginInstance[] => {
  return [
    new MiniCssExtractPlugin({
      chunkFilename: "css/[name].[contenthash:8].css",
      filename: isDev
        ? "css/[name].[contenthash:4].css"
        : "css/[contenthash:8].css",
    }),
    new ProgressPlugin(),
    new HtmlWebpackPlugin({ template: paths.html }),
  ];
};
