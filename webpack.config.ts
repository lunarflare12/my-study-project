import {resolve} from "path";
import { Configuration } from "webpack";
import { build_options, build_paths } from "./config/build/types/types";
import { build_webpack_config } from "./config/build/build_config";

const config = (env: build_options): Configuration => {
  const mode = env.mode || "development";
  const isDev = mode === "development";
  const port = env.port || 3000;
  const paths: build_paths = {
    entry: resolve(__dirname, "src", "index.ts"),
    build: resolve(__dirname, "dist"),
    html: resolve(__dirname, "public", "index.html"),
    src: resolve(__dirname, "src"),
  };

  return build_webpack_config({ mode, isDev, port, paths });
};

export default config;
