import { FC, useEffect } from "react";
import HomeLayout from "../components/Home";
import { socketIo } from "../socket";

export const HomePage: FC = (): JSX.Element => {
  useEffect(() => {
    socketIo.on("connect", () => {
      console.log("Connected to the server 1 :", socketIo);
      // console.log("Connected to the server 2 :", socketIo.io);

      socketIo.disconnect();

      console.log("active :", socketIo.active);
    });

    // socketIo.on("connect_error", (err) => {
    //   if (socketIo.active) {
    //     console.log("socketIo connect_error :", socketIo.active);
    //   } else {
    //     console.log("manually try to connect :", socketIo.active);

    //     socketIo.connect();
    //   }

    //   console.log("Socket connection error :", err);
    // });

    socketIo.on("disconnect", (reason, details) => {
      console.log("DisConnected from the server reason:", reason);
      console.log("DisConnected from the server details:", details);

      if (socketIo.active) {
        console.log("socket try to connect automatically");
      } else {
        console.log("try to connect manually");

        socketIo.connect();
      }
    });
  });

  return <HomeLayout />;
};
