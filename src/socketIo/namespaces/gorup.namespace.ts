import { io } from "socket.io-client";
import { socketConfig, groupNamespaceUrl } from "../index";

const extendSocketConfig = {
  ...socketConfig,
  auth: {
    rooms: ["javascript", "python", "golang"],
    token: "baerer token",
  },
};

export const groupSocket = io(groupNamespaceUrl, extendSocketConfig);
