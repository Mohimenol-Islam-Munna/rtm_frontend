import { FC } from "react";
import { Navigate } from "react-router-dom";
import { getLocalStorage } from "../utils/localStorage";

type Props = {};

export const NoGroupViewPage: FC<Props> = (): JSX.Element => {
  const token = getLocalStorage("access_token");

  if (token) {
    return (
      <div className="w-full min-h-full p-4 flex items-center justify-center dark:bg-black dark:bg-dot-white/[1] bg-dot-black/[1] relative">
        <h2>There is no group conversation.</h2>
      </div>
    );
  } else {
    return <Navigate to="/sign-in" replace={true} />;
  }
};
