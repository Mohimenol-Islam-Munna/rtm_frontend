import { FC } from "react";
import { MenuType } from "./menuList";

type Props = {
  item: MenuType;
};

export const MenuPanelItem: FC<Props> = ({
  item: { Component },
}): JSX.Element => {
  return (
    <div className="w-full h-[50px] flex justify-center items-center hover:bg-[#2E2F40] border-b-4 border-b-transparent hover:border-b-[#05D397] cursor-pointer transition-all ease-in-out duration-500 delay-75">
      <Component className="w-[50%] h-[50%] text-[#05D397]" />
    </div>
  );
};
