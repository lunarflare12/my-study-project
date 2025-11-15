import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { type IBuildOptions } from "../types/types";

const build_devServer = ({
  port,
}: IBuildOptions): DevServerConfiguration => ({
  port: port,
  historyApiFallback: true,
  client: {
    webSocketTransport: "ws",
  },
  webSocketServer: "ws",
});

export { build_devServer };
