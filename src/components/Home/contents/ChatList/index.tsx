import { FC } from "react";
import { ChatListBody } from "./ChatListBody";
import { ChatListHeader } from "./ChatListHeader";

export const ChatList: FC = (): JSX.Element => {
  return (
    <div className="w-[290px] h-full flex-grow-0 flex-shrink-0 bg-[#2E2F40]">
      <ChatListHeader />
      <ChatListBody />
    </div>
  );
};
