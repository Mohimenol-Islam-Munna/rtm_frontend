import { io } from "socket.io-client";
import { socketConfig } from "../../../../config";

const extendSocketConfig = {
  ...socketConfig,
  auth: {
    type: "general",
    room: "roomThree",
    token: "general.bearer.token",
  },
};

// connected to main namespace
export const mainRoomThreeSocket = io(`${URL}`, extendSocketConfig);
