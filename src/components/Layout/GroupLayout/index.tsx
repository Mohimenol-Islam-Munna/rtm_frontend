import { useState } from "react";
import { ChatBoard, ChatList } from "../../Features/Chat/contents";
import { Outlet } from "react-router-dom";

export type StateDataType = {
  isLoading: boolean;
  data: any;
  error: any;
};

const ChatLayout = () => {
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
    <div className="w-full h-full">
      <div className="w-full h-full flex">
        <div className="w-[290px] h-full bg-[#2E2F40]">
          <ChatList
            allData={activeMenuPanel === 1 ? chatList : userList}
            activeUserBoardChangeHandler={activeUserBoardChangeHandler}
          />
        </div>
        <div className="w-[calc(100%-290px)] h-full bg-[#272838]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;
