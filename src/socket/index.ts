import { io, Manager } from "socket.io-client";

const URL = "http://localhost:8080";

const socketConfig = {
  autoConnect: true,
  transports: ["websocket"],
  upgrade: false,
  reconnectionAttempts: 1,
  reconnectionDelayMax: 5000,
  rejectUnauthorized: false,
  path: "/custom-socket-io2",
  auth: {},
  query: { token: localStorage.getItem("token") || "" },
};

// create socket io instance and connected to the main namespace under a manager/socket connection.
export const socketIo = io(URL, socketConfig);

// create a manager/socket connection instance
export const manager = new Manager(URL, socketConfig);

// create a socket instance and connected to the main namespace
export const socket = manager.socket("/");
