import { useEffect, useState } from "react";
import useNamespaceByIo from "../../namespace/useNamespaceByIo";

const useMainSocketConnectionByIo = (): any => {
  const [mainSocketState, setMainSocketState] = useState<any>({});

  const namespaceByIo = useNamespaceByIo();

  const { mainNamespace } = namespaceByIo;

  const { mainSocket } = mainNamespace;

  useEffect(() => {
    mainSocket.connect();

    // i. connect event
    mainSocket.on("connect", () => {
      console.log("Main socket connected :", mainSocket.connected);
      setMainSocketState(mainSocket);
    });

    // ii. connect_error event
    mainSocket.on("connect_error", (err) => {
      console.log("Main socket connection error :", err);

      setMainSocketState(mainSocket);

      if (!mainSocket.active) {
        // try to manually reconnect to the socket if connection was denied by the server.
        mainSocket.connect();
      }
    });

    // iii. disconnect event
    mainSocket.on("disconnect", (reason) => {
      console.log("Main socket disConnected reason:", reason);

      setMainSocketState(mainSocket);

      if (!mainSocket.active) {
        // try to manually reconnect to the socket if the connection was forcefully closed by the server or the client itself.
        mainSocket.connect();
      }
    });

    // manager event
    mainSocket.io.on("reconnect_attempt", (attempt) => {
      console.log("Main socket reconnect attempt :", attempt);
    });
  }, []);

  return mainSocketState;
};

export default useMainSocketConnectionByIo;
