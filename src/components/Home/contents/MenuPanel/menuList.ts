import { IoChatbubblesOutline } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { LiaObjectUngroup } from "react-icons/lia";
import { IconType } from "react-icons";

export type MenuType = {
  id: number;
  name: string;
  Component: IconType;
};

export const mainMenuList: MenuType[] = [
  {
    id: 1,
    name: "Chat List",
    Component: IoChatbubblesOutline,
  },

  {
    id: 2,
    name: "Group List",
    Component: LiaObjectUngroup,
  },

  {
    id: 3,
    name: "Friend List",
    Component: HiUsers,
  },
];

export const footerMenuList: MenuType[] = [
  {
    id: 1,
    name: "Settings",
    Component: IoSettingsOutline,
  },

  {
    id: 2,
    name: "Profile",
    Component: RxAvatar,
  },
];
