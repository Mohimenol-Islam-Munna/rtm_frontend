import { io } from "socket.io-client";
import { socketConfig, notificationNamespaceUrl } from "../index";

const extendSocketConfig = {
  ...socketConfig,
  auth: {
    rooms: [""],
    token: "baerer token",
  },
};

export const messageSocket = io(notificationNamespaceUrl, extendSocketConfig);
