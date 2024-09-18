import { FC } from "react";
import { mainMenuList, MenuType, footerMenuList } from "./menuList";
import { MenuPanelItem } from "./MenuPanelItem";

type Props = {};

export const MenuPanel: FC<Props> = ({}): JSX.Element => {
  return (
    <div className="w-full">
      <div className="w-full h-[calc(100%-100px)] overflow-y-auto">
        {mainMenuList.map((item: MenuType) => (
          <MenuPanelItem key={item.id} item={item} />
        ))}
      </div>

      <div className="w-full h-[100px] flex flex-col justify-end">
        {footerMenuList.map((item: MenuType) => (
          <MenuPanelItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
