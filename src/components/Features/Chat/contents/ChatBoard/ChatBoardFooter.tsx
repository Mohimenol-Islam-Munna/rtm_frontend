import { LiaPaperPlane } from "react-icons/lia";
import { IoCameraOutline } from "react-icons/io5";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { DropDownMenu } from "../../../../UI/DropDownMenu";
import { chatBoardFooterEmojiDropdown } from "./ChatBoardDropdowns";
import { EmojiPickerComponent } from "../../../../UI/EmojiPicker";
import { ChangeEvent, useState } from "react";

export const ChatBoardFooter = () => {
  const [chatState, setChatState] = useState<string>("");

  const chatStateHandler = (data: string, onlyEmoji: boolean = false) => {
    setChatState((prev: string) => (onlyEmoji ? prev + " " + data : data));
  };

  return (
    <div className="w-full h-[70px] flex items-center">
      <div className="w-[60px] h-full flex-grow-0 flex-shrink-0 flex justify-center items-center">
        <DropDownMenu
          width={300}
          align={"start"}
          MainIcon={BsEmojiHeartEyes}
          data={chatBoardFooterEmojiDropdown}
          ChildComponent={EmojiPickerComponent}
          chatStateHandler={chatStateHandler}
        />
      </div>

      <div className="w-auto h-full flex-grow">
        <form action="" className="w-full h-full">
          <div className="w-full h-full flex items-center">
            <div className="w-auto h-full flex-grow py-[10px]">
              <input
                type="text"
                value={chatState}
                className="w-full h-full p-4 bg-[#2E2F40] focus:outline-none rounded-full"
                placeholder="Type your message"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  e.preventDefault();
                  chatStateHandler(e.target.value || "");
                }}
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
