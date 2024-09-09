export const socketConfig = {
  autoConnect: false,
  transports: ["websocket"],
  upgrade: true,
  reconnectionAttempts: 5,
  reconnectionDelayMax: 5000,
  rejectUnauthorized: false,
  path: "/RTM_BACKEND",
  query: {},
};

const socket_server_base_url = "http://localhost:8080";

export const messageNamespaceUrl = `${socket_server_base_url}/message`;
export const groupNamespaceUrl = `${socket_server_base_url}/group`;
export const notificationNamespaceUrl = `${socket_server_base_url}/notification`;
