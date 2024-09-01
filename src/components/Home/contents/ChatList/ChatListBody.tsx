import { FC } from "react";
import ChatListContainer from "./ChatListContainer";

export const ChatListBody: FC = (): JSX.Element => {
  return (
    <div className="w-full h-[calc(100%-50px)] overflow-y-auto">
      <ChatListContainer />
    </div>
  );
};
