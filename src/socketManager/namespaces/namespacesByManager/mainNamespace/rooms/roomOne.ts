import { manager } from "../../../../manager";

const namespace = "/";

const config = {
  auth: {
    type: "general",
    room: "roomOne",
  },
};

export const roomOneSocket = manager.socket(namespace, config);
