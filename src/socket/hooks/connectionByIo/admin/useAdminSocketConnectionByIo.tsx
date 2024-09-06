import { useEffect, useState } from "react";
import useNamespaceByIo from "../../namespace/useNamespaceByIo";

const useAdminSocketConnectionByIo = (): any => {
  const [adminSocketState, setAdminSocketState] = useState<any>({});

  console.log("adminSocketState :::::::::::::::::", adminSocketState);

  const namespaceByIo = useNamespaceByIo();

  const { adminNamespace } = namespaceByIo;

  const { adminSocket } = adminNamespace;

  useEffect(() => {
    adminSocket.connect();

    // i. connect event
    adminSocket.on("connect", () => {
      console.log("Admin socket connected :", adminSocket.connected);
      setAdminSocketState(adminSocket);
    });

    // ii. connect_error event
    adminSocket.on("connect_error", (err) => {
      console.log("Admin socket connection error :", err);

      setAdminSocketState(adminSocket);

      if (!adminSocket.active) {
        // try to manually reconnect to the socket if connection was denied by the server.
        adminSocket.connect();
      }
    });

    // iii. disconnect event
    adminSocket.on("disconnect", (reason) => {
      console.log("Admin socket disConnected reason:", reason);

      setAdminSocketState(adminSocket);

      if (!adminSocket.active) {
        // try to manually reconnect to the socket if the connection was forcefully closed by the server or the client itself.
        adminSocket.connect();
      }
    });

    // manager event
    adminSocket.io.on("reconnect_attempt", (attempt) => {
      console.log("Admin socket reconnect attempt :", attempt);
    });
  }, []);

  return adminSocketState;
};

export default useAdminSocketConnectionByIo;
