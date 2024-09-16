import { useEffect, useState } from "react";
import { messageSocket, messageSocket2 } from "../namespaces/message.namespace";

export const useMessageSocketConnection = (): any => {
  const [messageSocketState, setMessageSocketState] = useState<any>({});
  const [messageSocketState2, setMessageSocketState2] = useState<any>({});

  useEffect(() => {
    messageSocket.connect();

    // i. connect event
    const onConnect = () => {
      console.log("Message socket connected :", messageSocket.connected);
      setMessageSocketState(messageSocket);
    };

    messageSocket.on("connect", onConnect);

    // ii. connect_error event
    const onConnectError = (err: any) => {
      console.log("Message socket connection error :", err);

      setMessageSocketState(messageSocket);

      if (!messageSocket.active) {
        messageSocket.connect();
      }
    };

    messageSocket.on("connect_error", onConnectError);

    // iii. disconnect event
    const onDisConnect = (reason: any) => {
      console.log("Message socket disConnected reason:", reason);

      setMessageSocketState(messageSocket);

      if (!messageSocket.active) {
        messageSocket.connect();
      }
    };

    messageSocket.on("disconnect", onDisConnect);

    // manager event
    const onReconnectAttempt = (attempt: any) => {
      console.log("Message socket reconnect attempt :", attempt);
    };

    messageSocket.io.on("reconnect_attempt", onReconnectAttempt);

    return () => {
      messageSocket.off("connect", onConnect);
      messageSocket.off("connect_error", onConnectError);

      messageSocket.off("disconnect", onDisConnect);
      messageSocket.io.off("reconnect_attempt", onReconnectAttempt);
    };
  }, []);

  // second socket connection
  useEffect(() => {
    messageSocket2.connect();

    // i. connect event
    const onConnect = () => {
      console.log("Message socket connected 2:", messageSocket2.connected);
      setMessageSocketState2(messageSocket2);
    };

    messageSocket2.on("connect", onConnect);

    // ii. connect_error event
    const onConnectError = (err: any) => {
      console.log("Message socket connection error 2:", err);

      setMessageSocketState2(messageSocket2);

      if (!messageSocket2.active) {
        messageSocket2.connect();
      }
    };

    messageSocket2.on("connect_error", onConnectError);

    // iii. disconnect event
    const onDisConnect = (reason: any) => {
      console.log("Message socket disConnected reason 2:", reason);

      setMessageSocketState2(messageSocket2);

      if (!messageSocket2.active) {
        messageSocket2.connect();
      }
    };

    messageSocket2.on("disconnect", onDisConnect);

    // manager event
    const onReconnectAttempt = (attempt: any) => {
      console.log("Message socket reconnect attempt 2:", attempt);
    };

    messageSocket2.io.on("reconnect_attempt", onReconnectAttempt);

    return () => {
      messageSocket2.off("connect", onConnect);
      messageSocket2.off("connect_error", onConnectError);

      messageSocket2.off("disconnect", onDisConnect);
      messageSocket2.io.off("reconnect_attempt", onReconnectAttempt);
    };
  }, []);

  useEffect(() => {
    if (messageSocketState.connected) {
      messageSocket.emit("join-room", "room1");

      const getMessage = (data: any) => {
        console.log("Received message 1 ::", data);
      };

      // messageSocket.emit("not_for_all1", "room1");

      messageSocket.on("not_for_all_go", getMessage);

      return () => {
        messageSocket.off("not_for_all_go", getMessage);
      };
    }
  }, [messageSocketState]);

  useEffect(() => {
    if (messageSocketState2.connected) {
      messageSocket2.emit("join-room", "room1");

      const getMessage = (data: any) => {
        console.log("Received message 2 ::", data);
      };

      messageSocket2.on("not_for_all_go", getMessage);

      return () => {
        messageSocket2.off("not_for_all_go", getMessage);
      };
    }
  }, [messageSocketState2]);

  return messageSocketState;
};

export default useMessageSocketConnection;
