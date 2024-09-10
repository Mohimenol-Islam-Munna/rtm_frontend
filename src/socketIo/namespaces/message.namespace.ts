import { io } from "socket.io-client";
import { socketConfig, messageNamespaceUrl } from "../index";

const extendSocketConfig = {
  ...socketConfig,
  auth: {
    rooms: ["javascript2python"],
    token: "baerer token",
  },
};

export const messageSocket = io(messageNamespaceUrl, extendSocketConfig);
