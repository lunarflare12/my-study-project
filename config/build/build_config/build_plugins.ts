import webpack, { WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { build_options } from "../types/types";

export const build_plugins = ({
  paths,
}: build_options): WebpackPluginInstance[] => {
  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: paths.html }),
  ];
};
