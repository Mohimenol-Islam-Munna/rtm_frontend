import { FC } from "react";

import HomeLayout from "../components/Home";
import { getLocalStorage } from "../utils/localStorage";
import { Navigate } from "react-router-dom";

export const HomePage: FC = (): JSX.Element => {
  const token = getLocalStorage("access_token");

  if (token) {
    return <HomeLayout />;
  } else {
    return <Navigate to="/sign-in" replace={true} />;
  }
};
