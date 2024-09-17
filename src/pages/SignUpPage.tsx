import { FC } from "react";
import { getLocalStorage } from "../utils/localStorage";
import { Navigate } from "react-router-dom";
import { SignUp } from "../components/Features/SignUp";

export const SignUpPage: FC = (): JSX.Element => {
  const token = getLocalStorage("access_token");

  if (token) {
    return <Navigate to="/" replace={true} />;
  } else {
    return <SignUp />;
  }
};
