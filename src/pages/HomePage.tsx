import { FC, useEffect } from "react";
import HomeLayout from "../components/Home";
// import {useMainSocketConnectionByIo} from "../socket/hooks/connectionByIo/main/useMainSocketConnectionByIo";
// import {useAdminSocketConnectionByIo} from "../socket/hooks/connectionByIo/admin/useAdminSocketConnectionByIo";

import { useAdminSocketRoomOneConnectionByIo } from "../socket/hooks/connectionByIo/admin/rooms/useAdminSocketRoomOneConnectionByIo";

import useNamespaceByIo from "../socket/hooks/namespace/useNamespaceByIo";

export const HomePage: FC = (): JSX.Element => {
  // const mainSocketStateByIo = useMainSocketConnectionByIo();
  // const adminSocketStateByIo = useAdminSocketConnectionByIo();

  const adminSocketRoomOneStateByIo = useAdminSocketRoomOneConnectionByIo();

  const namespaceByIo = useNamespaceByIo();

  const { mainNamespace } = namespaceByIo;

  const {
    rooms: { mainRoomOneSocket },
  } = mainNamespace;

  useEffect(() => {
    if (mainRoomOneSocket.connected) {
      mainRoomOneSocket.send(
        "first message event to ensure that connection is created or reconnected"
      );

      mainRoomOneSocket.on("message", (data) => {
        console.log("Received first message event ::", data);
      });
    }
  }, [adminSocketRoomOneStateByIo]);

  return <HomeLayout />;
};
