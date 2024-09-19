import { useEffect, useState } from "react";
import { useMessageList } from "../../../hooks/useMessageList";
import useMessageSocketConnection from "../../../socketIo/hooks/useMessageSocketConnection";
import { ChatBoard } from "./contents";
import { useParams } from "react-router-dom";
import { messageSocket } from "../../../socketIo/namespaces/message.namespace";

export type StateDataType = {
  isLoading: boolean;
  data: any;
  error: any;
};

const Chat = () => {
  const { id: targetUserId } = useParams();
  const { messageSocketState, currentMessageState } =
    useMessageSocketConnection();

  const [combineMessageState, setCombineMessageState] = useState<any[] | []>(
    []
  );

  const [inputMessageState, setInputMessageState] = useState<any>(null);

  const [chatState, setChatState] = useState<string>("");

  const chatStateHandler = (data: string, onlyEmoji: boolean = false) => {
    setChatState((prev: string) => (onlyEmoji ? prev + " " + data : data));
  };

  const { messageList } = useMessageList();
  const { data } = messageList;

  const changeHandler = (value: any) => {
    setInputMessageState(value);
    setChatState("");
  };

  useEffect(() => {
    setCombineMessageState((prev: any[] | []) => {
      return [...(data || [])];
    });
  }, [data]);

  useEffect(() => {
    if (currentMessageState) {
      setCombineMessageState((prev: any[] | []) => {
        return [...prev, currentMessageState];
      });
    }
  }, [currentMessageState]);

  useEffect(() => {
    if (inputMessageState) {
      setCombineMessageState((prev: any[] | []) => {
        return [...prev, inputMessageState];
      });

      const sendMessage = () => {
        console.log("Send message ::", data);
      };

      if (messageSocketState.connected) {
        console.log("targetUserId :", targetUserId);
        messageSocket.emit(
          "send_message",
          targetUserId,
          inputMessageState,
          sendMessage
        );
      }
    }
  }, [inputMessageState]);

  useEffect(() => {
    setInputMessageState(null);
    const target = document.getElementById("chatBoardArea");

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [combineMessageState]);

  // console.log("🚀 ~ Chat ~ combineMessageState:", combineMessageState);
  // console.log("🚀 ~ Chat ~ messageSocketState:", messageSocketState);

  return (
    <div className="w-full h-full">
      <ChatBoard
        messageList={messageList}
        chatState={chatState}
        chatStateHandler={chatStateHandler}
        changeHandler={changeHandler}
        combineMessageState={combineMessageState}
      />
    </div>
  );
};

export default Chat;
