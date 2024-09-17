import { useState, useEffect } from "react";
import { chatListHandler } from "../api/apiHandlers";

type ChatListType = {
  isLoading: boolean;
  data: any;
  error: any;
};

type UseChatListType = {
  chatList: ChatListType;
  refetchHandler: () => void;
};

export const useChatList = (): UseChatListType => {
  const [isRefetch, setIsRefetch] = useState<boolean>(false);

  const [chatList, setChatList] = useState<ChatListType>({
    isLoading: false,
    data: null,
    error: null,
  });

  const refetchHandler = () => {
    setIsRefetch((prev) => !prev);
  };

  useEffect(() => {
    const fetchData = async () => {
      setChatList({
        isLoading: true,
        data: null,
        error: null,
      });

      const res = await chatListHandler();

      setChatList({
        isLoading: false,
        data: res.data,
        error: res.error,
      });
    };

    fetchData();
  }, [isRefetch]);

  return { chatList, refetchHandler };
};
