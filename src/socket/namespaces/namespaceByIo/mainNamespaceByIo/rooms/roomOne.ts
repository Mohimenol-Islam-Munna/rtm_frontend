import { io } from "socket.io-client";
import { socketConfig, URL } from "../../../../config";

const extendSocketConfig = {
  ...socketConfig,
  auth: {
    type: "general",
    room: "roomOne",
    token: "general.bearer.token",
  },
};

// connected to main namespace
export const mainRoomOneSocket = io(`${URL}`, extendSocketConfig);
