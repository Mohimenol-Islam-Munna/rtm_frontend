import { useState } from "react";
import useMessageSocketConnection from "../../socketIo/hooks/useMessageSocketConnection";
import { ChatBoard, MenuPanel, ChatList } from "./contents";

export type StateDataType = {
  isLoading: boolean;
  data: any;
  error: any;
};

const HomeLayout = () => {
  // const messageSocketState = useMessageSocketConnection();
  const [chatList, setChatList] = useState<StateDataType>({
    isLoading: false,
    data: null,
    error: null,
  });

  const [userList, setUserList] = useState<StateDataType>({
    isLoading: false,
    data: null,
    error: null,
  });

  const [messageList, setMessgeList] = useState([]);

  const [activeMenuPanel, setActiveMenuPanel] = useState(1);

  const [activeUserBoard, setActiveUserBoard] = useState<any>({});

  const activeMenuPanelChangeHandler = (id: number) => {
    setActiveMenuPanel(id);
  };

  const activeUserBoardChangeHandler = (item: any) => {
    setActiveUserBoard(item);
  };

  return (
    <div className="w-full h-[100vh] flex items-center text-white">
      <MenuPanel
        activeMenuPanel={activeMenuPanel}
        activeMenuPanelChangeHandler={activeMenuPanelChangeHandler}
      />
      <ChatList
        allData={activeMenuPanel === 1 ? chatList : userList}
        activeUserBoardChangeHandler={activeUserBoardChangeHandler}
      />
      <ChatBoard />
    </div>
  );
};

export default HomeLayout;
