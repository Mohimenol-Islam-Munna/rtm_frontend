import { ChangeEvent, useEffect, useState } from "react";
import { useMessageList } from "../../../hooks/useMessageList";
import useMessageSocketConnection from "../../../socketIo/hooks/useMessageSocketConnection";
import { ChatBoard } from "./contents";

export type StateDataType = {
  isLoading: boolean;
  data: any;
  error: any;
};

const Chat = () => {
  const [combineMessageState, setCombineMessageState] = useState<any[] | []>(
    []
  );

  const [inputMessageState, setInputMessageState] = useState<any>({});

  const { messageList } = useMessageList();

  const { messageSocketState, currentMessageState } =
    useMessageSocketConnection();

  const changeHandler = (value: any) => {
    console.log("message :", value);
    setInputMessageState(value);
  };

  useEffect(() => {
    setCombineMessageState((prev: any[] | []) => {
      return [...prev, ...(messageList.data || [])];
    });
  }, [messageList.data]);

  useEffect(() => {
    setCombineMessageState((prev: any[] | []) => {
      return [...prev, currentMessageState];
    });
  }, [currentMessageState]);

  useEffect(() => {
    setCombineMessageState((prev: any[] | []) => {
      return [...prev, inputMessageState];
    });
  }, [inputMessageState]);

  console.log("🚀 ~ Chat ~ combineMessageState:", combineMessageState);

  return (
    <div className="w-full h-full">
      <ChatBoard messageList={messageList} changeHandler={changeHandler} />
    </div>
  );
};

export default Chat;
