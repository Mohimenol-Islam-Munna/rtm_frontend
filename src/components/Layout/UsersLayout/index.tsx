import { useState } from "react";
import { ChatBoard, ChatList } from "../../Features/Chat/contents";
import { Outlet } from "react-router-dom";
import { ChatBoardHeader } from "../../Features/Chat/contents/ChatBoard/ChatBoardHeader";

export type StateDataType = {
  isLoading: boolean;
  data: any;
  error: any;
};

const UsersLayout = () => {
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
    <div className="w-full">
      <div className="w-full flex">
        <div className="w-[290px] h-[100vh] bg-[#2E2F40]">
          <ChatList
            allData={activeMenuPanel === 1 ? chatList : userList}
            activeUserBoardChangeHandler={activeUserBoardChangeHandler}
          />
        </div>
        <div className="w-[calc(100%-290px)] h-[100vh] bg-[#272838] overflow-auto">
          <div className="w-full h-[50px]">
            <ChatBoardHeader />
          </div>
          <div className="w-full h-[calc(100%-50px)]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersLayout;
