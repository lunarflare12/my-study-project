import { RuleSetRule } from "webpack";

export const build_loaders = (): RuleSetRule[] => {
  const ts_loader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [ts_loader];
};
