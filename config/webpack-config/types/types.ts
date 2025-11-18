type TBuildMode = "development" | "production";

interface IBuildPaths {
  html: string;
  entry: string;
  build: string;
  src: string;
  public: string;
}

interface IBuildOptions {
  mode: TBuildMode;
  isDev: boolean;
  paths: IBuildPaths;
  port: number;
}

export type { TBuildMode, IBuildPaths, IBuildOptions };
