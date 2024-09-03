import { BsThreeDotsVertical } from "react-icons/bs";

export const ChatBoardHeader = () => {
  return (
    <div className="w-full h-[50px] flex border-b-4 border-b-[#05D397] p-2">
      <div className="w-auto h-full flex-grow justify-center flex items-center">
        <h1 className="text-xs md:text-xl">Md. Mohimenol Islam Munna</h1>
      </div>
      <div className="w-[60px] h-full flex-grow-0 flex-shrink-0 flex justify-center items-center">
        <BsThreeDotsVertical className="w-[50%] h-[50%] text-[#05D397]" />
      </div>
    </div>
  );
};
