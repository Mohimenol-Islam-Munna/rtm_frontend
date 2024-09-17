import { FC } from "react";
import { SecondaryMenu } from "../../../Shared/SecondaryMenu";
import { useChatList } from "../../../../hooks/useChatList";

type Props = {};

export const ChatListSecondaryMenu: FC<Props> = (): JSX.Element => {
  const { chatList, refetchHandler } = useChatList();

  return (
    <SecondaryMenu
      type={"chat"}
      allData={chatList}
      refetchHandler={refetchHandler}
    />
  );
};
