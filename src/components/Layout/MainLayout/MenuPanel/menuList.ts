import { IoChatbubblesOutline } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaObjectUngroup } from "react-icons/lia";
import { IconType } from "react-icons";
import { MdLogout } from "react-icons/md";

export type MenuType = {
  id: number;
  name: string;
  Component: IconType;
  path?: string;
  clickHandler?: () => void;
};

export const mainMenuList: MenuType[] = [
  {
    id: 1,
    name: "Chat List or Friend List",
    Component: IoChatbubblesOutline,
    path: "/",
  },

  {
    id: 2,
    name: "User List",
    Component: HiUsers,
    path: "/users",
  },

  {
    id: 3,
    name: "Group List",
    Component: LiaObjectUngroup,
    path: "/groups",
  },
];

export const footerMenuList: MenuType[] = [
  // {
  //   id: 4,
  //   name: "Settings",
  //   Component: IoSettingsOutline,
  //   path: "/settings",
  // },

  {
    id: 6,
    name: "Logout",
    Component: MdLogout,
    clickHandler: () => {
      console.log("click handler clicked");
    },
  },
];
