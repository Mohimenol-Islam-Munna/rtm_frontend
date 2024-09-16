import { FC } from "react";
import ChatListContainer from "./ChatListContainer";

type Props = {
  activeUserBoardChangeHandler: (item: any) => void;
};

export const ChatListBody: FC<Props> = ({
  activeUserBoardChangeHandler,
}): JSX.Element => {
  return (
    <div className="w-full h-[calc(100%-50px)] overflow-y-auto">
      <ChatListContainer
        activeUserBoardChangeHandler={activeUserBoardChangeHandler}
      />
    </div>
  );
};
