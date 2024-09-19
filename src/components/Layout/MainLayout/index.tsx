import { FC } from "react";
import { Outlet } from "react-router-dom";
import { MenuPanel } from "./MenuPanel";
import useMessageSocketConnection from "../../../socketIo/hooks/useMessageSocketConnection";

export type ContextType = { messageSocketState: any; currentMessageState: any };

export const MainLayout: FC = (): JSX.Element => {
  const { messageSocketState, currentMessageState } =
    useMessageSocketConnection();

  return (
    <div className="w-full flex items-center text-white">
      <div className="w-[60px] h-[100vh] flex bg-[#272838]">
        <MenuPanel />
      </div>
      <div className="w-[calc(100%-60px)]">
        <Outlet
          context={
            {
              messageSocketState: messageSocketState,
              currentMessageState: currentMessageState,
            } satisfies ContextType
          }
        />
      </div>
    </div>
  );
};
