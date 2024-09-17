import { FC } from "react";
import { mainMenuList, MenuType, footerMenuList } from "./menuList";
import { MenuPanelItem } from "./MenuPanelItem";
import { useLocation, useParams } from "react-router-dom";

type Props = {};

export const MenuPanel: FC<Props> = ({}): JSX.Element => {
  const { pathname } = useLocation();
  const params = useParams();

  console.log("location pathname :", pathname);
  console.log("location params :", params.id);

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
