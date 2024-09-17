import { ChatBoard } from "./contents";

export type StateDataType = {
  isLoading: boolean;
  data: any;
  error: any;
};

const Chat = () => {
  return (
    <div className="w-full h-full">
      <ChatBoard />
    </div>
  );
};

export default Chat;
