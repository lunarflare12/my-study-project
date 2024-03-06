import { build_options } from "../types/types";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export const build_devServer = ({
  port,
}: build_options): DevServerConfiguration => {
  return {
    port: port,
    historyApiFallback: true,
    client: {
      webSocketTransport: "ws",
    },
    webSocketServer: "ws",
  };
};
