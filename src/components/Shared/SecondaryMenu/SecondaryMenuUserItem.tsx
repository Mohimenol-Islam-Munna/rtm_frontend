import { FC } from "react";
import { RxAvatar } from "react-icons/rx";
import { GoPlusCircle } from "react-icons/go";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

import {
  friendRequestActionHandler,
  sendFriendRequestHandler,
} from "../../../api/apiHandlers";
import { useOutletContext, useParams } from "react-router-dom";
import { ContextType } from "../../Layout/MainLayout";

type Props = {
  item: any;
  type: string;
};

export const SecondaryMenuUserItem: FC<Props> = ({ item }): JSX.Element => {
  const { id } = useParams();

  const { currentMessageState, messageSocketState } =
    useOutletContext<ContextType>();

  return (
    <div
      className={`w-full h-[70px] overflow-hidden transition-all ease-in-out duration-500 delay-75 flex items-center hover:bg-[#272838] hover:bg-dot-white/[0.1] relative border-b-2 border-b-transparent hover:border-b-[#05D397] cursor-pointer ${
        id == item._id && "bg-[#272838] bg-dot-white/[0.1]"
      }`}
    >
      <div className="w-[50px] h-full flex-grow-0 flex-shrink-0 flex justify-center items-center">
        <RxAvatar className="w-[75%] h-[75%] text-[#05D397]" />
      </div>
      <div className="w-[170px] h-full flex-grow flex justify-center items-center">
        <div className="w-full box-border p-2">
          <h4
            className="truncate text-sm capitalize text-[#05D397]"
            title={item?.userName}
          >
            {item?.userName}
          </h4>
          <h6 className="truncate text-xs lowercase mt-1" title={item?.name}>
            {item?.email}
          </h6>
        </div>
      </div>
      <div className="w-[60px] h-full flex-grow-0 flex-shrink-0 flex justify-center items-center">
        {!item.recievedStatus && !item.sentStatus && (
          <GoPlusCircle
            size="25"
            className="text-[#05D397] hover:cursor-pointer"
            title={"Add Friend"}
            onClick={() => {
              sendFriendRequestHandler(item._id, messageSocketState);
            }}
          />
        )}

        {item.sentStatus && (
          <>
            <IoIosCheckmarkCircleOutline
              size="25"
              className="text-[#05D397] hover:cursor-pointer mr-1"
              title={"Accept Request"}
              onClick={() => {
                friendRequestActionHandler(item._id, true);
              }}
            />
            <RxCrossCircled
              size="25"
              className="text-red-400 hover:cursor-pointer mr-1"
              title={"Reject Request"}
              onClick={() => {
                friendRequestActionHandler(item._id, false);
              }}
            />
          </>
        )}

        {item.recievedStatus && (
          <RxCrossCircled
            size="25"
            className="text-red-400 hover:cursor-pointer mr-1"
            title={"Cancel Request"}
            onClick={() => {
              friendRequestActionHandler(item._id, false);
            }}
          />
        )}
      </div>
    </div>
  );
};
