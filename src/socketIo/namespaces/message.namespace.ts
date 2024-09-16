import { io } from "socket.io-client";
import { socketConfig, messageNamespaceUrl } from "../index";

const extendSocketConfig = {
  ...socketConfig,
  auth: {
    rooms: ["javascript2python"],
    token: "bearer token",
  },
};

export const messageSocket = io(messageNamespaceUrl, extendSocketConfig);
export const messageSocket2 = io(messageNamespaceUrl, extendSocketConfig);
