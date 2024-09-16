import { manager } from "../../../../manager";

const namespace = "/";

const config = {
  auth: {
    type: "general",
    room: "roomTwo",
  },
};

export const roomTwoSocket = manager.socket(namespace, config);
