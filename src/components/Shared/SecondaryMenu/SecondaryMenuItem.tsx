import { FC } from "react";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import { GoPlusCircle } from "react-icons/go";

type Props = {
  item: any;
  type: string;
};

export const SecondaryMenuItem: FC<Props> = ({ item, type }): JSX.Element => {
  return (
    <Link to={`${item._id}`}>
      <div className="w-full h-[70px] overflow-hidden transition-all ease-in-out duration-500 delay-75 flex items-center hover:bg-[#272838] border-b-2 border-b-transparent hover:border-b-[#05D397] cursor-pointer">
        <div className="w-[60px] h-full flex-grow-0 flex-shrink-0 flex justify-center items-center">
          <RxAvatar className="w-[50%] h-[50%] text-[#05D397]" />
        </div>
        <div className="w-[170px] h-full flex-grow flex justify-center items-center">
          <div className="w-full box-border p-2">
            <h4
              className="truncate text-sm capitalize text-[#05D397]"
              title={item?.userName}
            >
              {item?.userName}
            </h4>
            <h6 className="truncate text-xs capitalize mt-1" title={item?.name}>
              {item?.email}
            </h6>
          </div>
        </div>
        <div className="w-[60px] h-full flex-grow-0 flex-shrink-0 flex justify-center items-center ">
          {type.toUpperCase() === "CHAT" && (
            <p className="text-[12px]" title={"Total Friends"}>
              {(item?.friends?.length || 0) > 10
                ? "10+"
                : item?.friends?.length || 0}
            </p>
          )}
          {type.toUpperCase() === "GROUP" && (
            <p className="text-[12px]">
              {(item?.friends?.length || 0) > 10
                ? "10+"
                : item?.friends?.length || 0}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};
