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

    // engine io event
    const onPacket = () => {
      console.log("Message socket packet transferred.");
    };

    messageSocket.io.engine.on("packet", onPacket);

    return () => {
      messageSocket.off("connect", onConnect);
      messageSocket.off("connect_error", onConnectError);
      messageSocket.off("disconnect", onDisConnect);

      messageSocket.io.off("reconnect_attempt", onReconnectAttempt);

      messageSocket.io.engine.off("packet", onPacket);
    };
  }, []);

  useEffect(() => {
    if (messageSocketState.connected) {
      const getMessage = (data: any) => {
        console.log("Received message ::", data);
      };

      messageSocket.on("welcome", getMessage);

      return () => {
        messageSocket.off("welcome", getMessage);
      };
    }
  }, [messageSocketState]);

  return messageSocketState;
};

export default useMessageSocketConnection;
