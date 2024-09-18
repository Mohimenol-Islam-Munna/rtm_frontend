import { io } from "socket.io-client";
import { socketConfig, messageNamespaceUrl } from "../index";
import { getLocalStorage } from "../../utils/localStorage";

const extendSocketConfig = {
  ...socketConfig,
  auth: {
    token: `bearer ${getLocalStorage("access_token")}`,
  },
};

export const messageSocket = io(messageNamespaceUrl, extendSocketConfig);
