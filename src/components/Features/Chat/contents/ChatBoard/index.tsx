import { FC } from "react";
import { ApiDataStateType } from "../../../../../types/ApiDataStateType";
import { ChatBoardBody } from "./ChardBoardBody";
import { ChatBoardFooter } from "./ChatBoardFooter";

type Props = {
  messageList: ApiDataStateType;
  changeHandler: (value: any) => void;
  combineMessageState: any;
  chatState: string;
  chatStateHandler?: (data: string, onlyEmoji: boolean) => void;
};

export const ChatBoard: FC<Props> = ({
  messageList,
  chatState,
  chatStateHandler,
  changeHandler,
  combineMessageState,
}): JSX.Element => {
  return (
    <div className="w-full h-full bg-[#272838]">
      <div className="w-full h-[calc(100%-70px)] overflow-y-auto">
        <ChatBoardBody
          messageList={messageList}
          combineMessageState={combineMessageState}
        />
      </div>
      <ChatBoardFooter
        chatState={chatState}
        changeHandler={changeHandler}
        chatStateHandler={chatStateHandler}
      />
    </div>
  );
};
