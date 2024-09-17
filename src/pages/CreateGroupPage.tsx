import { FC } from "react";
import { getLocalStorage } from "../utils/localStorage";
import { Navigate } from "react-router-dom";
import { CreateGroup } from "../components/Features/Groups/CreateGroup";

export const CreateGroupPage: FC = (): JSX.Element => {
  const token = getLocalStorage("access_token");

  if (token) {
    return <CreateGroup />;
  } else {
    return <Navigate to="/sign-in" replace={true} />;
  }
};
