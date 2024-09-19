import { FC, useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import { DropDownMenu } from "../../../../UI/DropDownMenu";
import { chatBoardHeaderDropdown } from "./ChatBoardDropdowns";
import { IoIosNotificationsOutline } from "react-icons/io";
import { messageSocket } from "../../../../../socketIo/namespaces/message.namespace";
import { useOutletContext } from "react-router-dom";
import { ContextType } from "../../../../Layout/MainLayout";

export const ChatBoardHeader: FC = (): JSX.Element => {
  const { messageSocketState } = useOutletContext<ContextType>();

  const [totalNotification, setTotalNotification] = useState(0);

  useEffect(() => {
    if (messageSocketState.connected) {
      const getMessage = (room: any, message: any, cb: () => void) => {
        console.log("Received notification ::", room);
        setTotalNotification((prev) => prev + 1);
        cb();
      };

      messageSocket.on("send_notification", getMessage);

      return () => {
        messageSocket.off("send_notification", getMessage);
      };
    }
  });

  return (
    <div className="w-full h-full flex border-b-2 border-b-[#05D397] p-2">
      <div className="w-auto h-full flex-grow justify-center flex items-center">
        <h1 className="text-xs md:text-xl">Real Time Messaging</h1>
      </div>
      <div className="w-[60px] h-full flex-grow-0 flex-shrink-0 flex justify-center items-center">
        {/* <DropDownMenu
          data={chatBoardHeaderDropdown}
          MainIcon={BsThreeDotsVertical}
        /> */}

        <IoIosNotificationsOutline size="25" className="text-[#05D397]" />
        <sup>{totalNotification}</sup>
      </div>
    </div>
  );
};
