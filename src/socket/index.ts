import { io, Manager } from "socket.io-client";

const URL = "http://localhost:8080";

const socketConfig = {
  autoConnect: true,
  transports: ["websocket"],
  upgrade: false,
  reconnectionAttempts: 1,
  reconnectionDelayMax: 5000,
  rejectUnauthorized: false,
  path: "/custom-socket-io",
  auth: {},
  query: { token: localStorage.getItem("token") || "" },
};

// manager instance
const manager = new Manager(URL, socketConfig);

export const socketIo = io(URL, socketConfig);

export const socket = manager.socket("/");
