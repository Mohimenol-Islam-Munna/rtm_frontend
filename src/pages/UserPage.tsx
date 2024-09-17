import { FC } from "react";
import { getLocalStorage } from "../utils/localStorage";
import { Navigate } from "react-router-dom";
import { Users } from "../components/Features/Users";

type Props = {};

export const UserPage: FC<Props> = (): JSX.Element => {
  const token = getLocalStorage("access_token");

  if (token) {
    return <Users />;
  } else {
    return <Navigate to="/sign-in" replace={true} />;
  }
};
