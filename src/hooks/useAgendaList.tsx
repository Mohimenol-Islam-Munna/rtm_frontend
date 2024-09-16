import { useState, useEffect } from "react";
import { agendaListHandler } from "../api/apiHandlers";
import { useParams } from "react-router-dom";

type AgendaListType = {
  isLoading: boolean;
  data: any;
  error: any;
};

type UseAgendaListType = {
  agendaList: AgendaListType;
  refetchHandler: () => void;
};

export const useAgendaList = (): UseAgendaListType => {
  const params = useParams();

  const [isRefetch, setIsRefetch] = useState<boolean>(false);

  const [agendaList, setAgendaList] = useState<AgendaListType>({
    isLoading: false,
    data: null,
    error: null,
  });

  const refetchHandler = () => {
    setIsRefetch((prev) => !prev);
  };

  useEffect(() => {
    const fetchData = async () => {
      setAgendaList({
        isLoading: true,
        data: null,
        error: null,
      });

      const res = await agendaListHandler(params.id as string);

      setAgendaList({
        isLoading: false,
        data: res.data,
        error: res.error,
      });
    };

    fetchData();
  }, [isRefetch]);

  return { agendaList, refetchHandler };
};
