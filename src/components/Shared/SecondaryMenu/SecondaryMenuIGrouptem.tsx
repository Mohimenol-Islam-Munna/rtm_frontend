import { FC } from "react";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";

type Props = {
  item: any;
  type: string;
  refetchHandler: () => void;
};

export const SecondaryMenuGroupItem: FC<Props> = ({
  item,
  type,
}): JSX.Element => {
  return (
    <Link to={`${item._id}`}>
      <div className="w-full h-[70px] overflow-hidden transition-all ease-in-out duration-500 delay-75 flex items-center hover:bg-[#272838] hover:bg-dot-white/[0.1] relative border-b-2 border-b-transparent hover:border-b-[#05D397] cursor-pointer">
        <div className="w-[60px] h-full flex-grow-0 flex-shrink-0 flex justify-center items-center">
          <RxAvatar className="w-[50%] h-[50%] text-[#05D397]" />
        </div>
        <div className="w-[170px] h-full flex-grow flex justify-center items-center">
          <div className="w-full box-border p-2">
            <h4
              className="truncate text-sm capitalize text-[#05D397]"
              title={item?.groupName}
            >
              {item?.groupName}
            </h4>
            <h6
              className="truncate text-xs capitalize mt-1"
              title={item?.groupName}
            >
              admin: {item?.admin?.userName}
            </h6>
          </div>
        </div>
        <div className="w-[60px] h-full flex-grow-0 flex-shrink-0 flex justify-center items-center ">
          <p className="text-[12px]" title={"Total Member"}>
            <span className="bg-[#05D397] px-2 py-1 rounded-full">
              {(item?.members?.length || 0) > 10
                ? "10+"
                : item?.members?.length || 0}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};
