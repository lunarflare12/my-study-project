import { build_options } from "../types/types";
import { Configuration } from "webpack";
import { build_devServer } from "./build_devServer";
import { build_loaders } from "./build_loaders";
import { build_resolvers } from "./build_resolvers";
import { build_plugins } from "./build_plugins";

export const build_webpack_config = (options: build_options): Configuration => {
  const { mode, isDev, paths } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: isDev
        ? "js/[name]-[contenthash:4].js"
        : "js/[contenthash:8].js",
      path: paths.build,
      clean: true,
    },
    module: {
      rules: build_loaders(options),
    },
    resolve: build_resolvers(),
    plugins: build_plugins(options),
    devServer: isDev ? build_devServer(options) : undefined,
    devtool: isDev ? "inline-source-map" : undefined,
  };
};
