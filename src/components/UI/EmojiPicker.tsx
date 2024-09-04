import { FC } from "react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

type Props = {
  open: boolean;
  chatStateHandler?: (data: string, onlyEmoji: boolean) => void;
};

export const EmojiPickerComponent: FC<Props> = ({
  chatStateHandler,
}): JSX.Element => {
  const handleEmojiSelect = (emojiData: EmojiClickData) => {
    chatStateHandler && chatStateHandler(emojiData.emoji || "", true);
  };

  return (
    <div className="w-[300px]" id="EmojiParentComponent">
      <EmojiPicker
        width={296}
        height={380}
        onEmojiClick={handleEmojiSelect}
        style={{ backgroundColor: "#2E2F40", border: "none" }}
      />
    </div>
  );
};
