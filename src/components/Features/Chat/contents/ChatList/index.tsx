import { FC } from "react";
import { ChatListBody } from "./ChatListBody";
import { ChatListHeader } from "./ChatListHeader";
import { StateDataType } from "../..";

type Props = {
  allData: StateDataType;
  activeUserBoardChangeHandler: (item: any) => void;
};

export const ChatList: FC<Props> = ({
  allData,
  activeUserBoardChangeHandler,
}): JSX.Element => {
  const { isLoading, error, data } = allData;

  return (
    <div className="">
      <ChatListHeader />
      {isLoading && <h4 className="text-center mt-5">Loading...</h4>}
      {!isLoading && error && <h4 className="text-center mt-5">Error</h4>}
      {!isLoading && !error && !data && (
        <h4 className="text-center mt-5">No Data Found</h4>
      )}
      {!isLoading && !error && data && (
        <ChatListBody
          activeUserBoardChangeHandler={activeUserBoardChangeHandler}
        />
      )}
    </div>
  );
};
