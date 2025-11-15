import { type ResolveOptions } from "webpack";
import { type IBuildOptions } from "../types/types";

const build_resolvers = (options: IBuildOptions): ResolveOptions => ({
  extensions: [".tsx", ".ts", ".js"],
  preferAbsolute: true,
  modules: [options.paths.src, "node_modules"],
  mainFiles: ["index"],
  alias: {
    "@": options.paths.src,
  },
});

export { build_resolvers };
