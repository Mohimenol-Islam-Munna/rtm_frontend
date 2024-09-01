import { ChatBoardBody } from "./ChardBoardBody";
import { ChatBoardFooter } from "./ChatBoardFooter";
import { ChatBoardHeader } from "./ChatBoardHeader";

export const ChatBoard = () => {
  return (
    <div className="min-w-[290px] w-full h-full bg-[#272838]">
      <ChatBoardHeader />
      <ChatBoardBody />
      <ChatBoardFooter />
    </div>
  );
};
