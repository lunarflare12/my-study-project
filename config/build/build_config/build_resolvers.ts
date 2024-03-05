import { ResolveOptions } from "webpack";

export const build_resolvers = (): ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
};
