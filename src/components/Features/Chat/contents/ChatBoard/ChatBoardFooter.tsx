import { LiaPaperPlane } from "react-icons/lia";
import { IoCameraOutline } from "react-icons/io5";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { DropDownMenu } from "../../../../UI/DropDownMenu";
import { chatBoardFooterEmojiDropdown } from "./ChatBoardDropdowns";
import { EmojiPickerComponent } from "../../../../UI/EmojiPicker";
import { ChangeEvent, FC } from "react";
import { useParams } from "react-router-dom";
import { getLocalStorage } from "../../../../../utils/localStorage";

type Props = {
  changeHandler: (value: any) => void;
  chatState: string;
  chatStateHandler?: (data: string, onlyEmoji: boolean) => void;
};

export const ChatBoardFooter: FC<Props> = ({
  chatState,
  changeHandler,
  chatStateHandler,
}): JSX.Element => {
  const { id: targetUserId } = useParams();
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
        <form
          className="w-full h-full"
          onClick={(e) => {
            e.preventDefault();

            if (chatState) {
              const data = {
                user: {
                  id: targetUserId,
                  userName: targetUserId,
                  isSender: true,
                  isReceiver: false,
                },
                date: new Date(),
                message: chatState,
              };

              changeHandler(data);
            }
          }}
        >
          <div className="w-full h-full flex items-center">
            <div className="w-auto h-full flex-grow py-[10px]">
              <input
                type="text"
                value={chatState}
                className="w-full h-full p-4 bg-[#2E2F40] focus:outline-none rounded-full"
                placeholder="Type your message"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  chatStateHandler &&
                    chatStateHandler(e.target.value || "", false);
                }}
              />
            </div>
            <div className="w-[60px] h-full flex-grow-0 flex-shrink-0 flex justify-center items-center ">
              <button
                type="submit"
                className="w-full h-ful flex justify-center items-center disabled:cursor-not-allowed"
                disabled={!chatState}
              >
                <LiaPaperPlane className="w-[55%] h-[55%] text-[#05D397]" />
              </button>
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
