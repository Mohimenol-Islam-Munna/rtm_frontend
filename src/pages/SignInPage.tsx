import { FC } from "react";
import { SignIn } from "../components/SignIn";
import { getLocalStorage } from "../utils/localStorage";
import { Navigate } from "react-router-dom";

export const SignInPage: FC = (): JSX.Element => {
  const token = getLocalStorage("access_token");

  if (token) {
    return <Navigate to="/" replace={true} />;
  } else {
    return <SignIn />;
  }
};
