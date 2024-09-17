import { useState, useEffect } from "react";
import { groupMessageListHandler } from "../api/apiHandlers";
import { useParams } from "react-router-dom";

type GroupMessageListType = {
  isLoading: boolean;
  data: any;
  error: any;
};

type UseGroupMessageListType = {
  groupMessageList: GroupMessageListType;
  refetchHandler: () => void;
};

export const useGroupMessageList = (): UseGroupMessageListType => {
  const { id } = useParams();

  const [isRefetch, setIsRefetch] = useState<boolean>(false);

  const [groupMessageList, setGroupMessageList] =
    useState<GroupMessageListType>({
      isLoading: false,
      data: null,
      error: null,
    });

  const refetchHandler = () => {
    setIsRefetch((prev) => !prev);
  };

  useEffect(() => {
    const fetchData = async () => {
      setGroupMessageList({
        isLoading: true,
        data: null,
        error: null,
      });

      const res = await groupMessageListHandler(id as string);

      setGroupMessageList({
        isLoading: false,
        data: res.data,
        error: res.error,
      });
    };

    fetchData();
  }, [isRefetch]);

  return { groupMessageList, refetchHandler };
};
