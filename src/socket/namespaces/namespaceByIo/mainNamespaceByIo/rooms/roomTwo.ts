import { io } from "socket.io-client";
import { socketConfig } from "../../../../config";

const extendSocketConfig = {
  ...socketConfig,
  auth: {
    type: "general",
    room: "roomTwo",
    token: "general.bearer.token",
  },
};

// connected to main namespace
export const mainRoomTwoSocket = io(`${URL}`, extendSocketConfig);
