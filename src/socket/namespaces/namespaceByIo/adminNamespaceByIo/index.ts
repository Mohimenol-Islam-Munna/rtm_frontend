import { io } from "socket.io-client";
import { socketConfig, URL } from "../../../config";

const extendSocketConfig = {
  ...socketConfig,
  auth: {
    type: "admin",
    room: null,
    token: "admin.bearer.token",
  },
};

// connected to admin namespace
export const adminSocket = io(`${URL}/admin`, extendSocketConfig);
