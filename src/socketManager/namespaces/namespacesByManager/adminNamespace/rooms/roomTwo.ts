import { manager } from "../../../../manager";

const namespace = "/";

const config = {
  auth: {
    type: "admin",
    room: "roomTwo",
    token: "admin.bearer.token",
  },
};

export const adminRoomTwoSocket = manager.socket(namespace, config);
