import { FC } from "react";
import { Outlet } from "react-router-dom";
import { ChatBoardHeader } from "../../Features/Chat/contents/ChatBoard/ChatBoardHeader";
import { UserListSecondaryMenu } from "../../Features/Users/UserListSecondaryMenu";

type Props = {};

const UsersLayout: FC<Props> = (): JSX.Element => {
  return (
    <div className="w-full">
      <div className="w-full flex">
        <div className="w-[290px] h-[100vh] bg-[#2E2F40]">
          <UserListSecondaryMenu />
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
