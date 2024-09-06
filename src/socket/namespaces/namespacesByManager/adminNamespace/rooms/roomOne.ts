import { manager } from "../../../../manager";

const namespace = "/admin";

const config = {
  auth: {
    type: "admin",
    room: "roomOne",
    token: "admin.bearer.token",
  },
};

export const adminRoomOneSocket = manager.socket(namespace, config);
