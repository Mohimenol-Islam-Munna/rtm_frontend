import { FC } from "react";
import { SecondaryMenu } from "../../Shared/SecondaryMenu";
import { useUserList } from "../../../hooks/useUserList";

type Props = {};

export const UserListSecondaryMenu: FC<Props> = (): JSX.Element => {
  const { userList, refetchHandler } = useUserList();

  return (
    <SecondaryMenu
      type={"user"}
      allData={userList}
      refetchHandler={refetchHandler}
    />
  );
};
