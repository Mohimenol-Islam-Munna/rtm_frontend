import { useState, useEffect } from "react";
import { groupListHandler } from "../api/apiHandlers";

type GroupListType = {
  isLoading: boolean;
  data: any;
  error: any;
};

type UseGroupListType = {
  groupList: GroupListType;
  refetchHandler: () => void;
};

export const useGroupList = (): UseGroupListType => {
  const [isRefetch, setIsRefetch] = useState<boolean>(false);

  const [groupList, setGroupList] = useState<GroupListType>({
    isLoading: false,
    data: null,
    error: null,
  });

  const refetchHandler = () => {
    setIsRefetch((prev) => !prev);
  };

  useEffect(() => {
    const fetchData = async () => {
      setGroupList({
        isLoading: true,
        data: null,
        error: null,
      });

      const res = await groupListHandler();

      setGroupList({
        isLoading: false,
        data: res.data,
        error: res.error,
      });
    };

    fetchData();
  }, [isRefetch]);

  return { groupList, refetchHandler };
};
