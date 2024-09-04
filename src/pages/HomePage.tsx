import { FC, useEffect } from "react";
import HomeLayout from "../components/Home";
import { socket } from "../socket";

export const HomePage: FC = (): JSX.Element => {
  useEffect(() => {
    console.log("home page use effect");

    socket.connect();

    socket.on("connect", () => {
      console.log("Connected to the server");
    });

    socket.on("disconnect", () => {
      console.log("DisConnected from the server");
    });
  });

  return <HomeLayout />;
};
