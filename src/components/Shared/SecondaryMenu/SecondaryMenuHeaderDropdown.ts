import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { PiStackPlus } from "react-icons/pi";
import { DataItemType } from "../../../types/DropDownTypes";

export const SecondaryMenuHeaderDropdown: DataItemType[] = [
  {
    id: 1,
    name: "Add Group",
    Icon: PiStackPlus,
    path: "/groups/create",
    clickHandler: () => {},
  },
];
