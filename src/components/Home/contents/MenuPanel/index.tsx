import { FC } from "react";
import { IoChatbubblesOutline } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { LiaObjectUngroup } from "react-icons/lia";

export const MenuPanel: FC = (): JSX.Element => {
  return (
    <div className="w-[60px] h-full flex-grow-0 flex-shrink-0 bg-[#272838] p-">
      <div className="w-full h-[calc(100%-100px)] overflow-y-auto">
        <div className="w-full h-[50px] flex justify-center items-center">
          <IoChatbubblesOutline className="w-[50%] h-[50%] text-[#05D397]" />
        </div>
        <div className="w-full h-[50px] flex justify-center items-center">
          <LiaObjectUngroup className="w-[50%] h-[50%] text-[#05D397]" />
        </div>
        <div className="w-full h-[50px] flex justify-center items-center">
          <HiUsers className="w-[50%] h-[50%] text-[#05D397]" />
        </div>
      </div>
      <div className="w-full h-[100px]">
        <div className="w-full h-[50px] flex justify-center items-center">
          <IoSettingsOutline className="w-[50%] h-[50%] text-[#05D397]" />
        </div>
        <div className="w-full h-[50px] flex justify-center items-center">
          <RxAvatar className="w-[50%] h-[50%] text-[#05D397]" />
        </div>
      </div>
    </div>
  );
};
