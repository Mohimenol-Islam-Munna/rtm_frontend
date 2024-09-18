import { useState, useEffect } from "react";
import { messageListHandler } from "../api/apiHandlers";
import { useParams } from "react-router-dom";

type MessageListType = {
  isLoading: boolean;
  data: any;
  error: any;
};

const messageCont = [
  {
    id: 1,
    user: {
      id: 1,
      userName: "munna",
    },
    date: "10/09/23",
    message: ["hi", "kmn acho"],
  },
  {
    id: 2,
    user: {
      id: 1,
      userName: "munna",
    },
    date: "10/09/23",
    message: ["hi", "kmn acho"],
  },
];

type UseMessageListType = {
  messageList: MessageListType;
  refetchHandler: () => void;
};

export const useMessageList = (): UseMessageListType => {
  const { id } = useParams();

  console.log("user id:", id);

  const [isRefetch, setIsRefetch] = useState<boolean>(false);

  const [messageList, setMessageList] = useState<MessageListType>({
    isLoading: false,
    data: null,
    error: null,
  });

  const refetchHandler = () => {
    setIsRefetch((prev) => !prev);
  };

  useEffect(() => {
    const fetchData = async () => {
      setMessageList({
        isLoading: true,
        data: null,
        error: null,
      });

      const res = await messageListHandler(id as string);

      // setMessageList({
      //   isLoading: false,
      //   data: res.data,
      //   error: res.error,
      // });

      setMessageList({
        isLoading: false,
        data: messageCont,
        error: null,
      });
    };

    fetchData();
  }, [isRefetch]);

  return { messageList, refetchHandler };
};
