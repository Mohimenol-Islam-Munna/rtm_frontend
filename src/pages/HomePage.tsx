import { FC } from "react";

import HomeLayout from "../components/Home";
import useMessageSocketConnection from "../socketIo/hooks/useMessageSocketConnection";

export const HomePage: FC = (): JSX.Element => {
  const messageSocketState = useMessageSocketConnection();

  return <HomeLayout />;
};
