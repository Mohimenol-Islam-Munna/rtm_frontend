import { FC } from "react";
import { mainMenuList, MenuType, footerMenuList } from "./menuList";
import { MenuPanelItem } from "./MenuPanelItem";

type Props = {
  activeMenuPanel: number;
  activeMenuPanelChangeHandler: (id: number) => void;
};

export const MenuPanel: FC<Props> = ({
  activeMenuPanel,
  activeMenuPanelChangeHandler,
}): JSX.Element => {
  return (
    <div className="w-[60px] h-full flex-grow-0 flex-shrink-0 bg-[#272838]">
      <div className="w-full h-[calc(100%-100px)] overflow-y-auto">
        {mainMenuList.map((item: MenuType) => (
          <MenuPanelItem
            key={item.id}
            item={item}
            activeMenuPanel={activeMenuPanel}
            activeMenuPanelChangeHandler={activeMenuPanelChangeHandler}
          />
        ))}
      </div>

      <div className="w-full h-[100px]">
        {footerMenuList.map((item: MenuType) => (
          <MenuPanelItem
            key={item.id}
            item={item}
            activeMenuPanel={activeMenuPanel}
            activeMenuPanelChangeHandler={activeMenuPanelChangeHandler}
          />
        ))}
      </div>
    </div>
  );
};
