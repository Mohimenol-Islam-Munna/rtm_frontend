import { FC } from "react";
import { mainMenuList, MenuType, footerMenuList } from "./menuList";
import { MenuPanelItem } from "./MenuPanelItem";

export const MenuPanel: FC = (): JSX.Element => {
  return (
    <div className="w-[60px] h-full flex-grow-0 flex-shrink-0 bg-[#272838]">
      <div className="w-full h-[calc(100%-100px)] overflow-y-auto">
        {mainMenuList.map((item: MenuType) => (
          <MenuPanelItem key={item.id} item={item} />
        ))}
      </div>

      <div className="w-full h-[100px]">
        {footerMenuList.map((item: MenuType) => (
          <MenuPanelItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
