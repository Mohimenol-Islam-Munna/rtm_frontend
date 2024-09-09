import { useEffect, useState } from "react";
import { messageSocket } from "../namespaces/message.namespace";

export const useMessageSocketConnection = (): any => {
  const [messageSocketState, setMessageSocketState] = useState<any>({});

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
      messageSocket.off("connect_error", onConnectError);
      messageSocket.off("connect_error", onConnectError);

      messageSocket.off("disconnect", onDisConnect);
      messageSocket.io.off("reconnect_attempt", onReconnectAttempt);
    };
  }, []);

  useEffect(() => {
    if (messageSocketState.connected) {
      const getMessage = (data: any) => {
        console.log("Received first message event ::", data);
      };

      messageSocket.on("send-message", getMessage);

      return () => {
        messageSocket.off("send-message", getMessage);
      };
    }
  }, [messageSocketState]);

  return messageSocketState;
};

export default useMessageSocketConnection;
