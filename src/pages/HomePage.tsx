import { FC, useEffect, useState } from "react";
import HomeLayout from "../components/Home";
import { socketIo, socket, manager } from "../socket";

export const HomePage: FC = (): JSX.Element => {
  const [socketState, setSocketState] = useState<any>({});

  // useEffect(() => {
  //   console.log("socket :", socket);
  //   /** 1. Manager socket instance's attributes
  //    * i. id
  //    * ii. active
  //    * iii. connected
  //    * iv. disconnected
  //    * v. io
  //    * vi. recovered
  //    */

  //   /** 2. io instance's methods
  //    * i. connect()/open()
  //    * ii. disconnect()
  //    * iii. emit()/send()/volatile.emit()
  //    * iv. emitWithAck()
  //    * v. listeners()
  //    * vi. listenersAny()
  //    * vii. listenersAnyOutgoing()
  //    * viii. off()
  //    * ix. offAny()
  //    * x. offAnyOutgoing()
  //    * xi. on()
  //    * xii. onAny()
  //    * xiii. onAnyOutGoing()
  //    * xiv. once()
  //    * xv. prependAny()
  //    * xvi. prependAnyOutgoing()
  //    * xvii. timeout()
  //    */

  //   /** 3. io instance's events
  //    * i. connect
  //    * ii. error
  //    * iii. disconnect
  //    */

  //   // i. connect event
  //   socket.on("connect", () => {
  //     console.log("socket connect :", socket.active);
  //     // socket.disconnect();
  //   });

  //   // ii. connect_error event
  //   socket.on("connect_error", (err) => {
  //     console.log("Socket connection error :", err);

  //     if (!socket.active) {
  //       // try to manually reconnect to the socket if connection was denied by the server.
  //       manager.connect();
  //     }
  //   });

  //   // iii. disconnect event
  //   // socket.on("disconnect", (reason, details) => {
  //   //   console.log("DisConnected active status :", socket.active);
  //   //   console.log("DisConnected reason:", reason);
  //   //   console.log("DisConnected details:", details);

  //   //   if (!socket.active) {
  //   //     // try to manually reconnect to the socket if the connection was forcefully closed by the server or the client itself.
  //   //     socket.connect();
  //   //   }
  //   // });

  //   socket.io.on("reconnect_attempt", (attempt) => {
  //     console.log("reconnect attempt :", attempt);
  //   });
  // }, []);

  useEffect(() => {
    /** 1. io instance's attributes
     * i. id
     * ii. active
     * iii. connected
     * iv. disconnected
     * v. io
     * vi. recovered
     */

    /** 2. io instance's methods
     * i. connect()/open()
     * ii. disconnect()
     * iii. emit()/send()/volatile.emit()
     * iv. emitWithAck()
     * v. listeners()
     * vi. listenersAny()
     * vii. listenersAnyOutgoing()
     * viii. off()
     * ix. offAny()
     * x. offAnyOutgoing()
     * xi. on()
     * xii. onAny()
     * xiii. onAnyOutGoing()
     * xiv. once()
     * xv. prependAny()
     * xvi. prependAnyOutgoing()
     * xvii. timeout()
     */

    /** 3. io instance's events
     * i. connect
     * ii. connect_error
     * iii. disconnect
     */

    socketIo.connect();

    // i. connect event
    socketIo.on("connect", () => {
      console.log("socket connected :", socketIo.connected);
      setSocketState(socketIo);
    });

    // ii. connect_error event
    socketIo.on("connect_error", (err) => {
      console.log("Socket connection error :", err);

      if (!socketIo.active) {
        // try to manually reconnect to the socket if connection was denied by the server.
        socketIo.connect();
      }
    });

    // iii. disconnect event
    socketIo.on("disconnect", (reason, details) => {
      console.log("DisConnected reason:", reason);
      console.log("DisConnected details:", details);

      if (!socketIo.active) {
        // try to manually reconnect to the socket if the connection was forcefully closed by the server or the client itself.
        socketIo.connect();
      }
    });

    // manager event
    socketIo.io.on("reconnect_attempt", (attempt) => {
      console.log("reconnect attempt :", attempt);
    });
  }, []);

  useEffect(() => {
    if (socketIo.connected) {
      console.log("Socket Connected State:", socketState.connected);

      socketIo.send(
        "first message event to ensure that connection is created or reconnected"
      );

      socketIo.on("message", (data) => {
        console.log("Received first message event :", data);
      });
    }
  }, [socketState]);

  return <HomeLayout />;
};
