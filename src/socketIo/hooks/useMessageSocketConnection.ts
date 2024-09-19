import { useEffect, useState } from "react";
import { messageSocket } from "../namespaces/message.namespace";
import { getLocalStorage } from "../../utils/localStorage";

export const useMessageSocketConnection = (): any => {
  const [messageSocketState, setMessageSocketState] = useState<any>({});
  const [currentMessageState, setCurrentMessageState] = useState<any>(null);

  useEffect(() => {
    messageSocket.connect();

    // i. connect event
    const onConnect = () => {
      console.log("------ Message socket connected :", messageSocket.connected);
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
    // const onPacket = () => {
    //   console.log("Message socket packet transferred.");
    // };

    // messageSocket.io.engine.on("packet", onPacket);

    return () => {
      messageSocket.off("connect", onConnect);
      messageSocket.off("connect_error", onConnectError);
      messageSocket.off("disconnect", onDisConnect);

      messageSocket.io.off("reconnect_attempt", onReconnectAttempt);

      // messageSocket.io.engine.off("packet", onPacket);
    };
  }, []);

  useEffect(() => {
    if (messageSocketState.connected) {
      const joinToMyRoomAck = () => {
        console.log("Joined To My Room.");
      };

      const myId = getLocalStorage("user_id");

      console.log("🚀 ~ useEffect ~ myId:", myId);

      if (myId) {
        messageSocket.emit("join", myId, joinToMyRoomAck);
      }
    }
  }, [messageSocketState]);

  useEffect(() => {
    if (messageSocketState.connected) {
      const getMessage = (room: any, message: any, cb: () => void) => {
        console.log("Received room ::", room);
        console.log("Received message ::", message);
        setCurrentMessageState(message);
        cb();
      };

      messageSocket.on("send_message", getMessage);

      return () => {
        messageSocket.off("send_message", getMessage);
      };
    }
  }, [messageSocketState]);

  return { messageSocketState, currentMessageState };
};

export default useMessageSocketConnection;
