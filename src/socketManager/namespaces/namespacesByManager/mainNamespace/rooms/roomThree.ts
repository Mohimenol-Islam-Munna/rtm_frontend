import { manager } from "../../../../manager";

const namespace = "/";

const config = {
  auth: {
    type: "general",
    room: "roomThree",
  },
};

export const roomThreeSocket = manager.socket(namespace, config);
