import { DataItemType } from "../../../../types/DropDownTypes";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { PiStackPlus } from "react-icons/pi";

export const chatListHeaderDropdown: DataItemType[] = [
  {
    id: 1,
    name: "Add Friend",
    Icon: AiOutlineUsergroupAdd,
  },
  {
    id: 2,
    name: "Add Group",
    Icon: PiStackPlus,
  },
];
