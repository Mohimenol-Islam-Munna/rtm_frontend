import { FC, useEffect } from "react";
import HomeLayout from "../components/Home";

export const HomePage: FC = (): JSX.Element => {
  useEffect(() => {
    console.log("home page first use effect");
  });

  return <HomeLayout />;
};
