import { useEffect, useState } from "react";
import useNamespaceByIo from "../../../namespace/useNamespaceByIo";

export const useAdminSocketRoomOneConnectionByIo = (): any => {
  const [adminSocketRoomOneState, setAdminSocketRoomOneState] = useState<any>(
    {}
  );

  const namespaceByIo = useNamespaceByIo();

  const { adminNamespace } = namespaceByIo;

  const {
    rooms: { adminRoomOneSocket },
  } = adminNamespace;

  console.log("adminRoomOneSocket rooms :", adminRoomOneSocket);

  useEffect(() => {
    adminRoomOneSocket.connect();

    // i. connect event
    adminRoomOneSocket.on("connect", () => {
      console.log(
        "Admin socket room one connected :",
        adminRoomOneSocket.connected
      );
      setAdminSocketRoomOneState(adminRoomOneSocket);
    });

    // ii. connect_error event
    adminRoomOneSocket.on("connect_error", (err) => {
      console.log("Admin socket room one connection error :", err);

      setAdminSocketRoomOneState(adminRoomOneSocket);

      if (!adminRoomOneSocket.active) {
        // try to manually reconnect to the socket if connection was denied by the server.
        adminRoomOneSocket.connect();
      }
    });

    // iii. disconnect event
    adminRoomOneSocket.on("disconnect", (reason) => {
      console.log("Admin socket room one disConnected reason:", reason);

      setAdminSocketRoomOneState(adminRoomOneSocket);

      if (!adminRoomOneSocket.active) {
        // try to manually reconnect to the socket if the connection was forcefully closed by the server or the client itself.
        adminRoomOneSocket.connect();
      }
    });

    // manager event
    adminRoomOneSocket.io.on("reconnect_attempt", (attempt) => {
      console.log("Admin socket room one reconnect attempt :", attempt);
    });
  }, []);

  return adminSocketRoomOneState;
};
