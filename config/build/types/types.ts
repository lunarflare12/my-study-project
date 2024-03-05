export type build_mode = "development" | "production";

export interface build_paths {
  html: string;
  entry: string;
  build: string;
  src: string;
}

export interface build_options {
  mode: build_mode;
  isDev: boolean;
  paths: build_paths;
  port: number;
}
