import { FC } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import { DropDownMenu } from "../../../../UI/DropDownMenu";
import { chatBoardHeaderDropdown } from "./ChatBoardDropdowns";

export const ChatBoardHeader: FC = (): JSX.Element => {
  return (
    <div className="w-full h-full flex border-b-2 border-b-[#05D397] p-2">
      <div className="w-auto h-full flex-grow justify-center flex items-center">
        <h1 className="text-xs md:text-xl">Md. Mohimenol Islam Munna</h1>
      </div>
      <div className="w-[60px] h-full flex-grow-0 flex-shrink-0 flex justify-center items-center">
        <DropDownMenu
          data={chatBoardHeaderDropdown}
          MainIcon={BsThreeDotsVertical}
        />
      </div>
    </div>
  );
};
