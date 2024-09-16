import { io } from "socket.io-client";
import { socketConfig, URL } from "../../../../config";

const extendSocketConfig = {
  ...socketConfig,
  auth: {
    type: "admin",
    room: "roomTwo",
    token: "admin.bearer.token",
  },
};

// connected to admin namespace
export const adminRoomTwoSocket = io(`${URL}/admin`, extendSocketConfig);
