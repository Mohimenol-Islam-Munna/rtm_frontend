import { FC } from "react";
import { ChatListItem } from "./ChatListItem";

export const ChatListContainer: FC = (): JSX.Element => {
  return (
    <div className="w-full h-full">
      {[
        {
          id: 1,
          name: "Md IfteKharul Islam",
          message: "Hi Kmn acho?",
          time: "10:30 PM",
          image: "w",
        },
        {
          id: 2,
          name: "Md IfteKharul Islam",
          message: "Hi Kmn acho?",
          time: "10:30 PM",
          image: "w",
        },
        {
          id: 3,
          name: "Md IfteKharul Islam",
          message: "Hi Kmn acho?",
          time: "10:30 PM",
          image: "w",
        },
        {
          id: 4,
          name: "Md IfteKharul Islam",
          message: "Hi Kmn acho?",
          time: "10:30 PM",
          image: "w",
        },
      ].map((item: any, index: number) => (
        <ChatListItem key={index} item={item} />
      ))}
    </div>
  );
};

export default ChatListContainer;
