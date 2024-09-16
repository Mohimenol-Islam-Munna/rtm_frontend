import { FC } from "react";
import { MenuType } from "./menuList";

type Props = {
  item: MenuType;
  activeMenuPanel: number;
  activeMenuPanelChangeHandler: (id: number) => void;
};

export const MenuPanelItem: FC<Props> = ({
  item: { id, Component },
  activeMenuPanel,
  activeMenuPanelChangeHandler,
}): JSX.Element => {
  console.log("id:", id);
  console.log("activeMenuPanel:", activeMenuPanel === id);

  return (
    <div
      className={`w-full h-[50px] flex justify-center items-center  cursor-pointer transition-all ease-in-out duration-500 delay-75  ${
        activeMenuPanel === id
          ? "bg-[#2E2F40] border-b-4 border-b-[#05D397]"
          : "hover:bg-[#2E2F40] border-b-4 border-b-transparent  hover:border-b-[#05D397]"
      }`}
      onClick={() => {
        activeMenuPanelChangeHandler(id);
      }}
    >
      <Component className="w-[50%] h-[50%] text-[#05D397]" />
    </div>
  );
};
