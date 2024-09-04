import { io } from "socket.io-client";

const URL = "http://localhost:8080";

const socketConfig = {
  autoConnect: false,
  transports: ["websocket"],
  upgrade: false,
  reconnectionAttempts: 1,
  reconnectionDelayMax: 5000,
  rejectUnauthorized: false,
  path: "/socket.io",
  auth: {},
  query: { token: localStorage.getItem("token") || "" },
};

export const socket = io(URL, socketConfig);
