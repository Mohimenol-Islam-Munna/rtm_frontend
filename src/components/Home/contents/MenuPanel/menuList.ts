import { IoChatbubblesOutline } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { LiaObjectUngroup } from "react-icons/lia";
import { IconType } from "react-icons";
import { MdLogout } from "react-icons/md";

export type MenuType = {
  id: number;
  name: string;
  Component: IconType;
};

export const mainMenuList: MenuType[] = [
  {
    id: 1,
    name: "Chat List or Friend List",
    Component: IoChatbubblesOutline,
  },

  {
    id: 2,
    name: "User List",
    Component: HiUsers,
  },

  // {
  //   id: 3,
  //   name: "Group List",
  //   Component: LiaObjectUngroup,
  // },
];

export const footerMenuList: MenuType[] = [
  {
    id: 4,
    name: "Settings",
    Component: IoSettingsOutline,
  },

  // {
  //   id: 5,
  //   name: "Profile",
  //   Component: RxAvatar,
  // },

  {
    id: 6,
    name: "Logout",
    Component: MdLogout,
  },
];
