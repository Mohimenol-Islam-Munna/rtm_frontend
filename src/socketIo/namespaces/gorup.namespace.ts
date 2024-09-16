import { io } from "socket.io-client";
import { socketConfig, groupNamespaceUrl } from "../index";

const extendSocketConfig = {
  ...socketConfig,
  auth: {
    rooms: ["javascript", "python", "golang"],
    token: "bearer token",
  },
};

export const groupSocket = io(groupNamespaceUrl, extendSocketConfig);
