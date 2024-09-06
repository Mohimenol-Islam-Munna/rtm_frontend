import { manager } from "../../../../manager";

const namespace = "/";

const config = {
  auth: {
    type: "admin",
    room: "roomThree",
    token: "admin.bearer.token",
  },
};

export const adminRoomThreeSocket = manager.socket(namespace, config);
