import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { type IBuildOptions } from "../types/types";

const build_devServer = ({
  port,
  paths,
}: IBuildOptions): DevServerConfiguration => ({
  port: port,
  historyApiFallback: true,
  static: {
    directory: paths.public,
    publicPath: "/",
  },
  client: {
    webSocketTransport: "ws",
  },
  webSocketServer: "ws",
});

export { build_devServer };
