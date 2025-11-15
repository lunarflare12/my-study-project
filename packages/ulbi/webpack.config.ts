import * as path from "path";
import { type Configuration } from "webpack";
import { type IBuildOptions, type IBuildPaths } from "@config/webpack-config/types";
import { build_webpack_config } from "@config/webpack-config";

const config = (env: IBuildOptions): Configuration => {
  const mode = env.mode || "development";
  const isDev = mode === "development";
  const port = env.port || 3000;
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "dist"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  return build_webpack_config({ mode, isDev, port, paths });
};

export default config;
