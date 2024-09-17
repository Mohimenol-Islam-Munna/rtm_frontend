import { useState, useEffect } from "react";
import { userListHandler } from "../api/apiHandlers";
import { useParams } from "react-router-dom";

type UserListType = {
  isLoading: boolean;
  data: any;
  error: any;
};

type UseUserListType = {
  userList: UserListType;
  refetchHandler: () => void;
};

export const useUserList = (): UseUserListType => {
  const [isRefetch, setIsRefetch] = useState<boolean>(false);

  const [userList, setUserList] = useState<UserListType>({
    isLoading: false,
    data: null,
    error: null,
  });

  const refetchHandler = () => {
    setIsRefetch((prev) => !prev);
  };

  useEffect(() => {
    const fetchData = async () => {
      setUserList({
        isLoading: true,
        data: null,
        error: null,
      });

      const res = await userListHandler();

      setUserList({
        isLoading: false,
        data: res.data,
        error: res.error,
      });
    };

    fetchData();
  }, [isRefetch]);

  return { userList, refetchHandler };
};
