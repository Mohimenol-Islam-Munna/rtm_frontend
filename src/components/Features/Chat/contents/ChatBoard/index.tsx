import { FC } from "react";
import { ApiDataStateType } from "../../../../../types/ApiDataStateType";
import { ChatBoardBody } from "./ChardBoardBody";
import { ChatBoardFooter } from "./ChatBoardFooter";

type Props = {
  messageList: ApiDataStateType;
  changeHandler: (value: any) => void;
};

export const ChatBoard: FC<Props> = ({ messageList, changeHandler }): JSX.Element => {
  return (
    <div className="w-full h-full bg-[#272838]">
      <div className="w-full h-[calc(100%-70px)] overflow-y-auto">
        <ChatBoardBody messageList={messageList} />
      </div>
      <ChatBoardFooter changeHandler={changeHandler}  />
    </div>
  );
};


