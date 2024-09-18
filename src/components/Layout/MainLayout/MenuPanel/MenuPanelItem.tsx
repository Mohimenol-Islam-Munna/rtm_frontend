import { FC } from "react";
import { MenuType } from "./menuList";
import { Link, useLocation, useParams } from "react-router-dom";

type Props = {
  item: MenuType;
};

export const MenuPanelItem: FC<Props> = ({
  item: { Component, path, clickHandler, name },
}): JSX.Element => {
  const { pathname } = useLocation();
  const params = useParams();

  return path ? (
    <Link to={path}>
      <div
        className={`w-full h-[50px] flex justify-center items-center  cursor-pointer transition-all ease-in-out duration-500 delay-75  ${
          (
            params.id
              ? `${path === "/" ? "" : path}/${params.id}` === pathname
              : path === pathname
          )
            ? "bg-[#2E2F40] border-l-2 border-l-[#05D397]"
            : "hover:bg-[#2E2F40] border-l-2 border-l-transparent  hover:border-l-[#05D397]"
        }`}
        title={`${name}`}
      >
        <Component className="w-[50%] h-[50%] text-[#05D397]" />
      </div>
    </Link>
  ) : (
    <div
      className={`w-full h-[50px] flex justify-center items-center  cursor-pointer transition-all ease-in-out duration-500 delay-75  ${
        (
          params.id
            ? `${path === "/" ? "" : path}/${params.id}` === pathname
            : path === pathname
        )
          ? "bg-[#2E2F40] border-l-2 border-l-[#05D397]"
          : "hover:bg-[#2E2F40] border-l-2 border-l-transparent  hover:border-l-[#05D397]"
      }`}
      onClick={() => {
        clickHandler && clickHandler();
      }}
      title={`${name}`}
    >
      <Component className="w-[50%] h-[50%] text-[#05D397]" />
    </div>
  );
};
