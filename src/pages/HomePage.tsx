import { FC, useEffect } from "react";
import HomeLayout from "../components/Home";

import useMainSocketConnectionByIo from "../socket/hooks/connectionByIo/main/useMainSocketConnectionByIo";

import useAdminSocketConnectionByIo from "../socket/hooks/connectionByIo/admin/useAdminSocketConnectionByIo";
import useNamespaceByIo from "../socket/hooks/namespace/useNamespaceByIo";

export const HomePage: FC = (): JSX.Element => {
  const mainSocketStateByIo = useMainSocketConnectionByIo();
  const adminSocketStateByIo = useAdminSocketConnectionByIo();

  const namespaceByIo = useNamespaceByIo();

  const { mainNamespace } = namespaceByIo;

  const { mainSocket } = mainNamespace;

  console.log("home adminSocketStateByIo :", adminSocketStateByIo.connected);

  useEffect(() => {
    if (mainSocket.connected) {
      mainSocket.send(
        "first message event to ensure that connection is created or reconnected"
      );

      mainSocket.on("message", (data) => {
        console.log("Received first message event ::", data);
      });
    }
  }, [mainSocketStateByIo]);

  return <HomeLayout />;
};
