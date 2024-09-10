import { FC, useEffect } from "react";

import HomeLayout from "../components/Home";
import useMessageSocketConnection from "../socketIo/hooks/useMessageSocketConnection";
import { messageSocket } from "../socketIo/namespaces/message.namespace";

export const HomePage: FC = (): JSX.Element => {
  const messageSocketState = useMessageSocketConnection();



  return <HomeLayout />;
};
