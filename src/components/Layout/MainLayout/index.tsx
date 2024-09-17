import { FC } from "react";
import { Outlet } from "react-router-dom";
import { MenuPanel } from "./MenuPanel";

export const MainLayout: FC = (): JSX.Element => {
  return (
    <div className="w-full flex items-center text-white">
      <div className="w-[60px] h-[100vh] flex bg-[#272838]">
        <MenuPanel />
      </div>
      <div className="w-[calc(100%-60px)]">
        <Outlet />
      </div>
    </div>
  );
};
