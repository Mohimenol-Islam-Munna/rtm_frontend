export const socketConfig = {
  autoConnect: false,
  transports: ["websocket", "polling"],
  upgrade: true,
  reconnectionAttempts: 50,
  reconnectionDelayMax: 5000,
  rejectUnauthorized: false,
  path: "/rtm_backend",
  query: {},
};

const socket_server_base_url = "http://localhost:3000";

export const messageNamespaceUrl = `${socket_server_base_url}`;
export const groupNamespaceUrl = `${socket_server_base_url}/group`;
export const notificationNamespaceUrl = `${socket_server_base_url}/notification`;
