import { io } from "socket.io-client";
import { socketConfig, URL } from "../../../../config";

const extendSocketConfig = {
  ...socketConfig,
  auth: {
    type: "admin",
    room: "roomOne",
    token: "admin.bearer.token",
  },
};

// connected to admin namespace
export const adminRoomOneSocket = io(`${URL}/admin`, extendSocketConfig);
