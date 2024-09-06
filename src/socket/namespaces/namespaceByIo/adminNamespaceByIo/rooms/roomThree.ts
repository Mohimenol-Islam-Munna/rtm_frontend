import { io } from "socket.io-client";
import { socketConfig, URL } from "../../../../config";

const extendSocketConfig = {
  ...socketConfig,
  auth: {
    type: "admin",
    room: "roomThree",
    token: "admin.bearer.token",
  },
};

// connected to admin namespace
export const adminRoomThreeSocket = io(`${URL}/admin`, extendSocketConfig);
