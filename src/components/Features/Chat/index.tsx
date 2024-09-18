import { useMessageList } from "../../../hooks/useMessageList";
import { ChatBoard } from "./contents";

export type StateDataType = {
  isLoading: boolean;
  data: any;
  error: any;
};

const Chat = () => {
  const { messageList } = useMessageList();
  console.log("🚀 ~ Chat ~ messageList:", messageList)

  return (
    <div className="w-full h-full">
      <ChatBoard />
    </div>
  );
};

export default Chat;
