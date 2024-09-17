import { FC } from "react";
import { MenuType } from "./menuList";
import { Link, useLocation, useOutlet, useParams } from "react-router-dom";

type Props = {
  item: MenuType;
};

export const MenuPanelItem: FC<Props> = ({
  item: { Component, path, clickHandler },
}): JSX.Element => {
  const { pathname } = useLocation();
  const params = useParams();

  console.log("location path :", path);
  // console.log("location pathname ddd :", pathname.startsWith(`/${path}`));

  return path ? (
    <Link to={path}>
      <div
        className={`w-full h-[50px] flex justify-center items-center  cursor-pointer transition-all ease-in-out duration-500 delay-75  ${
          (
            params.id
              ? `${path === "/" ? "" : path}/${params.id}` === pathname
              : path === pathname
          )
            ? "bg-[#2E2F40] border-b-4 border-b-[#05D397]"
            : "hover:bg-[#2E2F40] border-b-4 border-b-transparent  hover:border-b-[#05D397]"
        }`}
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
          ? "bg-[#2E2F40] border-b-4 border-b-[#05D397]"
          : "hover:bg-[#2E2F40] border-b-4 border-b-transparent  hover:border-b-[#05D397]"
      }`}
      onClick={() => {
        clickHandler && clickHandler();
      }}
    >
      <Component className="w-[50%] h-[50%] text-[#05D397]" />
    </div>
  );
};
