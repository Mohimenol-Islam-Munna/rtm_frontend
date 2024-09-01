import { GoPlusCircle } from "react-icons/go";
import { FC } from "react";

export const ChatListHeader: FC = (): JSX.Element => {
  return (
    <div className="w-full h-[50px] flex items-center  border-b border-b-[#353646]">
      <div className="w-[230px] h-full flex-grow p-2 flex justify-center items-center">
        <h4 className="truncate text-lg">Sender</h4>
      </div>
      <div className="w-[60px] h-full flex-grow-0 flex-shrink-0  flex justify-center items-center">
        <GoPlusCircle className="w-[50%] h-[50%] text-[#05D397]" />
      </div>
    </div>
  );
};
