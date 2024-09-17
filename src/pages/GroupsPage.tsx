import { FC } from "react";
import { getLocalStorage } from "../utils/localStorage";
import { Navigate } from "react-router-dom";
import { Groups } from "../components/Features/Groups";

type Props = {};

export const GroupsPage: FC<Props> = (): JSX.Element => {
  const token = getLocalStorage("access_token");

  if (token) {
    return <Groups />;
  } else {
    return <Navigate to="/sign-in" replace={true} />;
  }
};
