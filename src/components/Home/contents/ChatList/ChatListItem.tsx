import { FC } from "react";
import { RxAvatar } from "react-icons/rx";

type Props = {
  item: any;
};

export const ChatListItem: FC<Props> = ({ item }): JSX.Element => {
  return (
    <div className="w-full h-[70px] overflow-hidden transition-all ease-in-out duration-500 delay-75 flex items-center hover:bg-[#272838] border-l-4 border-l-transparent hover:border-l-[#05D397] cursor-pointer">
      <div className="w-[60px] h-full flex-grow-0 flex-shrink-0 flex justify-center items-center">
        <RxAvatar className="w-[50%] h-[50%] text-[#05D397]" />
      </div>
      <div className="w-[170px] h-full flex-grow flex justify-center items-center">
        <div className="w-full box-border p-2">
          <h4 className="truncate text-sm" title={item?.name}>
            {item?.name}
          </h4>
          <p className="truncate text-xs">{item?.message}</p>
        </div>
      </div>
      <div className="w-[60px] h-full flex-grow-0 flex-shrink-0 flex justify-center items-center">
        <p className="text-[8px]">{item?.time}</p>
      </div>
    </div>
  );
};
