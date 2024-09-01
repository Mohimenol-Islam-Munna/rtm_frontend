import { ChatBoard, MenuPanel, ChatList } from "./contents";

const HomeLayout = () => {
  return (
    <div className="w-full h-[100vh] flex items-center text-white">
      <MenuPanel />
      <ChatList />
      <ChatBoard />
    </div>
  );
};

export default HomeLayout;
