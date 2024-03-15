import { ResolveOptions } from "webpack";
import {build_options} from "../types/types";

export const build_resolvers = (options: build_options): ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      "@": options.paths.src
    },
  };
};
