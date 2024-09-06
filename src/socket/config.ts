export const socketConfig = {
  autoConnect: false,
  transports: ["websocket"],
  upgrade: true,
  reconnectionAttempts: 5,
  reconnectionDelayMax: 5000,
  rejectUnauthorized: false,
  path: "/custom-socket-io",
  query: {},
};

export const URL = "http://localhost:8080";
