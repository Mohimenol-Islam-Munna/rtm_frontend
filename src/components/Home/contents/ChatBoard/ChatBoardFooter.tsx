import { LiaPaperPlane } from "react-icons/lia";
import { IoCameraOutline } from "react-icons/io5";
import { BsEmojiHeartEyes } from "react-icons/bs";

export const ChatBoardFooter = () => {
  return (
    <div className="w-full h-[70px] flex items-center">
      <div className="w-[60px] h-full flex-grow-0 flex-shrink-0 flex justify-center items-center">
        <BsEmojiHeartEyes className="w-[50%] h-[50%] text-[#05D397]" />
      </div>

      <div className="w-auto h-full flex-grow">
        <form action="" className="w-full h-full">
          <div className="w-full h-full flex items-center">
            <div className="w-auto h-full flex-grow py-[10px]">
              <input
                type="text"
                className="w-full h-full p-4 bg-[#2E2F40] focus:outline-none rounded-full"
                placeholder="Type your message"
              />
            </div>
            <div className="w-[60px] h-full flex-grow-0 flex-shrink-0 flex justify-center items-center">
              <LiaPaperPlane className="w-[50%] h-[50%] text-[#05D397]" />
            </div>
          </div>
        </form>
      </div>

      <div className="w-[60px] h-full flex-grow-0 flex-shrink-0 flex justify-center items-center">
        <IoCameraOutline className="w-[50%] h-[50%] text-[#05D397]" />
      </div>
    </div>
  );
};
