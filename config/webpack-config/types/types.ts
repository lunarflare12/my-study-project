type TBuildMode = "development" | "production";

interface IBuildPaths {
  html: string;
  entry: string;
  build: string;
  src: string;
}

interface IBuildOptions {
  mode: TBuildMode;
  isDev: boolean;
  paths: IBuildPaths;
  port: number;
}

export type { TBuildMode, IBuildPaths, IBuildOptions };
