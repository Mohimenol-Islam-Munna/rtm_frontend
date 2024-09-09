import { FC, useEffect } from "react";

import HomeLayout from "../components/Home";
import useMessageSocketConnection from "../socketFinal/hooks/useMessageSocketConnection";
import { messageSocket } from "../socketFinal/namespaces/message.namespace";

export const HomePage: FC = (): JSX.Element => {
  const messageSocketState = useMessageSocketConnection();



  return <HomeLayout />;
};
