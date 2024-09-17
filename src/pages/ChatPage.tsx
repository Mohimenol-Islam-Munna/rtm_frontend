import { FC } from "react";

import { getLocalStorage } from "../utils/localStorage";
import { Navigate } from "react-router-dom";
import Chat from "../components/Features/Chat";

export const ChatPage: FC = (): JSX.Element => {
  const token = getLocalStorage("access_token");

  console.log("ChatPage token :", token);

  if (token) {
    return <Chat />;
  } else {
    return <Navigate to="/sign-in" replace={true} />;
  }
};
