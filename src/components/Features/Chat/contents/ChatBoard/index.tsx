import { ChatBoardBody } from "./ChardBoardBody";
import { ChatBoardFooter } from "./ChatBoardFooter";

export const ChatBoard = () => {
  return (
    <div className="w-full h-full bg-[#272838]">
      <div className="w-full h-[calc(100%-70px)] overflow-y-auto">
        <ChatBoardBody />
      </div>
      <ChatBoardFooter />
    </div>
  );
};
