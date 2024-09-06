import { io } from "socket.io-client";
import { socketConfig, URL } from "../../../config";

const extendSocketConfig = {
  ...socketConfig,
  auth: {
    type: "general",
    room: null,
    token: "general.bearer.token",
  },
  query: {},
};

// connected to admin namespace
export const mainSocket = io(`${URL}`, extendSocketConfig);
