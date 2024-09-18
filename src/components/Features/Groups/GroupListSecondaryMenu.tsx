import { FC } from "react";
import { SecondaryMenu } from "../../Shared/SecondaryMenu";
import { useGroupList } from "../../../hooks/useGroupList";

type Props = {};

export const GroupListSecondaryMenu: FC<Props> = (): JSX.Element => {
  const { groupList, refetchHandler } = useGroupList();
  console.log("🚀 ~ groupList:", groupList);

  return (
    <SecondaryMenu
      type={"group"}
      allData={groupList}
      refetchHandler={refetchHandler}
    />
  );
};
