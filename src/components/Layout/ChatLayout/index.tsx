import { FC } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { ChatBoardHeader } from "../../Features/Chat/contents/ChatBoard/ChatBoardHeader";
import { ChatListSecondaryMenu } from "../../Features/Chat/contents/ChatListSecondaryMenu";
import { ContextType } from "../MainLayout";

export type StateDataType = {
  isLoading: boolean;
  data: any;
  error: any;
};

const ChatLayout: FC = (): JSX.Element => {
  const mainContext = useOutletContext<ContextType>();

  return (
    <div className="w-full">
      <div className="w-full flex">
        <div className="w-[290px] h-[100vh] bg-[#2E2F40]">
          <ChatListSecondaryMenu />
        </div>
        <div className="w-[calc(100%-290px)] h-[100vh] bg-[#272838] overflow-auto">
          <div className="w-full h-[50px]">
            <ChatBoardHeader />
          </div>
          <div className="w-full h-[calc(100%-50px)]">
            <Outlet context={mainContext} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;
